// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Build for Vercel: emit Vercel Build Output API (.vercel/output) so the SSR app
  // runs natively on Vercel. This is what fixes the 404 on *.vercel.app — without a
  // preset the build produced no Vercel-servable output. Switch back to `true`
  // (cloudflare-module) only if self-deploying to Cloudflare Workers.
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
  },
});
