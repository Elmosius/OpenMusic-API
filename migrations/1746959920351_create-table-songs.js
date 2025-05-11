/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("songs", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
    genre: {
      type: "VARCHAR(50)",
      notNull: false,
    },
    performer: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    duration: {
      type: "INTEGER",
      notNull: false,
    },
    albumId: {
      type: "VARCHAR(50)",
      notNull: false,
      references: "albums",
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
