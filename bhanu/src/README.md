# Challenge Week 8 - Logging API

Hasil pengerjaan Challenge Week 8

## Objectives

1. Create an API to get logs

- Example endpoint: `http://localhost:3000/api/v1/logs?page=1&per_page=4`
- Result response:

```json
[
  {
    "id": 1,
    "method": "GET",
    "endpoint": "/api/v1/movies/",
    "created_at": "2023-10-06 07:54:43"
  },
  {
    "id": 2,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt3838986",
    "created_at": "2023-10-06 07:54:47"
  },
  {
    "id": 3,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt5581814",
    "created_at": "2023-10-06 07:54:51"
  },
  {
    "id": 4,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt1436480",
    "created_at": "2023-10-06 07:54:55"
  }
]
```

2. Create an API to get log by id

- Example endpoint: http://localhost:3000/api/v1/logs/1
- Result response:

```json
[
  {
    "id": 4,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt1436480",
    "created_at": "2023-10-06 07:54:55"
  }
]
```

```json
[
  {
    "id": 9,
    "method": "GET",
    "endpoint": "/api/v1/movies/tt1436480",
    "created_at": "2023-10-06 08:14:36"
  }
]
```
