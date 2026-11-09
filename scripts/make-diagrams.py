"""Generate inline blog diagrams. Usage: python3 scripts/make-diagrams.py   (needs pillow)"""
from PIL import Image, ImageDraw, ImageFont

NAVY, PRIMARY, SKY, SOFT = (11, 31, 58), (0, 76, 223), (110, 162, 255), (241, 245, 251)


def font(size, bold=True):
    for path, idx in [("/System/Library/Fonts/Helvetica.ttc", 1 if bold else 0), ("/Library/Fonts/Arial.ttf", 0)]:
        try:
            return ImageFont.truetype(path, size, index=idx)
        except Exception:
            continue
    return ImageFont.load_default()


def center(d, box, text, f, fill):
    """Center text's visible ink in the box, horizontally and vertically."""
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    cx, cy = (box[0] + box[2]) / 2, (box[1] + box[3]) / 2
    d.text((cx - (l + r) / 2, cy - (t + b) / 2), text, font=f, fill=fill)


def aws():
    W, H = 1200, 640
    im = Image.new("RGB", (W, H), SOFT)
    d = ImageDraw.Draw(im)
    # panels
    d.rounded_rectangle((40, 40, 580, 600), 28, fill="white", outline=(203, 213, 225), width=2)
    d.rounded_rectangle((620, 40, 1160, 600), 28, fill=NAVY)
    center(d, (40, 64, 580, 100), "BEFORE", font(26), (100, 116, 139))
    center(d, (620, 64, 1160, 100), "AFTER", font(26), SKY)
    # before: 2 clusters, 13 ELBs
    for i, (cx, n) in enumerate([(70, 7), (330, 6)]):
        d.rounded_rectangle((cx, 120, cx + 240, 380), 16, outline=(148, 163, 184), width=3)
        d.text((cx + 14, 130), f"EKS cluster {i + 1}", font=font(20), fill=NAVY)
        for k in range(n):
            x, y = cx + 18 + (k % 4) * 54, 172 + (k // 4) * 70
            d.rounded_rectangle((x, y, x + 44, y + 50), 8, fill=(239, 68, 68))
            center(d, (x, y, x + 44, y + 50), "ELB", font(14), "white")
    center(d, (40, 410, 580, 460), "13 load balancers", font(34), NAVY)
    center(d, (40, 460, 580, 500), "Extended support", font(26, False), (239, 68, 68))
    center(d, (40, 510, 580, 570), "~USD 2,400 / month", font(36), NAVY)
    # after: 1 cluster, 1 ELB
    d.rounded_rectangle((760, 120, 1020, 380), 16, outline=SKY, width=3)
    d.text((774, 130), "EKS cluster", font=font(20), fill="white")
    d.rounded_rectangle((850, 175, 930, 235), 10, fill=(34, 197, 94))
    center(d, (850, 175, 930, 235), "1 ELB", font(18), "white")
    for k in range(6):
        x, y = 780 + (k % 3) * 76, 270 + (k // 3) * 54
        d.rounded_rectangle((x, y, x + 66, y + 40), 8, fill=PRIMARY)
        center(d, (x, y, x + 66, y + 40), "backend" if k < 5 else "frontend", font(13), "white")
    center(d, (620, 410, 1160, 460), "1 load balancer", font(34), "white")
    center(d, (620, 460, 1160, 500), "Standard support", font(26, False), (134, 239, 172))
    center(d, (620, 510, 1160, 570), "~USD 800 / month", font(36), "white")
    d.line((586, 300, 610, 300), fill=PRIMARY, width=6)
    d.polygon([(606, 286), (622, 300), (606, 314)], fill=PRIMARY)
    im.save("public/blog/images/aws-before-after.png", optimize=True)


def eeat():
    W, H = 1200, 440
    im = Image.new("RGB", (W, H), SOFT)
    d = ImageDraw.Draw(im)
    items = [("E", "Experience", "First-hand, real-world use of the topic"), ("E", "Expertise", "Knowledge and qualifications to write it"),
             ("A", "Authoritativeness", "Recognised as a go-to source"), ("T", "Trustworthiness", "Accurate, sourced and transparent")]
    for i, (letter, name, desc) in enumerate(items):
        x = 40 + i * 285
        d.rounded_rectangle((x, 40, x + 265, 350), 28, fill=NAVY if i == 3 else "white", outline=(203, 213, 225), width=2)
        d.ellipse((x + 82, 65, x + 182, 165), fill=PRIMARY)
        center(d, (x + 82, 65, x + 182, 165), letter, font(64), "white")
        dark = i == 3
        center(d, (x, 190, x + 265, 230), name, font(26), "white" if dark else NAVY)
        # wrap description
        words, lines, cur = desc.split(), [], ""
        for w in words:
            t = f"{cur} {w}".strip()
            if d.textlength(t, font=font(21, False)) <= 225:
                cur = t
            else:
                lines.append(cur)
                cur = w
        lines.append(cur)
        for j, ln in enumerate(lines):
            center(d, (x, 245 + j * 30, x + 265, 275), ln, font(21, False), (203, 213, 225) if dark else (71, 85, 105))
    center(d, (0, 380, W, 410), "Trust is the most important of the four", font(22, False), (71, 85, 105))
    im.save("public/blog/images/eeat.png", optimize=True)


aws()
eeat()
print("ok")
