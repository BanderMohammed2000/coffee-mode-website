const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  stats: "errors-only",
  entry: {
    bundle: "./src/index.js",
    //code splitting
    "js/animate-fadein": "./src/js/animate-fadein.js",
    "js/map": "./src/js/map.js",
    "js/add-cart": "./src/js/add-cart.js",
    "js/index-active-nav": "./src/js/index-active-nav",
    "js/about-active-nav": "./src/js/about-active-nav",
  },
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  optimization: {
    minimize: true,

    minimizer: [
      // تقليص حجم الصور
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["imagemin-mozjpeg", { quality: 75 }],
              ["imagemin-pngquant", { quality: [0.6, 0.8] }],
            ],
          },
        },
      }),

      // تقليص حجم ملفات جافاسكريبت
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ["console.log"],
          },
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),

      // تقليص حجم ملفات css
      new CssMinimizerPlugin(),
    ],
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
        generator: {
          filename: "fonts/[name][ext]",
        },
      },

      {
        test: /\.(png|svg|jpe?g|jpg|jpeg|gif|webp)$/i,
        exclude: /fonts/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
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
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["bundle", "js/animate-fadein", "js/index-active-nav"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
      chunks: ["bundle", "js/about-active-nav"],
      minify: {
        collapseWhitespace: true, // إزالة الفراغات
        removeComments: true, // إزالة التعليقات
        removeRedundantAttributes: true, // إزالة السمات غير الضرورية
        useShortDoctype: true, // استخدام doctype مختصر
      },
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

    // تقليص حجم ملفات css
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
