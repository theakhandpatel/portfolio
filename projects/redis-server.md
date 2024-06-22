# CacheCow 🐄

![GitHub last commit](https://img.shields.io/github/last-commit/theakhandpatel/redis-server)

**Repository:** <Badge type="info">  [GitHub <img src="/images/github.svg" alt="GitHub" style="height: 20px; width: 20px; vertical-align: middle; padding-bottom: 3px; display: inline" />](https://github.com/theakhandpatel/redis-server) </Badge>

**Stack:** <Badge type="tip" text="Golang" /> <Badge type="tip" text="TCP/IP" /> <Badge type="tip" text="Redis Protocol" /> 

## Description
This is my naive attempt at in-memory key-value store server implementation written in Go which supports basic Redis commands using RESP (REdis Serialization Protocol) over TCP/IP. It handles concurrent client connections and uses a synchronized map with locks for data 


## Features

- Supports basic Redis commands: SET, GET, PING, and ECHO.
- Handles concurrent client connections over TCP/IP.
- Uses a synchronized map and locks for data storage to prevent race conditions.
- Supports expiration time for keys.


## Concurrent Clients and Race Condition Prevention

The Redis server implementation handles concurrent client connections using Goroutines. Each client connection is handled in a separate Goroutine, allowing multiple clients to interact with the server simultaneously.

To prevent race conditions when accessing and modifying the data storage (`sync.Map`), the implementation uses locks. The `sync.Map` type provides built-in synchronization for concurrent access, but locks are used when necessary to ensure exclusive access to critical sections of the code.

By utilizing Goroutines and locks, the Redis server ensures concurrent execution and prevents race conditions, maintaining data integrity.


## License

This project is licensed under the MIT License.
