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

  out.w("<footer role=\"contentinfo\"><div class=\"footer-copyright text-center\"><div class=\"container\"><div class=\"row py-4 d-flex align-items-center\"><div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">&copy; Copyright " +
    marko_escapeXml(year) +
    " Ryan Leeder</div><div class=\"col-md-6 col-lg-7 text-center text-md-right\"><a href=\"https://www.linkedin.com/in/ryanleeder/\" class=\"li-ic\"><i class=\"fa fa-linkedin white-text mr-4\"> </i></a><a href=\"https://twitter.com/nocodemonkey\" class=\"tw-ic\"><i class=\"fa fa-twitter white-text mr-4\"> </i></a><a href=\"https://github.com/nocodemonkey\" class=\"gh-ic\"><i class=\"fa fa-github white-text mr-lg-4\"> </i></a></div></div></div></div></footer>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/page-footer.marko"
  };
