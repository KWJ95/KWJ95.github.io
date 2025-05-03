# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Run tests before building - if tests fail, the build will stop
RUN echo "Running tests..." && \
    npm test || { echo "❌ ERROR: Tests failed! Build aborted."; exit 1; }

# If tests pass, proceed with the build
RUN echo "✅ Tests passed! Proceeding with build..." && \
    npm run build

# Serve stage
FROM nginx:alpine AS serve

# Copy the built static files from build stage to nginx serve directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom nginx configuration if needed
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
