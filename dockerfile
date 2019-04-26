FROM ubuntu
FROM node:11

# Create app directory
WORKDIR /usr/src/ricardo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN apt-get update
RUN apt-get install vim -y
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9000
CMD [ "npm", "start" ]