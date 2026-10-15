import { defineEval } from "eve/evals";
import { includes } from "eve/evals/expect";

export default defineEval({
  async test(t) {
    const turn = await t.send("What's happening on the Main Stage at 2pm?");
    t.succeeded();
    t.calledTool("whats_on");
    t.check(turn.message, includes(/10 Trillion Tokens/i));
  },
});
