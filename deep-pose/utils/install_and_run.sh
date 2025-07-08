#!/bin/bash

# Navigate to the project directory (optional, in case you run the script from elsewhere)
cd "$(dirname "$0")" || exit 1  # Change to the script's directory if needed

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if npm install was successful
if [ $? -ne 0 ]; then
  echo "Error: npm install failed!"
  exit 1
fi

# Run the dev server
echo "Starting the development server..."
npm run dev
