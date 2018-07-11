// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/page-header.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header><nav class=\"navbar navbar-expand-md navbar navbar-expand-md navbar-dark fixed-top bg-dark\" id=\"HeaderNav\" aria-label=\"Main Menu\"><div class=\"container\"><input type=\"checkbox\" id=\"navbar-toggle-cbox\" class=\"d-none\"><a class=\"navbar-brand js-scroll-trigger\" href=\"/#page-top\"><object data=\"/img/logo.svg\" class=\"logo img-fluid\" type=\"image/svg+xml\"><img src=\"/img/logo.jpg\" class=\"logo img-fluid\" alt=\"Ryan Leeder\"></object></a><button class=\"navbar-toggler hide-js-element\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"navbar-toggler hide-js-fallback-element\"><label for=\"navbar-toggle-cbox\" class=\"navbar-toggler-icon collapsed\"></label></div><div class=\"collapse navbar-collapse justify-content-stretch\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item home\"><a class=\"nav-link js-scroll-trigger\" href=\"/#page-top\" data-toggle=\"title-tooltip\" title=\"Home is where the &lt;body> tag starts and the &lt;/head> tag left off.\"><div class=\"front\"><i class=\"fas fa-home\"></i></div><div class=\"back\"><span>Home</span></div></a></li><li class=\"nav-item about\"><a class=\"nav-link js-scroll-trigger\" href=\"/#about\" data-toggle=\"title-tooltip\" title=\"If you're just curious about my story here is a little bit about me.\"><div class=\"front\"><i class=\"fas fa-user\"></i></div><div class=\"back\"><span>About</span></div></a></li><li class=\"nav-item skills\"><a class=\"nav-link js-scroll-trigger\" href=\"/#skills\" data-toggle=\"title-tooltip\" title=\"These days I juggle a range professional skills and abilities. If you are interested in knowing more, click here.\"><div class=\"front\"><i class=\"fas fa-clipboard-check\"></i></div><div class=\"back\"><span>Skills</span></div></a></li><li class=\"nav-item experience\"><a class=\"nav-link js-scroll-trigger\" href=\"/#experience\" data-toggle=\"title-tooltip\" title=\"Shed some light on my work history and career accomplishments to date.\"><div class=\"front\"><i class=\"fab fa-black-tie\"></i></div><div class=\"back\"><span>Experience</span></div></a></li><li class=\"nav-item portfolio\"><a class=\"nav-link js-scroll-trigger\" href=\"/#portfolio\" data-toggle=\"title-tooltip\" title=\"The grandeur that you are about to browse through is a collection of websites, software and services that I've conceived, designed and programmed.\"><div class=\"front\"><i class=\"fas fa-camera-retro\"></i></div><div class=\"back\"><span>Portfolio</span></div></a></li><li class=\"nav-item contact\"><a class=\"nav-link js-scroll-trigger\" href=\"/#contact\" data-toggle=\"title-tooltip\" title=\"Interested in working together? Me too. Let's chat! Do you have a new project forthcoming? You may be surprised where our conversations lead us. Whether you're looking for help, have a question about my services, or just want to chat - you've come to the right place.\"><div class=\"front\"><i class=\"fas fa-comments\"></i></div><div class=\"back\"><span>Contact</span></div></a></li></ul></div></div></nav></header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/page-header.marko"
  };
