// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/page-header.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header><nav class=\"navbar navbar-expand-md navbar navbar-expand-md navbar-dark fixed-top bg-dark\" id=\"HeaderNav\" aria-label=\"Main Menu\"><div class=\"container\"><input type=\"checkbox\" id=\"navbar-toggle-cbox\" class=\"d-none\"><a class=\"navbar-brand js-scroll-trigger\" href=\"/#page-top\"><object src=\"/img/logo.svg\" class=\"logo img-fluid\" alt=\"Ryan Leeder\"><img src=\"/img/logo.jpg\" class=\"logo img-fluid\"></object></a><button class=\"navbar-toggler hide-js-element\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"navbar-toggler hide-js-fallback-element\"><label for=\"navbar-toggle-cbox\" class=\"navbar-toggler-icon collapsed\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-expanded=\"false\" aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\"></label></div><div class=\"collapse navbar-collapse justify-content-stretch\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" href=\"/#page-top\"><span>Home</span></a></li><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" data-hover=\"ABOUT\" href=\"/#about\"><span>About</span></a></li><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" data-hover=\"SKILLS\" href=\"/#skills\"><span>Skills</span></a></li><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" data-hover=\"EXPERIENCE\" href=\"/#experience\"><span>Experience</span></a></li><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" data-hover=\"PORTFOLIO\" href=\"/#portfolio\"><span>Portfolio</span></a></li><li class=\"nav-item\"><a class=\"nav-link js-scroll-trigger\" data-hover=\"CONTACT\" href=\"/#contact\"><span>Contact</span></a></li></ul></div></div></nav></header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/page-header.marko"
  };
