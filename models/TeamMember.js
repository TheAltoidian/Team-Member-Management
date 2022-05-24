const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Input model
class TeamMember extends Model { }

TeamMember.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        employeeID: {
            type: DataTypes.STRING,
            allowNull: true,  
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'teamMember'
    }
);

module.exports = TeamMember;