const connectDb = require("./config/database");

const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });

connectDb();

app.listen(process.env.PORT, () => {
  "server started at 4000";
});
