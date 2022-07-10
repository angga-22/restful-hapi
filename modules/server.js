const hapi = require("@hapi/hapi");
const routes = require("./routes");

const server = hapi.server({
  port: 8001,
  host: "localhost",
  routes: {
    cors: {
      origin: ["*"],
    },
  },
});

const init = async () => {
  server.route(routes);
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};
init();
