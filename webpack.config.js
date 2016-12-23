var config = {
   entry: './src/main.js',
	
   output: {
      path:'./',
      filename: './src/index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
         { test: /\.css$/, loader: 'style!css' },
         { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
         { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=img/img-[hash:6].[ext]"}
      ]
   }
}

module.exports = config;
