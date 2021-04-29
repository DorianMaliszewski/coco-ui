# COCO UI

Click [here to access the storybook](https://dorianmaliszewski.github.io/coco-ui/)

This librairy is a set of React component to help you build beautiful and accesibile apps

## Getting started

This library is based on tailwind css so to use it you need to install this library and Tailwind with the following steps.

### Install Coco UI

```
npm install --save @coco-ui/core
```

Or alternatively with yarn :

```
yarn add @coco-ui/core
```

### Install tailwind

Before using this library you need to add tailwind to your React project. [Follow this link to install it](https://tailwindcss.com/docs/installation)

#### Using Create React App

`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @craco/craco`
Or with yarn
`yarn -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @craco/craco`

Then replace in your `package.json` :

```
  {
    "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

### Theme configuration

You can import the default presets in your `tailwind.config.js` file :

```
// tailwind.config.js
module.exports = {
  presets: [
    require('@coco-ui/core/tailwind-theme')
  ],
}
```

Colors that are used :

- primary : In presets : `colors.purple`
- success : In presets : `colors.green`
- error : In presets : `colors.red`
- warning : In presets : `colors.yellow`
- info : In presets : `colors.blue`
- foreground : In presets : `colors.gray[900]`
- background : In presets : `white`
- gray : In presets : `colors.gray`
- white : In presets : `white`
- black : In presets : `black`
