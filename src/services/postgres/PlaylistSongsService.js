const { Pool } = require('pg');
const { nanoid } = require('nanoid');

const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class PlaylistSongsService {
  constructor(activitiesService) {
    this._pool = new Pool();
    this._activitiesService = activitiesService;
  }

  async addPlaylistSong(playlistId, songId, userId) {
    const songQuery = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [songId],
    };

    const songResult = await this._pool.query(songQuery);
    if (!songResult.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }

    const id = `playlist-songs-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO playlist_songs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal ditambahkan ke playlist');
    }

    await this._activitiesService.addPlaylistSongActivity(playlistId, songId, userId, 'add');

    return result.rows[0].id;
  }

  async getPlaylistSongs(playlistId) {
    const playlistQuery = {
      text: `SELECT playlists.id, playlists.name, users.username
           FROM playlists
           JOIN users ON users.id = playlists.owner
           WHERE playlists.id = $1`,
      values: [playlistId],
    };

    const playlistResult = await this._pool.query(playlistQuery);

    if (!playlistResult.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    const songsQuery = {
      text: `SELECT songs.id, songs.title, songs.performer
           FROM songs
           JOIN playlist_songs ON songs.id = playlist_songs.song_id
           WHERE playlist_songs.playlist_id = $1`,
      values: [playlistId],
    };

    const songsResult = await this._pool.query(songsQuery);

    return {
      id: playlistResult.rows[0].id,
      name: playlistResult.rows[0].name,
      username: playlistResult.rows[0].username,
      songs: songsResult.rows,
    };
  }

  async deletePlayListSongById(playlistId, songId, userId) {
    const query = {
      text: 'DELETE FROM playlist_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING id',
      values: [playlistId, songId],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Lagu gagal dihapus dari playlist. Id tidak ditemukan');
    }

    await this._activitiesService.addPlaylistSongActivity(playlistId, songId, userId, 'delete');
  }
}
module.exports = PlaylistSongsService;
