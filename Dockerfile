FROM node:20-alpine AS BUILD_IMAGE

ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG PROFILE_PICTURE_URL

ENV VITE_SUPABASE_URL=$SUPABASE_URL \
    VITE_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY \
    VITE_PROFILE_PICTURE_URL=$PROFILE_PICTURE_URL

WORKDIR /app/resume-website

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS PRODUCTION_IMAGE

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app/resume-website

COPY --from=BUILD_IMAGE /app/resume-website/dist/ /app/resume-website/dist/

EXPOSE 8080

COPY package.json .
COPY package-lock.json .
COPY vite.config.ts .

RUN npm install typescript

CMD [ "npm", "run", "preview" ]