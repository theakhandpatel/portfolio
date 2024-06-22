# MovieDB API 🎬

![GitHub last commit](https://img.shields.io/github/last-commit/theakhandpatel/MovieDB)

**Repository:** <Badge type="info">  [GitHub <img src="/images/github.svg" alt="GitHub" style="height: 20px; width: 20px; vertical-align: middle; padding-bottom: 3px; display: inline" />](https://github.com/theakhandpatel/MovieDB) </Badge>

Stack: <Badge type="tip" text="Golang" /> <Badge type="tip" text="PostgreSQL" /> <Badge type="tip" text="Chi Router" />

## Description

The  **MovieDB API** is a Go-based web service that provides various endpoints for managing movie data 📽️. It interacts with a PostgreSQL database 🗃️, implements rate limiting ⏱️, handles Cross-Origin Resource Sharing (CORS) 🌐, and includes endpoints for managing movies 🎞️, users 👥, and authentication tokens 🔑. The API also includes features for user account activation via email 📧 and permission-based access control 🔒.



## Features

- **Authentication and Authorization** 🔐: The API supports user registration and authentication. Certain endpoints are protected and require valid authentication tokens. Users can be assigned different permission levels for different operations.

- **Database Connectivity** 🗂️: The API interacts with a PostgreSQL database to store and retrieve movie records. It uses the `database/sql` package and supports database connection pooling.

- **Rate Limiting** 🚦: To prevent abuse and ensure fair usage, the API employs rate limiting. Requests from clients are limited based on a configurable rate and burst.

- **CORS (Cross-Origin Resource Sharing)** 🔄: Cross-Origin Resource Sharing is enabled to allow controlled access to the API from different origins. Trusted CORS origins can be configured.

- **Email Notifications** 📬: The API sends email notifications for account activation. Users receive an activation link via email to activate their accounts.

- **Permission Management** 🔏: Users have specific permission levels (e.g., `movies:read`, `movies:write`) for different operations. Endpoints are protected based on these permissions.


## License

This project is licensed under the MIT License 📜.