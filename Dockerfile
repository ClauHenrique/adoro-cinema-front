FROM node

WORKDIR /usr/app

COPY . .

RUN npm i

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host"]