import { defineTool } from "eve/tools";
import { z } from "zod";
import { EVENT, SCHEDULE, formatRange, itemsForTrack } from "../lib/schedule";

export default defineTool({
  description:
    "Get general facts about Vercel Ship SF: the date, venue, time zone, tracks and what each track is, the official schedule URL, and the day's overall start and end times. Use this for questions like 'where is Ship SF?', 'what time does it start?', 'what tracks are there?', or 'what is Startup Studio?'.",
  inputSchema: z.object({}),
  execute() {
    const first = SCHEDULE.reduce((a, b) => (a.start < b.start ? a : b));
    const last = SCHEDULE.reduce((a, b) => (a.end > b.end ? a : b));
    return {
      name: EVENT.name,
      date: EVENT.date,
      venue: EVENT.venue,
      timeZone: `${EVENT.timeZone} (${EVENT.timeZoneLabel})`,
      website: EVENT.website,
      scheduleUrl: EVENT.scheduleUrl,
      dayStarts: `${formatRange(first)} (${first.title})`,
      dayEnds: `${formatRange(last)} (${last.title})`,
      tracks: EVENT.tracks.map((track) => ({
        track,
        about: EVENT.trackNotes[track],
        sessionCount: itemsForTrack(track).filter((i) => i.kind === "session").length,
      })),
      totalSessions: SCHEDULE.filter((i) => i.kind === "session").length,
    };
  },
});
