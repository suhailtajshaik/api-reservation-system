# Express-server 
Server-Client architecture, static express server. 

## How to run ?

#### Using npm
```bash
npm install
npm start
```

Or

#### Using yarn
```bash
yarn install
yarn start
```
## MongoDB Setup with docker

##### Pulling latest image:
Pulling the latest mongo image from [Docker Hub](https://hub.docker.com/r/_/mongo/)
```bash
docker pull mongo:latest
```

##### Running the docker image with:
1. Naming image with name `some-mongo`
2. Volume mounting to the local machine to path `"$(pwd)"/mongodb/data/db`
3. Running image in `demon mode`

```bash
docker run --name some-mongo -v "$(pwd)":"$(pwd)"/mongodb/data/db -d mongo:latest 
```


##### To access container bash shell
where `some-mongo` is the name of the docker image

```bash
docker exec -it some-mongo bash
```