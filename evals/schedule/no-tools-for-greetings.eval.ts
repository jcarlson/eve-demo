import { defineEval } from "eve/evals";

export default defineEval({
  async test(t) {
    await t.send("Hi there!");
    t.succeeded();
    t.usedNoTools();
  },
});
