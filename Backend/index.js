const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  const port = process.env.PORT || 3001

  server.listen(port, () => {
    console.log(`Server listen on port ${port}`); // eslint-disable-line no-console
  });
});
