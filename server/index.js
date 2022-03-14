
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001
const homeRouter = require("./routes/home.js");
const courseRouter = require("./routes/courses.js")

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/students", homeRouter);
app.use("/courses", courseRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})