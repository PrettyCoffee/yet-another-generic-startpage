#-- BUILD
FROM node:24.15.0-alpine AS build

WORKDIR /home/node

##-- Copy everything into the container
ADD --chown=node:node ./public ./public
ADD --chown=node:node ./src ./src
ADD --chown=node:node ./index.html .
ADD --chown=node:node ./package.json .
ADD --chown=node:node ./pnpm-lock.yaml .
ADD --chown=node:node ./tsconfig.json .

##-- Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack --ignore-scripts --min-release-age 3
RUN corepack enable pnpm
RUN corepack install pnpm@10 --global

##-- Build the app
RUN pnpm install --frozen-lockfile
RUN pnpm run build


#-- DEPLOYMENT
FROM nginx:alpine

##-- Copy app build into nginx
COPY --from=build /home/node/dist /usr/share/nginx/html
