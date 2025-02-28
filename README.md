# SPILLMarket Prototype

A React prototype of the SPILLMarket social commerce interface with vertical scrolling feed, similar to TikTok Shop or Poshmark.

## Live Demo

**[View the live demo](https://iphonz.github.io/spillmarket-prototype)**

The prototype is automatically deployed to GitHub Pages whenever changes are pushed to the main branch.

## Features

- Vertical scrollable feed with snap functionality
- Multiple creator product reviews
- Engagement metrics (likes, comments, shares)
- Social proof indicators (ratings, followers, trending status)
- Product information with pricing and availability
- Creator profiles with verification and ratings

## Preview

The prototype simulates a social commerce platform with the following key elements:

- **Header**: Community earnings, personal earnings, and user profile
- **Navigation**: Category tabs for different product types
- **Content Feed**: Full-screen product demonstrations with engagement metrics
- **Creator Profiles**: User information, ratings, and followers
- **Product Details**: Pricing, discounts, ratings, and stock information
- **Bottom Navigation**: Market, Discover, Camera, Earnings, and Profile tabs

## Tech Stack

- React
- Tailwind CSS
- Lucide React for icons

## Installation

```bash
# Clone the repository
git clone https://github.com/iPhonz/spillmarket-prototype.git

# Navigate to the project directory
cd spillmarket-prototype

# Install dependencies
npm install

# Start development server
npm start
```

## Deployment

The project is set up to automatically deploy to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a deployment.

To manually deploy:

```bash
npm run deploy
```

## Usage

The interface simulates a social commerce app with vertical scrolling:

1. Scroll vertically to navigate between different product posts
2. Use the right-side indicator dots to jump to specific posts
3. Use up/down arrows for navigation
4. Engage with like, comment, share, and purchase buttons
5. View product details and creator information

## Project Structure

- `src/components/VerticalSPILLMarket.jsx` - Main component with vertical scrolling feed
- `src/App.jsx` - Root application component
- `src/index.css` - Global styles and Tailwind imports
- `tailwind.config.js` - Tailwind CSS configuration

## Social Commerce Elements

- **Creator Verification**: Badges and verification status
- **Product Pricing**: Original prices, discounts, and current prices
- **Engagement Metrics**: Likes, comments, shares, and purchases
- **Social Proof**: Ratings, reviews, and follower counts
- **Trending Indicators**: Status badges and inventory warnings
- **Community Impact**: Tracking social impact of purchases

## Mobile-First Design

The interface is optimized for mobile viewing with:

- Full-screen vertical scroll
- Touch-friendly navigation controls
- Accessible engagement buttons
- Proper spacing for touch targets

## License

MIT