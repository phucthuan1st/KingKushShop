package routes

import "github.com/gofiber/fiber/v2"

func setUpBlogsRoute(app *fiber.App) {
	app.Get("/blogs", func(c *fiber.Ctx) error {
		return c.SendFile("frontend/blogs.html")
	})
}
