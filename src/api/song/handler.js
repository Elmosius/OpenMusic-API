class SongsHandler {
  constructor(service) {
    this._service = service;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  async postSongHandler(request, h) {
    const { title, year, genre, performer, duration, albumId } = request.payload;
    const songId = this._service.addSong({ title, year, genre, performer, duration, albumId });

    const response = h.response({
      status: "success",
      data: {
        songId,
      },
    });

    response.code(201);
    return response;
  }

  async getSongHandler() {
    const songs = this._service.getSongs();
    return {
      status: "success",
      data: {
        songs,
      },
    };
  }

  async getSongByIdHandler(request, h) {
    const { id } = request.params;
    const song = this._service.getSongById(id);

    return {
      status: "success",
      data: {
        song,
      },
    };
  }

  async putSongByIdHandler(request, h) {
    const { id } = request.params;
    const { title, year, genre, performer, duration, albumId } = request.payload;

    this._service.editSongById(id, { title, year, genre, performer, duration, albumId });

    return {
      status: "success",
      message: "Song berhasil diperbarui",
    };
  }

  async deleteSongByIdHandler(request, h) {
    const { id } = request.params;

    this._service.deleteSongById(id);

    return {
      status: "success",
      message: "Song berhasil dihapus",
    };
  }
}

module.exports = SongsHandler;
