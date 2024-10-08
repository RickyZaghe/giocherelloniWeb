const players = [
    { name: "Player 1", image: "https://via.placeholder.com/150", stats: "Goals: 10\nAssists: 5" },
    { name: "Player 2", image: "https://via.placeholder.com/150", stats: "Goals: 8\nAssists: 3" },
    { name: "Player 3", image: "https://via.placeholder.com/150", stats: "Goals: 6\nAssists: 7" },
    { name: "Player 4", image: "https://via.placeholder.com/150", stats: "Goals: 12\nAssists: 2" },
    { name: "Player 5", image: "https://via.placeholder.com/150", stats: "Goals: 5\nAssists: 4" },
    { name: "Player 6", image: "https://via.placeholder.com/150", stats: "Goals: 15\nAssists: 1" },
    { name: "Player 7", image: "https://via.placeholder.com/150", stats: "Goals: 9\nAssists: 6" },
    { name: "Player 8", image: "https://via.placeholder.com/150", stats: "Goals: 7\nAssists: 8" },
    { name: "Player 9", image: "https://via.placeholder.com/150", stats: "Goals: 4\nAssists: 9" },
    { name: "Player 10", image: "https://via.placeholder.com/150", stats: "Goals: 11\nAssists: 3" },
    { name: "Player 11", image: "https://via.placeholder.com/150", stats: "Goals: 13\nAssists: 0" },
    { name: "Player 12", image: "https://via.placeholder.com/150", stats: "Goals: 10\nAssists: 2" },
    { name: "Player 13", image: "https://via.placeholder.com/150", stats: "Goals: 3\nAssists: 11" },
    { name: "Player 14", image: "https://via.placeholder.com/150", stats: "Goals: 5\nAssists: 5" },
    { name: "Player 15", image: "https://via.placeholder.com/150", stats: "Goals: 8\nAssists: 7" },
    { name: "Player 16", image: "https://via.placeholder.com/150", stats: "Goals: 4\nAssists: 8" },
    { name: "Player 17", image: "https://via.placeholder.com/150", stats: "Goals: 6\nAssists: 9" },
    { name: "Player 18", image: "https://via.placeholder.com/150", stats: "Goals: 7\nAssists: 4" },
    { name: "Player 19", image: "https://via.placeholder.com/150", stats: "Goals: 5\nAssists: 5" },
    { name: "Player 20", image: "https://via.placeholder.com/150", stats: "Goals: 10\nAssists: 3" },
    { name: "Player 21", image: "https://via.placeholder.com/150", stats: "Goals: 8\nAssists: 2" },
    { name: "Player 22", image: "https://via.placeholder.com/150", stats: "Goals: 4\nAssists: 6" },
    { name: "Player 23", image: "https://via.placeholder.com/150", stats: "Goals: 11\nAssists: 1" },
    { name: "Player 24", image: "https://via.placeholder.com/150", stats: "Goals: 6\nAssists: 5" }
];

function generatePlayerCards() {
    const teams = document.querySelectorAll('.team .players');
    
    players.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${player.image}" alt="${player.name}" />
                    <h3>${player.name}</h3>
                </div>
                <div class="card-back">
                    <pre>${player.stats}</pre>
                </div>
            </div>
        `;
        

        const teamIndex = Math.floor(index / 6); 
        if (teamIndex < teams.length) {
            teams[teamIndex].appendChild(card); 
        }
    });
}

generatePlayerCards();
