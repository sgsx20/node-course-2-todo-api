const {
	MongoClient,
	ObjectID
} = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( err, db ) => {
	if ( err ) {
		return console.log( 'Unable to connect to mongo db server' );
	}
	console.log( 'Connected to MongoDb Server' );

	db.collection( 'Todos' )
		.findOneAndUpdate( {
			_id: new ObjectID( '5bd5ef7a8ac6c2e5b4b7fc65' )
		}, {
			$set: {
				completed: true
			}
		}, {
			returnOriginal: false
		} )
		.then( result => {
			console.log( result );
		} )

	db.collection( 'Users' )
		.findOneAndUpdate( {
			_id: new ObjectID( '5bd5cc99af0f0c3506202dd8' )
		}, {
			$set: {
				name: 'Garima',
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		} )
		.then( result => {
			console.log( result );
		} )
	db.close();
} );
