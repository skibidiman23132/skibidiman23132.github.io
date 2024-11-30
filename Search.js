function searchgames() {
        var input, filter, games, i, txtValue;
        input = document.getElementById('searchBar');
        filter = input.value.toUpperCase();
        games = document.getElementsByClassName('game-link');

        for (i = 0; i < games.length; i++) {
            txtValue = games[i].textContent || games[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                games[i].style.display = "";
            } else {
                games[i].style.display = "none";
            }
        }
    }
