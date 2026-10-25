import { analytics } from "./analytics"

const ID: string | undefined = import.meta.env.CLARITY_ID

// Clarity stores cookies, so it only loads after the visitor accepts the banner. Without
// CLARITY_ID at build time nothing here runs and no script is requested.
export async function initClarity() {
  if (!ID || !/^[a-z0-9]+$/i.test(ID)) return
  const { getConsent } = await analytics
  const load = () => {
    if (getConsent() !== "granted") return false
    const s = document.createElement("script")
    s.async = true
    s.src = `https://www.clarity.ms/tag/${ID}`
    document.head.appendChild(s)
    return true
  }
  if (load()) return
  // The banner has no change event; re-check right after any click lands on it.
  const onClick = () => setTimeout(() => load() && document.removeEventListener("click", onClick, true))
  document.addEventListener("click", onClick, true)
}

