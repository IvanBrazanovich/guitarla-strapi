module.exports = ({ env }) => ({
  // comentario
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-ccpljv6n6mpg6kdi4s00-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "guitarla_zozd"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "sR6SBPYEOtvRzAulDjcxmgA2AalaZVIN"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
