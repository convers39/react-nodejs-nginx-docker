# create base image and add node user
FROM node:16.16.0-alpine3.16 AS base
WORKDIR /app
RUN chown -R node:node /app && chmod -R 770 /app

# target stage development for local
FROM base as development
COPY ./package*.json /app/
RUN npm install
COPY . .
EXPOSE 3001
ENTRYPOINT ["npm", "run", "start"]

# preparing stage for prod/staging, build and transpile ts to js
FROM base AS builder
COPY --chown=node:node . .
USER node
RUN npm install --loglevel warn
RUN npm run build

# target stage staging
FROM base AS staging
LABEL org.label-schema.name="backend-staging"
ENV NODE_ENV=production 
COPY --chown=node:node --from=builder /app/build ./build
COPY --chown=node:node ./package*.json ./
RUN npm install --only=production
USER node
ENTRYPOINT ["node", "./build/index.js"]
EXPOSE 3001

# target stage production
FROM base AS production
# ARG DATE
LABEL org.label-schema.name="backend-prod"
# LABEL org.label-schema.version="0.1.0"
# LABEL org.label-schema.build-date="${DATE}"
ENV NODE_ENV=production
COPY --chown=node:node --from=builder /app/build ./build
COPY --chown=node:node ./package*.json ./
RUN npm install --only=production
USER node
ENTRYPOINT ["node", "./build/index.js"]
EXPOSE 3001
