const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: "Jefferson",
        surname: "Gonçalves"
    }

    const auth = false
    const approved = false

    res.render('home', { user: user, auth, approved})

})

app.get("/dashboard", function (req, res) {

    const items = ["Item a", "Item b", "Item c"]

    res.render("dashboard", {items});
});

app.listen(3000, () =>{
    console.log('App funcionando!')
})