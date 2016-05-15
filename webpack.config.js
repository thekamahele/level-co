module.exports = {
    entry: './public/app.js',
    output: {
        path: 'dist',
        publicPath: 'dist',
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
        ]
    }
};