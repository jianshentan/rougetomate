SETUP
  It is required that node is on version 0.12.0 for the node-sass library to work
  1. Use nvm to set node version : nvm use 0.12.0
  2. Rebuild the node-sass package : npm rebuild node-sass
  3. update npm : npm install
  4. run your application : node keystone.js

Launch Application for Dev & Test:
  1. start your mongo database : "mongod"
  2. start grunt watch: "grunt watch" // if using local db
  3. run your server: "nodemon keystone"

Dev:
  Refer to keystone v0.3.X recommended architecture for the general architecture of this project

Production:
  Verify that the environment variables are set. The home directory of the project must have a .env file that is populated as follows:
  "
  CLOUDINARY_URL=cloudinary://<API_KEY>:<API_SECRET>@<USERNAME>
  MANDRILL_API_KEY=<MANDRILL_API_KEY>
  MONGO_URL=mongodb://<MLAB_DB_USERNAME>:<MLAB_DB_PASSWORD>@<MLAB_URL> (MLAB_URL etc: ds023714.mlab.com:23714/rt)
  TZ=IANATIMEZONE (America/New_York)
  "
