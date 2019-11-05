# Webpack Template
#### 🌵 developed by Caktus 🌵

## 🧐 Why?
This project is meant to serve as a starter template for any webpack-based project. More often than not, it will probably be used as an example of a solid starting config for a webpack build. Copy and paste to your heart's content! ❤

## 📦 What does it do?
Webpack is a javascript-based asset bundler.
It works out of the box using some sane defaults, but it is also highly configurable and extensible.

This particular build does the following:
- Transpiles modern JS syntax in to legacy-compatible syntax.
- Through a single .js entrypoint, all imported modules are compiled in to one .js.
- You can import the same vendor dependency in every .js module you create, it will only be bundled once!
- "Production" mode bundling minifies .js and .css
- Compiles SASS, eliminating duplicated @imports
- 🏎 Efficiencies efficiencies efficiencies! 🏎
- Developers can run `npm run dev` to open up a browser with 🔥hot-reloading🔥 enabled. All changes made to .js, .html, and .css/.scss files will automatically refresh the browser! 🚀
- Starting the project with `npm run dev` will serve assets found in `dist/` on localhost:8080
- Developers work out of the `src/` directory and never need to touch the `dist/` dir
