export class BowlingGame {
    /**
     * Convertit une chaîne de lancers de bowling en tableau de scores numériques.
     * - "-" = 0
     * - "1"-"9" = valeur correspondante
     * - "/" = spare = 10 - valeur précédente
     */
    private parseRolls(input: string): number[] {
        const rolls: number[] = [];

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '-') {
                rolls.push(0);
            } else if (char === '/') {
                const lastRoll = rolls[rolls.length - 1];
                rolls.push(10 - lastRoll); // Spare : complète à 10
            } else {
                rolls.push(parseInt(char, 10));
            }
        }

        return rolls;
    }

    /**
     * Calcule le score total d'une partie de bowling.
     * @param input La chaîne représentant les lancers (ex: "5/5/5/5/5/5/5/5/5/5/5")
     * @returns Le score total du jeu
     */
    public scoreGame(input: string): number {
        const rolls = this.parseRolls(input);
        let score = 0;
        let rollIndex = 0;

        // On boucle sur les 10 frames
        for (let frame = 0; frame < 10; frame++) {
            const first = rolls[rollIndex];
            const second = rolls[rollIndex + 1];

            if (first + second === 10 && second !== 10) {
                // Spare détecté : score = 10 + lancer suivant
                score += 10 + rolls[rollIndex + 2];
                rollIndex += 2;
            } else {
                // Frame normale (sans spare)
                score += first + second;
                rollIndex += 2;
            }
        }

        return score;
    }
}
