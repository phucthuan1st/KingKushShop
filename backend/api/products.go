package api

import (
	"encoding/json"
	"fmt"
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

type Product struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	ImageURL    string  `json:"imageURL"`
}

func getProductsAPI(app *fiber.App) {
	app.Get("/api/products", func(c *fiber.Ctx) error {
		products := []Product{}

		// TODO: fetch products data from database (do later)
		for index := 1; index <= 30; index++ {
			products = append(products, Product{
				Name:        fmt.Sprintf("Product %d", index),
				Description: fmt.Sprintf("Description of Product %d", index),
				Price:       rand.Float64()*5 + 15.0,
				ImageURL:    fmt.Sprintf("/static/temp-images/category-%d.jpg", 1+index%3),
			})
		}

		response, err := json.Marshal(products)
		if err != nil {
			return c.Status(500).SendString("Failed to serialize products data")
		}

		c.Set("Content-Type", "application/json")
		return c.Send(response)
	})
}
