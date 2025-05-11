const { nanoid } = require("nanoid");

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year }) {
    const id = `album-${nanoid(16)}`;
    const newAlbum = { id, name, year };
    this._albums.push(newAlbum);

    const isSuccess = this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new Error("Album gagal ditambahkan");
    }

    return id;
  }

  getAlbums() {
    return this._albums;
  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error("Gagal memperbarui album. Id tidak ditemukan");
    }

    this._albums[index] = { ...this._albums[index], name, year };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error("Album gagal dihapus. Id tidak ditemukan");
    }

    this._albums.splice(index, 1);
  }
}

module.exports = AlbumService;
