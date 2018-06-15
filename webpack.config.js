const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `../views/${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./frontend/html');

module.exports = {
    devtool: "source-map",

    entry: {
        main: [
            './node_modules/semantic-ui-css/semantic.css',
            './frontend/styles/index.scss'
        ],
        signin: [
            './frontend/js/signin.js',

        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './js/[name].js',
        publicPath: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'frontend/js'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(sass|scss)$/,
                // include: path.resolve(__dirname, 'frontend/styles'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }]
                })
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'frontend/html'),
                use: ['raw-loader']
            },
            // {
            //     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //     use: ['url-loader?limit=100000']
            //     // use: {
            //     //     loader: 'url-loader',
            //     //     options: {
            //     //         limit: 10000,
            //     //         mimetype: 'application/font-woff',
            //     //     }
            //     // },
            // },
            // {
            //     test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            //     use: ['url-loader?limit=100000']
            //     // use: {
            //     //     loader: 'url-loader',
            //     //     options: {
            //     //         limit: 10000,
            //     //         mimetype: 'application/font-woff',
            //     //     }
            //     // }
            // },
            // {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     use: ['url-loader?limit=100000']
            //     // use: {
            //     //     loader: 'url-loader',
            //     //     options: {
            //     //         limit: 10000,
            //     //         mimetype: 'application/octet-stream'
            //     //     }
            //     // }
            // },
            // {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     use: 'file-loader',
            // },
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     use: ['url-loader?limit=100000']
            //     // use: {
            //     //     loader: 'url-loader',
            //     //     options: {
            //     //         limit: 10000,
            //     //         mimetype: 'image/svg+xml',
            //     //     }
            //     // }
            // },
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
            //     use: 'url-loader',
            // }
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('public', {} ),

        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),

        // new CopyWebpackPlugin([{
        //     from: './frontend/fonts',
        //     to: 'fonts'
        // },
        //     // {
        //     //     from: './src/favicon',
        //     //     to: './favicon'
        //     // },
        //     {
        //         from: './frontend/images',
        //         to: 'images'
        //     }
        // ]),
    ].concat(htmlPlugins)
};