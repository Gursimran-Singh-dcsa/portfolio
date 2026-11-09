"""Generate a branded 1200x630 blog cover (also used as the social-share image).

Usage:  python3 scripts/make-cover.py <slug> "<Title>" "<Tag>"
Needs:  pip install pillow   (macOS Helvetica is used; falls back to DejaVu/Arial)
Output: public/blog/covers/<slug>.png
"""
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY, PRIMARY, SKY = (11, 31, 58), (0, 76, 223), (110, 162, 255)


def font(size, bold=True):
    for path, idx in [("/System/Library/Fonts/Helvetica.ttc", 1 if bold else 0),
                      ("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 0),
                      ("/Library/Fonts/Arial.ttf", 0)]:
        try:
            return ImageFont.truetype(path, size, index=idx)
        except Exception:
            continue
    return ImageFont.load_default()


def ink_center(draw, cx, cy, text, fnt, fill, align="center"):
    """Draw text so its visible ink box is centered on (cx, cy); align="left" treats cx as the left edge."""
    l, t, r, b = draw.textbbox((0, 0), text, font=fnt)
    x = cx - (l + r) / 2 if align == "center" else cx - l
    draw.text((x, cy - (t + b) / 2), text, font=fnt, fill=fill)


def wrap(draw, text, fnt, max_w):
    lines, cur = [], ""
    for word in text.split():
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    lines.append(cur)
    return lines


def make(slug, title, tag):
    bg = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(bg)
    for y in range(H):  # vertical gradient blue -> navy
        t = y / (H - 1)
        d.line([(0, y), (W, y)], fill=tuple(int(PRIMARY[i] * (1 - t) + NAVY[i] * t) for i in range(3)))
    img = bg.convert("RGBA")
    d = ImageDraw.Draw(img)

    # tag chip: translucent fill must be composited, not drawn directly
    tf = font(26)
    label = tag.upper()
    tw = d.textlength(label, font=tf)
    chip = (70, 70, int(70 + tw + 48), 122)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(overlay).rounded_rectangle(chip, radius=26, fill=(255, 255, 255, 36), outline=SKY + (255,), width=2)
    img.alpha_composite(overlay)
    d = ImageDraw.Draw(img)
    ink_center(d, chip[0] + 24, (chip[1] + chip[3]) / 2, label, tf, SKY, align="left")

    # title
    size = 70
    while True:
        tfnt = font(size)
        lines = wrap(d, title, tfnt, 1000)
        if len(lines) <= 4 or size <= 48:
            break
        size -= 4
    y = 160
    for ln in lines:
        d.text((70, y), ln, font=tfnt, fill="white")
        y += int(size * 1.15)

    # footer: avatar + name
    try:
        av = Image.open("public/profile.png").convert("RGBA").resize((92, 92))
        circ = Image.new("RGBA", (92, 92), (0, 0, 0, 0))
        m = Image.new("L", (92, 92), 0)
        ImageDraw.Draw(m).ellipse((0, 0, 91, 91), fill=255)
        face = Image.new("RGBA", (92, 92), (0, 76, 223, 255))
        face.alpha_composite(av)
        circ.paste(face, (0, 0), m)
        img.alpha_composite(circ, (70, H - 140))
    except Exception:
        pass
    mid = H - 140 + 46  # avatar vertical center
    ink_center(d, 184, mid - 22, "Gursimran Singh", font(34), "white", align="left")
    ink_center(d, 184, mid + 24, "gursimran.in", font(28, False), SKY, align="left")

    out = f"public/blog/covers/{slug}.png"
    img.convert("RGB").save(out, optimize=True)
    print("wrote", out)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    make(*sys.argv[1:])
