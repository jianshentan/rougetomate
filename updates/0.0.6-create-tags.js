/* define metatags */

var keystone = require('keystone')
var async = require('async')
// var	default_image = ""
var	default_title = "Rouge Tomate Chelsea"
var	default_url = "http://www.rougetomatechelsea.com"
var	default_description = "At Rouge Tomate, America’s Best Healthy Restaurant, our haute-healthy menus are designed to provide more of what we need for increased energy and optimal physical and mental performance…all without ever compromising taste.  Our local, creative, contemporary cuisine provides an extraordinary dining experience that supports the total well-being of the individual and the environment."

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
			scope: "default",
			name: "copyright",
			content: "© RougeTomate"
		},
		{
			scope: "default",
			name: "author",
			language: "en",
			content: "Hello Velocity"
		},
		{
			scope: "default",
			name: "robots",
			content: "Index,Follow"
		},
		{
			scope: "default",
			name: "keyword",
			content: "restaurant, lunch, dinner, chelsea, nyc, brunch, health, food, dining, casual, wine, health, nutrition, sustainability, wine, cocktails, vegetables, spirits, beer, bar, private dining, open all day, Andy Bennett, Pascaline Lepeltier, master sommelier, farmer's market, seasonality, fresh juices, mocktails,  SPE, Health through Food, community, neighborhood, hospitality"
		},
		{
			scope: "default",
			name: "description",
			content: default_description
		},

		// FACEBOOK
		{
			scope: "facebook",
			name: "og:url",
			content: default_url
		},
		{
			scope: "facebook",
			name: "og:type",
			content: "website"
		},
		{
			scope: "facebook",
			name: "og:title",
			content: default_title
		},
		{
			scope: "facebook",
			name: "og:description",
			content: default_description
		},
		{
			scope: "facebook",
			name: "og:image" ,
			content: ""
			// image: default_image
		},

		// TWITTER
		// { scope: "twitter", name: "twitter:card", content: "" },
		{
			scope: "twitter",
			name: "twitter:url",
			content: default_url
		},
		{
			scope: "twitter",
			name: "twitter:title",
			content: default_title
		},
		{
			scope: "twitter",
			name: "twitter:description",
			content: default_description
		},
		{
			scope: "twitter",
			name: "twitter:image",
			content: ""
			// image: default_image
		},
	]
};
