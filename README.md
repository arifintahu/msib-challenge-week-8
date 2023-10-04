# Challenge Week 8 - Logging API

In this challenge, we will learn how to organize our project based on the separation of concerns. The idea behind using the separation of concerns is to move away from the business logic within the API routes.

Here's the structure of the project:
```bash
│   index.js        # App entry point
│   serve.js        # Our express server configuration
└───config          # Environment variables and configuration related stuff
└───controllers     # Handle requests and serves error responses
└───middlewares     # Contains all the middleware that we need
└───models          # Database models
└───repositories    # Data access layer for querying and manipulation of database
└───routes          # Our routes controllers for all the endpoints of the app
└───services        # Business logic of our app
└───utils           # Common functions that would be used repetitively
```

Currently we have an incomplete project serving APIs as a proxy for the [OMDb API](https://www.omdbapi.com/). We also have a logging middleware for capturing every request to our API. The challenge is for you to create APIs for querying logging information.

## Objectives
1. Create an API to get logs
- Example endpoint: `http://localhost:3000/api/v1/logs?page=1&per_page=4`
- Example response:
```json
[
    {
        "id": 1,
        "method": "GET",
        "endpoint": "/api/v1/movies/tt5581814",
        "created_at": "2023-10-03 23:29:32"
    },
    {
        "id": 2,
        "method": "GET",
        "endpoint": "/api/v1/movies/tt5581814",
        "created_at": "2023-10-03 23:29:39"
    },
    {
        "id": 3,
        "method": "GET",
        "endpoint": "/api/v1/movies/tt5581814",
        "created_at": "2023-10-03 23:29:41"
    },
    {
        "id": 4,
        "method": "GET",
        "endpoint": "/api/v1/movies/tt5581814",
        "created_at": "2023-10-03 23:29:46"
    }
]

2. Create an API to get log by id
- Example endpoint: `http://localhost:3000/api/v1/logs/1`
- Example response:
```json
{
    "id": 1,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt5581814",
    "created_at": "2023-10-03 23:29:32"
}
```

## How to Submit
1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-8)
2. Clone forked repository
3. Create a new branch: `git checkout -b solution`
4. Install dependencies: `npm install`
5. Create a folder of your nickname: `mkdir nickname`
6. Copy files from the `challenge` directory to your own folder
7. Copy `.env.example` to `.env`
8. Complete the objectives
9. Run your server using `node yourfolder/src/index.js`
10. Commit and push your changes
11. Create a Pull Request to original repository
