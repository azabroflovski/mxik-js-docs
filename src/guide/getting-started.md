# Getting Started

Simple package for API calls tasnif.soliq.uz ( written in TypeScript ⚡)

## Installation

First, add mxik-js to your project as a dependency

### via npm

```sh
$ npm install mxik
```

### via yarn

```sh
$ yarn add mxik
```

### or via CDN

Copy the following URL and paste it into your HTML code via script tag

```sh
https://unpkg.com/mxik@latest/mxik.umd.js
```

#### Example

```html{9}
<!DOCTYPE html>
<html>
   <head>
       <title>Valar Morghulis</title>
       ...
   </head>
    
   <body>
       <script src="https://unpkg.com/mxik@latest/mxik.umd.js"></script>
        
       <script>
           async function doSomething() {
               const response = await MXIKSearch('search query', { limit: 10 })
           }
       </script>
   </body>
</html>
```

## How to use

First, import the lib to the location you need

```javascript
import { MXIKSearch } from 'mxik'

async function doSomething() {
   const response = await MXIKSearch('Футболка', { limit: 10 })
}
```

> Tree Shaking: only what you use will go into production build


