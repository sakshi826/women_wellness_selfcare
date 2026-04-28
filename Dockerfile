FROM node:20-alpine AS builder

WORKDIR /app

# Use npm ci for reproducible builds
COPY package*.json ./
RUN npm ci

COPY . .

# Build the application
RUN npm run build

FROM nginx:alpine

# Install standard MIME types
RUN rm /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Copy built files to both subfolder and root to handle various ingress configurations
COPY --from=builder /app/dist /usr/share/nginx/html/women_wellness_selfcare
COPY --from=builder /app/dist /usr/share/nginx/html/

# Copy the custom nginx config
COPY vite-nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
