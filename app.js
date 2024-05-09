import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import blogRouter from "./routes/blog.route.js";
import authRouter from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(limiter);
app.use(helmet());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Blogging API");
});

// Error handler
app.use(errorHandler);

export default app;
