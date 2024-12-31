# Gym Fitness Gold Website

A modern, responsive website for a fitness facility featuring membership plans, facilities showcase, and contact form.

## Features

- Responsive navigation with smooth scrolling
- Interactive facilities showcase with image slider
- Membership plans display
- Contact form
- Dynamic active section highlighting
- Mobile-friendly design

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- No external dependencies

## Project Structure

```
gym-website/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── images/
        ├── gym-s1.png
        ├── gym-s2.png
        ├── gym-s3.jpg
        ├── gym-s5.png
        ├── gym-s7.png
        └── gym-s8.png
``` the images folders contains more images

## Setup Instructions

1. Clone the repository:
```bash
git clone [https://github.com/yourusername/gym-website.git](https://github.com/RonewaOnly/hexsoftware_gym_website.git)
```

2. Navigate to project directory:
```bash
cd gym-website
```

3. Open `index.html` in a web browser or use a local server:
```bash
python -m http.server 8000
# Access at http://localhost:8000
```

## Features Detail

### Navigation
- Fixed header with smooth scroll
- Active section highlighting
- Mobile-responsive menu

### Sections
1. **Home** (`#presentation`)
   - Hero section with CTA button
   - Background image with overlay

2. **Facilities** (`#facilities`)
   - Grid layout of facility cards
   - Image showcase slider
   - Interactive hover effects

3. **Services** (`#services`)
   - Service cards with descriptions
   - Image integration

4. **Membership** (`#membership`)
   - Three-tier pricing structure
   - Interactive cards

5. **Contact** (`#contact`)
   - Form with validation
   - Responsive design

## Image Showcase Implementation

```javascript
class Slideshow {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        // ... initialization
    }

    // Methods for navigation and auto-sliding
}
```

## CSS Classes

### Key Components
- `.showcase`: Main showcase container
- `.facility-card`: Individual facility displays
- `.service-card`: Service information cards
- `.active`: Current navigation item

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Optimized images
- Minimal JavaScript usage
- CSS animations for smooth transitions
- Lazy loading implementation

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push to branch: `git push origin feature/NewFeature`
5. Submit pull request

## License

MIT License - feel free to use and modify for your projects.

## Contact

For support or queries, reach out at: www.rsmaselesele200@gmail.com
