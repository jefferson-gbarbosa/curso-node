const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql2');

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home');
});

app.post('/books/insertbook', (req, res) =>{
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

    conn.query(query, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/');
    })
})

app.get('/books', (req, res) =>{
    const query = "SELECT * FROM books";

    conn.query(query, function(err, data){
        if(err){
            console.log(err);
            return
        }
        const books = data;
        res.render('books', { books});
    })
})

app.get('/books/:id', (req, res)=>{
    const id = req.params.id;

    const query = `SELECT * FROM books WHERE id = ${id}`;
    conn.query(query, function(err, data){
        if(err){
            console.log(err);
            return
        }

        const book = data[0];

        res.render('book', {book});
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jeff1107',
    database: 'nodemysql2',
})

conn.connect(function(err){
    if(err){
        console.log(err);
    }
    console.log('Conectou ao MySQL!');

    app.listen(3000);
})