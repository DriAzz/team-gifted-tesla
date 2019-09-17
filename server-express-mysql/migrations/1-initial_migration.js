'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "motherboards", deps: []
 * createTable "Projects", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-09-15T23:42:39.846Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "motherboards",
            {
                "id": {
                    "type": Sequelize.INTEGER(11),
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING(300),
                    "field": "name",
                    "allowNull": true
                },
                "description": {
                    "type": Sequelize.STRING(10000),
                    "field": "description",
                    "allowNull": true
                },
                "manuafracture": {
                    "type": Sequelize.STRING(100),
                    "field": "manuafracture",
                    "allowNull": true
                },
                "type": {
                    "type": Sequelize.STRING(10),
                    "field": "type",
                    "allowNull": true
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Projects",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "createdBy": {
                    "type": Sequelize.STRING,
                    "field": "createdBy"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrment": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email",
                    "unique": true
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
