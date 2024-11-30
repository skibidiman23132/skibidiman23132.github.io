function searchgames() {
    var input, filter, games, i, txtValue, matchingGames = [];
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    games = Array.from(document.querySelectorAll('a')); // Select all <a> elements

    // Identify and group matching and non-matching games
    for (i = 0; i < games.length; i++) {
        var gameLink = games[i].querySelector('.game-link'); // Get .game-link child inside <a>
        if (gameLink) { // Check if .game-link exists
            txtValue = gameLink.textContent || gameLink.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                matchingGames.push(games[i]);
            }
        }
    }

    // Reorder the list
    matchingGames.forEach(game => game.parentNode.appendChild(game)); // Move matching <a> to the top
    games.filter(game => !matchingGames.includes(game)).forEach(game => game.parentNode.appendChild(game)); // Move non-matching <a> below
}
