# 🎮 Pokemon Gallery

A modern, responsive Pokemon gallery web application built with vanilla JavaScript that fetches data from the PokéAPI. Browse through Pokemon cards, view detailed information, and explore stats with an elegant user interface.

## ✨ Features

- **Interactive Pokemon Cards**: Beautiful card-based layout with hover effects and type-specific color schemes
- **Search Functionality**: Search Pokemon by name, ID, or type with real-time filtering
- **Detailed Pokemon Modal**: Click any Pokemon to view detailed information including:
  - Pokemon stats with animated progress bars
  - Height, weight, and abilities
  - Type badges with custom icons
  - Tab-based navigation between info and stats
- **Infinite Loading**: Load more Pokemon with the "Load More" button
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean, professional interface with glassmorphism effects and blur backgrounds

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with:
  - Flexbox and CSS Grid layouts
  - CSS animations and transitions
  - Backdrop filters and glassmorphism effects
  - Custom color schemes for Pokemon types
  - Responsive media queries
- **Vanilla JavaScript**: No frameworks, pure JavaScript with:
  - Async/await for API calls
  - DOM manipulation
  - Event handling
  - Local state management
- **PokéAPI**: Real-time Pokemon data from https://pokeapi.co/



### Usage

1. **Browse Pokemon**: Scroll through the Pokemon gallery on the main page
2. **Search**: Use the search bar to find specific Pokemon by:
   - Name (e.g., "pikachu")
   - ID number (e.g., "25")
   - Type (e.g., "electric", "fire")
3. **View Details**: Click on any Pokemon card to open the detailed modal
4. **Navigate**: Use the arrow buttons in the modal to browse between Pokemon
5. **Load More**: Click "Load More Pokemon" to fetch additional Pokemon

## 📁 Project Structure

```
pokemon-gallery/
├── index.html              # Main HTML file
├── style/                  # CSS files
│   ├── main.css           # Main layout styles
│   ├── header.css         # Header and search bar styles
│   └── cssGallery/        # Gallery-specific styles
│       ├── gallery.css    # Gallery layout and overlays
│       ├── cardFace.css   # Pokemon card styles
│       └── cardBack.css   # Modal and detailed view styles
├── scripts/               # JavaScript files
│   ├── scrMain.js        # Main application logic
│   ├── scrHeader.js      # Search functionality
│   ├── scrGallery.js     # Gallery rendering
│   ├── scrPokemonsDB.js  # API calls and data management
│   ├── scrBackCard.js    # Modal card creation
│   ├── scrBackCardInfo.js # Pokemon detailed information
│   └── scrNavigation.js  # Modal navigation
├── img/                   # Images and assets
│   └── icons/            # Pokemon type icons and logos
├── README.md             # This file
├── impressum.html        # Legal imprint page
└── datenschutzDE.html    # Privacy policy (German)
```

## 🎨 Features in Detail

### Pokemon Cards
- Dynamic background colors based on Pokemon types
- Smooth hover animations and transitions
- Pokemon images with drop shadows
- Type badges with custom icons

### Search System
- Real-time search with input validation
- Support for multiple search criteria
- Clear button to reset search
- "No results found" messaging

### Modal System
- Backdrop blur effect for professional look
- Tab-based navigation (About/Stats)
- Animated stat bars showing Pokemon stats
- Navigation arrows to browse between Pokemon
- Responsive design for all screen sizes

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers


## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokemon data
- Pokemon type icons and imagery
- Inspiration from modern web design trends

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Enjoy exploring the world of Pokemon! 🎉**