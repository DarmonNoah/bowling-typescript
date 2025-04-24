import { BowlingGame } from './BowlingGame';

describe('BowlingGame - scoreGame (base, spares, strikes)', () => {
    let game: BowlingGame;

    // Avant chaque test, on crée une nouvelle instance de BowlingGame
    beforeEach(() => {
        game = new BowlingGame();
    });

    // ──────────────────────────────
    // 🧪 TESTS DE BASE (sans spare ni strike)
    // ──────────────────────────────

    // Test 1 : Gutter game (aucune quille touchée)
    // Chaque lancer est "-", donc score final = 0
    it('score 0 pour "--------------------"', () => {
        expect(game.scoreGame("--------------------")).toBe(0);
    });

    // Test 2 : Partie avec uniquement des "9-" (9 + 0) sur 10 frames
    // Chaque frame vaut 9, donc score total = 9 * 10 = 90
    it('score 90 pour "9-9-9-9-9-9-9-9-9-9-"', () => {
        expect(game.scoreGame("9-9-9-9-9-9-9-9-9-9-")).toBe(90);
    });

    // Test 3 : Partie où le joueur fait 1 à chaque lancer
    // 20 lancers de 1 point → score total = 20
    it('score 20 pour "11111111111111111111"', () => {
        expect(game.scoreGame("11111111111111111111")).toBe(20);
    });

    // ──────────────────────────────
    // 🧪 TESTS SPARE ("/")
    // ──────────────────────────────

    // Test 4 : 10 frames de spare suivies d’un 5 bonus
    // Chaque frame = 10 + 5 = 15 → 10 * 15 = 150
    it('score 150 pour "5/5/5/5/5/5/5/5/5/5/5"', () => {
        expect(game.scoreGame("5/5/5/5/5/5/5/5/5/5/5")).toBe(150);
    });

    // Test 5 : Un spare suivi d’un 3, puis des lancers ratés
    // Frame 1 = 10 + 3 = 13, Frame 2 = 3 → score total = 16
    it('score 16 pour "5/3-----------------"', () => {
        expect(game.scoreGame("5/3-----------------")).toBe(16);
    });

    // ──────────────────────────────
    // 🧪 TESTS STRIKE ("X")
    // ──────────────────────────────

    // Test 6 : Un strike suivi de 3 et 4
    // Frame 1 = 10 + 3 + 4 = 17, Frame 2 = 3 + 4 = 7 → total = 24
    it('score 24 pour "X34----------------"', () => {
        expect(game.scoreGame("X34----------------")).toBe(24);
    });

    // Test 7 : Partie parfaite (12 strikes consécutifs)
    // Chaque frame = 10 + 10 + 10 → 10 * 30 = 300
    it('score 300 pour "XXXXXXXXXXXX"', () => {
        expect(game.scoreGame("XXXXXXXXXXXX")).toBe(300);
    });

    // Test 8 : 10 strikes, chacun suivi de deux "ratés"
    // Chaque strike = 10 + 0 + 0 = 10 points → 10 * 10 = 100
    it('score 100 pour "X--X--X--X--X--X--X--X--X--X--"', () => {
        expect(game.scoreGame("X--X--X--X--X--X--X--X--X--X--")).toBe(100);
    });

});
