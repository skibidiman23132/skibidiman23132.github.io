function searchgames() {
    var input, filter, games, gameList, i, txtValue, matchingGames = [];
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    games = Array.from(document.querySelectorAll('a')); // Select all <a> elements
    gameList = games[0].parentNode; // Assuming all <a> tags share the same parent

    // Identify and group matching and non-matching games
    for (i = 0; i < games.length; i++) {
        txtValue = games[i].querySelector('.game-link').textContent || games[i].querySelector('.game-link').innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            matchingGames.push(games[i]);
        }
    }

    // Reorder the list
    matchingGames.forEach(game => gameList.appendChild(game));
    games.filter(game => !matchingGames.includes(game)).forEach(game => gameList.appendChild(game));
}
