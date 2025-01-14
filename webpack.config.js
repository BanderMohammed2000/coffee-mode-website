const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  stats: "errors-only",
  entry: {
    bundle: "./src/index.js",
    //code splitting
    "js/animate-fadein": "./src/js/animate-fadein.js",
    "js/map": "./src/js/map.js",
    "js/add-cart": "./src/js/add-cart.js",
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /images/,
        // type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpe?g|jpg|jpeg|gif|webp)$/i,
        exclude: /fonts/,
        type: "asset/resource",
        generator: {
          filename: "images/[path][name][ext]",
        },
      },

      {
        test: /\.html$/i,

        loader: "html-loader",
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, " build"),
    },

    port: 9000,

    hot: false,

    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["bundle", "js/animate-fadein"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
      chunks: ["bundle"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/distributors.html",
      filename: "distributors.html",
      chunks: ["bundle", "js/map"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/cappuccino-product.html",
      filename: "cappuccino-product.html",
      chunks: ["bundle", "js/add-cart"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/coffee-product.html",
      filename: "coffee-product.html",
      chunks: ["bundle", "js/add-cart"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/turkish-coffee-product.html",
      filename: "turkish-coffee-product.html",
      chunks: ["bundle", "js/add-cart"],
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
