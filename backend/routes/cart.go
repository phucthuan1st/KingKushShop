package routes

import "github.com/gofiber/fiber/v2"

func setUpCartRoute(app *fiber.App) {
	app.Get("/cart", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/cart.html")
	})
}
