# Base44 sandbox notes

## What this project is
A plain static site: `index.html`, `style.css`, `script.js`. No build step, no
backend, no database, and no external credentials. `script.js` generates all 100
profiles client-side, so there is nothing to migrate or seed.

## Running it here
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Single service `web` runs `node:22-alpine` and serves the bind-mounted source
  from `/app` with Browsersync on host port 3000 (map `3000:3000`).
- Source is bind-mounted and watched, so edits to `.html`/`.css`/`.js` live-reload
  the preview — no rebuild needed for content changes.
- The first boot downloads Browsersync via `npx`; the `npm-cache` volume keeps it
  warm so later boots are fast.
- Healthcheck: HTTP GET `http://127.0.0.1:3000/` from inside the container
  (`GET /` serves `index.html`).

## Verifying it works
1. `docker compose -f docker-compose.base44.yml ps` → `web` healthy.
2. `curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/` → 200.
3. In the preview: three `.profile-card` elements stack, the "Your Picks" sidebar
   starts empty, and Like/Pass advance the deck and update the counter.

## Quirks
- No `package.json`, lockfile, or framework — do not add a JS toolchain; the
  static server is deliberately dependency-free apart from the dev server itself.
- There is nothing to do when `BASE44_PREVIEW_MODE` is unset: the site has no
  config that varies by environment. The variable is passed through bare to the
  service for consistency only.
