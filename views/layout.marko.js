// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_header_template = marko_loadTemplate(require.resolve("./components/page-header.marko")),
    page_footer_template = marko_loadTemplate(require.resolve("./components/page-footer.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\" class=\"no-js\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>" +
    marko_escapeXml(data.title ? data.title : "Full-Stack Web Developer (.NET, C#, HTML, JS) | Ryan Leeder") +
    "</title><script src=\"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js\" integrity=\"sha256-0rguYS0qgS6L4qVzANq4kjxPLtvnp5nn2nB5G1lWRv4=\" crossorigin=\"anonymous\"></script><meta name=\"description\" content=\"Ryan Leeder - Full Stack Web Developer\"><meta name=\"author\" content=\"Ryan Leeder\"><meta name=\"google-site-verification\" content=\"\">");

  include_tag({
      _target: data.tags
    }, out, __component, "10");

  out.w("<link rel=\"canonical\" href=\"https://www.ryanleeder.me/\"><link rel=\"shortcut icon\" href=\"/img/favicon.ico\" type=\"image/x-icon\"><link rel=\"apple-touch-icon\" href=\"/img/apple-touch-icon.png\"><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/img/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/img/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/img/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/img/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/img/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/img/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/img/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/img/apple-touch-icon-180x180.png\"><link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic\"><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/css/style.min.css\">");

  include_tag({
      _target: data.styles
    }, out, __component, "25");

  out.w("</head><body id=\"page-top\" class=\"" +
    marko_escapeXmlAttr(data.class) +
    "-page\">");

  component_globals_tag({}, out);

  include_tag({
      _target: page_header_template
    }, out, __component, "27");

  out.w("<main id=\"content\" class=\"page-content\">");

  include_tag({
      _target: data.content
    }, out, __component, "29");

  out.w("</main>");

  include_tag({
      _target: page_footer_template
    }, out, __component, "30");

  out.w("<div class=\"back-to-top\"><a href=\"#page-top\"><i class=\"fa fa-arrow-circle-up\"></i></a></div><script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha256-98vAGjEDGN79TjHkYWVD4s87rvWkdWLHPs5MC3FvFX4=\" crossorigin=\"anonymous\"></script><script src=\"//stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>");

  include_tag({
      _target: data.scripts
    }, out, __component, "37");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "38");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/layout.marko",
    tags: [
      "./components/page-header.marko",
      "./components/page-footer.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
