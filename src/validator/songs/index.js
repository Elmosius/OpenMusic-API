const InvariantError = require('../../exceptions/InvariantError');
const { SongPayloadSchema, SongQuerySchema } = require('./schema');

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validatonResult = SongPayloadSchema.validate(payload);
    if (validatonResult.error) {
      throw new InvariantError(validatonResult.error.message);
    }
  },
  validateSongQuery: (query) => {
    const validationResult = SongQuerySchema.validate(query);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongsValidator;
