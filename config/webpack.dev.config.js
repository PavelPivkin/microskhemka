const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: ["ts-loader"],
            },
            {
                exclude: '/node_modules/',
                test: /\.(sa|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader",
                ],
            },
            {
                exclude: '/node_modules/',
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    "less-loader",
                ],
            },
            {

                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            }],
    },
    output: {
        filename: "bundle.js",
        path: __dirname,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new StyleLintPlugin({
            configFile: "./.stylelintrc",
            failOnError: false,
            syntax: "sass",
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '../../theme.config': path.join(__dirname, '../semantic-theme/theme.config')
        },
        modules: ["node_modules"],
    },
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        }
    }
};
