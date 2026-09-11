// The portfolio is deployed as a static GitHub Pages site, so the optional
// Cloudflare D1 binding may be absent. Augment Cloudflare's project-specific
// environment type so database helpers can check for the binding safely.
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
