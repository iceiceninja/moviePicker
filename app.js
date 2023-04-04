const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
var mysql = require('mysql');


app.use(express.static(__dirname));
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use(express.static('scripts'))
app.use('scripts', express.static(__dirname + 'scripts'))
app.set('views', './views')
app.set('view engine', 'ejs')

const axios = require("axios");

// let movies;

const query = (url) => {
    return new Promise((resolve, reject) => {
        return resolve(axios.get(url))
        // => {
        //     if (err) {
        //         return reject(err);
        //     }

        //     return resolve(url)
        // })
    })
}
//axios.get(url)//.then( function (response) {
// console.log(response)
//     return response.data;

// }).catch(function (error) {
//     console.log(error);
// });
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: "Password236155",
//     database: "website",
//     insecureAuth: false

// });

// connection.query('USE website');

// const query = (sql) => {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, (err, rows) => {
//             if (err) {
//                 return reject(err);
//             }

//             return resolve(rows)
//         })
//     })
// }
// let movies;
// let movieData;
// async function getData() {
//     let url = "http://localhost:3001";
//     let movies = await query(url)
//     let movieData = movies.data
// }
// getData()

app.get("/", async function (req, res) {

    let selectedId = req.query.id % 101 || 0;
    let nextId = req.query.newid % 101 || 1;
    let url = "http://localhost:3001";
    let movies = await query(url)
    let movieData = movies.data
    console.log(movieData)
    // let movieData = 
    // let selectSQL = 'SELECT * FROM `movies` WHERE id = ' + selectedId;
    // let nextSQL = 'SELECT * FROM `movies` WHERE id = ' + nextId;

    // const nextResult = await query(nextSQL);
    // const currentResult = await query(selectSQL);
    res.render('index', {
        //dbResults: results,
        name1: movieData[selectedId].title,
        src1: movieData[selectedId].posterSrc,
        id1: movieData[selectedId].id,
        name2: movieData[nextId].title,
        src2: movieData[nextId].posterSrc,
        id2: movieData[nextId].id

    });

});

app.listen(PORT, () => console.log("listening on port " + (PORT)));
