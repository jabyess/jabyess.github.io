
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("index.js");
    eleventyConfig.addPassthroughCopy("./fonts");

    return {
        dir: {
            output: "docs"
        }
    }
}