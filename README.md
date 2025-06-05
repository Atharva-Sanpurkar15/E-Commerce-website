# ShopEase - E-Commerce Website

A modern e-commerce website built with HTML, CSS, and JavaScript. This project demonstrates a responsive design with essential e-commerce features.

## Features

- Responsive design that works on desktop and mobile devices
- Product listing with categories
- Shopping cart functionality
- User authentication (login/register)
- Product search and filtering
- Clean and modern UI

## Project Structure

```
ecommerce/
│
├── index.html         # Homepage & product listing
├── cart.html          # Shopping cart page
├── login.html         # Login/Register page
│
├── css/
│   └── styles.css     # All styles
│
├── js/
│   ├── products.js    # Product data
│   ├── cart.js        # Cart logic
│   ├── auth.js        # Login/Register logic
│   └── main.js        # General scripts
│
└── images/            # Product images
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce
   ```

3. Open `index.html` in your web browser to view the website.

## Features Implementation

### Product Management
- Products are stored in `products.js`
- Each product has an ID, name, price, image, category, and description
- Products are displayed in a responsive grid layout

### Shopping Cart
- Cart data is stored in localStorage
- Users can add/remove items and update quantities
- Cart total is calculated automatically
- Cart persists between page refreshes

### User Authentication
- Simple login/register forms
- Form validation for required fields
- Password confirmation check
- (Note: This is a frontend demo - in a real application, you would need a backend)

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- Add backend integration for user authentication
- Implement a real payment gateway
- Add product search functionality
- Add product filtering by category
- Implement user reviews and ratings
- Add admin panel for product management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/ecommerce](https://github.com/yourusername/ecommerce) 