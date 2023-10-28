package api

import "github.com/gofiber/fiber/v2"

func SetUpAPI(app *fiber.App) {
	getProductsAPI(app)
}
