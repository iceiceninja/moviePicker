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