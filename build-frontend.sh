#!/bin/bash

# Build script for frontend-only deployment
echo "Building frontend-only portfolio..."

# Install dependencies
npm install

# Build using the frontend config
npx vite build --config vite.config.frontend.ts

echo "Build complete! Files are in the 'dist' directory."
echo "You can now deploy the 'dist' folder to any static hosting service."