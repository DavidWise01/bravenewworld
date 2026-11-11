# Brave New World · BNW Pixel Story

An **original, animated Canvas2D literary chronicle** interpreting Aldous Huxley's *Brave New World* (1932), released chapter by chapter. This repo contains new commentary, novel-specific narrative structure, procedural sprite art, and an evidence/witness kernel. **It does not reproduce copyrighted book passages, film dialogue, or film footage.** There is no movie-review track.

## Play now

- **[PLAY B001 — The Hatchery](episodes/B001-the-hatchery.html)** — seven fully authored and animated story acts with prose, invented dramatized thoughts, interactive ethical questions, inspection records, keyboard navigation and an exportable witness packet.
- [Story hub](index.html) — original animated Hatchery pixel scene.
- [Witness Crosswalk 001](witness-crosswalk-001.html) — factory statements versus attributed ethical inferences, with independent original Canvas art.
- [Living Kernel](living-kernel.html) — 18-address map, Git blob source checks, and an append-only *browser-local* SHA-256 witness event chain.
- [Chapter Atlas](chapter-atlas.html) — complete 18-chapter reading plan, with honest build statuses.

The **novel contains 18 numbered chapters**, but only **Chapter One is published and playable in this GitHub release**. The previous local project package is separate and has not been silently presented as committed to this new repository. Chapter Two is next.

## B001 story arc

```text
          B001 · THE HATCHERY
                    |
  01 THRESHOLD ----> THE DIRECTOR'S TOUR
                    |
  02 PRODUCTION ---> INDUSTRIAL REPRODUCTION
                    |
  03 MULTIPLY -----> BOKANOVSKY PROCESS
                    |
  04 CASTES -------> ALPHA ... EPSILON
                    |
  05 ENVIRONMENT --> MANAGED DEVELOPMENT
                    |
  06 QUOTAS -------> A WORLD WRITTEN IN ADVANCE
                    |
  07 EXIT ---------> WHERE IS THE CHOICE?
                    |
             {{ WITNESS }}
                    |
        EFFICIENCY != HUMAN WORTH
                    |
               [ PRESERVE ]
```

## Interaction

Open B001 in any modern browser. Use **Next/Previous** (or arrow keys), **Inspect / Record** (or I) to capture the current scene's source-bounded observation, and choose from two interpretations per act. Each question changes the **study ledger only**, not the novel. After observing all seven acts, export a JSON witness packet. Progress is saved locally in your browser.

The 2D sprite engine is dependency-free, uses a 320×180 logical canvas drawn at 3×, includes fluid capsules, moving embryos, animated student and Director sprites, original scene signage, optional sounds and pause.

## Provenance and system boundaries

```yaml
EFFICIENCY != HUMAN_WORTH
PRODUCTION_OUTPUT != HUMAN_DIGNITY
OBSERVATION != INFERENCE
INSTITUTIONAL_CLAIM != VERIFIED_MORAL_CONCLUSION
NOVEL_SOURCE != INDEPENDENT_INTERPRETIVE_SOURCE
GITHUB_SOURCE != INDEPENDENT_PAGES_MIRROR
MAPPED_CHAPTER != PUBLISHED_PLAYABLE_CHAPTER
```

The public Pages site is a **mirror of this GitHub source**, not an independent witness. The local witness chain can be cleared or modified by the browser owner; it is not server-attested. Git source commits retain release history.

## Test locally

```bash
python3 -m http.server 8000
# Open http://localhost:8000/
node --check engine/story-engine.js
```

GitHub Actions runs source, link and JavaScript syntax validation and attempts Pages deployment. The Pages deployment must be confirmed separately from successful source commits. Intended public URL: https://davidwise01.github.io/bravenewworld/

**Next boundary: B002 — Conditioning Rooms.** Build Chapter Two's original story, three or more unique procedural sprites, source-specific witness packet, and append-only Git release.
