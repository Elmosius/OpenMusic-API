const SongsHandler = require("./handler");
const routesSong = require("./routes");

module.exports = {
  name: "song",
  version: "1.0.0",
  register: async (server, { service }) => {
    const songsHandler = new SongsHandler(service);
    server.route(routesSong(songsHandler));
  },
};
