import { BowlingGame } from './BowlingGame';

describe('BowlingGame - scoreGame (sans spare ni strike)', () => {
    let game: BowlingGame;

    // Avant chaque test, on crée une nouvelle instance de BowlingGame
    beforeEach(() => {
        game = new BowlingGame();
    });

    // 🧪 Test 1 : Gutter game (aucune quille touchée)
    // Toutes les lancers sont des "-", donc score = 0
    it('score 0 pour "--------------------"', () => {
        expect(game.scoreGame("--------------------")).toBe(0);
    });
    
    // 🧪 Test 2 : Partie avec uniquement des "9-" (9 + 0) sur 10 frames
    // Chaque frame = 9 points, donc score total = 9 * 10 = 90
    it('score 90 pour "9-9-9-9-9-9-9-9-9-9-"', () => {
        expect(game.scoreGame("9-9-9-9-9-9-9-9-9-9-")).toBe(90);
    });

    // 🧪 Test 3 : Partie où le joueur fait 1 à chaque lancer
    // 20 lancers de 1 point = score total de 20
    it('score 20 pour "11111111111111111111"', () => {
        expect(game.scoreGame("11111111111111111111")).toBe(20);
    });

    it('score 150 pour "5/5/5/5/5/5/5/5/5/5/5"', () => {
        expect(game.scoreGame("5/5/5/5/5/5/5/5/5/5/5")).toBe(150);
    });

    it('score 16 pour "5/3-----------------"', () => {
        expect(game.scoreGame("5/3-----------------")).toBe(16);
    });

});
