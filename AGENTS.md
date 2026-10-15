<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Replicación de diseño

Todas las peticiones de replicar un diseño deben usar el MCP de Paper (`plugin-paper-desktop-paper`), accediendo al fichero **SAM - Landing**. Usa `list_resources` para localizarlo y `open_file` si no es el fichero activo, y obtén los valores exactos con `get_jsx`, `get_computed_styles` y `get_fill_image` en lugar de deducirlos de capturas.
