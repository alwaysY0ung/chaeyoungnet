# chaeyoung.net

Personal website built with [Astro](https://astro.build/) and deployed on Cloudflare Pages.

## Requirements

- **Node.js**: 24.15.0 (see `.nvmrc`)
- **Package Manager**: pnpm

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
chaeyoungnet/
├── src/
│   └── pages/
│       ├── index.astro      # Home
│       ├── product.astro    # Product
│       ├── value.astro      # Value
│       └── stories.astro    # Stories
├── astro.config.mjs
├── package.json
└── README.md
```

## Deployment

Deployed on **Cloudflare Pages**:

- **Framework preset**: Astro
- **Build command**: `pnpm build`
- **Build output directory**: `dist`

The custom domain `chaeyoung.net` is connected through Cloudflare.

## Credits

Based on the [Atrom](https://github.com/webvs2/astro-art-template) Astro theme (MIT).

## License

MIT
