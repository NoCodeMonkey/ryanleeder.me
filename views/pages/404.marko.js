// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/pages/404.marko",
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
                out.w("<div class=\"container mt-2\"><h2>Opps!</h2><h5>Page Not Found (404)</h5><p>The page you're trying to access doesn't appear to exist. Please check the address of the page you were looking for, or go back to the <a href=\"/\">home</a> page.</p><p class=\"text-center\"><a class=\"btn btn btn-outline-primary\" href=\"/\" role=\"button\">Home</a></p></div>");
              }
            },
          [hasRenderBodyKey]: true
        }, {
          title: "Page Not Found",
          class: "not-found"
        })
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/pages/404.marko",
    tags: [
      "../layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
