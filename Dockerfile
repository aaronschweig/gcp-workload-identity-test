FROM node:16

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install --force

ENV PORT=3001

ENTRYPOINT ["node", "."]
