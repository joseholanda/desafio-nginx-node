FROM nginx:latest

#RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /var/www/public -p && touch /var/www/public/index.html

#ENTRYPOINT [ "/docker-entrypoint.sh" ]
#CMD [ "nginx", "-g", "daemon off;" ]