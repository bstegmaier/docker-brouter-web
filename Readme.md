# docker-brouter-web

## What is brouter?

There's a lot of routing software on the market, both free and commercial, both online and offline, both OSM and proprietary maps. However, when it comes to bike routing, it's hard to find something that's really useful. There's far less money and engineering power in the field compared to car navigation.

What do we expect from a bike routing software? It should be able to calculate more or less the routes that match your experience in the regions you are familiar with, thus giving you confidence that it yields the same quality in unknown regions. Scanning the market with that expectation gives little to no result.

Here's what makes BRouter unique:

* It uses freely configurable routing profiles
* It works fully offline on any Android phone and is interfaced to some of the most popular Android map tools
* It uses a sophisticated routing-algorithm with elevation consideration
* It offers alternative route calculations
* It supports via and nogo-points
* It can consider long distance cycle routes
* Routing data is available worldwide with automatic weekly updates

For more information see http://brouter.de/brouter/

## How to use this image

This image contains the brouter web frontend, served by nginx. In order to use it, you need to have the brouter routing engine running.

### Run docker-compose with brouter-app

Using [docker-compose-brouter](http://github.com/bstegmaier/docker-compose-brouter) you will have brouter-web and [brouter-app](https://github.com/bstegmaier/docker-brouter-app) up and running in a breeze:

* Clone https://github.com/bstegmaier/docker-compose-brouter
* Download all necessary files (wget required)
	./download_profiles.sh
	./download_country.sh Germany
* Start the containers
	docker-compose up
* Navigate to http://localhost in your browser and enjoy

### Running standalone

You can start a container using:
	docker run -p 80:80 bstegmaier/brouter-web

Brouter-web has the option to display the selected routing profile in a textedit field.
In order to use this feature, you will need to provide a *profiles* folder, which contains the routing profiles (*.brf) files.
Add the following option to docker run:
	-v /path/to/profiles:/data/profiles
