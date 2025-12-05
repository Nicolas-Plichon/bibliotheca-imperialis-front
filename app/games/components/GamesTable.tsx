"use client";
import { useState } from "react";

export default function GamesTable({ games }) {
  const [filterUser, setFilterUser] = useState("");

  const filtered = games.filter(g =>
    filterUser ? g.user === filterUser : true
  );

  return (
    <div>
      <select
        className="border p-2"
        value={filterUser}
        onChange={(e) => setFilterUser(e.target.value)}
      >
        <option value="">Tous les joueurs</option>
        {[...new Set(games.map(g => g.user))].map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      <table className="mt-4 w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Faction</th>
            <th>Résultat</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((g) => (
            <tr key={g.id}>
              <td>{g.user}</td>
              <td>{g.faction}</td>
              <td>{g.result}</td>
              <td>{g.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
