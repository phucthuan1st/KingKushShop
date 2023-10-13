package routes

import "github.com/gofiber/fiber/v2"

func setUpProductsRoute(app *fiber.App) {
	app.Get("/products", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/products.html")
	})
}
