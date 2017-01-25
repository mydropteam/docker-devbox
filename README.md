# drupal-devbox

Drupal devbox is a configuration starter for a Docker environment to provide by default a LAMP Stack with XhProof, mailhog and xhgui.

@see: https://www.docker.com

## Installation
### Linux (debian / Ubuntu / etc...)
@see: https://www.docker.com/products/docker#/linux
### Windows 10
@see: https://www.docker.com/products/docker#/windows  
**note**: You have to use PowerShell terminal instead of cmd

### MacOS
@see: https://www.docker.com/products/docker#/mac  


## How to start
1. Configure .env file

   You can found a `.env` file at the drupal-devbox root.  
   You have to edit some variables to configure your project as `COMPOSE_PROJECT_NAME` variable which will define your docker containers names.

2. Define your environment  
   Drupal-devbox is a full stack LAMP with development middleware. You can disabled each container as you want.
   On your `docker-compose.yml` file, you can comment a container with a `#` at line start.  
   Don't forget to check all the container dependencies  

3. Start your environment

   To start your environment, you have to use this command  
   ```bash
   docker-compose up -d
   ```
   The `-d` arguments will hide containers logs
   You should see all your container starting.  


   You can stop your containers by  
   ```bash
   docker-compose stop
   ```
4. Enter in your container  
   Container runs on a debian stack. You can access it by SSH with the command:  

   ```bash
   docker exec -ti [CONTAINER-NAME] /bin/bash
   ```

## Logs  
### Elasticsearch-Logstash-Kibana stack

Add the section below to a container's definition in docker-compose.yml, to forward docker logs from this container to the ELK stack (see the web and database container definitions in docker-compose.yml for an example).
You will be able to browse the logs through the PORT_KIBANA defined in your .env file.
The tag will help you to sort logs in kibana, and is commonly the container name. The gelf-address should not be changed.

```yml
logging:
  driver: gelf
  options:
    tag: "xxx"
    gelf-address: "udp://127.0.0.1:12201"
```

## Go further  
### Use more middleware
Docker provide a hub with public images : https://hub.docker.com  
For example, if you want to add a SolR image, with custom configuration files, you will only have to edit your 'docker-compose.yml' file and add your container instructions :
```yml
solr:
    image: solr:6.3
    ports:
      - "${PORT_SOLR}:8983"
    volumes:
      - ${SOLR_CONFIG}:/opt/solr/server/solr/collection1/
```
