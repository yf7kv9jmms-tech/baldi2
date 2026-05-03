# Baldis Basics - Web Version

This repository contains the web-based version of Baldis Basics with a Node.js/Express server setup.

## Project Structure

```
.
├── public/           # Static HTML files
│   └── index.html
├── assets/          # Game images, sounds, and other assets
├── css/             # Stylesheet files
│   └── style.css
├── js/              # JavaScript game logic
│   └── game.js
├── server.js        # Express.js server
├── package.json     # Node dependencies
└── .env             # Environment configuration
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Port

Edit `.env` file to set your desired port:

```
PORT=3000
```

Or set it via environment variable when running:

```bash
PORT=8080 npm start
```

### 3. Add Game Files

Place your game files in the appropriate directories:
- **HTML/Entry Point**: `public/`
- **Images/Sounds**: `assets/`
- **Stylesheets**: `css/`
- **Game Scripts**: `js/`

### 4. Run the Server

```bash
npm start
```

The game will be available at `http://localhost:PORT` (default: 3000)

## Port Configuration

The server supports flexible port configuration:

**Option 1: Using .env file**
```
PORT=8080
```

**Option 2: Environment variable**
```bash
PORT=8080 npm start
```

**Option 3: Default**
```bash
npm start  # Uses port 3000
```

## Development

To run the development server:

```bash
npm run dev
```

## File Organization Guide

- **public/**: Root-level static files (index.html, etc.)
- **assets/**: All game assets (images, sprites, audio files)
- **css/**: All stylesheets
- **js/**: All JavaScript code

## Next Steps

1. Replace the placeholder files in `public/`, `css/`, and `js/` with your actual game files
2. Configure the desired port in `.env`
3. Run `npm install` and `npm start` to launch the server

---

**Note**: Make sure all game files are organized in their respective directories for proper serving.
