const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual seu nome ?',
    },
    {
        name: 'p2',
        message: "Qual a sua idade ?"
    },
]).then((answers) =>{
    if(!answers.nome || answers.idade){
        throw new Error(console.log("O nome e a idade são obrigatórios!"))
    }
    console.log(chalk.bgYellow.black(`Nome: ${answers.p1}`))
    console.log(chalk.bgYellow.black(`Idade: ${answers.p2} anos`))
}).catch((err) => console.log(err))