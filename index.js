const express = require("express");
const app = express();
const parkings = require("./parkings.json");
const port = 3002;
const db = require("./queries");

// Middleware
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

// La valeur de req.params.id contient ce qui est envoyé dans l'URL//
// il faut d'abord transformer le params de String en Number

// app.get("/parkings", (req, res) => {
//   res.status(200).json(parkings);
// });

// app.get("/parkings/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const parking = parkings.find((parking) => parking.id === id);
//   res.status(200).json(parking);
// });

// app.post("/parkings", (req, res) => {
//   parkings.push(req.body);
//   console.log(req.body);
//   res.status(200).json(parkings);
// });

// app.put("/parkings/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   let parking = parkings.find((parking) => parking.id === id);
//   (parking.name = req.body.name),
//     (parking.city = req.body.city),
//     (parking.type = req.body.type),
//     res.status(200).json(parking);
// });

// app.delete("/parkings/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   let parking = parkings.find((parking) => parking.id === id);
//   parkings.splice(parkings.indexOf(parking), 1);

//   res.send("valeur supp");
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
