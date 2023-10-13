# Stage 1: Build the Golang application
FROM golang:latest AS build

# Set the working directory to the location of go.mod and go.sum
WORKDIR /app

# Copy the go.mod and go.sum files to the working directory
COPY go.mod go.sum ./

# Download and cache dependencies
RUN go mod download

# Set the working directory to the location of the backend code
WORKDIR /app/backend

# Copy the backend source code to the working directory
COPY backend/ .

# Build the Golang application
RUN go build -o /app/kingkush

# Stage 2: Create an Ubuntu-based image
FROM ubuntu:22.04

RUN apt-get update -y && apt-get upgrade -y

# Set the working directory to /app
WORKDIR /app

# Copy the binary from the build image to this image
COPY --from=build /app/kingkush ./

# Set the working directory to the location of the frontend code
WORKDIR /app/frontend

# Copy the frontend source code to the working directory
COPY frontend/ .

# Expose the port your application will run on
EXPOSE 8080

WORKDIR /app

# Define the command to run your application
CMD ["./kingkush"]
