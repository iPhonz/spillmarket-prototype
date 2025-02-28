#!/bin/bash

# Build the React app
echo "Building the React app..."
npm run build

# Create a temporary directory
mkdir -p temp_deploy

# Copy the build files to the temporary directory
cp -R build/* temp_deploy/
cp build/.* temp_deploy/ 2>/dev/null || :

# Create or ensure .nojekyll file exists
touch temp_deploy/.nojekyll

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages || git checkout -b gh-pages

# Remove existing files
echo "Removing existing files..."
rm -rf ./*
rm -rf ./.*

# Move files from temporary directory
echo "Moving new files..."
cp -R temp_deploy/* ./
cp -R temp_deploy/.* ./ 2>/dev/null || :

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to remote
echo "Pushing to GitHub..."
git push -f origin gh-pages

# Clean up
echo "Cleaning up..."
git checkout main
rm -rf temp_deploy

echo "Deployment complete!"