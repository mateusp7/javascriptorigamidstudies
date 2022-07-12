var videoGames = ['Switch', 'PS4', 'Xbox'];

var ultimoItem = videoGames.pop();

videoGames.push('PS5');

var games = ['The last of US', 'Lol', 'Valorant'];
for(var i = 0; i < games.length; i++) {
    console.log(games[i]);
    if(games[i] === 'Lol') {
        console.log("Achou o " + games[i]);
        break;
    }
}

console.log('====== For Each ======')
var filmes = ['Pig', 'Avangers', 'Thor'];

filmes.forEach(function(filme, index, array) {
    console.log(filme, index, array);
});

// var i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

