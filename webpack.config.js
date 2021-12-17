const { resolve } = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
   entry: './src/index.ts',
   watch: true,
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
   },
};