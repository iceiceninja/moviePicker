// const PORT = process.env.PORT || 3000;
// const express = require('express')
// const app = express()
// var mysql = require('mysql');
// app.use(express.static(__dirname));
// // app.use(express.static('public'))
// app.use('/styles', express.static(__dirname + 'public/styles'))
// app.use(express.static('scripts'))
// app.use('scripts', express.static(__dirname + 'scripts'))
// app.set('views', './views')
// app.set('view engine', 'ejs')

// // const router = express.Router()

// // router.get('/movie1/:id', (req, res) => res.render('views/index'))

// // module.exports = router




// function incIndex(id) {
//     console.log(id)
//     currentIndex = id + 1;

// }

// function getData(currentIndex = 10, results) {
//     var connection = mysql.createConnection({
//         host: 'localhost',
//         user: "root",
//         password: "Password236155",
//         insecureAuth: true
//     });
//     connection.query('USE website')

//     let sql = 'SELECT * FROM `movies` WHERE id > ' + currentIndex + ' LIMIT 1';

//     let dbResults
//     connection.query(sql, function (err, results, fields) {
//         dbResults = results;

//         for (const i in dbResults) {
//             console.log(dbResults[i].title)
//             console.log(dbResults[i].posterSrc)

//         }
//         results(dbResults)

//     })


//     connection.end();

//     return dbResults
// }

// app.get('', async (req, res) => {

//     let results;

//     // var name = 'hello';
//     getData(10, function (dbResults) {
//         results = dbResults;

//     });

//     res.render('index', {
//         dbResults: results,
//         name1: results[0].title,
//         // src1: results[0].posterSrc,
//         id: results[0].id
//     })
// })
// // connection.query('SELECT * FROM `movies` WHERE id> ' + currentIndex + ' LIMIT 1', function (error, results, fields) {
// //     // error will be an Error if one occurred during the query
// //     // results will contain the results of the query
// //     // fields will contain information about the returned results fields (if any)
// //     // console.log(error)
// //     // dbResults = results
// //     app.get('', (req, res) => {
// //         // var name = 'hello';

// //         res.render('index', {
// //             dbResults: results,
// //             name1: results[0].title,
// //             src1: results[0].posterSrc,
// //             id: results[0].id
// //         })
// //     })
// //     console.log(results[0].title)
// //     console.log(results[0].posterSrc)

// // });




// // connection.end(function (err) {
// //     // The connection is terminated now
// // });
// app.listen(PORT, () => console.log("listening on port " + (PORT)))
const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()

var mysql = require('mysql');


app.use(express.static(__dirname));
// app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use(express.static('scripts'))
app.use('scripts', express.static(__dirname + 'scripts'))
app.set('views', './views')
app.set('view engine', 'ejs')

// const router = express.Router()

// router.get('/movie1/:id', (req, res) => res.render('views/index'))

// module.exports = router

let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Password236155",
    database: "website",
    insecureAuth: false

});

connection.query('USE website');


app.get("/", (req, res) => {

    // default to 0 if not set in ?id=x
    //
    const id = req.query.id || 0;

    let sql = 'SELECT * FROM `movies` WHERE id > ' + id + ' LIMIT 1';

    connection.query(sql, function (err, results, fields) {
        if (err) throw err;

        res.render('index', {
            dbResults: results,
            name1: results[0].title,
            src1: results[0].posterSrc,
            id: results[0].id
        });

    });
});

app.listen(PORT, () => console.log("listening on port " + (PORT)));