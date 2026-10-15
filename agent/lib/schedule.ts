// Vercel Ship 26 | San Francisco schedule.
// Source: https://vercel.com/ship/sf/schedule (captured 2026-10-15). All times are
// Pacific Daylight Time (America/Los_Angeles), stored here as 24h "HH:MM".

export type Track = "Main Stage" | "Breakouts" | "Startup Studio";

export interface Speaker {
  name: string;
  title: string;
  company: string;
}

export interface ScheduleItem {
  /** Stable slug used to look an item up. */
  id: string;
  track: Track;
  /** "session" is a talk/panel/workshop; "activity" is doors, breaks, lunch, happy hour. */
  kind: "session" | "activity";
  title: string;
  /** 24h local start time, e.g. "11:35". */
  start: string;
  /** 24h local end time, e.g. "11:55". */
  end: string;
  speakers: Speaker[];
  /** Official blurb where the event site published one. */
  description?: string;
}

export const EVENT = {
  name: "Vercel Ship 26 | San Francisco",
  shortName: "Ship SF",
  date: "2026-10-15",
  timeZone: "America/Los_Angeles",
  timeZoneLabel: "PDT",
  venue: "Palace of Fine Arts, San Francisco",
  website: "https://vercel.com/ship",
  scheduleUrl: "https://vercel.com/ship/sf/schedule",
  tracks: ["Main Stage", "Breakouts", "Startup Studio"] as Track[],
  trackNotes: {
    "Main Stage": "Keynote, customer talks, panels, fireside chats, and the Vercel Awards.",
    Breakouts: "Longer (~40 minute) hands-on workshop-style sessions that run in parallel with the Main Stage.",
    "Startup Studio": "Short talks from startup founders and leaders, in parallel with the Main Stage.",
  } satisfies Record<Track, string>,
} as const;

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "doors-open",
    track: "Main Stage",
    kind: "activity",
    title: "Doors Open",
    start: "09:15",
    end: "10:00",
    speakers: [],
  },
  {
    id: "opening-keynote",
    track: "Main Stage",
    kind: "session",
    title: "Opening Keynote",
    start: "10:00",
    end: "11:00",
    speakers: [{ name: "Guillermo Rauch", title: "Founder and CEO", company: "Vercel" }],
  },
  {
    id: "break",
    track: "Main Stage",
    kind: "activity",
    title: "Break",
    start: "11:00",
    end: "11:15",
    speakers: [],
  },
  {
    id: "can-an-agent-use-your-website-how-ora-finds-out-with-eve",
    track: "Main Stage",
    kind: "session",
    title: "Can an agent use your website? How Ora finds out with eve.",
    start: "11:15",
    end: "11:35",
    speakers: [{ name: "Assaf Elovic", title: "Co-founder & CEO", company: "Ora" }],
  },
  {
    id: "building-high-performance-agents-with-claude-managed-agents",
    track: "Main Stage",
    kind: "session",
    title: "Building High-Performance Agents with Claude Managed Agents on Vercel",
    start: "11:35",
    end: "11:55",
    speakers: [{ name: "Katelyn Lesse", title: "Head of Platform Engineering", company: "Anthropic" }],
    description:
      "Getting agents running is half the battle. Making them performant and continuously improving across thousands of sessions is much more challenging. This talk covers how to do it with Claude Managed Agents running on Vercel's agentic infrastructure, including best practices for optimizing agentic performance in production.",
  },
  {
    id: "lunch",
    track: "Main Stage",
    kind: "activity",
    title: "Lunch",
    start: "12:00",
    end: "13:15",
    speakers: [],
  },
  {
    id: "fireside-chat-meta-superintelligence-labs-vercel",
    track: "Main Stage",
    kind: "session",
    title: "Fireside chat: Meta Superintelligence Labs + Vercel",
    start: "13:15",
    end: "13:35",
    speakers: [{ name: "Prashant Ratanchandani", title: "VP, Engineering", company: "Meta Superintelligence Labs" }],
    description:
      "Muse, the world's first personal AI agent built for everyone, runs on Vercel, alongside Meta AI and other Meta Superintelligence Labs projects. Hear how Meta and Vercel are building together at the frontier of AI, and take away lessons you can apply to your own projects tomorrow.",
  },
  {
    id: "superintelligence-at-work-how-vercel-built-v-in-slack",
    track: "Main Stage",
    kind: "session",
    title: "Superintelligence at Work: How Vercel Built v in Slack",
    start: "13:35",
    end: "13:55",
    speakers: [{ name: "Matt Lewis", title: "Senior Partner Solutions Engineer", company: "Vercel" }, { name: "Mala Neti", title: "Senior Software Engineering Manager", company: "Slack" }],
  },
  {
    id: "10-trillion-tokens-one-decision-the-router-behind-brazil-s-l",
    track: "Main Stage",
    kind: "session",
    title: "10 Trillion Tokens, One Decision: The Router Behind Brazil's Largest AI Platform",
    start: "13:55",
    end: "14:15",
    speakers: [{ name: "Max Peters", title: "CEO", company: "Adapta" }],
  },
  {
    id: "ship-what-s-next-with-notion-and-vercel",
    track: "Main Stage",
    kind: "session",
    title: "Ship what's next with Notion and Vercel",
    start: "14:15",
    end: "14:35",
    speakers: [{ name: "Sarah Sachs", title: "AI Lead", company: "Notion" }, { name: "Malte Ubl", title: "CTO", company: "Vercel" }],
  },
  {
    id: "building-in-an-ai-first-world-the-agentic-shift-on-aws-verce",
    track: "Main Stage",
    kind: "session",
    title: "Building in an AI-First World: The Agentic Shift on AWS + Vercel",
    start: "14:35",
    end: "14:55",
    speakers: [{ name: "Olawale Oladehin", title: "Managing Director", company: "AWS" }],
    description:
      "How do you build in an AI-first world? Learn the agentic patterns shipping to production across hundreds of engineering teams, from self-correcting agents to multi-agent orchestration, built on AWS and Vercel. See how Vercel's BYOC on AWS delivers platform speed with full VPC control.",
  },
  {
    id: "evolving-generative-interfaces-at-sap-with-vercel",
    track: "Main Stage",
    kind: "session",
    title: "Evolving Generative Interfaces at SAP with Vercel",
    start: "14:55",
    end: "15:15",
    speakers: [{ name: "Philip Miseldine", title: "VP, Chief Technical Advisor", company: "SAP" }, { name: "Sophia Levens", title: "Senior Vice President & Head of SAP Design System", company: "SAP" }],
  },
  {
    id: "control-without-the-sprawl-how-mercor-unlocked-hundreds-of-b",
    track: "Main Stage",
    kind: "session",
    title: "Control without the sprawl: how Mercor unlocked hundreds of builders with Vercel",
    start: "15:15",
    end: "15:30",
    speakers: [{ name: "Aaron Brown", title: "Head of Security, IT, and GRC", company: "Mercor" }, { name: "Arty Vohmincevs", title: "VP, Engineering", company: "Mercor" }],
    description:
      "Mercor connects domain experts with frontier AI labs, generating the human data used to train and evaluate leading models. Behind the platform, hundreds of business users build the apps their work depends on, and engineering teams tap a wide range of open-weight and closed models. The challenge: doing both without the business losing track of what's shipping, who has access, and what it costs. See how Mercor, with Vercel, built a managed identity layer every app inherits by default and gained full observability into who is spending and where, on a foundation that scales to the agents it's building next.",
  },
  {
    id: "building-the-future-of-data-infra-on-the-back-of-open-source",
    track: "Main Stage",
    kind: "session",
    title: "Building the Future of Data Infra on the Back of Open Source",
    start: "15:30",
    end: "15:50",
    speakers: [{ name: "Yury Izrailevsky", title: "Co-founder, President Product & Technology", company: "ClickHouse" }],
  },
  {
    id: "fast-ai-panel-vercel-jev-by-typesafe-ai-and-cerebras",
    track: "Main Stage",
    kind: "session",
    title: "Fast AI Panel: Vercel, Jev by Typesafe AI, and Cerebras",
    start: "15:50",
    end: "16:15",
    speakers: [{ name: "Diogo Almeida", title: "Co-Founder & CEO", company: "TypeSafe AI" }, { name: "Andrew Feldman", title: "Founder and CEO", company: "Cerebras" }],
  },
  {
    id: "the-third-customer-a-fireside-with-tobi-l-tke-and-guillermo",
    track: "Main Stage",
    kind: "session",
    title: "The Third Customer: A fireside with Tobi Lütke and Guillermo Rauch",
    start: "16:15",
    end: "16:45",
    speakers: [{ name: "Guillermo Rauch", title: "Founder and CEO", company: "Vercel" }, { name: "Tobias Lütke", title: "CEO", company: "Shopify" }],
  },
  {
    id: "vercel-awards",
    track: "Main Stage",
    kind: "session",
    title: "Vercel Awards",
    start: "16:45",
    end: "17:00",
    speakers: [],
  },
  {
    id: "happy-hour",
    track: "Main Stage",
    kind: "activity",
    title: "Happy Hour",
    start: "17:00",
    end: "18:00",
    speakers: [],
  },
  {
    id: "build-an-agent-with-eve-the-open-agent-framework",
    track: "Breakouts",
    kind: "session",
    title: "Build an Agent with Eve: The Open Agent Framework",
    start: "11:15",
    end: "11:55",
    speakers: [{ name: "Andrew Barba", title: "Software Engineer, Eve", company: "Vercel" }],
  },
  {
    id: "v-from-scratch-lessons-learned-building-a-superagent",
    track: "Breakouts",
    kind: "session",
    title: "V, from Scratch: Lessons learned building a superagent",
    start: "12:00",
    end: "12:40",
    speakers: [{ name: "Vanessa Teo", title: "Software Engineer", company: "Vercel" }],
  },
  {
    id: "what-s-next-for-cursor-shipping-agents-in-the-cloud-with-ver",
    track: "Breakouts",
    kind: "session",
    title: "What's next for Cursor: shipping agents in the cloud with Vercel",
    start: "12:45",
    end: "13:25",
    speakers: [{ name: "Matt Palmer", title: "Developer Experience", company: "SpaceXSI" }],
    description:
      "Lots of things are changing, but much is staying the same. Join this workshop for a sneak peek into the future of Cursor and a look at how we build at SpaceXSI. Matt will walk through three things he's shipped with Cursor Cloud Agents and Projects. He'll talk about what made them possible and, more importantly, show you the principles he used, so you can do the same. Finally, he'll answer the question he gets every day: \"should I use Grok Bot as an engineer?\"",
  },
  {
    id: "ship-the-whole-stack-vercel-backends-and-services",
    track: "Breakouts",
    kind: "session",
    title: "Ship the Whole Stack: Vercel Backends and Services",
    start: "13:30",
    end: "14:10",
    speakers: [{ name: "Yury Selivanov", title: "Director of Engineering", company: "Vercel" }],
  },
  {
    id: "embed-gen-ui-agents-in-your-app-with-codex-and-vercel",
    track: "Breakouts",
    kind: "session",
    title: "Embed Gen UI Agents in Your App with Codex and Vercel",
    start: "14:15",
    end: "14:55",
    speakers: [{ name: "Joseph Miano", title: "Applied AI", company: "OpenAI" }, { name: "Luke Phillips-Sheard", title: "Member of Technical Staff", company: "Vercel" }],
  },
  {
    id: "inside-notion-s-agentic-platform-built-on-vercel",
    track: "Breakouts",
    kind: "session",
    title: "Inside Notion's Agentic Platform, Built on Vercel",
    start: "15:00",
    end: "15:40",
    speakers: [{ name: "Emma Guo", title: "Software Engineer", company: "Notion" }],
  },
  {
    id: "building-world-class-gtm-into-an-agent",
    track: "Startup Studio",
    kind: "session",
    title: "Building World-class GTM Into an Agent",
    start: "11:15",
    end: "11:35",
    speakers: [{ name: "Mihail Eric", title: "Head of AI", company: "Monaco" }],
  },
  {
    id: "becoming-voice-pilled-why-voice-is-the-next-interface-for-ag",
    track: "Startup Studio",
    kind: "session",
    title: "Becoming Voice-pilled: Why Voice is the Next Interface for Agents",
    start: "11:40",
    end: "12:05",
    speakers: [{ name: "Iz Shalom", title: "CPO", company: "Cartesia" }],
  },
  {
    id: "how-we-built-command-code",
    track: "Startup Studio",
    kind: "session",
    title: "How we built Command Code",
    start: "12:50",
    end: "13:10",
    speakers: [{ name: "Ahmad Awais", title: "Founder & CEO", company: "Command Code" }],
  },
  {
    id: "the-software-shift-in-robotics",
    track: "Startup Studio",
    kind: "session",
    title: "The Software Shift in Robotics",
    start: "13:15",
    end: "13:35",
    speakers: [{ name: "Ben Lawson", title: "CTO", company: "Gambit Robotics" }],
  },
  {
    id: "your-ai-coding-bill-isn-t-the-problem",
    track: "Startup Studio",
    kind: "session",
    title: "Your AI Coding Bill Isn't the Problem",
    start: "13:40",
    end: "14:00",
    speakers: [{ name: "Anil Kulkarni", title: "Head of Engineering", company: "Anaconda" }],
  },
  {
    id: "how-to-build-for-the-agent-internet",
    track: "Startup Studio",
    kind: "session",
    title: "How to build for the agent internet",
    start: "14:05",
    end: "14:25",
    speakers: [{ name: "Han Wang", title: "CEO", company: "Mintlify" }],
  },
  {
    id: "connected-products-win-every-app-is-infrastructure-now",
    track: "Startup Studio",
    kind: "session",
    title: "Connected products win: every app is infrastructure now",
    start: "14:35",
    end: "14:55",
    speakers: [{ name: "Stephen Haney", title: "Founder and CEO", company: "Paper" }],
  },
  {
    id: "context-engineering-at-internet-scale-build-powerful-agents",
    track: "Startup Studio",
    kind: "session",
    title: "Context Engineering at Internet Scale: Build Powerful Agents in Any Domain",
    start: "15:00",
    end: "15:20",
    speakers: [{ name: "Scott Langille", title: "Head of Product", company: "Exa AI" }],
  },
  {
    id: "how-eight-sleep-ships-on-vercel",
    track: "Startup Studio",
    kind: "session",
    title: "How Eight Sleep Ships on Vercel",
    start: "15:25",
    end: "15:45",
    speakers: [{ name: "Andrew Foong", title: "VP Engineering", company: "Eight Sleep" }],
  },
];

// ---------------------------------------------------------------------------
// Helpers shared by the tools.
// ---------------------------------------------------------------------------

/** "13:35" -> 815 (minutes since midnight). */
export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** 815 -> "1:35 PM". */
export function formatTime(minutes: number): string {
  const h24 = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Human-readable time range for an item, e.g. "1:35 PM–1:55 PM PDT". */
export function formatRange(item: Pick<ScheduleItem, "start" | "end">): string {
  return `${formatTime(toMinutes(item.start))}–${formatTime(toMinutes(item.end))} ${EVENT.timeZoneLabel}`;
}

/** A compact, JSON-friendly view of an item for tool output. */
export function presentItem(item: ScheduleItem) {
  return {
    id: item.id,
    track: item.track,
    kind: item.kind,
    title: item.title,
    time: formatRange(item),
    start: item.start,
    end: item.end,
    durationMinutes: toMinutes(item.end) - toMinutes(item.start),
    speakers: item.speakers.map((s) => `${s.name} (${s.title} @ ${s.company})`),
    ...(item.description ? { description: item.description } : {}),
  };
}

export type PresentedItem = ReturnType<typeof presentItem>;

/** Current wall-clock date and time in the event's time zone. */
export function nowAtEvent(now: Date = new Date()): { date: string; minutes: number; label: string } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT.timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const hour = Number(get("hour")) % 24; // some runtimes emit "24" at midnight
  const minutes = hour * 60 + Number(get("minute"));
  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    minutes,
    label: `${formatTime(minutes)} ${EVENT.timeZoneLabel}`,
  };
}

/**
 * Parse a user-supplied time such as "2pm", "2:30 PM", "14:30" into minutes.
 * Returns null when the string is not a recognizable clock time.
 */
export function parseClockTime(input: string): number | null {
  const m = input.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!m) return null;
  let h = Number(m[1]);
  const min = m[2] ? Number(m[2]) : 0;
  if (h > 23 || min > 59) return null;
  if (m[3] === "pm" && h < 12) h += 12;
  if (m[3] === "am" && h === 12) h = 0;
  // Bare hours with no am/pm: treat 1–8 as afternoon, since the event runs 9 AM–6 PM.
  if (!m[3] && h >= 1 && h <= 8) h += 12;
  return h * 60 + min;
}

export function byStart(a: ScheduleItem, b: ScheduleItem): number {
  return toMinutes(a.start) - toMinutes(b.start) || a.track.localeCompare(b.track);
}

export function itemsForTrack(track?: Track): ScheduleItem[] {
  return SCHEDULE.filter((s) => !track || s.track === track).sort(byStart);
}

/** Items in progress at a given minute of the day. */
export function itemsAt(minutes: number, track?: Track): ScheduleItem[] {
  return itemsForTrack(track).filter((s) => toMinutes(s.start) <= minutes && minutes < toMinutes(s.end));
}

/** The next item(s) starting strictly after a given minute, one per track. */
export function nextAfter(minutes: number, track?: Track): ScheduleItem[] {
  const seen = new Set<Track>();
  const out: ScheduleItem[] = [];
  for (const s of itemsForTrack(track)) {
    if (toMinutes(s.start) > minutes && !seen.has(s.track)) {
      seen.add(s.track);
      out.push(s);
    }
  }
  return out;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Keyword search over titles, speakers, companies, and descriptions.
 * Every whitespace-separated term in the query must match somewhere in the item.
 */
export function searchItems(query: string, track?: Track): ScheduleItem[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return [];
  return itemsForTrack(track).filter((item) => {
    const haystack = normalize(
      [
        item.title,
        item.description ?? "",
        ...item.speakers.flatMap((sp) => [sp.name, sp.title, sp.company]),
        item.track,
      ].join(" "),
    );
    return terms.every((t) => haystack.includes(t));
  });
}

export function findById(id: string): ScheduleItem | undefined {
  return SCHEDULE.find((s) => s.id === id);
}
