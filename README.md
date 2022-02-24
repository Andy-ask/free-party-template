# Free Party Cli

Version 1.0.0

Currently it is the initial version, can only be configured through the default configuration, later will add a free configuration option, the current is to pull the default configuration for configuration; currently only support react whole family bucket, later will add vue less stylus nuxt and other configuration, to more free configuration direction

The default configuration is ``vite react redux redux-toolkit immer react-router axios mockjs sass``


```node
Download packages
pnpm install | yarn install | npm install

The recommended way to start, using the pnpm package management tool
pnpm dev | yarn dev | npm run dev

Build method
pnpm build | yarn build | npm run build
```

```javascript
Project directory
|-- README-zh.md
|-- README.md
|-- envs------------------environment variables
|-- favicon.svg
|-- index.html------------html entry
|-- mock------------------mock requests
|   |-- index.ts        
|-- package.json
|-- src
|   |-- App.tsx-----------react main component
|   |-- common
|   |   |-- fonts---------font file
|   |   |-- images--------image files
|   |   |-- style---------public style files
|   |   |-- ts------------public ts methods
|   |-- components--------components
|   |   |-- counter-------example calculation component
|   |   |-- sidebar
|   |-- main.tsx----------entry file
|   |-- pages-------------routing pages
|   |   |-- about
|   |   |-- home
|   |-- router------------react-router
|   |   |-- index.tsx
|   |   |-- router-view---wrapped router-view
|   |-- store-------------redux
|   |-- vite-env.d.ts-----types of vite environment variables
|-- tsconfig.json---------ts configuration
|-- tsconfig.node.json
|-- types-----------------types
|-- vite.config.ts--------vite configuration file
```