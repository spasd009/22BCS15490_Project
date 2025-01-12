# DocuStream - Documentary Streaming Platform

A modern streaming platform dedicated to documentaries, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎥 Curated documentary collections
- 🔍 Advanced search functionality
- 🏷️ Genre-based categorization
- ⭐ Rating and review system
- 📱 Responsive design
- 📺 High-quality video streaming
- 🔖 Watchlist functionality

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Lucide React (for icons)
- Vite (Build tool)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar/       # Navigation component
│   └── DocumentaryCard/ # Documentary display component
├── pages/            # Page components
│   ├── Home/         # Landing page
│   └── Genres/       # Genre listing
├── types/            # TypeScript interfaces
└── data/            # Mock data and constants
```

## Key Components

- `DocumentaryCard`: Displays documentary information
- `Navbar`: Main navigation component
- `Home`: Landing page with featured content
- `Genres`: Browse documentaries by category

## Environment Variables

```env
VITE_API_URL=your_api_url
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features in Detail

1. **Documentary Browsing**
   - Filter by genre, year, and rating
   - Search by title, director, or topic

2. **User Features**
   - Personal watchlist
   - Viewing history
   - Rating system

3. **Video Playback**
   - HD quality streaming
   - Adaptive bitrate
   - Resume playback

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT License