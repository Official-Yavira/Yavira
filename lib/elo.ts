export type EloResult = {
  winnerRating: number;
  loserRating: number;
};

export function calculateElo(
  winnerRating: number,
  loserRating: number,
  kFactor = 32
): EloResult {
  const expectedWinner = 1 / (1 + Math.pow(10, (loserRating - winnerRating) / 400));
  const expectedLoser = 1 / (1 + Math.pow(10, (winnerRating - loserRating) / 400));
  return {
    winnerRating: Math.round(winnerRating + kFactor * (1 - expectedWinner)),
    loserRating: Math.round(loserRating + kFactor * (0 - expectedLoser))
  };
}
