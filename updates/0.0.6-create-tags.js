/* define metatags */

var keystone = require('keystone')
var async = require('async')

var	default_title = "Rouge Tomate Chelsea"
var	default_url = "http://www.rougetomatechelsea.com"
var	default_description = "At Rouge Tomate, America’s Best Healthy Restaurant, our haute-healthy menus are designed to provide more of what we need for increased energy and optimal physical and mental performance…all without ever compromising taste.  Our local, creative, contemporary cuisine provides an extraordinary dining experience that supports the total well-being of the individual and the environment."

// copied from shares default-meta
var	default_image = { "secure_url" : "https://res.cloudinary.com/jshellovelocity/image/upload/v1475011442/hithwf59dks15xtxvp22.png", "url" : "http://res.cloudinary.com/jshellovelocity/image/upload/v1475011442/hithwf59dks15xtxvp22.png", "resource_type" : "image", "format" : "png", "height" : 630, "width" : 1200, "signature" : "89115c9205db6d2df713358b531faa2e0319419f", "version" : 1475011442, "public_id" : "hithwf59dks15xtxvp22" }

// console.log('default_title', default_title)
// console.log('default_url', default_url)
// console.log('default_description', default_description)
										
exports.options = {
  verbose: true,
  // strict: true
}

exports.create = {
  Metatags: [
		// DEFAULT
		{
			name: "General Site Copyright",
			group: "default",
			tag_name: "copyright",
			content: "©RougeTomate",
			docs: "https://en.wikipedia.org/wiki/Meta_element"
		},
		{
			name: "General Site Author", 
			group: "default",
			tag_name: "author",
			content: "Hello Velocity",
			docs: "https://en.wikipedia.org/wiki/Meta_element"
		},
		{
			name: "General Robots Directives", 
			group: "default",
			tag_name: "robots",
			content: "Index,Follow",
			docs: "https://en.wikipedia.org/wiki/Meta_element"
		},
		{
			name: "General Keywords List",
			group: "default",
			tag_name: "keyword",
			content: "restaurant, lunch, dinner, chelsea, nyc, brunch, health, food, dining, casual, wine, health, nutrition, sustainability, wine, cocktails, vegetables, spirits, beer, bar, private dining, open all day, Andy Bennett, Pascaline Lepeltier, master sommelier, farmer's market, seasonality, fresh juices, mocktails,  SPE, Health through Food, community, neighborhood, hospitality",
			docs: "https://en.wikipedia.org/wiki/Meta_element"
		},
		{
			name: "General Site Description",
			group: "default",
			tag_name: "description",
			content: default_description,
			docs: "https://en.wikipedia.org/wiki/Meta_element"
		},

		// FACEBOOK
		{
			name: "Facebook URL",
			group: "facebook",
			tag_name: "og:url",
			content: default_url,
			docs: "http://ogp.me"
		},
		{
			name: "Facebook Content Type",
			group: "facebook",
			tag_name: "og:type",
			content: "website",
			docs: "http://ogp.me"
		},
		{
			name: "Facebook Content Title",
			group: "facebook",
			tag_name: "og:title",
			content: default_title,
			docs: "http://ogp.me"
		},
		{
			name: "Facebook Content Description",
			group: "facebook",
			tag_name: "og:description",
			content: default_description,
			docs: "http://ogp.me"
		},
		{
			name: "Facebook Content Thumbnail",
			group: "facebook",
			tag_name: "og:image" ,
			image: default_image,
			docs: "http://ogp.me"
		},

		// TWITTER
		{
			name: "Twitter Card Type",
			group: "twitter",
			tag_name: "twitter:card",
			content: "summary_large_image",
			docs: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image and https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup"
		},
		{
			name: "Twitter Associated Account",
			group: "twitter",
			tag_name: "twitter:site",
			content: "@RougeTomateNYC",
			docs: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup"
		},
		{
			name: "Twitter Content Title",
			group: "twitter",
			tag_name: "twitter:title",
			content: default_title,
			docs: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup"
		},
		{
			name: "Twitter Content Description",
			group: "twitter",
			tag_name: "twitter:description",
			content: default_description,
			docs: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup"
		},
		{
			name: "Twitter Content Thumbnail",
			group: "twitter",
			tag_name: "twitter:image",
			image: default_image,
			docs: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup"
		},
	]
};
