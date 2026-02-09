export type BracketMatch = {
  id: string;
  round: number;
  playerA: string;
  playerB: string;
  winner?: string;
};

export function generateBracket(players: string[]): BracketMatch[] {
  const matches: BracketMatch[] = [];
  const totalPlayers = Math.pow(2, Math.ceil(Math.log2(players.length)));
  const paddedPlayers = [...players];
  while (paddedPlayers.length < totalPlayers) {
    paddedPlayers.push('BYE');
  }

  for (let i = 0; i < paddedPlayers.length; i += 2) {
    matches.push({
      id: `r1-${i / 2 + 1}`,
      round: 1,
      playerA: paddedPlayers[i],
      playerB: paddedPlayers[i + 1],
      winner: paddedPlayers[i + 1] === 'BYE' ? paddedPlayers[i] : undefined
    });
  }

  return matches;
}
