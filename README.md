# Ship SF schedule agent

An [eve](https://eve.dev) agent that answers questions about the session schedule for **Vercel Ship 26 | San Francisco** (October 15, 2026, Palace of Fine Arts). Ask it things like:

- "What's on right now?" / "What's next on the Main Stage?"
- "Is anyone from Anthropic speaking?"
- "Which breakouts are about agents?"
- "What's happening at 2pm, and does anything clash?"

## How it works

eve agents are a directory of files. Everything lives under `agent/`:

| Path | Purpose |
| --- | --- |
| `agent/agent.ts` | Model config (`openai/gpt-5.2` via Vercel AI Gateway; a free-tier-eligible model). |
| `agent/instructions.md` | The always-on system prompt: persona, tool-use rules, style. |
| `agent/lib/schedule.ts` | The schedule data (all three tracks) plus time and search helpers. |
| `agent/tools/get_schedule.ts` | List the schedule, optionally for one track. |
| `agent/tools/search_sessions.ts` | Keyword search over titles, speakers, companies, descriptions. |
| `agent/tools/whats_on.ts` | What's happening now or at a given time, and what's next, in Pacific time. |
| `agent/tools/get_event_info.ts` | Date, venue, tracks, start and end times. |
| `agent/channels/eve.ts` | The HTTP channel and its auth policy. |
| `apps/web/` | Next.js Web Chat UI. |
| `vercel.ts` | Deploys the web app and the agent as two services on one Vercel project. |
| `evals/` | Graded conversations you can run with `npm run eval`. |

The schedule was captured from <https://vercel.com/ship/sf/schedule> on the day of the event. To update it, edit `agent/lib/schedule.ts`.

## Web chat

`apps/web/` is a Next.js chat UI (eve's Web Chat channel, built on AI Elements). On Vercel it deploys as a second service next to the agent; `vercel.ts` wires the two together so the page at `/` talks to the agent at `/eve/v1/*` on the same origin. It streams answers, shows tool calls, and keeps a shareable URL per session under `/s/<sessionId>`.

## Run it locally

Requires Node.js 24 or newer.

```bash
npm install
npm run dev        # agent only: terminal chat UI
npm run dev:all    # agent + web chat together via `vercel dev` (needs the Vercel CLI)
```

`eve dev` opens a terminal chat UI. The first time, it asks you to connect a model: a Vercel account (AI Gateway), or an Anthropic or AI Gateway API key. Then just ask a question.

To exercise the HTTP API instead of the TUI:

```bash
npm exec -- eve dev --no-ui
# in another terminal
curl -X POST http://127.0.0.1:3000/eve/v1/session \
  -H 'content-type: application/json' \
  -d '{"message":"Who is speaking from Anthropic, and when?"}'
# then follow the stream using the sessionId from the response
curl http://127.0.0.1:3000/eve/v1/session/<sessionId>/stream
```

Checks:

```bash
npm run typecheck   # the agent
npm run build:web   # the Next.js app
npm run eval        # needs a model credential; boots a local server and grades evals/*.eval.ts
```

## Deploy to Vercel

The project deploys as an eve app plus a Next.js web service, both described by `vercel.ts`. Vercel provisions the function runtime, Vercel Workflow for durable sessions, and Vercel Sandbox. Model calls route through AI Gateway using the project's OIDC token, so no provider API key is required.

Either connect this repository to a Vercel project (every push deploys), or from the project root:

```bash
npx eve link      # pick or create the Vercel project
npx eve deploy    # production deployment
```

Check it is up and talk to it from your terminal:

```bash
curl https://<your-deployment>.vercel.app/eve/v1/health
npx eve remote connect --url https://<your-deployment>.vercel.app
```

### Who can call the deployed agent?

`agent/channels/eve.ts` is configured as a **public demo**: the `none()` policy lets anyone with the URL start a session, so they spend your AI Gateway budget. The eve CLI and your team's other deployments still get an identity through `vercelOidc()`, and localhost is open in development. CORS is enabled so a browser front-end on another origin can call it.

To lock it down, replace `none()` with:

- **Web chat for your team:** run `npx eve add channel/web`, choose Next.js and "Sign in with Vercel". That adds a chat UI that only members of your Vercel team can sign in to.
- **Your own auth:** any custom verifier works; see the [auth guide](https://eve.dev/docs/guides/auth-and-route-protection).

## Learn more

- [eve documentation](https://eve.dev/docs)
- [eve on Vercel](https://vercel.com/docs/eve)
- [Vercel Ship](https://vercel.com/ship)
