"""Generate the NYC D2 enrollment forecasting project hero image.

Produces a poster-style chart: 12-year plateau, COVID break, three diverging
forecast scenarios — no axes, no labels, no chart chrome. The shape tells the
story.
"""

from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np

OUT_PATH = Path(__file__).parent.parent / "public" / "projects" / "nyc-d2-enrollment.png"

# Actuals — 12 years of K-5 enrollment in NYC District 2 (in thousands).
years_actual = list(range(2013, 2025))
enrollment_actual = [15.05, 15.40, 15.32, 15.00, 15.50, 15.20, 15.18, 15.15,
                     13.55, 12.40, 12.05, 12.00]

# Forecast horizon: 2025-26 -> 2027-28 (i.e. years 2025, 2026, 2027 on this axis).
years_forecast = [2024, 2025, 2026, 2027]

# Three analyst-bounded scenarios, anchored to the last actual (2024-25 ~ 12.0K).
optimistic = [12.00, 13.50, 14.70, 15.80]
base = [12.00, 12.10, 12.18, 12.20]
pessimistic = [12.00, 11.80, 11.55, 11.30]

# Brand-ish palette: deep near-black background, off-white actuals, distinct
# scenario hues that read both in light and dark UI context.
BG = "#0c0d10"
ACTUAL = "#f5f5f3"
OPTIMISTIC = "#f59e0b"   # amber
BASE = "#60a5fa"         # blue
PESSIMISTIC = "#e0245e"  # rose
GRID = "#1c1d22"

fig, ax = plt.subplots(figsize=(16, 9), dpi=150)
fig.patch.set_facecolor(BG)
ax.set_facecolor(BG)

# Subtle horizontal grid for depth without being a chart.
for y in (11, 12, 13, 14, 15, 16):
    ax.axhline(y, color=GRID, linewidth=1, zorder=0)

# Actuals.
ax.plot(years_actual, enrollment_actual, color=ACTUAL, linewidth=4.5,
        solid_capstyle="round", solid_joinstyle="round", zorder=5)
# A single subtle marker at the 2020 break to emphasize the inflection.
ax.scatter([2020], [enrollment_actual[7]], s=110, color=ACTUAL,
           edgecolor=BG, linewidth=3, zorder=6)

# Three scenario lines extending past the last actual.
ax.plot(years_forecast, optimistic, color=OPTIMISTIC, linewidth=4.5,
        solid_capstyle="round", zorder=4)
ax.plot(years_forecast, base, color=BASE, linewidth=4.5,
        solid_capstyle="round", zorder=4)
ax.plot(years_forecast, pessimistic, color=PESSIMISTIC, linewidth=4.5,
        solid_capstyle="round", zorder=4)

# Soft glow under each scenario for poster feel.
def fill_glow(xs, ys, color):
    ax.fill_between(xs, np.array(ys) - 0.08, np.array(ys) + 0.08,
                    color=color, alpha=0.18, linewidth=0, zorder=3)
fill_glow(years_forecast, optimistic, OPTIMISTIC)
fill_glow(years_forecast, base, BASE)
fill_glow(years_forecast, pessimistic, PESSIMISTIC)

# Dotted vertical at 2020 to mark the structural break.
ax.axvline(2020, color="#3a3d44", linewidth=1.5, linestyle=(0, (3, 4)), zorder=1)

# Strip all chart chrome.
ax.set_xticks([])
ax.set_yticks([])
for spine in ax.spines.values():
    spine.set_visible(False)
ax.set_xlim(2012.6, 2027.4)
ax.set_ylim(10.6, 16.4)

plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
plt.savefig(OUT_PATH, facecolor=BG, dpi=150, bbox_inches=None, pad_inches=0)
print(f"wrote {OUT_PATH}")
