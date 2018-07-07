// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/tag-cloud.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"tag-cloud\"><span>.NET Core</span><span>MVC &amp; Web Api</span><span>Azure</span><span>Amazon EC2</span><span>T-SQL</span><span>Javascript</span><span>TypeScript</span><span>jQuery</span><span>Node.js</span><span>Marko</span><span>Vue.js</span><span>MongoDB</span><span>HTML5</span><span>CSS3</span><span>Git</span><span>Bootstrap</span></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/tag-cloud.marko"
  };
