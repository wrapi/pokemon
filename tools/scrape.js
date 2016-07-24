var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var pluralize = require('pluralize');

var page = 'http://pokeapi.co/docsv2/';

var endpoints = {};

request(
  page, 
  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var sections = {};
      $("h1[id$=section]").each(function(i, h1) {
        var section = $(h1).text().trim();
        var resources = {};
        $(h1).nextUntil('h1','h2').each(function(k, h2) {
          var hashKey = $(h2).attr('id');
          $(h2).nextUntil('h1', 'h3').each(function(j, h3) {
            var h3 = $(h3);
            var path = h3.text().trim();

            // GET api/v2/language/{id or name}
            var ep = path.substr(11);   // GET api/v2/
            var epList = ep.replace(/\{[^\}]+\}/, '');
            ep = ep.replace(/\{[^\}]+\}/, ':id');
            var hash = ep.split('/');
            hash.pop();

            var resource = hash.reduce(function(acc, h) {
              if (0 === h.indexOf('super-')) {
                h = h.substr(6);
                h = 'super' + h.charAt(0).toUpperCase() + h.substr(1);
              }
              acc.push(h.split('-').join('.'));
              return acc;
            },
            []);
            resource = resource.join('.');
            resources[resource] = {
              path: ep,
              listPath: epList,
              doc: url.resolve(page, '#' + hashKey)      
            };
          });
        });
        sections[section] = resources;
      });

      generateJson(sections);
      generateDoc(sections);
    }
  }
);


function generateJson(sections) {
  var json = {};

  for (s in sections) {
    var endpoints = sections[s];
    for (k in endpoints) {
      json[k] = {
        "method": "GET",
        "path": endpoints[k].path
      };

      json[k + '.list'] = {
        "method": "GET",
        "path": endpoints[k].listPath
      };
    }
  }

  console.log(JSON.stringify(json, null, "\t"));
}

function generateDoc(sections) {
  var json = {};

  for (s in sections) {
    console.log('\n### %s', s);
    var endpoints = sections[s];
    for (k in endpoints) {
      console.log('* [%s](%s)', k + '.list', endpoints[k].doc);
      console.log('* [%s](%s)', k, endpoints[k].doc);
      //console.log('[%s](%s) | %s', k, endpoints[k].doc, endpoints[k].desc)
    }
  }
}