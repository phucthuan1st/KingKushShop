package main

import (
	"KingKush/backend/api"
	"KingKush/backend/routes"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Serve static files from the "static" directory
	app.Static("/static", "./static")

	// Setup routes defined in your "routes" package
	routes.SetupRoutes(app)
	api.SetUpAPI(app)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	// Start the server
	log.Fatal(app.Listen("0.0.0.0:" + port))
}
