# Brave New World · BNW Pixel Story

An **original, animated Canvas2D literary chronicle** interpreting Aldous Huxley's *Brave New World* (1932), released chapter by chapter. This repo contains new commentary, novel-specific narrative structure, procedural sprite art, and an evidence/witness kernel. **It does not reproduce copyrighted book passages, film dialogue, or film footage.** There is no movie-review track.

## Play now

- **[PLAY B012 — The Refused Party](episodes/B012-the-refused-party.html)** — seven original acts of John's refusal, Bernard's borrowed popularity collapsing, Lenina's disappointment, and friendship between John and Helmholtz over Shakespeare.
- [Witness Crosswalk 012](witness-crosswalk-012.html) — expectations versus consent, conditional social approval versus chosen friendship.
- **[PLAY B011 — London's New Curiosity](episodes/B011-londons-new-curiosity.html)** — seven animated scenes of John's celebrity, Linda's soma holiday, Bernard's borrowed popularity, factory and Eton visits, and the feelies date.
- [Witness Crosswalk 011](witness-crosswalk-011.html) — public curiosity, personal understanding, independent source roots and distinct reactions to shared entertainment.
- **[PLAY B010 — The Director's Confrontation](episodes/B010-the-directors-confrontation.html)** — seven original Canvas scenes from the public Iceland accusation to the arrival of Linda and John and the Director's exit.
- [Witness Crosswalk 010](witness-crosswalk-010.html) — the Director's official memory, Linda's firsthand years, John's lived identity, and a crowd that observes without independently verifying.
- **[PLAY B009 — The Sleeping Visitor](episodes/B009-the-sleeping-visitor.html)** — seven acts: Lenina's soma sleep, Bernard's Mond-approved travel order, and John's unauthorized entry and restraint.
- [Witness Crosswalk 009](witness-crosswalk-009.html) — approval, privacy, desire, restraint and an uncompleted journey.
- **[PLAY B008 — John's Story](episodes/B008-johns-story.html)** — seven acts tracing John, Linda's London stories, reading, Shakespeare, exclusion and the invitation.
- [Witness Crosswalk 008](witness-crosswalk-008.html) — secondhand report versus lived experience.
- **[PLAY B007 — The Reservation](episodes/B007-the-reservation.html)** — original seven-act Malpais story: aged residents, caregiving, absence of soma, a non-graphic ceremony, John and Linda's testimony, and Bernard's emerging connection to the Director.
- [Witness Crosswalk 007](witness-crosswalk-007.html) — visitor judgments, John and Linda's firsthand experiences, and the Director's recollection kept distinct.
- **[PLAY B006 — The Reservation Journey](episodes/B006-the-reservation-journey.html)** — seven original Canvas acts from the dark English Channel to Santa Fe, the Director's lost companion, a threatened Iceland transfer, and Bernard's changing response.
- [Witness Crosswalk 006](witness-crosswalk-006.html) — distinct origins for remembered events, threatened consequences, and actual decisions.
- **[PLAY B005 — The Solidarity Ritual](episodes/B005-the-solidarity-ritual.html)** — seven animated original acts: Lenina and Henry's evening, crematorium phosphorus recovery, cabaret, soma, and Bernard's twelve-person Solidarity Service.
- [Witness Crosswalk 005](witness-crosswalk-005.html) — publicly synchronized ritual versus private belonging.
- **[PLAY B004 — Bernard and Helmholtz](episodes/B004-bernard-and-helmholtz.html)** — seven animated original narrative acts: Lenina's public invitation, the city flight, Benito's soma offer, Bernard's contradiction, Helmholtz's success and his desire to write something meaningful.
- [Witness Crosswalk 004](witness-crosswalk-004.html) — social exclusion and unused creative capacity are two distinct roots of alienation.
- **[PLAY B003 — The World State](episodes/B003-the-world-state.html)** — seven intercut story acts with Mustapha Mond, Lenina and Fanny, Bernard Marx, official history, peer pressure and social consensus.
- [Witness Crosswalk 003](witness-crosswalk-003.html) — Controller testimony, conformity and dissent mapped to their source ancestry.
- **[PLAY B002 — The Conditioning Rooms](episodes/B002-the-conditioning-rooms.html)** — seven original story acts covering books and flowers, aversive association, the Director's economic rationale, sleep-teaching, and a final question about freely formed beliefs.
- [Witness Crosswalk 002](witness-crosswalk-002.html) — two conditioning methods, one institutional source lineage.
- **[PLAY B001 — The Hatchery](episodes/B001-the-hatchery.html)** — seven fully authored and animated story acts with prose, invented dramatized thoughts, interactive ethical questions, inspection records, keyboard navigation and an exportable witness packet.
- [Story hub](index.html) — original animated Hatchery pixel scene.
- [Witness Crosswalk 001](witness-crosswalk-001.html) — factory statements versus attributed ethical inferences, with independent original Canvas art.
- [Living Kernel](living-kernel.html) — 18-address map, Git blob source checks, and an append-only *browser-local* SHA-256 witness event chain.
- [Chapter Atlas](chapter-atlas.html) — complete 18-chapter reading plan, with honest build statuses.

The **novel contains 18 numbered chapters**, and **Chapters One through Twelve are committed as playable seven-act stories**. Chapters Thirteen–Eighteen remain mapped but not yet released.

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


---

## B002 — Conditioning Rooms / Second living boundary (2026-11-10)

**[Play the full seven-act B002 story](episodes/B002-the-conditioning-rooms.html)** · **[Open the witness crosswalk](witness-crosswalk-002.html)**

The Director conducts the students through a Neo-Pavlovian nursery, where Delta infants are initially drawn to books and flowers, then given an aversive stimulus designed to make those objects frightening. In the sleeping rooms, repeated hypnopaedic messages shape caste attitudes. The chapter distinguishes an observed conditioned response, a stated institutional rationale and the ethical question of free choice.

```text
NURSERY -> BOOKS + FLOWERS -> AVERSIVE PAIRING -> AVOIDANCE
      \\\-> HYPNOPAEDIA -> REPEATED CASTE MESSAGES
              |
        {{ SOURCE ROOT }}
              |
 CONDITIONED_RESPONSE != FREE_CHOICE
 REPEATED_MESSAGE != INDEPENDENT_BELIEF
              |
          [ PRESERVE ]
```

The shared Canvas2D engine now renders B002's original nursery backgrounds, children, books, flowers, stimulus warning and sleep-teaching effects. Seven scenes have original prose, invented dramatized thoughts, explanatory notes, two interpretation choices apiece, and locally exportable witness packets. The Git source registry contains two playable book chapters, zero movie-review chapters, and two illustrated witness crosswalks. **Next narrative target: B003 — The World State.**


---

## B003 — The World State / Third living boundary (2026-11-10)

**[Play B003: The World State](episodes/B003-the-world-state.html)** · **[Witness Crosswalk 003](witness-crosswalk-003.html)**

Chapter Three leaves the Hatchery's nursery and introduces the political and interpersonal world of the State. Mustapha Mond, Western Europe's World Controller, discusses a selected history of conflict and the drive toward stability; Lenina and Fanny reveal the internal pressure to follow social expectations; Bernard Marx reacts against co-workers who objectify Lenina and dismiss his unhappiness with an offer of soma. These conversations alternate in Huxley's chapter and are here transformed into seven original narrative acts with animated pixel-art backdrops and source-attributed witness choices.

```text
  OFFICIAL HISTORY (MOND)         PEER EXPECTATIONS (FANNY)
           |                               |
           +--------------+----------------+
                          |
                   BERNARD'S DOUBT
                          |
                     {{ ROOTS }}
                          |
            COMMON CONDITIONING SOURCE
                          |
   SOCIAL_CONSENSUS != INDEPENDENT_TRUTH
      INSTITUTIONAL_STATUS != PROOF
                          |
                      [ PRESERVE ]
```

This is an original interpretation, not copied copyrighted passages or a literal comic adaptation of any film. The shared Canvas2D engine retains B001/B002 art and adds new backgrounds and sprites for B003. The canonical registry now records **3 playable stories (21 acts), 3 crosswalks, no film reviews**, and Git blob identities. Only released chapters are marked playable. **Next: B004 — Bernard and Helmholtz.**


---

## B004 — Bernard and Helmholtz · Fourth living boundary (2026-11-10)

**[Play B004](episodes/B004-bernard-and-helmholtz.html)** · **[Witness Crosswalk 004](witness-crosswalk-004.html)**

This seven-act original Canvas2D interpretation follows Chapter Four's actual sequence. Lenina accepts Bernard's invitation to the New Mexico Reservation publicly, then flies with Henry above a socially ordered London. Benito Hoover offers soma to a troubled Bernard. Bernard, despite suffering ridicule over his size and social position, treats Delta-Minus attendants harshly. He flies to the Propaganda Bureau and meets Helmholtz Watson, an accomplished emotional engineer whose success has not satisfied his desire for consequential writing. Both men are uneasy, but their reasons differ.

The new sprite modes cover the crowded lift, aerial London, soma offer, caste hierarchy, Helmholtz's office, the unwritten sentence and two separate witness roots. Each scene contains original text, invented internal thought explicitly labeled as such, two evidence-interpretation choices, an observation gate and a local JSON export. No movie-review track exists in this series.

```text
BERNARD:    STATUS / EXCLUSION ------> DISCOMFORT
HELMHOLTZ:  SUCCESS / UNUSED TALENT -> DISCOMFORT
                           |
                       {{ ROOTS }}
                           |
             SAME_DISCOMFORT != SAME_CAUSE
             SUCCESS != INNER_FULFILLMENT
                           |
                        [ PRESERVE ]
```

**Release ledger:** 4 completed playable book stories × 7 acts = 28 authored story acts; 4 witness crosswalks; 14 remaining chapters mapped. Git source history is persistent; GitHub Pages deployment is a separate verification boundary. **Next B005 — A Solidarity Ritual (Chapter Five)**, with original age-appropriate non-explicit symbolic art and an account of Bernard's isolation.


---

## B005 — The Solidarity Ritual · Fifth living boundary (2026-11-11)

**[Play B005](episodes/B005-the-solidarity-ritual.html)** · **[Witness Crosswalk 005](witness-crosswalk-005.html)**

The fifth chapter is authored in seven playable Canvas2D acts. In the first half, Lenina and Henry return from Obstacle Golf over the Slough Crematorium, where phosphorus is recovered; they attend the Westminster Abbey Cabaret and use soma. In the second, Bernard goes to the Fordson Community Singery and joins a twelve-person Solidarity Service. The ceremony includes soma and a collective celebration, interpreted through non-explicit original pixel art. Unlike others, Bernard finishes more alienated than he began. This is original prose commentary, not reproduced novel text or a film review.

```text
LENINA + HENRY -> ORDERED LEISURE -> SCHEDULED PLEASURE
BERNARD        -> SOLIDARITY RITUAL -> OUTWARD PARTICIPATION
                                              |
                                      INWARD ALIENATION
                                              |
                                         {{ WITNESS }}
                                              |
                    COLLECTIVE_PARTICIPATION != INNER_BELONGING
                    SYNCHRONIZED_ACTION != SHARED_CONVICTION
                                              |
                                          [ PRESERVE ]
```

**Release ledger:** five playable book chapters × seven acts = **35 authored story acts**; five witness crosswalks; thirteen chapters still mapped but not yet playable. The canonical Git registry records thirteen source assets with Git blob identities, and GitHub Actions validates source integrity and JavaScript syntax. **Next B006 — Bernard and Lenina, the Director's threat, and the trip toward the Reservation.**


---

## B006 — The Reservation Journey · Sixth living boundary (2026-11-11)

**[Play B006](episodes/B006-the-reservation-journey.html)** · **[Witness Crosswalk 006](witness-crosswalk-006.html)**

Seven original playable Canvas2D scenes tell Chapter Six: Bernard tries to experience independence with Lenina over the English Channel; a later conversation exposes their conflicting expectations; the Director recalls a woman lost during a storm on an earlier Reservation trip; he threatens Bernard with exile to Iceland. Bernard enjoys the role of dissenter until Helmholtz reports that the transfer is actually planned. After meeting the Warden near Santa Fe and worrying about his running scent tap, Bernard becomes frightened and takes soma before entering the Reservation. The residents' firsthand perspective remains a future evidence boundary.

The new original Canvas2D sprite sets portray the dark Channel, the Director's office, the travel permit, the Iceland warning, Santa Fe and the coming New Mexico journey. The chapter does not reproduce protected text, dialogue, or an existing screen adaptation.

```text
BERNARD --DECLARED INDEPENDENCE--> CHANNEL SILENCE
DIRECTOR --RECALLS---------------> LOST COMPANION / FATE UNKNOWN
DIRECTOR --THREATENS-------------> ICELAND TRANSFER
HELMHOLTZ --REPORTS-------------> CREDIBLE PLAN
BERNARD --REACTS----------------> FEAR / SOMA
                   |
              {{ WITNESS }}
                   |
       IMAGINED_COURAGE != TESTED_COURAGE
       REPORTED_INTENTION != EXECUTED_TRANSFER
                   |
                [ PRESERVE ]
```

**Release ledger:** six playable book chapters × seven acts = **42 authored interactive acts**; six witness crosswalks; twelve remaining chapters mapped but not yet playable. Fifteen source assets in the canonical registry with Git blob hashes. **Next B007 — The Reservation**, with first-person perspectives preserved rather than accepting only the Warden's descriptions.


---

## B007 — The Reservation · Seventh living boundary (2026-11-11)

**[Play B007](episodes/B007-the-reservation.html)** · **[Witness Crosswalk 007](witness-crosswalk-007.html)**

Seven original interactive Canvas2D acts follow Bernard and Lenina through Malpais. Lenina sees naturally aged residents and infant care, discovers she has no soma to dull her discomfort, and witnesses a ceremonial gathering (represented non-graphically). John approaches after the ceremony, describing his exclusion and the mother who came from the World State; Linda recounts an accidental separation from the Director, years of life among the residents, and raising her son. Bernard recognizes John's father's name, Tomakin, as connected to the Director's earlier account. These personal testimonies illuminate the past without automatically establishing all motives, chronology or future consequences.

Original pixel sprites depict the pueblo, a ladder and elder, caregiving, an absent soma reminder, ceremonial drumming, John, Linda, and a three-source evidence wall. The art and narrative are interpretive and fictional, not a photographic representation of actual present-day Indigenous communities or a reproduction of the novel's copyrighted dialogue.

```text
MALPAIS (OBSERVED COMMUNITY)
       |
       +--> LENINA (VISITOR JUDGMENT)
       +--> JOHN (LIVED EXPERIENCE)
       +--> LINDA (FIRSTHAND HISTORY)
       +--> DIRECTOR (PARTIAL OLD MEMORY)
                         |
                     {{ ROOTS }}
                         |
     OBSERVATION != CONDITIONED_JUDGMENT
     OVERLAPPING_ACCOUNTS != IDENTICAL_EXPERIENCE
                         |
                     [ PRESERVE ]
```

**Release ledger:** seven playable book chapters × seven acts = **49 authored story acts**, seven witness crosswalks, eleven remaining chapters mapped but not yet playable. The canonical registry lists seventeen source assets with Git blob identities; automated CI checks source syntax, links, source consistency, and attempts GitHub Pages deployment. **Next B008 — John's upbringing**, where his personal history and Shakespearean reading enter the evidence record.


---

## B008—B010: Chapters recovered and the public confrontation · 2026-11-11

The releases B008 and B009 were committed but their canonical source registry and CI were not yet updated. This release closes that gap **without altering either chapter's source files**. The registry now lists ten authored seven-act book chapters and ten source-separated witness crosswalks, with Git blob hashes for twenty-three core artifacts. CI dynamically tests every registered story's seven-act payload, narrative links, canonical source bytes, JavaScript syntax and Pages deployment.

**[B010 — The Director's Confrontation](episodes/B010-the-directors-confrontation.html)** · **[Witness Crosswalk 010](witness-crosswalk-010.html)**

At the London Hatchery, the Director assembles a public audience in the Fertilizing Room to announce Bernard's transfer to Iceland. Bernard brings in Linda, who directly recognizes the official from her years-old Reservation history, and John, who openly identifies him as his father. The room's mockery becomes a public reversal of authority, and the Director flees. The chapter ends at his observed exit; any later institutional resignation is a separate subsequent narrative event. Original Canvas2D scenes show the production hall, audience, announcement, Bernard's response, Linda's entrance, John's declaration and the Director's departure. Original dialogue and sprite art do not reproduce passages from the novel.

```text
THE DIRECTOR: OFFICIAL AUTHORITY + PARTIAL OLD MEMORY
LINDA:        DIRECT RESERVATION HISTORY
JOHN:         LIVED EXPERIENCE + FILIAL DECLARATION
AUDIENCE:     WITNESSED PUBLIC STATEMENTS + LAUGHTER
                           |
                       {{ ROOTS }}
                           |
      PUBLIC_AUTHORITY != COMPLETE_PRIVATE_HISTORY
      CROWD_REACTION != EVIDENCE_OF_TRUTH
      ANNOUNCED_TRANSFER != EXECUTED_TRANSFER
                           |
                       [ PRESERVE ]
```

**Release total:** 10 of 18 chapters authored, 70 playable story acts, 10 witness crosswalks, 8 chapters mapped but not yet authored. No movie-review track. The real Git commit and GitHub Actions outcome govern source and deployment status; an in-chat sprite preview is an independently authored illustration and not a screenshot of the public site.

**Next natural chapter B011 — London's New Curiosity:** the Director's departure, Bernard's changing popularity, and John as an object of public fascination. Preserve `PUBLIC_INTEREST != HUMAN_UNDERSTANDING`.


---

## B011 — London's New Curiosity · Eleventh living boundary (2026-11-11)

**[Play seven-act B011](episodes/B011-londons-new-curiosity.html)** · **[Witness Crosswalk 011](witness-crosswalk-011.html)**

After the Director resigns, the upper-caste public becomes fascinated by John. Bernard enjoys popularity derived from his position as John's guardian; this success strains his relationship with Helmholtz and encourages rash confidence before Mustapha Mond. Linda, ignored by visitors, returns to long soma-induced sleep; a doctor expects her regimen to harm her health, while John keeps caring for her. On tours of industrial London and Eton, John is disturbed by repeated work and selected instructional material. Lenina takes him to a multisensory feely. Though the same entertainment is shown to both, she and John experience it differently. Afterward they part with opposing expectations: she uses soma; John turns to Shakespeare. All art and dialogue are original interpretive work, with the feely's mature content represented symbolically and non-explicitly.

The seven new procedural Canvas2D scenes portray London's celebrity crowds, Linda's secluded rest, Bernard's social attention, a repetitive factory, Eton's restricted learning, a sensory cinema and two separate private responses. The chapter's witness packet distinguishes public attention from John's wishes; Bernard's borrowed fame from independent authority; Linda's lived situation from the doctor's institutional account; and a shared stimulus from the different reactions of John and Lenina.

```text
LONDON CROWDS --> JOHN'S CELEBRITY ----> BERNARD'S BORROWED FAME
LINDA ---------> SOMA HOLIDAY ---------> DOCTOR'S UTILITARIAN VIEW
JOHN ----------> FACTORY / ETON -------> DISTRESS / MISSING SHAKESPEARE
LENINA + JOHN --> SHARED FEELY --------> DIFFERENT INNER REACTIONS
                                |
                             {{ ROOTS }}
                                |
          PUBLIC_INTEREST != HUMAN_UNDERSTANDING
          BORROWED_FAME != INDEPENDENT_AUTHORITY
          SHARED_STIMULUS != SHARED_INTERPRETATION
                                |
                             [ PRESERVE ]
```

**Release ledger:** 11 playable book chapters × 7 acts = **77 original story acts**; 11 crosswalks; 7 chapters mapped but not yet playable. Canonical registry: **25 Git blob-identified source artifacts**. CI dynamically validates story payloads, relative links, source hashes, all page JavaScript, and attempts GitHub Pages deployment. There is **no film-review track**. B012 naturally tests the instability of Bernard's borrowed social status when John refuses to perform for the audience.


---

## B012 — The Refused Party · Twelfth living boundary (2026-11-11)

**[Play the seven-act B012 story](episodes/B012-the-refused-party.html)** · **[Witness Crosswalk 012](witness-crosswalk-012.html)**

Bernard plans a fashionable party and invites London's elite by promising John as a guest. John refuses to leave his room. Those who expected a spectacle become angry with Bernard, whose new standing collapses because it depended on John's public appeal. Lenina is hurt by John's absence, but her disappointment alone does not determine all of his motives. Bernard returns to his old insecurity and seeks sympathy.

Helmholtz, meanwhile, has been disciplined for writing a poem about solitude, a subject the State regards as socially dangerous. John and Helmholtz begin a voluntary friendship around expressive language and Shakespeare. Helmholtz admires Shakespeare's literary power but sometimes laughs at marriage, families, and romantic assumptions he has been conditioned to find absurd. Their different reactions remain real without destroying the connection.

Seven original Canvas2D sprite scenes illustrate the invited guests, John's closed door, Bernard's failed party, Lenina's disappointment, Helmholtz's poem, a shared Shakespeare volume, and the three outsiders in conversation. The story uses original interpretive language rather than novel quotations or a film-review track.

```text
BERNARD --------> GUESTS EXPECT JOHN ------> SOCIAL APPROVAL
JOHN -----------> REFUSAL ---------------> CONSENT BOUNDARY
GUESTS ---------> ANGER / DEPARTURE -----> FAME COLLAPSE
LENINA ---------> DISAPPOINTMENT --------> UNKNOWN FULL MOTIVE
HELMHOLTZ -----> POEM / CENSURE --------> VOLUNTARY ART
JOHN + HELM ----> SHAKESPEARE ----------- > CHOSEN FRIENDSHIP
                              |
                           {{ ROOTS }}
                              |
           PUBLIC_APPROVAL != LASTING_FRIENDSHIP
           GUEST_EXPECTATION != JOHN_CONSENT
           OFFICIAL_DISCIPLINE != ARTISTIC_REFUTATION
                              |
                          [ PRESERVE ]
```

**Release ledger:** 12 playable book chapters × 7 original acts = **84 authored story acts**, 12 witness crosswalks, 6 chapters mapped but not yet playable. Canonical registry contains **27 Git blob-identified core source assets**. Dynamic GitHub Actions checks source hashes, 7-act payloads, local navigation, and JavaScript syntax before Pages deployment. The next natural chapter B013 examines John and Lenina's increasingly conflicting expectations in a direct encounter.
