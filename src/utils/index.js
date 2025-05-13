const mapDBtoModelSongs = ({ id, title, year, genre, performer, duration, album_id }) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,
});

const mapDBToModelAlbumSong = (rows) => {
  const { id, name, year } = rows[0];

  const songs = rows
    .filter((row) => row.album_id)
    .map((row) => ({
      id: row.album.id,
      title: row.title,
      performer: row.performer,
    }));

  return {
    id,
    name,
    year,
    ...(songs.length ? { songs } : {}),
  };
};

module.exports = { mapDBtoModelSongs, mapDBToModelAlbumSong };
