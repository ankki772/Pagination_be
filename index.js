const express = require('express');
const data = require('./data');
const cors = require('cors')

// Initialize App
const app = express();
app.use(cors())
app.use(express.json());


// Assign route
app.get('/', (req, res, next) => {
    
    let { start =0, end = data.length} = req.query;
    const filteredUsers = data.filter(user => {
      return user.id >= start && user.id <= end
    });
    res.send({filteredUsers,length:data.length})
 
});

// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});