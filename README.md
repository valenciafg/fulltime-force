# GITHUB REPO


## Configure environment

* Create a copy from .env.example and rename to .env
* Open .env file and add GITHUB_TOKEN value, for this example can use this temporal token:
```
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
```

## Running the app from Docker

```bash
$ cd github-repo-back
$ npm i
$ npm run build

$ cd ../github-repo-front
$ npm i
$ npm run build

$ cd ../
$ docker-compose up --build -d
```

Open this URL from browser: 
http://localhost:4000/

## Running the app from local enviroment

```bash
$ cd github-repo-back
$ npm i
$ npm run start:dev

# From another terminal
$ cd github-repo-front
$ npm i
$ npm run dev
```

Open this URL from browser: 
http://localhost:5173/

## Backend endpoints
* GET /api/docs - Swagger OpenApi UI
* GET /api/github/user - Get user information
* GET /api/github/repo - Get repository information
* GET /api/github/repo/branches - Get a list of branches
* GET /api/github/repo/commits?branch=${branch} - Get a list of all commits by branch name
## Postman collection
[collection](./github-repo-api.postman_collection.json)