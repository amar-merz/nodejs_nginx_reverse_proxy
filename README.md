In this tuto we gonna setup a simple app with nodeJs and a reverse proxy server(nginx)

#What is a reverse proxy?
- A reverse proxy is a server sitting in the front of web servers and forward client request to those web servers.[Source cloudflare.com]
- Some of raison to use a reverse proxy:
  - load balancing
  - SSL termintion
  - Application firewal 
  - caching

#Installing Nodejs

We would  go through the following steps:

- sudo apt-get update

- sudo apt-get -y install nodejs

#Create a nodejs app

- the present app listen to the port 3000 and  displays all the running process in the system by executing the command "ps aux" 

#Configuratiion of the reverse proxy (nginx):

- Install nginx by running sudo apt-get install nginx
- Create new nginx conf inside /etc/nginx/sites-enabled --see the nodejsconf file
- Reload Nginx : systemctl reload nginx

#EOF  
 
