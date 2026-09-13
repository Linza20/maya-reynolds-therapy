#!/usr/bin/env python3
"""
Crops the three photographs supplied in Dr. Maya Reynolds' profile PDF into the
aspect ratios each slot needs. Re-run with the PDF path if you want to redo the
crops; the finished .webp files are committed under public/images/.
"""
import os
import sys
from PIL import Image

SRC = sys.argv[1] if len(sys.argv) > 1 else '/tmp/pdfimg'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

# (source, crop box, target long edge, output name)
JOBS = [
    # ---- the headshot -------------------------------------------------------
    ('p0_8.png',  (0, 40, 1024, 1320),   1100, 'maya-portrait.webp'),    # 4:5

    # ---- office photo A: loft, brick, tall windows, cream armchair ----------
    ('p0_10.png', (0, 0, 1500, 1125),    1600, 'office-room.webp'),      # 4:3  lead
    ('p0_10.png', (520, 0, 1457, 1125),  1000, 'hero-room.webp'),        # 5:6  window corner
    ('p0_10.png', (0, 0, 937, 1125),     1000, 'hero-shore.webp'),       # 5:6  art wall + sofa
    ('p0_10.png', (0, 120, 1500, 763),   1800, 'intro-horizon.webp'),    # 21:9 window wall
    ('p0_10.png', (600, 0, 1500, 1125),  1000, 'who-burnout.webp'),      # 4:5  armchair in light
    ('p0_10.png', (0, 482, 1500, 1125),  1800, 'booking-path.webp'),     # 21:9 rug + warm floor

    # ---- office photo B: white room, curtains, tree, bookshelf -------------
    ('p0_11.png', (0, 150, 1500, 994),   1600, 'office-chairs.webp'),    # 16:9 seating
    ('p0_11.png', (0, 180, 1500, 823),   1800, 'services-light.webp'),   # 21:9 daylight
    ('p0_11.png', (60, 0, 960, 1125),    1000, 'who-anxiety.webp'),      # 4:5  curtains + tree
    ('p0_11.png', (600, 0, 1500, 1125),  1000, 'who-trauma.webp'),       # 4:5  sofa + shelves
    ('p0_11.png', (0, 100, 1500, 850),   1800, 'banner-fog.webp'),       # 2:1  low-detail, text over
    ('p0_11.png', (0, 400, 1500, 900),   1800, 'footer-water.webp'),     # 3:1  room, closing note
]

if __name__ == '__main__':
    for name, box, long_edge, out in JOBS:
        im = Image.open(os.path.join(SRC, name)).convert('RGB').crop(box)
        scale = long_edge / max(im.size)
        if scale < 1:
            im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        im.save(os.path.join(OUT, out), 'WEBP', quality=82, method=6)
        print(f'{out:26} {im.width}x{im.height}')
