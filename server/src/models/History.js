module.exports = (sequelize, dataType)=>{
    const Histories = sequelize.define('Histories', {})

    Histories.associate = function(models) {
        Histories.belongsTo(models.User)
        Histories.belongsTo(models.Song)
    }
    return Histories
}