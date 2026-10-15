import { defineTool } from "eve/tools";
import { z } from "zod";
import { presentItem, searchItems } from "../lib/schedule";

export default defineTool({
  description:
    "Search Ship SF sessions by keyword. Matches against session titles, speaker names, speaker job titles, company names, and descriptions. Use this for questions like 'is anyone from Anthropic speaking?', 'which talks cover agents?', or 'when is Guillermo on stage?'. Every word in the query must match, so prefer one or two distinctive words (for example 'anthropic' rather than 'the anthropic talk').",
  inputSchema: z.object({
    query: z.string().min(1).describe("Keywords to look for, e.g. 'notion', 'cursor', 'eve', 'rauch'."),
    track: z
      .enum(["Main Stage", "Breakouts", "Startup Studio"])
      .optional()
      .describe("Limit the search to one track."),
  }),
  execute({ query, track }) {
    const items = searchItems(query, track);
    return {
      query,
      track: track ?? "all",
      count: items.length,
      items: items.map(presentItem),
      ...(items.length === 0
        ? { hint: "No match. Try a shorter query (a single surname or company name), or call get_schedule to browse." }
        : {}),
    };
  },
});
