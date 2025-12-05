import GamesTable from "./components/GamesTable";
import type { Game } from "@/lib/types";

export default async function GamesPage() {
  let games: Game[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/games"); // <- ton endpoint réel
    if (!res.ok) throw new Error(`Erreur fetch: ${res.status}`);
    games = await res.json();
  } catch (err) {
    console.error("Erreur fetch games", err);
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parties jouées</h1>
      <GamesTable games={games} />
    </main>
  );
}
