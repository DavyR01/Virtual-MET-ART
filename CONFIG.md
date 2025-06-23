
# Configuration
  "start": "npx serve -s dist -l 5174",
  "start-front": "vite preview --host 0.0.0.0 --port $PORT",

## Simulate production environment to serve the app from folder dist

1) `npm run setupProdFull` to download packages node_modules without husky, build frontend with dist folder and delete after build devDependencies.

2) 2 options :

- Launch `npm run start` : Use the package or dependence 'serve' to serve static files from folder 'dist' on a local server. App listening on a specific port with "-l $PORT". The option '-s' indicate Single page Application (SPA). **Favorite choice**.

OR

- Launch `npm run preview` : Command specific to Vite to test the app after build.
Run a simulation production app Vite with the folder dist in current folder where the command is carried out. No HMR. Used to see behavior once app deployed.
**Warning** : After delete devDependencies with --omit-dev, this command won't work because it needs devDependencies.

## Production environment (on VPS) : 

- Set Caddyfile to serve folder dist with static files. Always serve static files
- Don't use vite server with a port like 5173 (or other)