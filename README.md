## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build site`.

After that completes, run `docker-compose run -p 3000:3000 --rm npm run dev -- --host`


