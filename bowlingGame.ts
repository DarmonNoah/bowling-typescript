export class BowlingGame {
    /**
     * Calcule le score d'une partie de bowling représentée par une chaîne de caractères.
     * Ex: "9-9-9-9-9-9-9-9-9-9-" => 90
     */
    public scoreGame(input: string): number {
        const rolls: number[] = [];

        // Convertit chaque caractère en nombre de quilles (0 pour '-', sinon chiffre)
        for (const char of input) {
            if (char === '-') {
                rolls.push(0);
            } else {
                rolls.push(parseInt(char, 10));
            }
        }

        let score = 0;
        let rollIndex = 0;

        // Calcule le score des 10 frames (chaque frame = 2 lancers ici)
        for (let frame = 0; frame < 10; frame++) {
            score += rolls[rollIndex] + rolls[rollIndex + 1];
            rollIndex += 2;
        }

        return score;
    }
}
