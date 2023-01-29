import { MongoClient } from 'mongodb';
import { serverConfiguration } from '@libs/env';

const cached = global.mongo ?? { conn: null, promise: null };

const config = () => {
  const {
    MONGODB_HOSTNAME,
    MONGODB_USERNAME,
    MONGODB_PASSWORD
  } = serverConfiguration;

  return `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOSTNAME}:27017/`;
}

export const connect = async () => {
  if(cached.connection) {
    return cached.connection;
  }

  if(!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology : true
    };

    const conf = config();

    cached.promise = MongoClient.connect(conf, opts).then(client => {
      return {
        client,
        db: client.db(serverConfiguration.MONGODB_DATABASE),
      };
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}