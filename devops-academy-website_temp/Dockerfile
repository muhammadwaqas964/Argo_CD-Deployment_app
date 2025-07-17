# Use a lightweight Node.js base image for production
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
# This step is done separately to leverage Docker's build cache
COPY package.json ./
COPY package-lock.json ./

# Install only production dependencies
# The 'dist' directory already contains the built frontend and backend code
RUN npm install --production

# Copy the already built 'dist' directory (frontend static files + backend JS)
COPY dist/. ./dist

# Your backend Express app is likely listening on a specific port.
# Common ports are 3000, 8080, or 5000.
# You should check your 'server/index.ts' to confirm the port it uses.
# For now, we'll expose 3000 as a common default.
EXPOSE 3000

# Command to run your backend application when the container starts
# This aligns with your "start" script in package.json
CMD ["node", "dist/index.js"]
