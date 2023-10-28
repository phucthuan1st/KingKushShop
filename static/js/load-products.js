// Fetch product data from the server
fetch('/api/products')
    .then((response) => response.json())
    .then((data) => {
        const productContainer = document.querySelector('.Products');

        data.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const productImage = document.createElement('img');
            productImage.src = product.imageURL;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.classList.add('price');
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';

            imageContainer.appendChild(productImage);
            productCard.appendChild(imageContainer);
            productCard.appendChild(productName);
            productCard.appendChild(productDescription);
            productCard.appendChild(productPrice);
            productCard.appendChild(addToCartButton);

            productContainer.appendChild(productCard);
        });
    })
    .catch((error) => {
        console.error('Failed to fetch product data:', error);
    });
