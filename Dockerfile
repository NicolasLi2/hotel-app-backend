FROM node:21-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npx prisma generate
RUN npm run build
RUN npx prisma migrate deploy
EXPOSE 8080
CMD ["npm","run","start"]
