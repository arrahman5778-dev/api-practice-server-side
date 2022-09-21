const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;



const users = [
  { id: 101, name: 'Fahim Serker', Email: "fahim@gmail.com" },
  { id: 102, name: 'hamza Serker', Email: "hamza@gmail.com" },
  { id: 103, name: 'Hasan Miah', Email: "Hasan@gmail.com" },
  { id: 104, name: 'Jamal khan', Email: "Jamal@gmail.com" },
  { id: 105, name: 'Mahi akter', Email: "Mahi@gmail.com" },
  { id: 106, name: 'Fahima Serker', Email: "fahima@gmail.com" },
]

app.use(cors())

app.get('/', (req, res) => {
  res.send("Mama Kmn aco, practice kmn chole?")
})

// User get//
app.get('/users', (req, res) => {
  res.send(users)
})

//  params
app.get('/user/:id', (req, res) => {
  console.log(req.params)
  const id = req.params.id;
  const user = users.find(u => u.id == id)
  res.send(user)
})

app.listen(port, () => {
  console.log('listenig Port ', port)
});