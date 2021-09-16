module.exports = [
  {
    name: "default",
    type: "mysql",
    host: "10.11.12.2",
    port: 3306,
    username: "root",
    password: "Mar@1010",
    database: "three-soft",
    migrationsTableName: "migrations",
    migrations: ["database/migrations/build/migrations/*.js"],
    cli: {
      migrationsDir: "database/migrations",
    },
  },
];
