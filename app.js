const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const favGenres = new Map();
app.use(express.static(__dirname));
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use(express.static('scripts'))
app.use('scripts', express.static(__dirname + 'scripts'))
app.set('views', './views')
app.set('view engine', 'ejs')

const axios = require("axios");
// const { map } = require('jquery');

// let movies;

const query = (url) => {
    return new Promise((resolve, reject) => {
        return resolve(axios.get(url))
    })
}
function addGenre(genre) {
    if (favGenres.get(genre) == undefined || genre == '[]') {
        favGenres.set(genre, { val: 1 })
    }
    else {
        favGenres.get(genre).val++
    }
}
function getFavGenre() {
    let topGenre = ""
    let topValue = 0
    favGenres.forEach((obj, genre) => {
        if (topValue < obj.val) {
            topValue = obj.val
            topGenre = genre
        }
    })
    return topGenre
}
app.get("/", async function (req, res) {

    let selectedId = req.query.id % 101 || 0;
    let nextId = req.query.newid % 101 || 1;
    let url = "http://localhost:3001";
    let movies = await query(url)
    let movieData = movies.data[0]
    let genres = movies.data[1]
    let genreString1 = "";
    let genreString2 = "";

    addGenre(genres[selectedId].genre1)
    addGenre(genres[selectedId].genre2)
    addGenre(genres[selectedId].genre3)

    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                genreString1 += genres[selectedId].genre1
                genreString2 += genres[nextId].genre1
                break;
            case 1:
                genreString1 += genres[selectedId].genre2
                genreString2 += genres[nextId].genre2
                break;
            case 2:
                genreString1 += genres[selectedId].genre3
                genreString2 += genres[nextId].genre3
                break;
            default:
                console.log("ERROR LOOP OUT OF RANGE: " + i)
        }
    }
    res.render('index', {
        name1: movieData[selectedId].title,
        src1: movieData[selectedId].posterSrc,
        id1: movieData[selectedId].id,
        desc1: movieData[selectedId].description,
        name2: movieData[nextId].title,
        src2: movieData[nextId].posterSrc,
        desc2: movieData[nextId].description,
        id2: movieData[nextId].id,
        genreString1: genreString1,
        genreString2: genreString2,
        favGenre: getFavGenre()

    });

});

app.listen(PORT, () => console.log("listening on port " + (PORT)));
