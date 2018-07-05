// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/pages/500.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("../layout.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          content: {
              renderBody: function renderBody(out) {
                out.w("<div class=\"container mt-2\"><h2>Breath deeply. Stay Calm.</h2><h5>Server Error (500)</h5><p>An error has occurred. A team of highly trained monkeys has been dispatched to deal with this situation.</p><p>If you need immediate help please please contact me directly please contact me directly by email at <a href=\"mailto:ryanleeder@gmail.com\">ryanleeder@gmail.com</a> or phone me on <a href=\"tel:+61411017504\">+61 411 017 504</a>. Thank you for your patience.</p><p class=\"text-center\"><a class=\"btn btn btn-outline-primary\" href=\"/\" role=\"button\">Home</a></p></div>");
              }
            },
          [hasRenderBodyKey]: true
        }, {
          title: "Server Error",
          class: "server-error"
        })
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/pages/500.marko",
    tags: [
      "../layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
