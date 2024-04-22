FROM node:19-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]