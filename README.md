<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Steps

- Copy `.env-template` and rename for `.env`

- Replace `.env` content by

```bash
    PORT=3000
    HOST=localhost
    SSL=http

    MONGO_DB=<url-mongo>
    MONGO_NAME=
    MONGO_USER=
    MONGO_PASS=

    DB_HOST=
    DB_PORT=
    DB_NAME=
    DB_USER=
    DB_PASSORD=

    JWT_SECRET=
```

- Install dependencies

```bash
   npm install
```

- Run project on dev

```bash
   npm run start:dev
```

- Run project on production

```bash
   npm run start:prod
```

- Open browser on swagger page: `http://localhost:3000/api`

- URL base route: `http://localhost:5173/#/api`
