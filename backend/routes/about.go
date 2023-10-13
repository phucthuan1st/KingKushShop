package routes

import "github.com/gofiber/fiber/v2"

func setUpAboutRoute(app *fiber.App) {
	app.Get("/about", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/about.html")
	})
}
