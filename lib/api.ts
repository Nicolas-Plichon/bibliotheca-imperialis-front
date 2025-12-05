const API_URL = "https://lcpsvxfsmftbppomhqdm.supabase.co";

export async function getGames() {
  const response = await fetch(`${API_URL}/games`);
  if (!response.ok) throw new Error("Erreur lors du fetch des parties");
  return response.json();
}
