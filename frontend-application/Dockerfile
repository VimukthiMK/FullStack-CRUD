# Use an official Node.js runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies with specific versions
RUN npm install axios@1.5.0 react-router-dom@6.15.0 react-dom@18.2.0 bootstrap@5.3.1

# Copy the rest of the React app code to the container
COPY . .

# Build the React app
CMD ["npm","start"]

