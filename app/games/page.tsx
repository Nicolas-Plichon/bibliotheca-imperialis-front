import { getGames } from "@/lib/api";

export default async function GamesPage() {
  const games = await getGames();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Parties jouées</h1>
      <GamesTable games={games} />
    </div>
  );
}
