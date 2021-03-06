const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,"src","public","js","main.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"boundle.js"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.jsx?/,
                exclude:/node_modules/,
                loader:"babel-loader",
                query:{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"index",
            filename:path.join(__dirname,"dist","index.html"),
          template: path.join(__dirname,"src","views","index.html")
        })
      ]
};
