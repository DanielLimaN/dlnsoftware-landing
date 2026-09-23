import posthog from "posthog-js"

const KEY = import.meta.env.VITE_POSTHOG_KEY || "phc_D4qFmcm4EptTnZWLvU4p4SvhKmBucna7fXb9BGKXvNQT"
const HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com"

export type Consent = "granted" | "denied" | "pending"

let ready = false

// Nothing is captured and nothing is stored until the visitor accepts the consent banner.
export function initAnalytics(site: "dln" | "squadcraft") {
  if (ready || !KEY) return
  posthog.init(KEY, {
    api_host: HOST,
    defaults: "2025-05-24",
    opt_out_capturing_by_default: true,
    opt_out_persistence_by_default: true,
    person_profiles: "identified_only",
    disable_session_recording: true,
    // No feature flags on these pages: avoids a /flags call before the visitor has consented.
    advanced_disable_flags: true,
  })
  posthog.register({ site })
  ready = true
  document.addEventListener("click", onClick, true)
}

function locationOf(el: Element) {
  const box = el.closest("[data-section], section[id], header, footer")
  if (!box) return "page"
  return box.getAttribute("data-section") || box.id || box.tagName.toLowerCase()
}

// One delegated listener names the conversion clicks, so components only need
// data-track / data-track-plan for the few cases a link's href can't express.
function onClick(e: MouseEvent) {
  const el = (e.target as Element | null)?.closest<HTMLElement>("a, button, [data-track]")
  if (!el) return
  const location = locationOf(el)
  const plan = el.dataset.trackPlan
  if (plan) return track("plan_click", { plan, location })
  if (el.dataset.track) return track(el.dataset.track, { location })
  const href = el.getAttribute("href") || ""
  if (href.includes("wa.me/")) track("cta_whatsapp", { location })
  else if (href.startsWith("mailto:")) track("cta_email", { location })
  else if (href.startsWith("/squadcraft")) track("cta_squadcraft", { location })
  else if (href === "#falar") track("cta_montar_squad", { location })
}

export function getConsent(): Consent {
  return ready ? posthog.get_explicit_consent_status() : "pending"
}

export function setConsent(granted: boolean) {
  if (!ready) return
  if (granted) posthog.opt_in_capturing()
  else posthog.opt_out_capturing()
}

export function track(event: string, props?: Record<string, unknown>) {
  if (!ready) return
  posthog.capture(event, props)
}

export function onConsentReopen(fn: () => void) {
  window.addEventListener("dln:consent-reopen", fn)
  return () => window.removeEventListener("dln:consent-reopen", fn)
}

export function reopenConsent() {
  window.dispatchEvent(new Event("dln:consent-reopen"))
}
