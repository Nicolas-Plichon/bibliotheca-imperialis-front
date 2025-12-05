// app/games/components/GamesTable.tsx
"use client";

import React, { useMemo, useState } from "react";
import type { Game } from "@/lib/types";

interface GamesTableProps {
  games: Game[];
}

export default function GamesTable({ games }: GamesTableProps) {
  const [filterUser, setFilterUser] = useState<string>("");

  // Liste unique d'utilisateurs (triée)
  const users = useMemo(() => {
    const set = new Set<string>();
    games.forEach((g) => {
      if (g.user) set.add(String(g.user));
    });
    return Array.from(set).sort();
  }, [games]);

  const filtered = useMemo(() => {
    if (!filterUser) return games;
    return games.filter((g) => String(g.user) === filterUser);
  }, [games, filterUser]);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="userFilter" className="mr-2">Filtrer par joueur</label>
        <select
          id="userFilter"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Tous les joueurs</option>
          {users.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left">Joueur</th>
              <th className="px-2 py-1 text-left">Faction</th>
              <th className="px-2 py-1 text-left">Résultat</th>
              <th className="px-2 py-1 text-left">Score</th>
              <th className="px-2 py-1 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((g) => (
              <tr key={String(g.id)}>
                <td className="px-2 py-1">{g.user}</td>
                <td className="px-2 py-1">{g.faction ?? "-"}</td>
                <td className="px-2 py-1">{g.result ?? "-"}</td>
                <td className="px-2 py-1">{g.score ?? "-"}</td>
                <td className="px-2 py-1">{g.date ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
