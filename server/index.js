const express = require('express');
const cors = require('cors');// middleware used to enable cors with varioous options
const bodyParser = require('body-parser');// used to parse incoming request bodies in middleware
require('dotenv').config();// loads envirnoment variables from a .env file
						   // .env is not pushed to github; only invited collaborators are able to see
						   // contents of your .env file
const mongoose = require('mongoose');// Object Data Modeling(ODM) for MongoDB
									 // that allows you to interact with MongoDB database

const MongoClient = require('mongodb').MongoClient;

//import routes
const authRoutes = require('../routes/auth');
const { db } = require('../models/User');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));

//middlewares
app.use(bodyParser.urlencoded({ extended: true }))  // Let you see values from form element
														// inside req.body.  So it extract
														// data from form element and add them
														// to body property in request object
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// READ
app.get( '/', (req, res) => {
	res.send('Hello World');
});

//
/*MongoClient.connect( process.env.DATABASE, {
  useUnifiedTopology: true // Remove deprecation warning
}, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database');
  const db = client.db('margo-webpage'); // change name of db

  // Mainpage
  const mainpageCollection = db.collection('mainpage'); // name collection as 'quotes'
  const mainpageCursor = mainpageCollection.find();// get entries stored in DB

  // Playpage
  const playPageCollection = db.collection('playpage'); // name collection as 'quotes'
  const playPageCursor = playPageCollection.find();// get entries stored in DB

  // Workpage
  const workPageCollection = db.collection('workpage'); // name collection as 'quotes'
  const workPageCursor = workPageCollection.find();// get entries stored in DB

  // cursor.toArray() // method to convert database into an array
  //   .then(results => {
  //     console.log(results)
  //   })
  //   .catch(error => console.error(error))

  // Make sure you place body-parser before your CRUD handlers!
	// Body-parser is a middleware that help tidy up request
	// objects before we use them
	app.use(bodyParser.urlencoded({ extended: true }))  // Let you see values from form element
														// inside req.body.  So it extract
														// data from form element and add them
														// to body property in request object
	app.use(bodyParser.json());

	// Add headers
	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});

	// All your handlers here
	app.listen( port, () => {
		console.log('listening on 3001');
	});

	// READ
	app.get( '/', (req, res) => {
		res.send('Hello World');

		//res.sendFile(__dirname + '/index.html');
	});



	/////////////////////////////BUILDING REST API//////////////////////////////
	//Verb . URL . Action


	/////////////////////Mainpage///////////////////
	//GET . /api/mainpage . Show a list of all activities I am tracking, and links to their individual pages
	app.get( '/api/mainpage', (req, res) => {
		console.log('get mainpage');
		mainpageCursor.toArray() // method to convert database into an array
	    .then(results => {
	      res.json(results);
	      return res;
	    })
	    .catch(error => console.error(error))
	});

	//POST . /api/mainpage . Create a new activity for me to track.
	app.post('/api/mainpage', (req, res) => {
		// console.log("Hey");
		// console.log(req.body);

		// Insert one item into a db collection
		mainpageCollection.insertOne(req.body)
	    .then(result => {
	      res.redirect('');	// ask browser to redirect to '/' after post
	      					// because the browser is expecting something back
	      					// from the server.
	    })
	    .catch(error => console.error(error))
	});

	//GET . /api/mainpage/{id} . Show information about one activity I am tracking, and give me the data I have recorded for that activity.
	app.get('/api/mainpage/:mainpage_id', (req, res) => {
		mainpageCollection.findOne({}, function(err, result) {
    		if (err) throw err;
	      	res.json(result);
	    });
	});

	//PUT . /api/mainpage/{id} . Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
	app.put('/api/mainpage/:mainpage_id', (req, res) => {
		mainpageCollection.updateOne({}, { $set: {name: req.body.name, quote: req.body.quote } },function(err, result) {
    		if (err) throw err;
	      	res.json(result);
	    });
	});

	//DELETE . /api/mainpage/{id} . Delete one activity I am tracking. This should remove tracked data for that activity as well.
	app.delete('/api/mainpage/:mainpage_id', (req, res) => {
		mainpageCollection.deleteOne({}, function(err, result) {
    		if (err) throw err;
	      	res.json(result);
	    });
	});

	//POST . /api/activities/{id}/stats . Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.

	//DELETE . /api/stats/{id} . Remove tracked data for a day.
	////////////////////////////////////////////
});*/

















