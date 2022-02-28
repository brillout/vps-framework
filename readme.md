```bash
git clone git@github.com:brillout/vps-framework
cd vps-framework/ && pnpm install
cd app/ && pnpm run dev
```

Note that `framework` doesn't need any build step and can be published to npm as-is.

> It's not the most common but still a conventional practice to publish source files such as `.ts` or `.vue` to npm. The trick here is that `vite-plugin-ssr` adds the `framework`'s `.page.js` files to Vite's crawl path. (SvelteKit does a similar thing.)
