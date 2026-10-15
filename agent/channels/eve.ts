import { eveChannel } from "eve/channels/eve";
import { localDev, none, vercelOidc } from "eve/channels/auth";

export default eveChannel({
  auth: [
    // Lets the eve CLI (`eve remote connect`) and other Vercel deployments on
    // the team reach the deployed agent with an identity.
    vercelOidc(),
    // Open on localhost for `eve dev`; ignored in production.
    localDev(),
    // Public demo: anyone with the URL can start a session on the model
    // budget. Replace with your auth provider to restrict access.
    none(),
  ],
  // Let browser front-ends on other origins call the API.
  cors: true,
});
