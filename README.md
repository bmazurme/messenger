
# Project Messenger
### Tech Stack
![TypeScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=typescript)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3)
![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)
![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=express)
![Netlify](https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=netlify)
![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker)
![Webpack](https://img.shields.io/badge/-Webpack-black?style=flat-square&logo=webpack)
![Eslint](https://img.shields.io/badge/-Eslint-black?style=flat-square&logo=eslint)
![BEM](https://img.shields.io/badge/-BEM-black?style=flat-square&logo=bem)
![Stylelint](https://img.shields.io/badge/-Stylelint-black?style=flat-square&logo=stylelint)
![Swagger](https://img.shields.io/badge/-Swagger-black?style=flat-square&logo=swagger)
![Figma](https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma)

### About
* TS web messenger project. - Version 0.0.1
* TS web messenger project. React, Redux, Webpack - Version 1.1.1

### Demo
[![Netlify](https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=netlify)](https://velvety-babka-2aac37.netlify.app/)
![Alt-text](https://github.com/bmazurme/messenger/blob/main/src/images/cover.png "demo")


Implemented features:
- [X] User registration, authorization
- [X] Edit user profile info, password
- [X] Uploading user/chat avatar
- [X] Create chat, user search, add/remove a user to/from a chat
- [X] Redux, RTK Query
- [X] Axios, WebSocket
- [X] React error boundaries
- [X] Form validation, react-hook-form
- [X] Resizable-Sidebar
- [X] Docker
- [X] CI/CD

#### Links
- [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1)
- [Swagger](https://ya-praktikum.tech/api/v2/swagger/)

### Installation
Clone the repository on your computer:

Install dependencies: `npm install`

Run dev mode: `npm run dev`

Build project: `npm run build`

Clear project: `npm run clear`

Run eslint: `npm run eslint`

Launch: `npm start`

### Docker

`docker-compose build`

`docker-compose up`

`docker-compose stop`

`docker system prune -a`

`docker push cr.yandex/${REGISTRY_ID}/messenger:latest`

`docker pull cr.yandex/${REGISTRY_ID}/messenger:latest`

`docker run cr.yandex/${REGISTRY_ID}/messenger:latest`

`docker run -d -p 80:3000 cr.yandex/${REGISTRY_ID}/messenger:latest`

[https://cloud.yandex.ru/docs/container-registry/tutorials/run-docker-on-vm#before-begin](https://cloud.yandex.ru/docs/container-registry/tutorials/run-docker-on-vm#before-begin)

`docker exec -it container_ID_or_name /bin/bash`

```
# on an M1 mac…

# --platform linux/amd64
```
