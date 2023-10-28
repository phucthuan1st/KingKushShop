# Stage 1: Build the Golang application
FROM golang:latest AS build

# Set the working directory to the location of go.mod and go.sum
WORKDIR /app

# Copy the go.mod and go.sum files to the working directory
COPY . .

# Download and cache dependencies
RUN go mod download

# Build the Golang application
RUN go build -o kingkush

# Stage 2: Create an Ubuntu-based image
FROM ubuntu:22.04

RUN apt-get update -y && apt-get upgrade -y

# Set the working directory to /app
WORKDIR /app

# Copy the binary from the build image to this image
COPY --from=build /app/kingkush ./

# Copy the frontend and static directories
COPY frontend /app/frontend
COPY static /app/static

# Expose the port your application will run on
EXPOSE 8080

# Define the command to run your application
CMD ["./kingkush"]