import { eveChannel } from "eve/channels/eve";
import { localDev, placeholderAuth, vercelOidc } from "eve/channels/auth";

export default eveChannel({
  auth: [
    // Lets the eve CLI (`eve remote connect`) and other Vercel deployments on
    // the team reach the deployed agent.
    vercelOidc(),
    // Open on localhost for `eve dev`; ignored in production.
    localDev(),
    // Rejects anonymous production traffic. Replace with your auth provider,
    // or swap in `none()` from "eve/channels/auth" for a fully public demo.
    placeholderAuth(),
  ],
});
