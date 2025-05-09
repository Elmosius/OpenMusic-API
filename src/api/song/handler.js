class SongsHandler {
  constructor(service) {
    this._service = service;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  async postSongHandler(request, h) {}

  async getSongHandler() {}

  async getSongByIdHandler(request, h) {}

  async putSongByIdHandler(request, h) {}

  async deleteSongByIdHandler(request, h) {}
}

module.exports = SongsHandler;
