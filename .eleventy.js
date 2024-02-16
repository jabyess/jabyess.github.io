
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("index.js");

    return {
        dir: {
            output: "docs"
        }
    }
}