const AlbumsHandler = require('./handler');
const routesAlbum = require('./routes');

module.exports = {
  name: 'album',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const albumsHandler = new AlbumsHandler(service, validator);
    server.route(routesAlbum(albumsHandler));
  },
};
