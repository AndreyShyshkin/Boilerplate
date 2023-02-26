# Boilerplate

This is a starter kit for building web applications using Webpack, Babel, ESLint, Prettier, PostCSS, SCSS, Husky, jQuery, and Tailwind.

## Installation

  ### PreInstall

Install [Node.js](https://nodejs.org/).<br/>
Install [PNPM](https://pnpm.io/) with the command `npm install -g pnpm`.

  ### Install boilerplate

    git clone https://github.com/your-username/your-project.git
    cd your-project
    pnpm install

## Usage
  
  ###Launching
   To run the project in development mode, run the command:

    pnpm start
    
   The application will be available at http://localhost:9000.


  ###Assembly
    To create a bundle in production mode, run the command:

    pnpm run build
   The bundle will be created in the dist directory.

## Additional work
### Adding new pages
To add a new page, you need to create a new .html file in the src/app/pages directory and specify the path to it in the appropriate entry point in webpack.common.js. For example, if you created an about.html file, in webpack.common.js you need to add:
```bash
entry: {
  index: './src/index.js',
  about: './src/app/pages/about.html',
},
```
### Adding new styles
To add new styles, you need to create a new .scss file in the src/app/styles directory and import it into index.styles.scss. For example, if you created a buttons.scss file, you would add the following to index.styles.scss:
```bash
@import 'buttons';
```
### Adding new scripts
To add new scripts, you need to create a new .js file in the src/app/scripts directory and import it into index.scripts.js. For example, if you created an analytics.js file, in index.scripts.js you need to add:
```bash
import './analytics.js';
```

## Why use this build?
Uses the latest version of Webpack and Babel<br/>
Integrated ESLint and Prettier to maintain the codebase<br/>
Integrated TailwindCSS to quickly create a UI<br/>
Integrated PostCSS with Autoprefixer to automatically add vendor prefixes<br/>
Integrated Husky for easy use with git hooks<br/>
Support for assembling images, fonts, and other static resources<br/>
Ability to easily add new pages, styles and scripts<br/>

It is recommended to use the pnpm package manager as it is faster and uses less disk space compared to npm and yarn.<br/>

We hope this build
