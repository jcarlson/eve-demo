import { defineAgent } from "eve";

export default defineAgent({
  // Routed through Vercel AI Gateway. On Vercel the deployment authenticates
  // with project OIDC; locally, `eve link` or `/login` in the TUI provides a credential.
  model: "anthropic/claude-sonnet-5.5",
  reasoning: "low",
});
