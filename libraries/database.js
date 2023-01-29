import { MongoClient } from 'mongodb';

if(!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable not defined.');
}

if(!process.env.MONGODB_DB) {
  throw new Error('MONGODB_DB environment variable not defined.');
}

const cached = global.mongo ?? { conn: null, promise: null };

export const connect = async () => {
  if(cached.connection) {
    return cached.connection;
  }

  if(!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology : true
    };

    cached.promise = MongoClient.connect(process.env.MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(process.env.MONGODB_DB),
      };
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}