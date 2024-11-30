
# Configuration
  "start": "serve -s dist -l $PORT",
  "start-front": "vite preview --host 0.0.0.0 --port $PORT",

## Simulate production environment to serve the app from folder dist
1) `npm run build`

2) 2 options :
- Launch `npm run preview` : Command specific to Vite to test the app after build.
Run a simulation production app Vite with the folder dist in current folder where the command is carried out. No HMR. Used to see behavior once app deployed.

OR

- Launch `npm run start` : Use the package or dependence 'serve' to serve static files from folder 'dist' on a local server. App listening on a specific port with "-l $PORT". The option '-s' indicate Single page Application (SPA). **Favorite choice**.

