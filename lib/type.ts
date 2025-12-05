// lib/types.ts
export interface Game {
  id: string;
  user: string;
  faction?: string;
  result?: string;
  score?: number;
  date?: string;
  // tu peux ajouter d'autres champs selon ce que ton backend renvoie
  [key: string]: any;
}
