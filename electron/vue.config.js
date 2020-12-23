module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                // ref : https://www.electron.build/configuration/configuration
            }
        }
    }
}