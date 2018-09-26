# ACM-Website-2018

Acm Website 2018 made with React.

GET STARTED
1. Run npm install to install all node_modules
2. Open terminal and run "yarn run dev-server" to view on http://localhost:8080

FILE STRUCTURE
-src/app.js               -> Entry point, renders AppRouter.js
-src/routers/AppRouter.js -> Decide what components to display based on url
-src/components/Header.js -> Navbar always displayed at top, with links to urls
-src/components           -> Reusable html

-public/index.html        -> Displays bundle.js
-public/bundle.js         -> Webpack bundle of all jsx, js, css files
