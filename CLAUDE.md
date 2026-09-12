# Gulf Coast Silent Disco — website

Marketing site for a silent disco headphone rental + DJ business in the Mobile Bay, AL area.
Live domain: https://www.gulfcoastsilentdisco.com (canonical is `www`). Replaces a Carrd one-pager.

## Stack
- Astro (static output, zero client JS except the mobile menu and quote form) + `@astrojs/sitemap`
- Host: Netlify (site `gulf-coast-silent-disco`). `netlify.toml` sets build, security headers + CSP, and a 301 from the `.netlify.app` host to the canonical domain.
- Forms: Web3Forms. Public access key in `src/site.ts`. `public/js/site.js` posts via fetch and shows inline success/error.
- No framework, no CSS library. One stylesheet: `src/styles/global.css`.

## Where things live
- `src/site.ts` — ALL business facts: contact, cities, pricing, inventory, nav. Edit here, never in pages. Items marked `TODO` are placeholders.
- `src/layouts/Base.astro` — head/SEO, LocalBusiness JSON-LD on every page, header/footer.
- `src/pages/` — one file per route. `events/` and `guides/` are folders.
- `src/content/guides/*.md` — articles. Add a file with `title`, `description`, `date` frontmatter and it appears on `/guides/`.
- `scripts/make-icons.mjs` — regenerates favicon set + `og.png` from one SVG mark (`npm run icons`).

## Conventions
- Trailing slashes on all URLs (`/rentals/`). Internal links must include them.
- Prices are "starting at" only. Never show a firm price on the site.
- Copyright year is computed in `Footer.astro`. Legal "Last updated" dates are hand-set.
- American English everywhere.

## Commands
```
npm run dev      # localhost:4321
npm run build    # -> dist/
npm run icons    # regenerate icons + OG image
```

## Git workflow: always confirm branch strategy

When starting work in a repository I haven't touched yet this session (a fresh
codebase, or the first git action after opening a new project):
- Before doing anything else, ask whether I want to pull the latest `main` (or
  the repo's default branch) first, rather than assuming the working copy is
  current.

When it's time to push commits:
- Always ask whether I want to:
  1. Push directly to `main`, or
  2. Create/use a `dev` branch, push there, and open a pull request into `main`.
- Never push to `main` without this confirmation.
- If I choose the dev/PR path, ask for a branch name (or suggest one from the
  work just done) before creating it.

Ask these as explicit questions — don't infer the answer from context or past
sessions.
