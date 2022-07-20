import errorHandler from "errorhandler";
import logger from "morgan";

import express from "express";
import { isProduction } from "./utils/utils";

const app = express();

app.use(logger("dev"));

/**
 * Error Handler. Provides full stack - remove for production
 */
if (!isProduction()) {
  // only use in development
  app.use(errorHandler());
}

const port = process.env.PORT || 3000;

/**
 * Start Express server.
 */
const server = app.listen({ port }, () => {
  const message = isProduction()
    ? "  App is listening on port %d in %s mode"
    : "  App is running at http://localhost:%d in %s mode";

  console.log(message, port, app.get("env"));

  if (!isProduction()) {
    console.log("  Press CTRL-C to stop\n");
  }
});

export default server;
