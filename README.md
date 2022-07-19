# Set up  angular universal with docker and docker-compose
# STEP
### step one : Buil container
sudo docker build -t angu . 

# step two: create Project 
sudo docker-compose -f docker-buildangularproject.yaml up --remove-orphans

# step three: serve project as angular universal
sudo docker-compose up --remove-orphans
