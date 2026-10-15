import { defineEval } from "eve/evals";
import { includes } from "eve/evals/expect";

export default defineEval({
  async test(t) {
    const turn = await t.send("What's in the Breakouts track?");
    t.succeeded();
    t.calledTool("get_schedule");
    t.check(turn.message, includes(/Andrew Barba/i));
    t.check(turn.message, includes(/Notion/i));
  },
});
