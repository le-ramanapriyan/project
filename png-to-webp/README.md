# png-to-webp

Personal PNG → WebP CLI with hard size budgets.

**Author:** RAMANAPRIYAN M R V ([le-ramanapriyan](https://github.com/le-ramanapriyan))

Part of [le-ramanapriyan/project](https://github.com/le-ramanapriyan/project).

## Budgets (defaults)

| Format | Max size |
|--------|----------|
| WebP   | 100 KB   |
| PNG    | 150 KB   |

## Features

- Prefers Google **`cwebp`** when a working binary is on PATH; falls back to **Pillow**
- Tries **lossless** WebP first if it fits under the budget (disable with `--no-lossless-try`)
- Lossy path starts at quality **100** and binary-searches down to the highest quality that fits
- Auto-optimizes source PNG when over 150 KB
- Fails instead of shipping oversized files
- Single-file and batch folder modes
- `--dry-run` report only

## Install

```bash
cd png-to-webp
python3 -m pip install -e .
```

If `png2webp` is not found after install, either add your user scripts dir to `PATH` (often `~/Library/Python/3.x/bin` on macOS) or run:

```bash
python3 -m png_to_webp.cli --input ./hero.png --output ./hero.webp
```

Requires Python 3.10+ and Pillow (installed automatically).

Optional: install a working [cwebp](https://developers.google.com/speed/webp/docs/cwebp) for the reference encoder. If `cwebp` is broken/missing, Pillow is used automatically.

## Usage

```bash
# single file
png2webp --input ./hero.png --output ./hero.webp

# same folder, default name hero.webp
png2webp --input ./hero.png

# batch
png2webp --input ./pngs --outdir ./webps

# dry run
png2webp --input ./hero.png --dry-run

# custom budgets
png2webp --input ./hero.png --webp-max-kb 100 --png-max-kb 150

# force lossy-only (skip lossless try)
png2webp --input ./hero.png --no-lossless-try
```

## Policy

- Keep original dimensions (no resize unless you ask for that feature later)
- Preserve alpha (RGBA)
- Never ship a file over its format cap
- Prefer highest quality that still fits

## License

MIT — see [LICENSE](LICENSE).
