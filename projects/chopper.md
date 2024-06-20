# Chopper (URL Shortener) 🚀

![GitHub last commit](https://img.shields.io/github/last-commit/theakhandpatel/url_shortner)

**Repository:** <Badge type="info">  [GitHub <img src="/images/github.svg" alt="GitHub" style="height: 20px; width: 20px; vertical-align: middle; padding-bottom: 3px; display: inline" />](https://github.com/theakhandpatel/Chopper) </Badge>

Chopper is a fast and efficient web application built with Go (Golang) that enables users to shorten long URLs into compact, easy-to-share short URLs. Whether you're sharing links on social media, embedding URLs in emails, or simply trying to manage long and complex URLs, this application provides a convenient solution for creating and expanding short URLs. 🔗

**Stack:** <Badge type="tip" text="Golang" /> <Badge type="tip" text="SQLite" /> <Badge type="tip" text="Chi Router" /> 



## Deployed
Access at [ch-op.onrender.com](https://ch-op.onrender.com/)

## API Endpoints 📡

Go to [API DOCS](https://documenter.getpostman.com/view/9176353/2s9YCAQVGM) 📚

## Features 🌟

- **URL Shortening**: Convert lengthy URLs into shorter, more manageable versions. ✂️
- **URL Expansion**: Restore short URLs back to their original long forms. 🔄
- **Analytics Tracking**: Record and track analytics data for every access to a short URL. 📊
- **Daily Limiting**: Set Daily limits for shortening for anonymous and non-premium users. 📆
- **Rate Limiting**: Prevent abuse by setting limits on the number of resolution requests from an IP address. 🚫
- **Collision Resolution**: Handle potential collisions in short URL generation to ensure uniqueness. ⚙️
- **Configuration Flexibility**: Customize the application behavior with command-line flags. 🛠️
- **Lightweight Framework**: Utilizes the Chi router for efficient HTTP routing. 🚀
- **Reliable Database**: Stores URL records and analytics data in an SQLite database. 🗃️
- **Nano Ids**: Uses NanoID of size 6 and 8 encoding for efficient and URL-friendly short URL generation. 🆔
- **Email Notifications**: Send email notifications for various actions, including:
  - User sign-up confirmation.
  - Password reset requests. 📧

## Technologies Used 💻

- **Programming Language**: Go (Golang) 🐹
- **Web Framework**: Chi Router 🛣️
- **Database**: SQLite 📂
- **Rate Limiting**: Token Bucket Algorithm ⏳
- **Encoding**: Base(A-Za-z0.9_-) 🧮




## Technical Decisions 🧐

- **Database**: SQLite was chosen for its simplicity and portability, suitable for this project's scope. 📁
- **Rate Limiting**: Token bucket algorithm offers a balance between simplicity and effectiveness. ⏳
- **NanoID**: A tiny, secure, URL-friendly, unique string ID generator. 🆔
- **Chi Router**: Provides a lightweight and efficient routing framework. 🛣️
- **Flags**: Command-line flags offer configuration flexibility without the need for an external configuration file. 🚩


## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📜