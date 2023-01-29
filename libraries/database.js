import { MongoClient } from 'mongodb';
import { serverConfiguration } from '@libs/env';

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

    cached.promise = MongoClient.connect(serverConfiguration.MONGODB_URI, opts).then(client => {
      return {
        client,
        db: client.db(serverConfiguration.MONGODB_DB),
      };
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}