import Mongoose from 'mongoose';

const env = process.env.NODE_ENV;
const productionMongoUrl = process.env.MONGO_URL || '';

const dbURL = env === "prod" ? productionMongoUrl : 'mongodb://localhost/blog';
const options = {
  mongos: env === "prod"
}

export default function() {
  Mongoose.connect(dbURL, options);

  // CONNECTION EVENTS
  // When successfully connected
  Mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURL);
  });

  // If the connection throws an error
  Mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  Mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function() {
    Mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
}
