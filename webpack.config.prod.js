//  What changes from webpack.config.js ?
//
//
//
// after "npm run build:prod"
//
// the generated dist folder is what we can deploy and serve from a server
//
// mode changed from "development" to "production"
// devtool set to "none"
//
//
//
//
//
//


const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //tells weppack that it must perform some optimizations to the code but doesnt shrink as much as possible
    mode: "production",
    entry: "./src/index.js",
    output: {
        // path is an absolute path, to the place where the output file should be written to
        // dirname, the directory where this file is located
        // dist, the folder where to put it all, inside the project folder
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: ""
    },
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                // enables css modules and css in general
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // css loader - understand our css imports
                    //style.loader - injects the css code into the html file
                    {loader: "style-loader"},
                    {loader: "css-loader", options : {
                        importLoaders: 1,
                        modules: {
                            localIdentName: "[name]_[local]_[hash:base64:5]"
                        }
                    }},
                    // helps to transform css code for it to work on older browsers
                    {
                        loader: "postcss-loader", 
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: () => [autoprefixer()]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/, 
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            fileName: "index.html",
            inject: "body"
        })
    ]
};