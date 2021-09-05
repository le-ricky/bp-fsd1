const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express();
const path = require('path');


//mongoDB
mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true,  useUnifiedTopology: true })
.then( () => console.log('DB connected'))
.catch( err => console.log(err))

//
app.use(express.static(path.join(__dirname, '../client/build')));

//import routes
const createUserRoutes = require('./routes/createuser');
const getUserRoutes = require('./routes/getuser');

//app middlewares
app.use(morgan('dev'));
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

//use cors()
app.use(cors())


//middleware
app.use('/api', createUserRoutes )
app.use('/api', getUserRoutes)


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});