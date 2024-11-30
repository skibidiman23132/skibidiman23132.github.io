function searchgames() {
    var input, filter, games, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    games = document.getElementsByClassName('game-link');
    var gameGrid = document.querySelector('.game-grid');

    var matchingGames = [];
    var nonMatchingGames = [];

    for (i = 0; i < games.length; i++) {
        txtValue = games[i].textContent || games[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            matchingGames.push(games[i]);
        } else {
            nonMatchingGames.push(games[i]);
        }
    }

    // Clear the game grid
    gameGrid.innerHTML = '';

    // Append matching games first
    matchingGames.forEach(function(game) {
        game.style.display = '';
        gameGrid.appendChild(game);
    });

    // Append non-matching games
    nonMatchingGames.forEach(function(game) {
        game.style.display = '';
        gameGrid.appendChild(game);
    });
}
