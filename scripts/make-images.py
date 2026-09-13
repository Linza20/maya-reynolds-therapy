#!/usr/bin/env python3
"""
Generates the placeholder artwork that ships with the repo.

Every file is drawn from the "Marine Layer" palette so the site looks
designed the moment it is cloned. Replace any file in public/images/ with a
real photograph of the same aspect ratio and nothing else needs to change --
see IMAGE-GUIDE.md for what belongs in each slot.
"""
import math
import os
import random

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

INK = '#12343B'
DEEP = '#1E5158'
SEA = '#9FBFB8'
MIST = '#DCE6E4'
FOG = '#F4F7F6'
GOLD = '#C99A4E'
SAND = '#E3D7C0'
WARM = '#EFE3CE'


def grain(seed):
    return f'''<filter id="g{seed}" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="{seed}"/>
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
    <feComposite operator="in" in2="SourceGraphic"/>
  </filter>'''


def ridge(w, h, base, amp, freq, phase, color, opacity=1.0):
    pts = []
    for i in range(0, w + 1, max(4, w // 90)):
        t = i / w
        y = base + amp * math.sin(t * freq * math.pi * 2 + phase) + amp * 0.35 * math.sin(t * freq * 3.1 * math.pi + phase * 1.7)
        pts.append(f'{i},{y:.1f}')
    return f'<polygon points="0,{h} {" ".join(pts)} {w},{h}" fill="{color}" opacity="{opacity}"/>'


def landscape(w, h, seed, sky_top, sky_bottom, bands, sun=None, sun_color=GOLD):
    random.seed(seed)
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">',
        '<defs>',
        f'<linearGradient id="sky{seed}" x1="0" y1="0" x2="0" y2="1">'
        f'<stop offset="0" stop-color="{sky_top}"/><stop offset="1" stop-color="{sky_bottom}"/></linearGradient>',
        grain(seed),
        '</defs>',
        f'<rect width="{w}" height="{h}" fill="url(#sky{seed})"/>',
    ]
    if sun:
        cx, cy, r = sun
        parts.append(
            f'<defs><radialGradient id="sun{seed}"><stop offset="0" stop-color="{sun_color}" stop-opacity="0.95"/>'
            f'<stop offset="0.55" stop-color="{sun_color}" stop-opacity="0.28"/>'
            f'<stop offset="1" stop-color="{sun_color}" stop-opacity="0"/></radialGradient></defs>'
        )
        parts.append(f'<circle cx="{cx}" cy="{cy}" r="{r*3.1:.0f}" fill="url(#sun{seed})"/>')
        parts.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{sun_color}" opacity="0.75"/>')

    for base, amp, freq, phase, color, op in bands:
        parts.append(ridge(w, h, base * h, amp * h, freq, phase, color, op))

    parts.append(f'<rect width="{w}" height="{h}" fill="{INK}" filter="url(#g{seed})" opacity="0.5"/>')
    parts.append('</svg>')
    return '\n'.join(parts)


def room(w, h, seed, wall=MIST, floor=SEA, light=WARM, chairs=2, plant=True):
    """An interior light study -- soft daylight, an arch, quiet furniture masses."""
    wx, wy, ww, wh = w * 0.08, h * 0.10, w * 0.30, h * 0.46
    blur = max(6, w * 0.012)
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">',
        '<defs>',
        f'<linearGradient id="w{seed}" x1="0.1" y1="0" x2="0.8" y2="1">'
        f'<stop offset="0" stop-color="{FOG}"/><stop offset="0.55" stop-color="{wall}"/>'
        f'<stop offset="1" stop-color="{SEA}" stop-opacity="0.55"/></linearGradient>',
        f'<linearGradient id="l{seed}" x1="0" y1="0" x2="0.6" y2="1">'
        f'<stop offset="0" stop-color="{light}" stop-opacity="0.95"/>'
        f'<stop offset="1" stop-color="{light}" stop-opacity="0"/></linearGradient>',
        f'<filter id="b{seed}" x="-20%" y="-20%" width="140%" height="140%">'
        f'<feGaussianBlur stdDeviation="{blur:.1f}"/></filter>',
        f'<filter id="bs{seed}" x="-20%" y="-20%" width="140%" height="140%">'
        f'<feGaussianBlur stdDeviation="{blur*0.35:.1f}"/></filter>',
        grain(seed),
        '</defs>',
        f'<rect width="{w}" height="{h}" fill="url(#w{seed})"/>',
        # cast daylight, soft-edged
        f'<g filter="url(#b{seed})">'
        f'<polygon points="{wx-ww*0.2:.0f},{-h*0.2:.0f} {wx+ww*1.2:.0f},{-h*0.2:.0f} {w*0.98:.0f},{h*1.1:.0f} {w*0.10:.0f},{h*1.1:.0f}" fill="url(#l{seed})"/>'
        f'</g>',
        # window opening
        f'<rect x="{wx:.0f}" y="{-h*0.06:.0f}" width="{ww:.0f}" height="{wh:.0f}" rx="{ww*0.5:.0f}" '
        f'fill="{light}" opacity="0.55" filter="url(#b{seed})"/>',
        # floor line
        f'<rect x="0" y="{h*0.74:.0f}" width="{w}" height="{h*0.26:.0f}" fill="{floor}" opacity="0.38"/>',
    ]
    seat_y = h * 0.78
    xs = [w * 0.62] if chairs == 1 else [w * 0.58, w * 0.84]
    for i, cx in enumerate(xs):
        cw, ch = w * 0.19, h * 0.24
        col = DEEP if i % 2 == 0 else INK
        parts.append(
            f'<g filter="url(#bs{seed})">'
            f'<rect x="{cx-cw/2:.0f}" y="{seat_y-ch:.0f}" width="{cw:.0f}" height="{ch:.0f}" '
            f'rx="{cw*0.44:.0f}" fill="{col}" opacity="0.7"/>'
            f'<rect x="{cx-cw/2:.0f}" y="{seat_y-ch*0.30:.0f}" width="{cw:.0f}" height="{ch*0.30:.0f}" '
            f'rx="{cw*0.16:.0f}" fill="{SAND}" opacity="0.6"/></g>'
        )
    if plant:
        px, py = w * 0.26, h * 0.78
        parts.append(f'<g filter="url(#bs{seed})" opacity="0.8">')
        parts.append(f'<rect x="{px-w*0.032:.0f}" y="{py:.0f}" width="{w*0.064:.0f}" height="{h*0.11:.0f}" rx="{w*0.03:.0f}" fill="{GOLD}" opacity="0.65"/>')
        for a in (-42, -14, 16, 44):
            r = math.radians(a - 90)
            ex, ey = px + math.cos(r) * w * 0.12, py + math.sin(r) * h * 0.19
            parts.append(
                f'<path d="M{px:.0f},{py:.0f} Q{(px+ex)/2 + w*0.02:.0f},{(py+ey)/2:.0f} {ex:.0f},{ey:.0f}" '
                f'stroke="{DEEP}" stroke-width="{max(3, w*0.008):.1f}" fill="none" opacity="0.6" stroke-linecap="round"/>'
            )
        parts.append('</g>')
    parts.append(f'<rect width="{w}" height="{h}" fill="{INK}" filter="url(#g{seed})" opacity="0.5"/>')
    parts.append('</svg>')
    return chr(10).join(parts)


def portrait(w, h, seed):
    """An abstract, respectful stand-in until a real headshot is dropped in."""
    cx = w * 0.5
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">
  <defs>
    <linearGradient id="p{seed}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="{FOG}"/><stop offset="1" stop-color="{MIST}"/>
    </linearGradient>
    <radialGradient id="halo{seed}" cx="0.5" cy="0.34" r="0.55">
      <stop offset="0" stop-color="{WARM}" stop-opacity="0.9"/>
      <stop offset="1" stop-color="{WARM}" stop-opacity="0"/>
    </radialGradient>
    {grain(seed)}
  </defs>
  <rect width="{w}" height="{h}" fill="url(#p{seed})"/>
  <rect width="{w}" height="{h}" fill="url(#halo{seed})"/>
  <circle cx="{cx:.0f}" cy="{h*0.33:.0f}" r="{w*0.175:.0f}" fill="{DEEP}" opacity="0.9"/>
  <path d="M{cx - w*0.34:.0f},{h} C{cx - w*0.30:.0f},{h*0.63:.0f} {cx - w*0.15:.0f},{h*0.53:.0f} {cx:.0f},{h*0.53:.0f}
           C{cx + w*0.15:.0f},{h*0.53:.0f} {cx + w*0.30:.0f},{h*0.63:.0f} {cx + w*0.34:.0f},{h} Z"
        fill="{INK}" opacity="0.92"/>
  <path d="M{cx - w*0.09:.0f},{h*0.56:.0f} C{cx:.0f},{h*0.66:.0f} {cx:.0f},{h*0.66:.0f} {cx + w*0.09:.0f},{h*0.56:.0f}"
        stroke="{SAND}" stroke-width="{w*0.012:.1f}" fill="none" opacity="0.55"/>
  <rect width="{w}" height="{h}" fill="{INK}" filter="url(#g{seed})" opacity="0.5"/>
</svg>'''


FILES = {
    # slot: (builder)
    'hero-shore.svg': lambda: landscape(
        1000, 1200, 11, FOG, MIST,
        [(0.52, 0.018, 1.1, 0.4, SEA, 0.55),
         (0.64, 0.022, 0.8, 2.1, DEEP, 0.6),
         (0.78, 0.016, 1.4, 1.2, INK, 0.85)],
        sun=(660, 380, 58)),
    'hero-room.svg': lambda: room(1000, 1200, 12),
    'intro-horizon.svg': lambda: landscape(
        1800, 780, 13, FOG, MIST,
        [(0.62, 0.03, 0.7, 0.9, SEA, 0.45),
         (0.76, 0.026, 1.1, 2.4, DEEP, 0.55),
         (0.88, 0.018, 1.6, 0.3, INK, 0.8)],
        sun=(1280, 250, 46)),
    'who-anxiety.svg': lambda: landscape(
        900, 1125, 21, FOG, MIST,
        [(0.70, 0.012, 0.9, 1.1, SEA, 0.5),
         (0.82, 0.010, 1.3, 2.6, DEEP, 0.7)],
        sun=(330, 300, 40)),
    'who-burnout.svg': lambda: room(900, 1125, 22, chairs=1, plant=False, light=SAND),
    'who-trauma.svg': lambda: landscape(
        900, 1125, 23, MIST, SEA,
        [(0.58, 0.030, 0.6, 3.0, DEEP, 0.55),
         (0.74, 0.020, 1.0, 1.4, INK, 0.75),
         (0.90, 0.012, 1.9, 2.2, INK, 0.9)]),
    'banner-fog.svg': lambda: landscape(
        1900, 1000, 31, MIST, SEA,
        [(0.66, 0.030, 0.7, 1.8, DEEP, 0.6),
         (0.80, 0.022, 1.2, 0.5, INK, 0.8),
         (0.92, 0.014, 2.0, 2.8, INK, 0.95)],
        sun=(520, 300, 64)),
    'maya-portrait.svg': lambda: portrait(900, 1125, 41),
    'services-light.svg': lambda: room(1800, 780, 42, chairs=2, plant=True),
    'office-room.svg': lambda: room(1400, 1050, 51),
    'office-chairs.svg': lambda: room(900, 900, 52, chairs=2, plant=False, light=SAND),
    'office-detail.svg': lambda: room(900, 900, 53, chairs=1, plant=True, wall=FOG),
    'booking-path.svg': lambda: landscape(
        1800, 780, 61, WARM, MIST,
        [(0.60, 0.020, 0.8, 2.2, SEA, 0.5),
         (0.74, 0.018, 1.2, 0.7, DEEP, 0.6),
         (0.88, 0.014, 1.7, 1.9, INK, 0.85)],
        sun=(700, 230, 54)),
    'footer-water.svg': lambda: landscape(
        1900, 620, 71, MIST, SEA,
        [(0.45, 0.035, 0.6, 1.1, DEEP, 0.6),
         (0.66, 0.026, 1.1, 2.5, INK, 0.8),
         (0.84, 0.016, 1.8, 0.8, INK, 0.95)]),
}

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for name, build in FILES.items():
        with open(os.path.join(OUT, name), 'w') as fh:
            fh.write(build())
        print('wrote', name)
