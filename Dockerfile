# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy the built app to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html/women_wellness_selfcare

# Add custom Nginx config for SPA routing
RUN printf 'server {\n\
    listen 80;\n\
    location /women_wellness_selfcare {\n\
        alias /usr/share/nginx/html/women_wellness_selfcare;\n\
        try_files $uri $uri/ /women_wellness_selfcare/index.html;\n\
    }\n\
    location / {\n\
        return 301 /women_wellness_selfcare/;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
