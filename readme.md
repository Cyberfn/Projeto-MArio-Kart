# Mario Kart Racing Simulation

Este projeto é uma simulação simples de uma corrida no estilo Mario Kart, implementada em JavaScript. Cada personagem tem atributos de velocidade, manobrabilidade e poder, que influenciam o desempenho em diferentes tipos de terreno durante a corrida.

## Personagens

Os personagens disponíveis na simulação são:

- **Mario**: Velocidade 4, Manobrabilidade 3, Poder 3
- **Peach**: Velocidade 3, Manobrabilidade 4, Poder 2
- **Yoshi**: Velocidade 2, Manobrabilidade 4, Poder 3
- **Bowser**: Velocidade 5, Manobrabilidade 2, Poder 5
- **Luigi**: Velocidade 3, Manobrabilidade 4, Poder 4
- **Donkey Kong**: Velocidade 2, Manobrabilidade 2, Poder 5

## Mecânica do Jogo

A corrida é dividida em 5 rodadas, com três tipos possíveis de terreno para cada rodada:

- **Reta**: Atributo principal: Velocidade
- **Curva**: Atributo principal: Manobrabilidade
- **Confronto**: Atributo principal: Poder

Em cada rodada, os dois jogadores rolam um dado e somam o resultado ao valor do atributo relevante para o tipo de terreno. O personagem com a pontuação mais alta ganha a rodada e recebe um ponto. Em caso de empate, nenhum ponto é concedido. No terreno "Confronto", o personagem perdedor perde um ponto.

## Exemplo de Simulação

Aqui está um exemplo de como iniciar uma corrida entre dois personagens:

\`\`\`javascript
simulateRace(mario, peach);
\`\`\`

## Resultado

Após as 5 rodadas, o código exibirá o vencedor da corrida ou indicará um empate.

## Como Usar

1. Clone o repositório.
2. Abra o arquivo principal em um navegador ou ambiente Node.js.
3. Execute a função \`simulateRace()\` passando dois personagens como parâmetros.

Divirta-se correndo com seus personagens favoritos de Mario Kart!