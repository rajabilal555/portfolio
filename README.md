# rbpx.dev

Personal site for [Bilal Pervez](https://rbpx.dev). Static Astro, Markdown content, deployed to Cloudflare Pages.

## Edit content

| What | Where |
| --- | --- |
| Name, email, socials, about | `src/content/site/profile.md` |
| Experience | `src/content/experience/*.md` |
| Projects | `src/content/projects/*.md` |
| Skills | `src/content/skills.json` |
| Blog posts | `src/content/blog/*.md` (set `enable_blog: true` in the profile) |
| Resume PDF | drop at `public/resume.pdf` and set `resume: /resume.pdf` in the profile |

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview the production build |

## Deploy

### Cloudflare Pages (Git)

1. Create a Pages project from this repo, production branch `main`.
2. Build command: `pnpm build`
3. Output directory: `dist`
4. Node version: `22` (see `.node-version`)
5. Add custom domain `rbpx.dev` (and `www` if you want it).

No `@astrojs/cloudflare` adapter — this is a static `dist/` site.

### Wrangler (optional)

```sh
pnpm build && npx wrangler deploy
```

`wrangler.jsonc` serves `./dist` as static assets.

The live Laravel site on CapRover (`tekki.dev`, `production` branch) is unchanged until you retire it.
