// posthog-js is ~150 KB; loading it after the first paint keeps it off this page's critical path.
// Everything on the page that talks to analytics goes through this promise.
export const analytics = import("../../lib/analytics").then((m) => {
  m.initAnalytics("squadcraft-6x1")
  return m
})
