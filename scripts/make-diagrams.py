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


def center(d, box, text, f, fill, ink=False):
    """Center text in the box. Default uses the font's vertical middle (anchor="mm"), so every line sits on a
    consistent baseline regardless of its letters. ink=True centers the visible glyphs instead; use it only for
    short caps/number labels (E, A, T, ELB) inside shapes."""
    cx, cy = (box[0] + box[2]) / 2, (box[1] + box[3]) / 2
    if ink:
        l, t, r, b = d.textbbox((0, 0), text, font=f)
        d.text((cx - (l + r) / 2, cy - (t + b) / 2), text, font=f, fill=fill)
    else:
        d.text((cx, cy), text, font=f, fill=fill, anchor="mm")


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
            center(d, (x, y, x + 44, y + 50), "ELB", font(14), "white", ink=True)
    center(d, (40, 410, 580, 460), "13 load balancers", font(34), NAVY)
    center(d, (40, 460, 580, 500), "Extended support", font(26, False), (239, 68, 68))
    center(d, (40, 510, 580, 570), "~USD 2,400 / month", font(36), NAVY)
    # after: 1 cluster, 1 ELB
    d.rounded_rectangle((760, 120, 1020, 380), 16, outline=SKY, width=3)
    d.text((774, 130), "EKS cluster", font=font(20), fill="white")
    d.rounded_rectangle((850, 175, 930, 235), 10, fill=(34, 197, 94))
    center(d, (850, 175, 930, 235), "1 ELB", font(18), "white", ink=True)
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
    W, H = 1200, 500
    im = Image.new("RGB", (W, H), SOFT)
    d = ImageDraw.Draw(im)
    items = [("E", "Experience", "First-hand, real-world use of the topic"), ("E", "Expertise", "Knowledge and qualifications to write it"),
             ("A", "Authoritativeness", "Recognised as a go-to source"), ("T", "Trustworthiness", "Accurate, sourced and transparent")]
    body = font(22, False)
    for i, (letter, name, desc) in enumerate(items):
        x = 40 + i * 285
        dark = i == 3
        d.rounded_rectangle((x, 40, x + 265, 400), 28, fill=NAVY if dark else "white", outline=(203, 213, 225), width=2)
        d.ellipse((x + 77, 70, x + 187, 180), fill=PRIMARY)
        center(d, (x + 77, 70, x + 187, 180), letter, font(66), "white", ink=True)
        center(d, (x, 215, x + 265, 255), name, font(27), "white" if dark else NAVY)
        words, lines, cur = desc.split(), [], ""
        for w in words:
            t = f"{cur} {w}".strip()
            if d.textlength(t, font=body) <= 240:
                cur = t
            else:
                lines.append(cur)
                cur = w
        lines.append(cur)
        for j, ln in enumerate(lines):
            center(d, (x, 285 + j * 38, x + 265, 323 + j * 38), ln, body, (203, 213, 225) if dark else (71, 85, 105))
    center(d, (0, 425, W, 475), "Trust is the most important of the four", font(24, False), (71, 85, 105))
    im.save("public/blog/images/eeat.png", optimize=True)


def aws_mobile():
    """Stacked, larger-text variant for phones."""
    W, H = 800, 1000
    im = Image.new("RGB", (W, H), SOFT)
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((30, 30, 770, 480), 28, fill="white", outline=(203, 213, 225), width=2)
    d.rounded_rectangle((30, 520, 770, 970), 28, fill=NAVY)
    center(d, (30, 50, 770, 100), "BEFORE", font(34), (100, 116, 139))
    for i, (cx, n) in enumerate([(60, 7), (420, 6)]):
        d.rounded_rectangle((cx, 115, cx + 320, 300), 16, outline=(148, 163, 184), width=3)
        d.text((cx + 14, 122), f"EKS cluster {i + 1}", font=font(22), fill=NAVY)
        for k in range(n):
            x, y = cx + 16 + (k % 4) * 76, 160 + (k // 4) * 66
            d.rounded_rectangle((x, y, x + 64, y + 54), 8, fill=(239, 68, 68))
            center(d, (x, y, x + 64, y + 54), "ELB", font(20), "white", ink=True)
    center(d, (30, 320, 770, 370), "13 load balancers", font(44), NAVY)
    center(d, (30, 372, 770, 415), "Extended support", font(32, False), (239, 68, 68))
    center(d, (30, 420, 770, 470), "~USD 2,400 / month", font(42), NAVY)
    d.polygon([(370, 485), (430, 485), (400, 515)], fill=PRIMARY)
    center(d, (30, 540, 770, 590), "AFTER", font(34), SKY)
    d.rounded_rectangle((220, 605, 580, 780), 16, outline=SKY, width=3)
    d.text((234, 612), "EKS cluster", font=font(22), fill="white")
    d.rounded_rectangle((330, 640, 470, 690), 10, fill=(34, 197, 94))
    center(d, (330, 640, 470, 690), "1 ELB", font(24), "white", ink=True)
    for k in range(6):
        x, y = 234 + (k % 3) * 116, 702 + (k // 3) * 36
        d.rounded_rectangle((x, y, x + 106, y + 30), 6, fill=PRIMARY)
        center(d, (x, y, x + 106, y + 30), "backend" if k < 5 else "frontend", font(15), "white")
    center(d, (30, 805, 770, 855), "1 load balancer", font(44), "white")
    center(d, (30, 857, 770, 900), "Standard support", font(32, False), (134, 239, 172))
    center(d, (30, 905, 770, 955), "~USD 800 / month", font(42), "white")
    im.save("public/blog/images/aws-before-after-mobile.png", optimize=True)


def eeat_mobile():
    """2x2 grid with larger text for phones."""
    W, H = 800, 780
    im = Image.new("RGB", (W, H), SOFT)
    d = ImageDraw.Draw(im)
    items = [("E", "Experience", "First-hand, real-world use of the topic"), ("E", "Expertise", "Knowledge and qualifications to write it"),
             ("A", "Authoritativeness", "Recognised as a go-to source"), ("T", "Trustworthiness", "Accurate, sourced and transparent")]
    for i, (letter, name, desc) in enumerate(items):
        x, y = 30 + (i % 2) * 385, 30 + (i // 2) * 340
        d.rounded_rectangle((x, y, x + 355, y + 310), 28, fill=NAVY if i == 3 else "white", outline=(203, 213, 225), width=2)
        d.ellipse((x + 132, y + 22, x + 222, y + 112), fill=PRIMARY)
        center(d, (x + 132, y + 22, x + 222, y + 112), letter, font(56), "white", ink=True)
        dark = i == 3
        center(d, (x, y + 130, x + 355, y + 175), name, font(32), "white" if dark else NAVY)
        words, lines, cur = desc.split(), [], ""
        for w in words:
            t = f"{cur} {w}".strip()
            if d.textlength(t, font=font(25, False)) <= 315:
                cur = t
            else:
                lines.append(cur)
                cur = w
        lines.append(cur)
        for j, ln in enumerate(lines):
            center(d, (x, y + 200 + j * 40, x + 355, y + 240 + j * 40), ln, font(25, False), (203, 213, 225) if dark else (71, 85, 105))
    center(d, (0, 715, W, 760), "Trust is the most important of the four", font(26, False), (71, 85, 105))
    im.save("public/blog/images/eeat-mobile.png", optimize=True)


aws()
eeat()
aws_mobile()
eeat_mobile()
print("ok")
