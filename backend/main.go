package main

import (
	"KingKush/backend/api"
	"KingKush/backend/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Serve static files from the "static" directory
	app.Static("/static", "./static")

	// Setup routes defined in your "routes" package
	routes.SetupRoutes(app)
	api.SetUpAPI(app)

	// Start the server
	err := app.Listen(":8080")
	if err != nil {
		panic(err)
	}
}
