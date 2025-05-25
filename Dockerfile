# 1. Use official Node.js image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy dependencies file first (for cache optimization)
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the project
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Expose the port Next.js will run on
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
