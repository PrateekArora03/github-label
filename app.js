const express = require("express");
const mongoose = require("mongoose");

const labelRouter = require("./routes/v1/label");

// Import dotenv
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("client/build"));

mongoose.connect(
  process.env.mongoURL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    console.log(err ? err : "Connected to DB");
  }
);

app.use("/api/v1/labels", labelRouter);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).json({ message: "Page Not Found" });
});

// error handler
app.use(function(err, req, res, next) {
  res.json({ err });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
