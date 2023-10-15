# STEP 1
# Build Angular app in production mode
FROM node:18.17.1 AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Build the Angular app based on the build_mode ARG
ARG build_mode
RUN if [ "$build_mode" = "development" ]; then npm run build:dev; else npm run build:prod; fi

# ...

# STEP 2
# Run the development server or serve the production build based on the build_mode ARG
FROM nginx:1.21.1-alpine

# Copy the dist folder from builder stage to nginx html folder
COPY --from=builder /app/dist/fulltimeforce-github-app /usr/share/nginx/html

# Expose port 80 (production mode)
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
