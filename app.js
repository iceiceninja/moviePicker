// const PORT = process.env.PORT || 3000;
// const express = require('express')
// const app = express()
// var mysql = require('mysql');


// app.use(express.static(__dirname));
// app.use('/styles', express.static(__dirname + 'public/styles'))
// app.use(express.static('scripts'))
// app.use('scripts', express.static(__dirname + 'scripts'))
// app.set('views', './views')
// app.set('view engine', 'ejs')


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



// app.get("/", async function (req, res) {

//     let selectedId = req.query.id % 101 || 1;
//     let nextId = req.query.newid % 101 || 2;


//     let selectSQL = 'SELECT * FROM `movies` WHERE id = ' + selectedId;
//     let nextSQL = 'SELECT * FROM `movies` WHERE id = ' + nextId;

//     const nextResult = await query(nextSQL);
//     const currentResult = await query(selectSQL);
//     res.render('index', {
//         //dbResults: results,
//         name1: currentResult[0].title,
//         src1: currentResult[0].posterSrc,
//         id1: currentResult[0].id,
//         name2: nextResult[0].title,
//         src2: nextResult[0].posterSrc,
//         id2: nextResult[0].id

//     });

// });

// app.listen(PORT, () => console.log("listening on port " + (PORT)));
const axios = require("axios");
url = "https:localhost:3001";//&camera=fhaz

axios.get(url).then(function (response) {
    console.log(response)
}).catch(function (error) {
    console.log(error);
});