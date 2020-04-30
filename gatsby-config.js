module.exports = {
  siteMetadata: {
    title: 'HackerOne Platform Documentation',
    siteUrl: 'https://docs.hackerone.com',
    description: 'Get instant answers to the most common questions and learn how to use HackerOne.',
	author: 'sreehas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
	'gatsby-plugin-catch-links',
	'gatsby-plugin-dark-mode',
    'gatsby-plugin-optimize-svgs',
	`gatsby-plugin-offline`,

		
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs/`,
        name: "docs",
      },
    },
	
	{
  resolve: `gatsby-plugin-offline`,
  options: {
    precachePages: [`/`, `/html.html`],
  },
},
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha384'
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' 'unsafe-eval' 'unsafe-inline' www.google-analytics.com cdn.jsdelivr.net *.algolia.net *.algolianet.com *.cloudfront.net",
          "style-src": "'self' 'unsafe-inline' cdn.jsdelivr.net *.cloudfront.net",	
          "connect-src": "'self' www.google-analytics.com fbhzv4f2nk7b.statuspage.io *.algolia.net *.algolianet.com *.cloudfront.net",
          "frame-src": "www.youtube-nocookie.com"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49905813-10",
        head: false,
        anonymize: true,
        respectDNT: true,
        forceSSL: true,
        transport: "beacon",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
		/*'gatsby-remark-code-buttons',
		{
          resolve: 'gatsby-remark-code-buttons',
          options: {
            // Optional button container class name. Defaults
            // to 'gatsby-code-button-container'.
            buttonContainerClass: `bingo`,
            // Optional button class name. Defaults to 'gatsby-code-button'.
            buttonClass: `customButtonClass`,
            // Optional button text. Defaults to ''.
            buttonText: `Copy`,
            // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
            svgIconClass: `customSvgIconClass`,
            // Optional svg icon. Defaults to svg string and can be
            // replaced with any other valid svg. Use custom classes
            // in the svg string and skip `iconClass` option.
            svgIcon: ``,
            // Optional tooltip text. Defaults to ''.
            tooltipText: ``,
            // Optional toaster class name. Defaults to ''.
            toasterClass: `customToasterClass`,
            // Optional toaster text class name. Defaults to ''.
            toasterTextClass: `customToasterTextClass`,
            // Optional toaster text. Defaults to ''.
            toasterText: 'customToasterText',
            // Optional toaster duration. Defaults to 3500.
            toasterDuration: 5000
          },
        },*/
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 68,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500
            },
          },
		  {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (e.g. <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (e.g. for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in gatsby-browser.js
            // right after importing the prism color scheme:
            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
            // This adds a new language definition to Prism or extend an already
            // existing language definition. More details on this option can be
            // found under the header "Add new language definition or extend an
            // existing language" below.
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            // Customize the prompt used in shell output
            // Values below are default
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },
            // By default the HTML entities <>&'" are escaped.
            // Add additional HTML escapes by providing a mapping
            // of HTML entities and their escape value IE: { '}': '&#123;' }
            escapeEntities: {},
          },
        },
			
        ],
      },
    },
	/*{
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "500"],
            },
          ],
        },
      },
    },*/
	{
	resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {
		  "/*.js": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.css": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.jpeg": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.jpg": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.svg": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.png": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.html": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.pdf": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],
		  "/*.ico": [
		  "cache-control: public, max-age=31536000, immutable",
		  ],

		  
	  }, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
	},
    {
      resolve: 'gatsby-plugin-algolia-docsearch-custom',
      options: {
        apiKey: "acfb7def12803db2cd4ac0539b2b571a",
        indexName: "hackerone",
        inputSelector: "#algolia-doc-search",
		debug: true,
      },
    },
	{
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `csspoints.net`,
    },
  },
  
  /*{
  resolve: 'gatsby-remark-code-repls',
  options: {
    // Optional default link text.
    // Defaults to "REPL".
    // e.g. <a href="...">Click here</a>
    defaultText: 'Click here',


    // Example code links are relative to this dir.
    // e.g. examples/path/to/file.js
    directory: `${__dirname}/examples/`,

    // Optional link target.
    // Note that if a target is specified, "noreferrer" will also be added.
    // e.g. <a href="..." target="_blank" rel="noreferrer">...</a>
    target: '_blank',


    // Provider specific options
    codepen: {
      // Optional path to a custom redirect template.
      // The redirect page is only shown briefly,
      // But you can use this setting to override its CSS styling.
      // redirectTemplate: `${__dirname}/src/redirect-template.js`,

      // Optional HTML contents to inject into REPL.
      // Defaults to `<div id="root"></div>`.
      // e.g. '<div id="root"></div>'
      html: '',

      // Optional externals to load from a CDN.
      // e.g. '//unpkg.com/react/umd/react.development.js'
      externals: [],

      // Include CSS with matching name.
      // If set to `true`, when specifying `file1.js` as example file,
      // it will try to inject the CSS in `file1.css` if the file exists,
      // otherwise the default behaviour is preserved
      includeMatchingCSS: false,
    },

    codesandbox: {
      // Optional HTML contents to inject into REPL.
      // Defaults to `<div id="root"></div>`.
      // e.g. '<div id="root"></div>'
      html: '',

      // Optional runtime dependencies to load from NPM.
      // e.g. ['react', 'react-dom'] or ['react@15', 'react-dom@15']
      dependencies: [],
    }
  },
},*/	
  
  ],
};