import app from './app.js';
import config from './config/config.js';
import connectToDb from './db/db.js';

// Connect to Database
connectToDb();

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
