// Same deferred load as /squadcraft/6x1: posthog-js stays off the critical path. The segment goes
// on every event as a super property, so cta_whatsapp_segmento and video_play_segmento carry it.
const slug = document.getElementById("root")?.dataset.segmento ?? ""

export const analytics = import("../../lib/analytics").then((m) => {
  m.initAnalytics("squadcraft-segmento", { segmento: slug })
  return m
})
