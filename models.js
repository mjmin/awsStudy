const Sequelize = require('sequelize');
// const sequelize = new Sequelize('node_api_codelab', 'root', 'root');
var sequelize = new Sequelize('node_api_codelab', 'root', '', {
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const User = sequelize.define('user', {
    name: Sequelize.STRING
});

module.exports = {
    sequelize,
    User
}
