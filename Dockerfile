FROM node:14.15.0
RUN apt update
RUN apt install curl vim gettext-base -y
RUN npm install -g @angular/cli
RUN npm install pm2 -g
COPY entrypoint.sh .
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

RUN mkdir -p /data/apps
RUN cd /data/apps
#RUN ng add @nguniversal/express-engine
RUN mkdir -p /data/pm2script
WORKDIR /data/apps
EXPOSE 4200
#CMD ["npm", "serve", "--port 4000"]
