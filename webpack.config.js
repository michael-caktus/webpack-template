const path = require("path");
const package = require("./package.json");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
    const config = { output: {} }
    const mode = argv.mode || 'development';

    if (mode === 'development') {
        config.devtool = 'inline-source-map'
        config.devServer = {
            contentBase: path.resolve(__dirname, "./dist"),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        },
            config.watch = true
    }

    return Object.assign(config, {
        mode,
        target: 'web',
        entry: {
            [package.name]: path.resolve(__dirname, "./src/js/index.js")
        },
        output: {
            filename: "./[name].bundle.js",
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    node_vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all",
                        priority: 1
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                template: path.resolve(__dirname, "./src/index.html"),
                filename: path.resolve(__dirname, "./dist/index.html")
            })
        ]
    })
}
