const {
	MongoClient,
	ObjectID
} = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( err, db ) => {
	if ( err ) {
		return console.log( 'Unable to connect to mongo db server' );
	}
	console.log( 'Connected to MongoDb Server' );
	// return everything in todo collection.
	// db.collection('Todos').find({
	//   _id: new ObjectID('5bd5cac6c793a934feee961f')
	// }).toArray().then((docs) => {
	//   console.log('Todos');
	//   console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	//   console.log('Unable to fetch todos', err);
	// })

	// db.collection('Todos').find().count().then((count) => {
	//   console.log(`Todos count: ${count}`);
	// }, (err) => {
	//   console.log('Unable to fetch todos', err);
	// })

	db.collection( 'Users' )
		.find( {
			name: 'Shreejesh Shrestha'
		} )
		.toArray()
		.then( docs => {
			console.log( 'User found' );
			console.log( JSON.stringify( docs, undefined, 2 ) );
		}, err => {
			console.log( 'Unable to find that user' );
		} );

	db.close();
} );
