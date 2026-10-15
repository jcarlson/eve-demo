import { defineTool } from "eve/tools";
import { z } from "zod";
import {
  EVENT,
  formatTime,
  itemsAt,
  nextAfter,
  nowAtEvent,
  parseClockTime,
  presentItem,
  SCHEDULE,
  toMinutes,
} from "../lib/schedule";

export default defineTool({
  description:
    "Find what is happening at Ship SF right now (or at a given time) and what starts next, across all three tracks. Call this with no arguments for 'what's on now?', 'what's next?', or 'what did I miss?'. Pass a time like '2pm' or '14:30' for 'what's on at 2?'. Times are Pacific (PDT). The response also reports the current time at the venue and whether the event day has started or finished.",
  inputSchema: z.object({
    at: z
      .string()
      .optional()
      .describe("A clock time in Pacific time such as '2pm', '2:30 PM', or '14:30'. Omit to use the current time."),
    track: z
      .enum(["Main Stage", "Breakouts", "Startup Studio"])
      .optional()
      .describe("Limit results to one track."),
  }),
  execute({ at, track }) {
    const now = nowAtEvent();
    let minutes = now.minutes;
    let basis: string;

    if (at) {
      const parsed = parseClockTime(at);
      if (parsed === null) {
        return { error: `Could not understand the time "${at}". Use a form like "2pm", "2:30 PM", or "14:30".` };
      }
      minutes = parsed;
      basis = `${formatTime(minutes)} ${EVENT.timeZoneLabel} (requested)`;
    } else {
      basis = `${now.label} (current time at the venue)`;
    }

    const firstStart = Math.min(...SCHEDULE.map((s) => toMinutes(s.start)));
    const lastEnd = Math.max(...SCHEDULE.map((s) => toMinutes(s.end)));

    let dayStatus: string;
    if (now.date < EVENT.date) dayStatus = `The event is on ${EVENT.date}; today (${now.date}) is before the event.`;
    else if (now.date > EVENT.date) dayStatus = `The event was on ${EVENT.date}; today (${now.date}) is after the event.`;
    else if (minutes < firstStart) dayStatus = "It is event day, but doors have not opened yet.";
    else if (minutes >= lastEnd) dayStatus = "It is event day, and the programme has finished.";
    else dayStatus = "It is event day and the programme is in progress.";

    return {
      event: EVENT.name,
      venueTime: now.label,
      venueDate: now.date,
      basis,
      dayStatus,
      happeningNow: itemsAt(minutes, track).map(presentItem),
      upNext: nextAfter(minutes, track).map(presentItem),
    };
  },
});
