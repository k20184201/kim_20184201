const testUtils = require("react-dom/test-utils")

{
    test:sassRegex,
    exclude: sassModuleRegex,
    use:getStyleLoaders({
            importLoaders:3,
            sourceMap: isEnvProduction
            ?shouldUseSourceMap,
            :isEnvDevelopment,
        }).concat({
            loader:require.resolve('Sass-loader'),
            options:{
                sassOptions:{
                    includePaths:[paths.appSrc+'./utils.scss']
                },
                additionalData:'@import 'utils';'
            }
        }),
        sideEffects:true
    },
    