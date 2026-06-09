# Yara — Looker Studio Community Visualizations

Branded Community Visualizations for Yara user analytics dashboards in Looker Studio.

## Components

| Viz | Purpose |
|---|---|
| **Yara KPI Card** | Single KPI scorecard with label, value, accent border, optional sub-caption |

## Hosting

Files in this repo are served via **GitHub Pages** at:

```
https://my-yara.github.io/yara-looker-viz/
```

Looker Studio loads the manifest from `https://my-yara.github.io/yara-looker-viz/manifest.json`.

## Local development

```bash
# Install deps (one-time)
npm install

# Bundle the viz
npx webpack

# Output: dist/yara-kpi-card-bundle.js
```

After bundling, commit and push — GitHub Pages auto-deploys within ~1–2 minutes.

## File layout

| File | Purpose |
|---|---|
| `manifest.json` | Looker reads this URL to discover available vizes |
| `yara-kpi-card.js` | Source for the KPI Card renderer |
| `yara-kpi-card.css` | Styles loaded by Looker into the viz iframe |
| `yara-kpi-card.json` | Data + style field configuration (what Looker prompts the user to set) |
| `webpack.config.js` | Bundler config — produces `dist/yara-kpi-card-bundle.js` |
| `dist/yara-kpi-card-bundle.js` | The bundled JS that Looker actually executes |

## Adding a new viz

1. Write `yara-<name>.js`, `.css`, `.json`
2. Add a new `components[]` entry in `manifest.json` pointing to the new files
3. Add an entry in `webpack.config.js` for the new bundle
4. Run `npx webpack`
5. Commit + push

## Privacy

These visualizations are rendering logic only. They contain no credentials, no API keys, and no user data. They receive data from Looker Studio via the `@google/dscc` SDK at runtime — the data itself never lives in this repo.
