const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class WeatherApi extends Model {
    static async GetApi(id) {
        try {
            const api = await WeatherApi.findByPk(id)
            if (id) {
                return api
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

WeatherApi.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    script_simple: {
        type: DataTypes.STRING,
        allowNull: false
    },

    script_advanced: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'WeatherApi'
});

module.exports = WeatherApi
