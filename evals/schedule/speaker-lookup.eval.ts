import { defineEval } from "eve/evals";
import { includes } from "eve/evals/expect";

export default defineEval({
  async test(t) {
    const turn = await t.send("Is anyone from Anthropic speaking at Ship SF? When?");
    t.succeeded();
    t.check(turn.message, includes(/Katelyn Lesse/i));
    t.check(turn.message, includes(/11:35/));
    t.check(turn.message, includes(/Main Stage/i));
  },
});
