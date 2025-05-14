# Use Node.js image to run the backend Node.js app
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the frontend code
COPY . .

# Build the React app (Vite output goes to dist/)
RUN ls -l /app

EXPOSE 4001

# Set NODE_ENV
ENV NODE_ENV=production

# Add health check using your health endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:4001/health || exit 1

# Start the app
CMD ["node", "index.js"]