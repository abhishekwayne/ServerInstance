const app = require('express')();


app.get("/", (req, res) => {
  res.send("Hello from server");
})

app.listen(5000, () => {
  console.log("Server started...")
})