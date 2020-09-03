const IndexedContent = require('../models/indexedContent');
const cheerio = require('cheerio');
const axios = require('axios');


const indexedContentControllers = {
  post: () => {
    return async (req, res) => {
      try {
      	let url;
      	if ( req.body.url.includes('http') ) url = req.body.url
				else if( req.body.url.includes('www.') ) url = req.body.url.replace(/^www./g, 'https://')
				else  url = 'https://' + req.body.url
				
        IndexedContent.find({ address: url }, async (error, content) => {
          if (error) return res.status(400).send(error);
          try{
						if (!content.length) {
							const page = await axios.get(url);
							const marking = JSON.stringify(page.data)
		
							const $ = cheerio.load(marking);
		
							const h1 = $('h1').map(function(i, el) {
								const text = $(this).text();
								return text.replace(/\\n/g, '');
							}).get()
		
							const h2 = $('h2').map(function(i, el) {
								const text = $(this).text();
								return text.replace(/\\n/g, '');
							}).get()
		
							const h3 = $('h3').map(function(i, el) {
								const text = $(this).text();
								return text.replace(/\\n/g, '');
							}).get()
		
							const link = $('link').map(function (i, el) {
								const text = $(this).attr('href')
								return text.replace(/\\/g, '');
							}).get()
		
							const filteredLink = link.filter((item, pos) => {
								return item.includes('http');
							})
		
							const content = {
								address: req.body.url,
								indexedContent: {
									h1: h1,
									h2: h2,
									h3: h3,
									link: filteredLink
								}
							};
		
							const indexedContent = new IndexedContent(content);
							const savedContent = await indexedContent.save();
							return res.status(200).send(savedContent);
						} else {
							return res.status(200).send(...content);
						}
					} catch (error) {
						res.status(400).send(error);
					}
				})
      } catch (error) {
        res.status(400).send(error);
      }
    };
  }
}

module.exports = indexedContentControllers;