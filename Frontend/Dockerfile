# ==========================================
# Stage 1: Build the static frontend assets using Node 20
# ==========================================
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency configs
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source code
COPY . .

# Build production assets (Generates the 'dist' folder)
RUN npm run build

# ==========================================
# Stage 2: Serve using Nginx web server
# ==========================================
FROM nginx:alpine

# Copy built files from Stage 1 to Nginx default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration to handle React Router (SPA) client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
