import { defineTool } from "eve/tools";
import { z } from "zod";
import { EVENT, itemsForTrack, presentItem } from "../lib/schedule";

export default defineTool({
  description:
    "List the full Ship SF schedule in time order, optionally for a single track (Main Stage, Breakouts, or Startup Studio). Use this for overview questions like 'what is on the main stage?', 'show me the afternoon', or 'what workshops are there?'. Returns every session with its time (PDT), speakers, and description when one was published.",
  inputSchema: z.object({
    track: z
      .enum(["Main Stage", "Breakouts", "Startup Studio"])
      .optional()
      .describe("Limit results to one track. Omit for every track."),
    includeActivities: z
      .boolean()
      .default(true)
      .describe("Include non-session items such as Doors Open, Break, Lunch, and Happy Hour."),
  }),
  execute({ track, includeActivities }) {
    const items = itemsForTrack(track).filter((i) => includeActivities || i.kind === "session");
    return {
      event: EVENT.name,
      date: EVENT.date,
      venue: EVENT.venue,
      timeZone: `${EVENT.timeZone} (${EVENT.timeZoneLabel})`,
      track: track ?? "all",
      count: items.length,
      items: items.map(presentItem),
    };
  },
});
