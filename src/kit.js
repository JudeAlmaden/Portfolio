/*
  tasteskill kit loader.

  public/assets is served as static files, so the kit's own scripts are imported by URL rather than
  through the bundler; the vite-ignore comment on each import keeps Vite from trying to resolve them.
  They read the rendered page — the hero's entrance, the nav's menu, the statement's words — so they
  are loaded after React has committed it, never from index.html before the first render.
*/
const base = import.meta.env.BASE_URL;

let pending = null;

export function loadKit() {
  if (!pending) {
    pending = Promise.all([
      import(/* @vite-ignore */ `${base}assets/system.js`),
      import(/* @vite-ignore */ `${base}assets/layout/layout.js`),
      import(/* @vite-ignore */ `${base}assets/motion/motion.js`),
    ])
      .then(([system, layout, motion]) => {
        // each self-inits on import; init() is the kit's own idempotent entry point
        system.default?.init?.();
        layout.default?.init?.();
        motion.init?.(); // refresh: entrance, nav, counts, loops
      })
      .catch((error) => console.warn('tasteskill kit:', error));
  }
  return pending;
}
