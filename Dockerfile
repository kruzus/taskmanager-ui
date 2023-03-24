# Use an official Node.js runtime as a parent image
FROM node:14-alpine AS builder

# Set the working directory to /app
ENTRYPOINT [ "app" ]
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
CMD "npm" "run" "build"

EXPOSE 3000

# Use an official nginx runtime as a parent image
FROM nginx:alpine


COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application code to the nginx document root
COPY --from=builder /app/.next/ /usr/share/nginx/html/


# Start nginx
CMD ["nginx", "-g", "daemon off;"]
