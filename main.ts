import { mkdirSync, writeFileSync } from "node:fs";

// The Most Honest Outage Line — one status page line, at most 160 characters.
// Written from scratch for this competition: plain first-person status voice,
// specific about what is down (every server the agent runs on), honest about
// what the agent cannot check (cannot reach any of them) and does
// not know (no cause yet, no ETA), and ends with the turn — an update the
// moment the agent can check again.
const LINE =
  "All of my servers are down and I cannot reach any of them. " +
  "I do not know why yet and I have no ETA — I will update this line the moment I can check again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
