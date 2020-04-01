import app from "./app/config/custom-express";
const port = 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
