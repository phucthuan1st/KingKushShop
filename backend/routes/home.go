package routes

import "github.com/gofiber/fiber/v2"

func setUpHomeRoute(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/index.html")
	})
}
