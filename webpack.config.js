const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  stats: "errors-only",
  entry: "./src/js/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
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
          "sass-loader",
        ],
      },

      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   exclude: /fonts/,
      //   use: [
      //     {
      //       loader: "file-loader",

      //       options: {
      //         name: "[name].[ext]",

      //         outputPath: "images",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(svg|eot|woff|woff2|ttf)$/,
      //   exclude: /images/,
      //   use: [
      //     {
      //       loader: "file-loader",

      //       options: {
      //         name: "[name].[ext]",

      //         outputPath: "fonts",
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /images/,
        // type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /fonts/,
        // type: "asset/resource",
        generator: {
          filename: "images/[path][name][ext]",
        },
      },

      {
        test: /\.html$/i,

        loader: "html-loader",
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
    // liveReload: true,

    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
