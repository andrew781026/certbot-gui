// 如果要使用 postcss , 將檔名改成 postcss.config.js , 目前此檔案沒作用
const IN_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        IN_PRODUCTION && require('@fullhuman/postcss-purgecss')({
            content: [ `./public/**/*.html`, `./src/**/*.vue` ],
            defaultExtractor (content) {
                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
            },
            whitelist: [],
            whitelistPatterns: [
                /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/,
                /ezoom-.*/, /el-.+$/
            ],
        })
    ],
}
