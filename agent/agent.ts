import { defineAgent } from "eve";

export default defineAgent({
  // Routed through Vercel AI Gateway. On Vercel the deployment authenticates
  // with project OIDC; locally, `eve link` or `/login` in the TUI provides a credential.
  model: "anthropic/claude-sonnet-5.5",
  reasoning: "low",
  modelOptions: {
    providerOptions: {
      // Pin the gateway to Anthropic's own API. Since Oct 20 the gateway has
      // been routing this model to "Claude Platform on AWS" first, and that
      // path rejects free-credit teams with a 403 RestrictedModelsError. The
      // direct Anthropic path served every call on Oct 15.
      gateway: { order: ["anthropic"] },
    },
  },
});
