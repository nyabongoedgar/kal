import authRouter from "./auth";

const apiPrefix = "/api/v1";

// add your route to this list
const routes = [authRouter];
export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  //   routes.forEach((route) => app.use(route));
  return app;
};
