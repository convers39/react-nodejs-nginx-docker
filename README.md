## TEMPLATE

Typescript + Nodejs + React + Nginx + docker setup

## HOW TO USE

1. Pull the repo

2. npm install in api and client folder

3. create env files required by docker-compose file, or comment out the `env_file`

4. add `127.0.0.1 testhost` to hosts file, or change `server_name` in `nginx/conf.d/default.conf` to `localhost`

4. run `docker compose up`