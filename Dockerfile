FROM node:22-slim
WORKDIR /app
COPY . .
EXPOSE 7860
CMD ["node", "index.js"]
