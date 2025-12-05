// lib/types.ts
export interface Game {
  id: string;
  user: string;       // ou 'player' selon ton backend — adapte si nécessaire
  faction?: string;
  result?: string;
  score?: number;
  date?: string;
  // ajoute d'autres champs réels que renvoie ton backend
  [key: string]: any; // utile temporairement pour éviter TS errors pendant dev
}
