import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';
import connectDb from './db/connection';
import seed from './seed';

const port = process.env.PORT || 4000
const app = express();

connectDb();
seed();

app.use(cors())
app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`App started on port: ${port}`)
});
