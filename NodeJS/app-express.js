const express = require("express");
const app = express();
app.use(express.json()); // to parse the request body as json

const port = 8081;

const todos = ["Complete nodeJS byte", "Play COC"];

// get request
// curl -v http://localhost:8081/todos
app.get("/todos", (req, res) => {
  // res.send('Hello world, from my local server');
  res.send(todos);
});

// post request
// curl -v -X POST -d '{"name": "Plan for next week"}' http://localhost:8081/todos -H 'Content-Type: application/json'
app.post("/todos", (req, res) => {
  let newTodo = req.body.name;
  todos.push(newTodo);
  res.status(201).end();
});

// delete request
// curl -v -X DELETE -d '{"name":"Plan for next week"}' http://localhost:8081/todos
app.delete("/todos", (req, res) => {
  let deleteTodo = req.body.name;
  console.log(deleteTodo);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i] === deleteTodo) {
      todos.slice(i, 1);
      response.status(204).send();
    }
  }
});

app.listen(port, () => {
  console.log(`Express server started in the port ${port}`);
});
