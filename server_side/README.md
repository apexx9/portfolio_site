# Portfolio Website Backend

This is the backend service for the portfolio website built with Spring Boot.

## Prerequisites

- Java 17 or higher
- Maven
- PostgreSQL

## Project Structure

```
src/main/java/com/portfolio/
├── config/         # Configuration classes
├── controller/     # REST controllers
├── model/         # Entity classes
├── repository/    # JPA repositories
├── service/       # Business logic
├── security/      # Security configurations
└── util/          # Utility classes
```

## Setup Instructions

1. Install PostgreSQL and create a database named `portfolio_db`
2. Update database credentials in `application.properties` if needed
3. Run `mvn clean install` to build the project
4. Run `mvn spring-boot:run` to start the application

The server will start on port 8080.

## API Documentation

API documentation will be available at `http://localhost:8080/swagger-ui.html` once implemented.
