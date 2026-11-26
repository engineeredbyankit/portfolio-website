export const site = {
  url: "https://engineeredbyankit.in/",
  title: "Ankit Kumar Choudhary · Freelance LLM coding-agent evaluation",
  description:
    "Freelance LLM coding-agent evaluation engineer. I build SWE-bench-style tasks from real bugs in real codebases, with hidden tests that pass correct fixes and catch wrong ones, and I audit graders and review agent trajectories.",
  resume: "Ankit_Kumar_Choudhary_Resume.pdf",
};

export const profile = {
  name: "Ankit Kumar Choudhary",
  headline: "LLM Coding-Agent Evaluation Engineer",
  role: "LLM coding-agent evaluation engineer, freelance",
  statement: ["Hard tasks.", "Honest tests."],
  valueProp:
    "I build SWE-bench-style tasks from real bugs in real codebases, with hidden tests that pass correct fixes and catch wrong ones. For teams training and evaluating coding agents.",
  availability: "Taking on new evaluation projects",
  background: "Before this: three years building backend systems at",
  location: "Bengaluru, India",
  phone: "+91-7067423108",
  email: "ankit@engineeredbyankit.in",
  emailSubject: "Evaluation project",
  linkedin: "https://www.linkedin.com/in/engineeredbyankit/",
  github: "https://github.com/engineeredbyankit",
  instagram: "https://instagram.com/sukoonkimehfil",
  previously: ["Goldman Sachs", "Spinny"],
};

export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;

/** The three checks every task passes before it ships (the hero's test rig). */
export const verification = {
  title: "How every task is checked",
  command: "pytest tests/hidden",
  steps: [
    { label: "Starting code", note: "The bug is real", result: "fail" },
    { label: "Reference fix", note: "The task can be solved", result: "pass" },
    { label: "Plausible wrong fix", note: "The tests can't be fooled", result: "fail" },
  ] as const,
  verdict: "Only then does a task ship.",
};

export const services = {
  title: "What I do for AI teams",
  intro:
    "Take one piece or the whole job, from finding the bug to the final review. Every task is checked the three ways shown above before it reaches you.",
  items: [
    {
      title: "Coding-agent tasks",
      summary:
        "SWE-bench-style tasks mined from real upstream bugs in open-source Python and Java codebases of up to 355k lines.",
      deliverables: [
        "A Docker environment pinned to the exact upstream commit",
        "Hidden fail-to-pass and regression tests that check behaviour, not one implementation",
        "A reference solution",
        "Proof that the starting code fails, the reference passes and plausible wrong fixes fail",
      ],
    },
    {
      title: "Grader and rubric audits",
      summary:
        "I look for the shortcuts an agent could take and close them before they skew your numbers.",
      deliverables: [
        "Hardened tests and rubrics, like the fix that stopped a skip-every-test exploit from passing",
        "A review of your existing tasks and rubrics. One review caught errors in 7 of 12 rubrics",
        "A written list of what's wrong and how to fix it",
      ],
    },
    {
      title: "Trajectory review",
      summary:
        "I read agent runs step by step and grade them against your rubric, with checks for claims the agent made up.",
      deliverables: [
        "Graded trajectories",
        "Notes on where and why the agent went wrong",
        "Flags for broken tests or data, like a run I threw out because its hidden test used the wrong seed data",
      ],
    },
    {
      title: "Long-horizon evaluations",
      summary:
        "Multi-turn tasks and full builds from a written spec, tested every turn with probe tests, kill -9 crash tests and fault injection.",
      deliverables: [
        "Multi-turn tasks on Django, SQLAlchemy, Kafka Streams and Kysely (TypeScript)",
        "Full systems built from my own specs, like a CalDAV sync bridge and a stock exchange",
        "Turn-by-turn test results",
      ],
    },
  ],
};

export const results = {
  title: "Results so far",
  items: [
    { label: "Verified evaluation tasks", value: "~30, over ~70 agent trials" },
    { label: "Largest codebase", value: "355k lines" },
    { label: "Environment build time", value: "Under 15 minutes" },
    { label: "Rubric errors caught in one review", value: "7 of 12" },
    { label: "Benchmark sped up by an OpenBLAS fix", value: "7.5 s to 0.45 s" },
    { label: "Throughput at Goldman Sachs", value: "120 TPS at 70 ms P99" },
    { label: "Saved at Spinny", value: "~$150K (₹1.3 Cr) a quarter" },
    { label: "Codeforces", value: "Expert, 1800+" },
  ],
};

export type Experience = {
  role: string;
  org: string;
  detail?: string;
  period: string;
  kind?: "break";
  highlights: { label?: string; text: string }[];
  tech?: string[];
};

export const experienceIntro =
  "Evaluation work for frontier coding agents, after three years of production backend engineering. That background is why my tasks test what actually breaks in real systems.";

export const experiences: Experience[] = [
  {
    role: "LLM Coding-Agent Evaluation Engineer",
    org: "Freelance",
    detail: "Contract, remote",
    period: "Oct 2026 – Present",
    highlights: [
      {
        label: "Task authoring",
        text: "Authored ~30 verified SWE-bench-style tasks for frontier AI models on real open-source Python and Java codebases (up to 355k lines), validated across ~70 agent trials.",
      },
      {
        label: "Problem design",
        text: "Mined real upstream bugs (time-zone offsets, iCal recurrence, lock TTL and ownership), ported a 33-commit Redis Cluster PR onto a newer master, built shutdown-race and clock-migration tasks.",
      },
      {
        label: "Reproducible environments",
        text: "Built Docker environments pinned to exact upstream commits, with PostgreSQL, Redis and a 3-node Redis Cluster; every environment builds in under 15 minutes.",
      },
      {
        label: "Deterministic verifiers",
        text: "Wrote hidden fail-to-pass and regression tests (pytest) that check behavior, not one implementation: my reference and other correct solutions pass, wrong or partial fixes fail.",
      },
      {
        label: "Anti-reward-hacking",
        text: "Hardened graders so a skip-every-test exploit that passed the old grader now fails; fixed OpenBLAS oversubscription in emulated containers, cutting a benchmark from 7.5 s to 0.45 s.",
      },
      {
        label: "Flagging and QA",
        text: "Discarded a run whose hidden test used the wrong database's seed data (every correct answer scored 0) and fixed the test; as QA reviewer, caught errors in 7 of 12 rubrics on a peer submission.",
      },
      {
        label: "Long-horizon evaluation",
        text: "Designed multi-turn tasks on Django, SQLAlchemy, Kafka Streams and Kysely (TypeScript) and led long builds of full systems from my own specs (CalDAV sync bridge, stock exchange), testing every turn by hand with probe tests, kill -9 crash tests and fault injection.",
      },
    ],
    tech: ["Docker", "pytest", "Python", "Java", "Redis Cluster", "PostgreSQL", "Harbor", "OpenCode", "mini-swe-agent"],
  },
  {
    role: "Career break",
    org: "Upskilling in LLM coding agents",
    period: "May 2025 – Oct 2026",
    kind: "break",
    highlights: [
      { text: "Took planned time off for a personal health matter, now back at work full-time." },
      {
        text: "Upskilled in LLM coding agents, agent evaluation tooling and system design, which led directly to my current evaluation contract work.",
      },
    ],
  },
  {
    role: "Software Developer II (SDE-2)",
    org: "Spinny",
    detail: "Gurugram",
    period: "Dec 2024 – May 2025",
    highlights: [
      {
        label: "Anomaly detection",
        text: "Designed a distributed pipeline over call and activity logs from 2,500+ field inspectors, with Redis deduplication and real-time fraud alerts.",
      },
      {
        label: "Impact",
        text: "Flagged 300+ anomalies a month, cut lead leakage by 22% and saved ₹1.3 Cr (~$150K) per quarter.",
      },
      {
        label: "Cost prediction",
        text: "Built a parts and labor cost engine for 5,000+ daily inspections using a Camunda BPM issue-probability matrix, cutting manual effort by 85%.",
      },
    ],
    tech: ["Python", "Django", "MongoDB", "Redis", "Firebase", "Pandas", "Camunda BPM"],
  },
  {
    role: "Software Developer",
    org: "Goldman Sachs",
    detail: "Bengaluru",
    period: "Jun 2022 – Aug 2024",
    highlights: [
      {
        label: "Event-driven capture",
        text: "Designed a prospect-capture microservice on MongoDB Change Streams (CDC) and Kafka, raising customer engagement by 23%.",
      },
      {
        label: "Performance and security",
        text: "Sustained 120 TPS at 70 ms P99 through connection pooling, indexing and @Async, with AES-256 PII encryption and Resilience4j.",
      },
      {
        label: "Distributed rendering",
        text: "Scaled a statement-generation service across 10 Hazelcast nodes to 280 PDFs per second.",
      },
      {
        label: "Release platform",
        text: "Built an internal APK distribution system on AWS S3 handling 50+ releases a month with zero downtime and 200 ms version checks.",
      },
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "Kafka", "Redis", "Hazelcast", "Resilience4j", "AWS S3"],
  },
];

export const skills = [
  {
    category: "AI evaluation",
    items: [
      "LLM coding-agent evaluation",
      "SWE-bench-style task authoring",
      "RLHF data",
      "Agent trajectory analysis",
      "Rubric design",
      "Reward-hacking detection",
      "Code review",
      "Prompt design",
      "Harbor",
      "OpenCode",
      "mini-swe-agent",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Django",
      "Flask",
      "Microservices",
      "REST APIs",
      "Event-driven architecture",
      "Concurrency",
      "System design",
    ],
  },
  {
    category: "Data and infrastructure",
    items: ["Docker", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Hazelcast", "Firebase", "AWS S3", "Git", "pytest"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "National Institute of Technology, Patna",
  period: "2018 – 2022",
};

export const recognition = [
  {
    title: "Codeforces Expert",
    text: "Competitive programming rating of 1800+.",
  },
  {
    title: "₹1.3 Cr saved per quarter",
    text: "Anomaly-detection system at Spinny that cut lead leakage by 22%.",
  },
];

export const hobbies = {
  title: "Off the clock",
  music: {
    title: "Guitar, piano, ukulele, cajon and vocals",
    description:
      "Music is my favourite escape. I play guitar, piano, ukulele and cajon, but singing is where I truly express myself. From acoustic jams to soulful stage performances, I love creating moments that resonate.",
    link: "https://instagram.com/sukoonkimehfil",
    linkLabel: "Follow on Instagram",
  },
  audio: {
    title: "Retro, hi-fi and the written word",
    description:
      "A devoted listener of classic retro tracks and an enthusiast for high-fidelity gear, from precision-tuned IEMs to dedicated DAC setups. I also write Urdu poetry and ghazals, lose myself in books, and experiment in the kitchen whenever I need a creative reset.",
    artists: ["Mohammed Rafi", "Kishore Kumar", "Lata Mangeshkar", "Mukesh"],
    link: "https://open.spotify.com/playlist/75jiwp9Aoz5l7R2VzmwQSr?si=8512948f50bd4903",
    linkLabel: "Listen on Spotify",
  },
};

export const contact = {
  title: "Tell me what you're evaluating.",
  text: "Send a short note about the models, the codebases and what you need measured. I'm in Bengaluru and work remotely.",
};
