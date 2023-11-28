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
    res.render("dashboard");
});

app.listen(3000, () =>{
    console.log('App funcionando!')
})