# Image guide

Every slot on the redesign is a crop of the practice's own photography — the
headshot and the two office photographs supplied in Dr. Maya Reynolds' profile.
Nothing is stock and nothing is a placeholder.

Re-crop with `python3 scripts/crop-profile-photos.py <folder-of-source-pngs>`;
the crop boxes and target ratios are the `JOBS` table at the top of that file.

| Slot | Source | Ratio | Subject |
| --- | --- | --- | --- |
| `maya-portrait` | headshot | 4:5 | Dr. Reynolds |
| `hero-shore` | office A | 5:6 | Artwork wall and sofa |
| `hero-room` | office A | 5:6 | Window corner and armchair |
| `intro-horizon` | office A | 21:9 | Daylight across the window wall |
| `who-burnout` | office A | 4:5 | Armchair in the window light |
| `booking-path` | office A | 21:9 | Rug and warm wood floor |
| `office-room` | office A | 4:3 | The room, lead shot |
| `who-anxiety` | office B | 4:5 | Curtains and plant, quiet corner |
| `who-trauma` | office B | 4:5 | Sofa and bookshelves |
| `banner-fog` | office B | 2:1 | Low-detail wide shot, text sits over it |
| `services-light` | office B | 21:9 | Daylight across the seating area |
| `office-chairs` | office B | 16:9 | Seating area |
| `footer-water` | office B | 3:1 | The room, closing note |

If you later shoot or licence additional photography, drop a file at the same
path and ratio — `content/maya.ts` is the only place paths are declared.

`/clone` uses the original site's own images, under `public/images/clone/`.
