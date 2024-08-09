module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    },
    mode: 'development',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
    }
}