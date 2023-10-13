package routes

import "github.com/gofiber/fiber/v2"

func SetupRoutes(app *fiber.App) {
	setUpHomeRoute(app)
	setUpProductsRoute(app)
	setUpBlogsRoute(app)
	setUpAboutRoute(app)
	setUpContactRoute(app)
	setUpCartRoute(app)
}
