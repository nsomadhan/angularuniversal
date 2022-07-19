# Set up  angular universal with docker and docker-compose

# create Project 
sudo docker-compose -f docker-buildangularproject.yaml up --remove-orphans

# serve project as angular universal
sudo docker-compose up --remove-orphans
