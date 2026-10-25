import { Wordmark } from "../../components/ui"

export function Topo() {
  return (
    <header className="bg-white border-b-2 border-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center">
        <a href="/squadcraft" aria-label="SquadCraft, página principal" className="no-underline text-sc-ink hover:text-sc-ink">
          <Wordmark />
        </a>
      </div>
    </header>
  )
}
