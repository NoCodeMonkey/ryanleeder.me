// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/page-footer.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var year = new Date().getFullYear();

  out.w("<footer role=\"contentinfo\"><div class=\"footer-copyright text-center\"><div class=\"container\"><div class=\"row py-1 d-flex align-items-center\"><div class=\"col-6 text-right text-lg-left\">&copy; Copyright " +
    marko_escapeXml(year) +
    " Ryan Leeder</div><div class=\"col-6 text-left text-lg-right\"><a href=\"https://www.linkedin.com/in/ryanleeder/\"><i class=\"fab fa-linkedin white-text mr-4\"> </i></a><a href=\"https://twitter.com/nocodemonkey\"><i class=\"fab fa-twitter-square white-text mr-4\"> </i></a><a href=\"https://github.com/nocodemonkey\"><i class=\"fab fa-github-square white-text\"> </i></a></div></div></div></div></footer>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/page-footer.marko"
  };
