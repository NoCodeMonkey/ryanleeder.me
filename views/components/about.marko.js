// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/about.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    carousel_template = marko_loadTemplate(require.resolve("../components/carousel.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  var moment = require('moment');
  var experience = moment().diff('2003-02-01', 'years');

  out.w("<p class=\"lead\">I'm a highly motivated, diligent Software Developer with over " +
    marko_escapeXml(experience) +
    " years hands-on professional experience in the IT industry. During this time I have worked for a variety of clients and companies designing and developing solutions especially within .NET space. I have a broad expertise in both “front end” and “back end” development. Excited and enthusiastic about software development and the web, I do not shy away from a challenge and quickly adopt new technologies and trends. I have a passion for exceptional design and a proven ability to build effective, scalable, multi-tiered solutions. I love solving complex software challenges and have a talent for analyzing business requirements.</p><h5>What others say</h5>");

  include_tag({
      _target: carousel_template
    }, out, __component, "2");

  out.w("<p>If you are looking for an experienced developer who can offer a fresh take on solving your software problems or just want to connect, we should <a href=\"#contact\">talk</a>.</p><p class=\"text-center\"><a class=\"btn btn-outline-primary\" href=\"#contact\" role=\"button\">Get In Touch</a></p>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/about.marko",
    tags: [
      "../components/carousel.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
