const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', 'jeff1107',{
    host: 'localhost',
    dialect:'mysql'
})

// try {
//     sequelize.authenticate();
//     console.log('Conectamos com sucesso com o Sequelize!')
// } catch (error) {
//    console.log('Não foi possível conectar: ', error); 
// }

module.exports = sequelize;