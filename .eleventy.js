require('dotenv').config()

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./index.css");
    eleventyConfig.addPassthroughCopy("./shared.css");
    eleventyConfig.addPassthroughCopy("./content/blog.css");
    eleventyConfig.addPassthroughCopy("./index.js");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./assets");


    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});


    return {
        debug: process.env.DEBUG || false,
        dir: {
            output: "blog",
            input: "content",
            includes: "../_includes"
        }
    }
}