# Use an official Nginx image as the base image
FROM nginx

# Set the working directory to /app
# WORKDIR /app

# Copy the current directory contents into the container at /app
COPY dist/fulltimeforce-github-app /usr/share/nginx/html

# Install any needed packages specified in package.json
# RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the command to start the Angular app