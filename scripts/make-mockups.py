"""Illustrated UI mockups for projects with no public site (confidential / internal work).

Usage:  python3 scripts/make-mockups.py
Needs:  pip install pillow
Output: public/projects/{cdt,ai-todo}-{desktop,mobile}.jpg  (1440x900 and 390x844, like real screenshots)
All names and numbers are made-up sample data.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

NAVY, PRIMARY, SKY, SOFT = (11, 31, 58), (0, 76, 223), (110, 162, 255), (241, 245, 251)
WHITE, S200, S400, S500, S700 = (255, 255, 255), (226, 232, 240), (148, 163, 184), (100, 116, 139), (51, 65, 85)
GREEN, AMBER, RED = (22, 163, 74), (217, 119, 6), (220, 38, 38)


def F(size, bold=False):
    return ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size, index=1 if bold else 0)


class Canvas:
    def __init__(self, w, h, bg=SOFT, s=2):
        self.s, self.img = s, Image.new("RGB", (w * s, h * s), bg)
        self.d = ImageDraw.Draw(self.img)

    def rect(self, x, y, w, h, fill=WHITE, r=10, outline=None):
        s = self.s
        self.d.rounded_rectangle([x * s, y * s, (x + w) * s, (y + h) * s], r * s, fill=fill, outline=outline, width=s if outline else 0)

    def text(self, x, y, t, size=14, fill=NAVY, bold=False, anchor="lm"):
        self.d.text((x * self.s, y * self.s), t, font=F(size * self.s, bold), fill=fill, anchor=anchor)

    def tw(self, t, size, bold=False):
        return self.d.textlength(t, font=F(size * self.s, bold)) / self.s

    def pill(self, x, y, t, fg, bg, size=12, padx=10, h=24):
        w = self.tw(t, size, True) + padx * 2
        self.rect(x, y, w, h, bg, h // 2)
        self.text(x + w / 2, y + h / 2, t, size, fg, True, "mm")
        return w

    def circle(self, cx, cy, r, fill):
        s = self.s
        self.d.ellipse([(cx - r) * s, (cy - r) * s, (cx + r) * s, (cy + r) * s], fill=fill)

    def line(self, x1, y1, x2, y2, fill=S200, w=1):
        s = self.s
        self.d.line([x1 * s, y1 * s, x2 * s, y2 * s], fill=fill, width=w * s)

    def blur(self, x, y, w, h, radius=7):
        s = self.s
        box = (x * s, y * s, (x + w) * s, (y + h) * s)
        self.img.paste(self.img.crop(box).filter(ImageFilter.GaussianBlur(radius * s)), box[:2])

    def save(self, path, size):
        self.img.resize(size, Image.LANCZOS).save(path, quality=88)


def cdt_desktop():
    c = Canvas(1440, 900)
    c.rect(0, 0, 232, 900, NAVY, 0)
    c.rect(24, 28, 34, 34, PRIMARY, 9)
    c.text(40, 45, "C", 18, WHITE, True, "mm")
    c.text(68, 45, "Discovery", 19, WHITE, True)
    for i, (n, on) in enumerate([("Dashboard", 1), ("Customers", 0), ("Products", 0), ("Entitlements", 0), ("Reports", 0), ("Settings", 0)]):
        y = 100 + i * 50
        if on:
            c.rect(14, y - 18, 204, 40, (28, 52, 92), 8)
        c.rect(30, y - 7, 14, 14, SKY if on else (70, 92, 130), 4)
        c.text(58, y, n, 15, WHITE if on else (170, 186, 214), on)
    c.rect(232, 0, 1208, 68, WHITE, 0)
    c.line(232, 68, 1440, 68)
    c.rect(264, 16, 420, 38, SOFT, 19, S200)
    c.text(290, 35, "Search customers, IDs, regions…", 14, S400)
    c.circle(1390, 34, 18, PRIMARY)
    c.text(1390, 34, "AD", 12, WHITE, True, "mm")
    c.text(264, 108, "Customer overview", 26, NAVY, True)
    c.text(264, 136, "Discover, filter and review customer accounts across all regions", 14, S500)
    kp = [("Total customers", "12,480", "+4.2%", GREEN), ("Active this month", "8,931", "+1.8%", GREEN), ("Pending review", "214", "-6.1%", AMBER), ("Regions covered", "38", "+2", GREEN)]
    for i, (a, b, d, col) in enumerate(kp):
        x = 264 + i * 292
        c.rect(x, 168, 276, 112, WHITE, 14, S200)
        c.text(x + 22, 196, a, 13, S500)
        c.text(x + 22, 236, b, 32, NAVY, True)
        c.text(x + 22, 264, d + " vs last month", 12, col, True)
    c.rect(264, 304, 1152, 560, WHITE, 14, S200)
    c.text(290, 336, "All customers", 17, NAVY, True)
    for i, t in enumerate(["Region: All", "Tier: Any", "Status: Active"]):
        w = c.tw(t, 13) + 28
        x = 1416 - 24 - sum(c.tw(u, 13) + 28 + 10 for u in ["Region: All", "Tier: Any", "Status: Active"][i:])
        c.rect(x, 320, w, 32, SOFT, 16, S200)
        c.text(x + w / 2, 336, t, 13, S700, False, "mm")
    cols = [(290, "Customer"), (560, "Region"), (720, "Tier"), (860, "Environments"), (1030, "Last synced"), (1250, "Status")]
    c.rect(264, 372, 1152, 40, SOFT, 0)
    for x, t in cols:
        c.text(x, 392, t.upper(), 11, S500, True)
    rows = [("Northwind Systems", "NW", "EMEA", "Enterprise", "24 clusters", "2 min ago", "Active", GREEN),
            ("Contoso Retail", "CR", "North America", "Business", "11 clusters", "14 min ago", "Active", GREEN),
            ("Fabrikam Labs", "FL", "APAC", "Enterprise", "37 clusters", "1 hr ago", "Review", AMBER),
            ("Tailspin Travel", "TT", "EMEA", "Starter", "3 clusters", "3 hrs ago", "Active", GREEN),
            ("Adventure Works", "AW", "LATAM", "Business", "9 clusters", "Yesterday", "Inactive", S400),
            ("Litware Health", "LH", "North America", "Enterprise", "52 clusters", "Yesterday", "Active", GREEN),
            ("Proseware Energy", "PE", "APAC", "Business", "16 clusters", "2 days ago", "Review", AMBER)]
    for i, (n, ini, reg, tier, env, sync, st, col) in enumerate(rows):
        y = 436 + i * 58
        if i:
            c.line(264, y - 22, 1416, y - 22, (238, 242, 248))
        c.circle(306, y + 8, 17, (225, 235, 255))
        c.text(306, y + 8, ini, 12, PRIMARY, True, "mm")
        c.text(334, y + 8, n, 15, NAVY, True)
        for x, t in [(560, reg), (860, env), (1030, sync)]:
            c.text(x, y + 8, t, 14, S700)
        c.pill(720, y - 4, tier, PRIMARY, (225, 235, 255), 12)
        c.pill(1250, y - 4, st, col, tuple(int(v + (255 - v) * .88) for v in col), 12)
    for i in range(len(rows)):
        c.blur(288, 436 + i * 58 - 12, 270, 40)
    return c


def cdt_mobile():
    c = Canvas(390, 844)
    c.rect(0, 0, 390, 64, NAVY, 0)
    c.rect(18, 15, 34, 34, PRIMARY, 9)
    c.text(35, 32, "C", 18, WHITE, True, "mm")
    c.text(62, 32, "Discovery", 18, WHITE, True)
    for i in range(3):
        c.rect(344, 24 + i * 8, 22, 3, WHITE, 2)
    c.text(18, 100, "Customer overview", 22, NAVY, True)
    c.rect(18, 124, 354, 44, WHITE, 22, S200)
    c.text(44, 146, "Search customers…", 14, S400)
    for i, (a, b, d, col) in enumerate([("Customers", "12,480", "+4.2%", GREEN), ("Active", "8,931", "+1.8%", GREEN)]):
        x = 18 + i * 182
        c.rect(x, 184, 172, 92, WHITE, 14, S200)
        c.text(x + 16, 208, a, 12, S500)
        c.text(x + 16, 236, b, 24, NAVY, True)
        c.text(x + 16, 260, d, 12, col, True)
    c.text(18, 308, "Recent customers", 16, NAVY, True)
    rows = [("Northwind Systems", "EMEA · 24 clusters", "Active", GREEN), ("Contoso Retail", "North America · 11 clusters", "Active", GREEN),
            ("Fabrikam Labs", "APAC · 37 clusters", "Review", AMBER), ("Tailspin Travel", "EMEA · 3 clusters", "Active", GREEN),
            ("Adventure Works", "LATAM · 9 clusters", "Inactive", S400), ("Litware Health", "North America · 52 clusters", "Active", GREEN)]
    for i, (n, sub, st, col) in enumerate(rows):
        y = 332 + i * 82
        c.rect(18, y, 354, 72, WHITE, 14, S200)
        c.circle(52, y + 36, 18, (225, 235, 255))
        c.text(52, y + 36, n[0], 14, PRIMARY, True, "mm")
        c.text(82, y + 26, n, 15, NAVY, True)
        c.text(82, y + 48, sub, 12, S500)
        c.pill(372 - 16 - (c.tw(st, 11, True) + 20), y + 24, st, col, tuple(int(v + (255 - v) * .88) for v in col), 11, 10, 22)
    for i in range(len(rows)):
        c.blur(34, 332 + i * 82 + 8, 210, 56, 6)
    return c


def todo_desktop():
    c = Canvas(1440, 900, (14, 28, 52))
    c.rect(0, 0, 1440, 64, NAVY, 0)
    c.circle(44, 32, 16, PRIMARY)
    c.text(44, 32, "AI", 12, WHITE, True, "mm")
    c.text(70, 32, "TaskPilot", 18, WHITE, True)
    c.text(1396, 32, "Signed in with OAuth 2.0", 13, (150, 170, 205), False, "rm")
    # chat panel
    c.rect(40, 92, 780, 768, (20, 40, 72), 18, (40, 64, 104))
    c.text(70, 126, "Assistant", 16, WHITE, True)
    c.circle(1 * 0 + 150, 126, 4, (74, 222, 128))
    msgs = [("u", "Add a task to review the Q3 report by next Friday, high priority"),
            ("fn", 'create_task(title="Review Q3 report", due="2026-11-20", priority="high")'),
            ("a", "Done. I added “Review Q3 report”, due Fri 20 Nov, marked high priority."),
            ("u", "Move the dentist appointment to Monday and show everything due this week"),
            ("fn", 'update_task(id=12, due="2026-11-16")  ·  list_tasks(range="this_week")'),
            ("a", "Moved the dentist appointment to Mon 16 Nov. You have 4 tasks due this week.")]
    y = 168
    for k, t in msgs:
        if k == "u":
            w = min(560, c.tw(t, 15) + 40)
            if c.tw(t, 15) + 40 > 560:
                w = 560
            lines = [t] if c.tw(t, 15) + 40 <= 560 else [t[:46], t[46:]]
            h = 22 + 24 * len(lines) + 4
            c.rect(790 - w, y, w, h, PRIMARY, 16)
            for j, ln in enumerate(lines):
                c.text(790 - w + 20, y + 24 + j * 24, ln.strip(), 15, WHITE)
            y += h + 18
        elif k == "fn":
            w = min(700, c.tw(t, 12) + 40)
            c.rect(70, y, w, 36, (12, 24, 44), 10, (50, 78, 120))
            c.text(88, y + 18, "ƒ", 14, SKY, True, "lm")
            c.text(106, y + 18, t, 12, (160, 190, 235))
            y += 54
        else:
            lines = [t] if c.tw(t, 15) < 520 else [t[:52].rsplit(" ", 1)[0], t[len(t[:52].rsplit(" ", 1)[0]):].strip()]
            w = max(c.tw(l, 15) for l in lines) + 40
            h = 22 + 24 * len(lines) + 4
            c.rect(70, y, w, h, (32, 58, 98), 16)
            for j, ln in enumerate(lines):
                c.text(90, y + 24 + j * 24, ln, 15, WHITE)
            y += h + 18
    c.rect(66, 792, 728, 52, (12, 24, 44), 26, (50, 78, 120))
    c.text(92, 818, "Ask me to add, update or find a task…", 14, (110, 130, 165))
    c.circle(768, 818, 18, PRIMARY)
    # task list
    c.rect(850, 92, 550, 768, WHITE, 18)
    c.text(882, 126, "Tasks", 20, NAVY, True)
    c.pill(1292, 112, "This week", PRIMARY, (225, 235, 255), 12)
    tasks = [("Review Q3 report", "Fri 20 Nov", "High", RED, 0), ("Dentist appointment", "Mon 16 Nov", "Medium", AMBER, 0),
             ("Send invoice to client", "Tue 17 Nov", "High", RED, 0), ("Plan sprint demo", "Wed 18 Nov", "Medium", AMBER, 0),
             ("Renew domain", "Done", "Low", GREEN, 1), ("Book flights", "Done", "Low", GREEN, 1)]
    for i, (t, d, p, col, done) in enumerate(tasks):
        y = 164 + i * 94
        c.rect(874, y, 502, 78, SOFT, 14, S200)
        c.rect(896, y + 28, 22, 22, GREEN if done else WHITE, 6, None if done else S400)
        if done:
            c.line(902, y + 39, 906, y + 43, WHITE, 2)
            c.line(906, y + 43, 913, y + 34, WHITE, 2)
        c.text(934, y + 28, t, 16, S400 if done else NAVY, True)
        c.text(934, y + 52, d, 13, S500)
        c.pill(1376 - 20 - (c.tw(p, 12, True) + 20), y + 27, p, col, tuple(int(v + (255 - v) * .88) for v in col), 12)
        c.blur(930, y + 14, 300, 30)
    for bx, by, bw, bh in [(340, 168, 450, 50), (70, 290, 514, 50), (242, 358, 548, 50), (70, 480, 379, 74)]:
        c.blur(bx + 16, by + 10, bw - 32, bh - 20, 5)
    return c


def todo_mobile():
    c = Canvas(390, 844, (14, 28, 52))
    c.rect(0, 0, 390, 64, NAVY, 0)
    c.circle(38, 32, 15, PRIMARY)
    c.text(38, 32, "AI", 11, WHITE, True, "mm")
    c.text(62, 32, "TaskPilot", 18, WHITE, True)
    y = 88
    for kind, lines in [("u", ["Add a task to review the Q3", "report by next Friday, high", "priority"]), ("fn", ['create_task("Review Q3 report",', ' due="2026-11-20")']),
                        ("a", ["Done. Added “Review Q3 report”,", "due Fri 20 Nov, high priority."]),
                        ("u", ["Show everything due this week"]), ("fn", ['list_tasks(range="this_week")']), ("a", ["You have 4 tasks due this week."])]:
        h = 20 + 22 * len(lines)
        if kind == "u":
            w = max(c.tw(l, 14) for l in lines) + 32
            c.rect(372 - w, y, w, h, PRIMARY, 16)
            for j, l in enumerate(lines):
                c.text(372 - w + 16, y + 20 + j * 22, l, 14, WHITE)
        elif kind == "fn":
            h = 14 + 18 * len(lines)
            w = max(c.tw(l, 11) for l in lines) + 28
            c.rect(18, y, w, h, (12, 24, 44), 10, (50, 78, 120))
            for j, l in enumerate(lines):
                c.text(32, y + 16 + j * 18, l, 11, (160, 190, 235))
        else:
            w = max(c.tw(l, 14) for l in lines) + 32
            c.rect(18, y, w, h, (32, 58, 98), 16)
            for j, l in enumerate(lines):
                c.text(34, y + 20 + j * 22, l, 14, WHITE)
        y += h + 14
    c.rect(18, y + 6, 354, 250, WHITE, 16)
    c.text(36, y + 34, "Due this week", 15, NAVY, True)
    for i, (t, p, col) in enumerate([("Review Q3 report", "High", RED), ("Dentist appointment", "Medium", AMBER), ("Send invoice", "High", RED), ("Plan sprint demo", "Medium", AMBER)]):
        yy = y + 62 + i * 44
        c.rect(36, yy, 18, 18, WHITE, 5, S400)
        c.text(64, yy + 9, t, 14, NAVY)
        c.pill(354 - (c.tw(p, 10, True) + 18), yy - 1, p, col, tuple(int(v + (255 - v) * .88) for v in col), 10, 9, 20)
    c.rect(18, 770, 354, 50, (12, 24, 44), 25, (50, 78, 120))
    c.text(42, 795, "Ask me to add or find a task…", 13, (110, 130, 165))
    c.circle(346, 795, 17, PRIMARY)
    for i in range(4):
        c.blur(62, y + 62 + i * 44 - 4, 190, 26, 6)
    return c


if __name__ == "__main__":
    out = "public/projects/"
    cdt_desktop().save(out + "cdt-desktop.jpg", (1440, 900))
    cdt_mobile().save(out + "cdt-mobile.jpg", (390, 844))
    todo_desktop().save(out + "ai-todo-desktop.jpg", (1440, 900))
    todo_mobile().save(out + "ai-todo-mobile.jpg", (390, 844))
    print("ok")
