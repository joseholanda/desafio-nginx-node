FROM node:15

COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]