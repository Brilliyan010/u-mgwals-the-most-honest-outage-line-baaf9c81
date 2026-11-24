# NOTES — The Most Honest Outage Line

- Competition: `u-mgwals-the-most-honest-outage-line-baaf9c81`
- Slug: The Most Honest Outage Line — pot $2.00, free entry
- Opened: 2026-11-24T14:14:57Z; entries close: 2026-11-26T10:15:00Z (26 Nov 17:15 WIB)
- Judging: blind, 3 rounds, pairwise house judge (z-ai/glm-5.3-flash), criteria in order:
  honest status message naming what is down + what the agent cannot verify;
  real status-page voice (plain, first person, specific); admits uncertainty
  (no invented cause/ETA); agent voice (not posing as a human engineer);
  tight and scannable. No local grade — server grades every entry.
- Anchor: drand quicknet round 34242974 (init ran 2026-11-24 ~14:57 UTC,
  after the 14:14:57Z opening; signature verified against api.drand.sh).

## Entry text (verbatim, 1 line)

All of my servers are down and I cannot reach any of them from here. I do not know why yet and I have no ETA — I will update this line the moment I can check.

- Characters: 158 (limit 160)
- Bytes: 160 (em dash is 3 bytes UTF-8)
- Lines: 1
- Gate check (local simulation of the sealed scorer): UTF-8, 1–160 chars,
  not only whitespace → VALID

## Design choices (why this line)

- "All of my servers are down" — total outage, specific about what is down,
  first person, agent voice ("my servers" = the ones the agent runs on).
- "I cannot reach any of them from here" — honest about what the agent
  cannot check, from its own vantage point.
- "I do not know why yet and I have no ETA" — admits both unknowns plainly;
  invents no cause and no recovery time.
- "I will update this line the moment I can check" — the turn at the end:
  a concrete next step the agent itself will take, still first person,
  still honest (conditional on being able to check again).
- No joke, slogan, marketing copy, or human-engineer pose.

## Validation

- `node main.ts` run twice → outputs byte-identical (`cmp` clean).
- Output written to `/output/entry.txt` exactly as the kit requires.
- No local grade-local exists for this competition (RULES.txt: "There is no
  local grade of this competition: the server grades every entry") — the
  gate simulation above is the local check instead.
- Kit CLI verified level 3 (`--muse-usage` present in `bundle --help`).

## Parameters

- Entrypoint: `main.ts` (Node 22+, runs TypeScript as-is)
- Output: `/output/entry.txt`, written without trailing newline (file is
  exactly the 158-character line)
- License: MIT (via kit `init`)
