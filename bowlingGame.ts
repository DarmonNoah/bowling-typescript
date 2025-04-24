export class BowlingGame {
    /**
     * Convertit une chaîne de lancers de bowling en tableau de scores numériques.
     *
     * Règles de conversion :
     * - "-" : équivaut à 0 (aucune quille tombée)
     * - "1" à "9" : nombre de quilles tombées
     * - "/" : spare = le nombre de quilles nécessaires pour compléter 10 dans une frame
     * - "X" : strike = 10 quilles tombées dès le premier lancer
     */
    private parseRolls(input: string): number[] {
        const rolls: number[] = [];

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '-') {
                rolls.push(0); // Aucun point marqué
            } else if (char === '/') {
                // Spare : on complète à 10 quilles en soustrayant le lancer précédent
                const lastRoll = rolls[rolls.length - 1];
                rolls.push(10 - lastRoll);
            } else if (char.toUpperCase() === 'X') {
                // Strike : 10 quilles d’un coup
                rolls.push(10);
            } else {
                // Lancer normal (1 à 9)
                rolls.push(parseInt(char, 10));
            }
        }

        return rolls;
    }

    /**
     * Calcule le score total d'une partie de bowling.
     * Gère :
     * - les frames normales (2 lancers)
     * - les spares (/) avec bonus d’un lancer
     * - les strikes (X) avec bonus de deux lancers
     */
    public scoreGame(input: string): number {
        const rolls = this.parseRolls(input);
        let score = 0;
        let rollIndex = 0;

        // On boucle sur les 10 frames du jeu
        for (let frame = 0; frame < 10; frame++) {
            const first = rolls[rollIndex];

            if (first === 10) {
                // ✅ STRIKE : score = 10 + les deux lancers suivants
                score += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
                rollIndex += 1; // Un seul lancer consommé pour un strike
            } else {
                const second = rolls[rollIndex + 1];

                if (first + second === 10) {
                    // ✅ SPARE : score = 10 + le lancer suivant
                    score += 10 + rolls[rollIndex + 2];
                } else {
                    // ✅ FRAME NORMALE : somme des deux lancers
                    score += first + second;
                }

                rollIndex += 2; // Deux lancers consommés dans tous les cas sauf strike
            }
        }

        return score;
    }
}
