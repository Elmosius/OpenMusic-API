const InvariantError = require("../../exceptions/InvariantError");
const { AlbumPayloadSchema } = require("./schema");

const AlbumsValidator = {
  validateAlbumPayload: (payload) => {
    const validatonResult = AlbumPayloadSchema.validate(payload);
    if (validatonResult.error) {
      throw new InvariantError(validatonResult.error.message);
    }
  },
};

module.exports = AlbumsValidator;
