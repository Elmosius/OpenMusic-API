const InvariantError = require("../../exceptions/InvariantError");
const { SongPayloadSchema } = require("./schema");

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validatonResult = SongPayloadSchema.validate(payload);
    if (validatonResult.error) {
      throw new InvariantError(validatonResult.error.message);
    }
  },
};

module.exports = SongsValidator;
