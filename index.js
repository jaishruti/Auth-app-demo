const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json()); //middleware
require("./config/db").connect();

// import route and mount
const user = require("./routes/user");
app.use("/api/v1", user);

// activate
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
