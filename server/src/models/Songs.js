module.exports = (sequelize, DataType) => {
    const Song = sequelize.define('Song', {
        title: DataType.STRING,
        artist: DataType.STRING,
        genre: DataType.STRING,
        album: DataType.STRING,
        albumImageUrl: DataType.STRING,
        youtubeId: DataType.STRING,
        lyrics: DataType.TEXT,
        tab: DataType.TEXT,
    })
    return Song
}
