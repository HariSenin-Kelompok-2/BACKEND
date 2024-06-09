const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.SERVER_PORT || 3001;
const routes = require("./routes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, () => {
  console.clear();
  console.debug(`[!] Server is starting on port http://localhost:${PORT}`);
});
