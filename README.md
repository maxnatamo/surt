# surt

*surt* (/suɔrt/, means *black* in Jutlandic) is a basic link shortener, written in Next.js.

**Features:**
- 🔥 Relatively fast
- ⭐ Clean and simple design
- 💳 No ads or promotional material
- 🖥️ Self-hostable with Docker

![](https://i.imgur.com/cI7MFiS.png "Current landing page")

## Getting Started

First, open a Mongo database server on your local machine:

```bash
# docker-compose
docker-compose up -d mongo

# docker
docker run --rm --name mongo --network=host mongo
```

If hosting Mongo on a remote machine or outside Docker, update `.env.development` to reflect it.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

# Self-hosting

surt has the option to be self-hosted on your own hardware, if you so choose. The recomended way of launching surt is via [Docker](https://docs.docker.com/get-docker/). You don't need to be a Docker expert, just a simple understanding of the command-line.

To setup a complete instance of surt, start the container with [Docker Compose](https://docs.docker.com/compose/install/):

```bash
docker compose up -d
```

With a little luck, the frontend should be accessible on [http://localhost:3000](http://localhost:3000).

# Contributing

🎉 Hey, thanks for taking the time to contribute! 🎉

Check out some of the open issues and see if anything fits your skills. If you have an idea for a new feature, you can also open a new issue.

If that doesn't fit, you can also write documentation or fix typos, as there might be a handful.