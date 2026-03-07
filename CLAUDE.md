# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

A collection of standalone browser games. Each game is a **single self-contained HTML file** — no build system, no dependencies, no package manager. Open any file directly in a browser to play.

| File | Game / App |
|---|---|
| `tictactoe.html` | Tic Tac Toe — two-player, persistent score tracking |
| `snake.html` | Snake — mouse-steered, timed auto-growth |
| `shooter.html` | Star Blaster — retro 2D top-down shooter |
| `greenlantern.html` | Green Lantern — side-scrolling cave platformer with 6 enemy types |
| `idx-stock-predictor.html` | IDX Stock Predictor — predict top 5 stocks by sector (financial, mining, manufacturing, etc.) using history and order demand |
| `us-tech-predictor.html` | US Tech Stock Predictor — top 5 buy/sell signals across NASDAQ tech sectors (Mega Cap, Semiconductors, Cloud, Fintech, AI) |
| `matahari-pwa.html` | Matahari E-Commerce PWA — iOS-installable shopping app with smart recommendations, CRM/loyalty, flash sale timer, wishlist, cart, and 16 products across 8 categories |

## Development workflow

No build step. To test a game, open the file in a browser:

```
open tictactoe.html
open snake.html
open shooter.html
open greenlantern.html
open idx-stock-predictor.html
```

**After every change — no exceptions — commit and push to GitHub:**

```
git add <file>
git commit -m "..."
git push
```

This applies to every session: any file created or modified must be committed and pushed before the session is considered complete. GitHub is the primary backup.

## Architecture conventions

All three games follow the same single-file structure:

1. **CSS** — inline `<style>` block; dark backgrounds, flex-centered layout
2. **HTML** — minimal markup (canvas element or a small set of DOM nodes)
3. **JavaScript** — single `<script>` block, organised in sections:
   - Constants / config at the top
   - Input handlers (keyboard, mouse)
   - Game state variables
   - Game object constructors / reset functions
   - Update logic (called each frame)
   - Draw logic (called each frame)
   - `requestAnimationFrame` main loop at the bottom

**`shooter.html`** is the most complex and illustrates the full pattern:
- `gameState` string drives which screen is shown (`menu | playing | transitioning | gameover | win`)
- Movement is **dt-based** (`pixels/s × dt`); shoot timers are **frame-based** (decremented once per tick)
- `circleRect()` + `pushOut()` handle all circle-vs-rectangle collision and resolution
- Enemy line-of-sight uses a 20-step raytrace; barriers block bullets from both sides
- Weapon tier, barrier HP, and powerup spawn times (`POWERUP_TIMES`) are the primary balance knobs

**`snake.html`** wraps everything in an IIFE; state is fully reset by calling `reset()`.

**`tictactoe.html`** uses plain DOM manipulation (no canvas); board state is a `Array(9)` of `null | 'X' | 'O'`.

**`greenlantern.html`** is a side-scrolling cave platformer:
- 9000px scrolling world; player has 3 lives, a double-jump (double-tap `↑`), and a long-jump (`→+↑`)
- Six enemy types: `snake`, `dwarf`, `bird`, `hairwhip`, `flycroc`, `giant`
- Goal: reach the prisoner at the end of the cave; `gameState` cycles through `menu | playing | gameover | win`
- Movement and physics are **dt-based** (`GRAVITY`, `JUMP_V`, `DJUMP_V`, `LGJUMP_V`, `PSPEED` are the primary tuning knobs)

## Git config

- Remote: `https://github.com/paul-soegianto/ClaudeTest1.git`
- Branch: `main`
- Local identity: `paul-soegianto` / `paul-soegianto@users.noreply.github.com`
