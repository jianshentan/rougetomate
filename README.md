Launch Application for Dev & Test:
  1. start your mongo database : "mongod"
  2. start grunt watch: "grunt watch"
  3. run your server: "nodemon keystone"

Dev:
  Refer to keystone v0.3.X recommended architecture for the general architecture of this project

Production:
  Verify that the environment variables are set. The home directory of the project must have a .env file that is populated as follows:
  "
  CLOUDINARY_URL=cloudinary://<API_KEY>:<API_SECRET>@<USERNAME>
  MANDRILL_API_KEY=<MANDRILL_API_KEY>
  MONGO_URL=mongodb://<MLAB_DB_USERNAME>:<MLAB_DB_PASSWORD>@<MLAB_URL> (MLAB_URL etc: ds023714.mlab.com:23714/rt)
  "