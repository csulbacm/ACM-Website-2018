# ACM-Website-2018

Acm Website 2018 made with React.

GET STARTED
1. Run npm install to install all node_modules
2. Open terminal and run "yarn run dev-server" to view on http://localhost:8080

FILE STRUCTURE
1. src/app.js               -> Entry point, renders AppRouter.js
2. src/routers/AppRouter.js -> Decide what components to display based on url
3. src/components/Header.js -> Navbar always displayed at top, with links to urls
4. src/components           -> Reusable html

1. public/index.html        -> Displays bundle.js
2. public/bundle.js         -> Webpack bundle of all jsx, js, css files
