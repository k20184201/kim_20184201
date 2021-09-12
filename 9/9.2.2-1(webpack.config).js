{
 test:sassRegex,
 exclude: sassModuleRegex,
 use:getStyleLoaders(
     {
         importLoaders:3,
         sourceMap: isEnvProduction
         ?shouldUseSourceMap,
         :isEnvDevelopment,
     },
     'sass-loader'
 ),
 sideEffects:true,   
},