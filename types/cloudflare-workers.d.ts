// The portfolio is deployed as a static GitHub Pages site. This ambient
// declaration keeps the optional Cloudflare database helper type-checkable
// without requiring the Cloudflare runtime module during the static build.
declare module "cloudflare:workers" {
  export const env: any;
}
