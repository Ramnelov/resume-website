FROM node:20-alpine AS BUILD_IMAGE

WORKDIR /app/resume-website

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS PRODUCTION_IMAGE

WORKDIR /app/resume-website

COPY --from=BUILD_IMAGE /app/resume-website/dist/ /app/resume-website/dist/

EXPOSE 8080

COPY package.json .
COPY package-lock.json .
COPY vite.config.ts .

RUN npm install typescript

CMD [ "npm", "run", "preview" ]