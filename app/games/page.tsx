// app/games/page.tsx
import React from "react";
import GamesTable from "./components/GamesTable";
import type { Game } from "@/lib/types";
import { getGames } from "@/lib/api"; // si tu as cette fonction; sinon utilise fetch

export default async function GamesPage() {
  // si ton backend nécessite un fetch serveur, fais-le ici (server component)
  let games: Game[] = [];
  try {
    games = await getGames(); // ou fetch(...)
  } catch (err) {
    // fallback : tableau vide
    console.error("Erreur fetch games", err);
    games = [];
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parties</h1>
      {/* GamesTable est un composant client, on le rend depuis une server page avec props */}
      {/* Assure-toi que GamesTable est dans app/games/components */}
      <GamesTable games={games} />
    </main>
  );
}
