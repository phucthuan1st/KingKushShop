package routes

import "github.com/gofiber/fiber/v2"

func setUpContactRoute(app *fiber.App) {
	app.Get("/contact", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/contact.html")
	})
}
