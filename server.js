import app from "./app.js";
import config from "./config/config.js";
import connectToDb from "./db/db.js";
import logger from "./logging/logger.js";

// Connect to Database
connectToDb();

app.listen(config.PORT, () => {
  logger.info(`Server running on http://localhost:${config.PORT}`);
});
