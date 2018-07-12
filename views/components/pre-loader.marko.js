// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/pre-loader.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var loadingMessages = [
    'The server is powered by a lemon and two electrodes.',
    'The last time I tried this the monkey didn\'t survive. Let\'s hope it works better this time.',
    'My other load screen is much faster. You should try that one instead.',
    'The version I have of this in testing has much funnier load screens.',
    'Yes there really are magic elves with an abacus working frantically in here.',
    'Time is an illusion. Loading time doubly so.',
    '1,000,000 bottles of beer on the wall...',
    'Go ahead, hold your breath and do an ironman plank till loading completes.',
    'Never let a computer know you\'re in a hurry.',
    'Shovelling coal into the server.',
    'Discovering new ways of making you wait...',
    'Warming up the processors...',
    'Counting backwards from infinity...',
    'Please be patient. The website should finish loading in six to eight weeks.',
    'Go get a coffee or something. This is going to take a while.'
  	];
  	var randomMessage = loadingMessages[Math.floor(Math.random()*loadingMessages.length)];

  out.w("<div class=\"pre-loader hide-js-element\"><div class=\"row h-100 justify-content-center\"><div class=\"my-auto text-center\"><div class=\"pre-loader-header\"><h2>Loading</h2><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class=\"pre-loader-text text-justify\">" +
    marko_escapeXml(randomMessage) +
    "</div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/pre-loader.marko"
  };
