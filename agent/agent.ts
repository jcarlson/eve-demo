import { defineAgent } from "eve";

export default defineAgent({
  // Routed through Vercel AI Gateway. On Vercel the deployment authenticates
  // with project OIDC; locally, `eve link` or `/login` in the TUI provides a credential.
  //
  // This team runs on AI Gateway's free credit, which only covers a subset of
  // the catalog. GPT-5.2 is flagged "Free AI Gateway Credit: Yes" there;
  // Claude Sonnet 5.5 is not and returns a 403 RestrictedModelsError.
  model: "openai/gpt-5.2",
  reasoning: "low",
});
