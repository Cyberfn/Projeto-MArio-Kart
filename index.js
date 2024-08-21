class Character {
    constructor(name, speed, maneuverability, power) {
        this.name = name;
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power;
        this.points = 0;
    }

    updatePoints(value) {
        this.points = Math.max(this.points + value, 0);
    }
}

const mario = new Character('Mario', 4, 3, 3);
const peach = new Character('Peach', 3, 4, 2);
const yoshi = new Character('Yoshi', 2, 4, 3);
const bowser = new Character('Bowser', 5, 2, 5);
const luigi = new Character('Luigi', 3, 4, 4);
const donkeyKong = new Character('Donkey Kong', 2, 2, 5);


const characters = [mario, peach, yoshi, bowser, luigi, donkeyKong];

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateRace(player1, player2) {
    const track = ['RETA', 'CURVA', 'CONFRONTO'];

    for (let i = 0; i < 5; i++) {
        const round = track[Math.floor(Math.random() * track.length)];
        console.log(`Rodada ${i + 1}: ${round}`);

        if (round === 'RETA') {
            const player1Score = rollDice() + player1.speed;
            const player2Score = rollDice() + player2.speed;
            if (player1Score > player2Score) {
                player1.updatePoints(1);
            } else if (player2Score > player1Score) {
                player2.updatePoints(1);
            }
        } else if (round === 'CURVA') {
            const player1Score = rollDice() + player1.maneuverability;
            const player2Score = rollDice() + player2.maneuverability;
            if (player1Score > player2Score) {
                player1.updatePoints(1);
            } else if (player2Score > player1Score) {
                player2.updatePoints(1);
            }
        } else if (round === 'CONFRONTO') {
            const player1Score = rollDice() + player1.power;
            const player2Score = rollDice() + player2.power;
            if (player1Score > player2Score) {
                player2.updatePoints(-1);
            } else if (player2Score > player1Score) {
                player1.updatePoints(-1);
            }
        }
    }

    console.log(`${player1.name} terminou com ${player1.points} pontos.`);
    console.log(`${player2.name} terminou com ${player2.points} pontos.`);

    if (player1.points > player2.points) {
        console.log(`${player1.name} é o vencedor!`);
    } else if (player2.points > player1.points) {
        console.log(`${player2.name} é o vencedor!`);
    } else {
        console.log('A corrida terminou em empate!');
    }
}

simulateRace(mario, peach);