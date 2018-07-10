// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/skills.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeStyle = marko_helpers.xc,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar");

function render(input, out, __component, component, state) {
  var data = input;

  const _ = require('lodash'),
        categories = require('../../config/skills.json');
  
  var ID = function (name) {
    return `${name.replace(/[\W_]+/g, "_").toLowerCase()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  var categoriesWithId = _.map(categories, o => _.extend({ id: ID(o.name) }, o));

  marko_forEach(categoriesWithId, function(category) {
    out.w("<style>\n  .no-js #" +
      marko_escapeStyle(category.id) +
      "_tab:checked ~ .tab-content > #" +
      marko_escapeStyle(category.id) +
      " {\n    display: block;\n  }\n  .no-js #" +
      marko_escapeStyle(category.id) +
      "_tab:checked ~ .nav-tabs > .nav-item > #" +
      marko_escapeStyle(category.id) +
      "_label {\n    color: #fff;\n  \tbackground-color: #006fff;\n  }\n  .no-js #" +
      marko_escapeStyle(category.id) +
      "_tab:checked ~ .nav-tabs > .nav-item > #" +
      marko_escapeStyle(category.id) +
      "_label::after {\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    margin-top: -.5rem;\n    content: \"\";\n    border-top: .5rem solid transparent;\n    border-bottom: .5rem solid transparent;\n    border-left: .5rem solid #006fff;\n  }\n  .no-js #" +
      marko_escapeStyle(category.id) +
      "_tab:not(:checked) ~ .nav-tabs > .nav-item > #" +
      marko_escapeStyle(category.id) +
      "_label:hover {\n    color: #fff;\n  \tbackground-color: #ff9000;\n  }\n</style>");
  });

  if (categoriesWithId && categoriesWithId.length) {
    out.w("<p>List of categorised skills used throughout my development career. Click on a category link e.g. \"<span class=\"abbreviate abbreviate-lg\" data-abbreviated-text=\"" +
      marko_escapeXmlAttr(categoriesWithId[0].abbreviation) +
      "\"><span>" +
      marko_escapeXml(categoriesWithId[0].name) +
      "</span></span>\" to see the relevant subset.</p>");
  }

  if (categoriesWithId && categoriesWithId.length) {
    out.w("<div class=\"d-flex flex-row mt-2 tab-content-skills\">");

    var for__5 = 0;

    marko_forEachWithStatusVar(categoriesWithId, function(category, loop) {
      var keyscope__6 = "[" + ((for__5++) + "]");

      if (loop.isFirst()) {
        out.w("<input class=\"tab-state\" type=\"radio\" name=\"tabs\" checked=\"checked\" id=\"" +
          marko_escapeXmlAttr(category.id) +
          "_tab\">");
      } else {
        out.w("<input class=\"tab-state\" type=\"radio\" name=\"tabs\" id=\"" +
          marko_escapeXmlAttr(category.id) +
          "_tab\">");
      }
    });

    out.w("<ul class=\"nav nav-tabs nav-tabs-vertical nav-tabs-left\">");

    marko_forEachWithStatusVar(categoriesWithId, function(category, loop) {
      out.w("<li class=\"nav-item\">");

      let tabClass = 'nav-link';

      if (loop.isFirst()) {
        tabClass += ' active';
      }

      out.w("<a href=\"#" +
        marko_escapeXmlAttr(category.id) +
        "\" class=\"" +
        marko_escapeXmlAttr(tabClass) +
        " hide-js-element\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"" +
        marko_escapeXmlAttr(category.id) +
        "\"><div class=\"d-flex flex-row align-items-center\"><div class=\"category-icon\"><i class=\"" +
        marko_escapeXmlAttr(category.icon) +
        "\" aria-hidden=\"true\"></i></div><div class=\"nav-link-title\"><span class=\"abbreviate abbreviate-lg\" data-abbreviated-text=\"" +
        marko_escapeXmlAttr(category.abbreviation) +
        "\"><span>" +
        marko_escapeXml(category.name) +
        "</span></span></div></div></a><label id=\"" +
        marko_escapeXmlAttr(category.id) +
        "_label\" for=\"" +
        marko_escapeXmlAttr(category.id) +
        "_tab\" class=\"checkbox-label hide-js-fallback-element\"><span class=\"d-flex flex-row align-items-center\"><span class=\"category-icon\"><i class=\"" +
        marko_escapeXmlAttr(category.icon) +
        "\" aria-hidden=\"true\"></i></span><span class=\"nav-link-title\"><span class=\"abbreviate abbreviate-lg\" data-abbreviated-text=\"" +
        marko_escapeXmlAttr(category.abbreviation) +
        "\"><span>" +
        marko_escapeXml(category.name) +
        "</span></span></span></span></label></li>");
    });

    out.w("</ul><div class=\"tab-content pre-scrollable\">");

    var for__26 = 0;

    marko_forEachWithStatusVar(categoriesWithId, function(category, loop) {
      var keyscope__27 = "[" + ((for__26++) + "]");

      out.w("<div class=\"tab-pane\" id=\"" +
        marko_escapeXmlAttr(category.id) +
        "\" role=\"tabpanel\"><h5>" +
        marko_escapeXml(category.name) +
        "</h5>");

      if (category.skills && category.skills.length) {
        out.w("<div class=\"skills-matrix\">");

        var for__31 = 0;

        marko_forEach(category.skills, function(skill) {
          var keyscope__32 = "[" + (((for__31++) + keyscope__27) + "]");

          out.w("<div class=\"skill\">");

          if (skill.description) {
            out.w("<div class=\"skill-title\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"" +
              marko_escapeXmlAttr(skill.description) +
              "\">" +
              marko_escapeXml(skill.name) +
              "<b class=\"hide-js-fallback-element skill-competency\" data-offset=\"" +
              marko_escapeXmlAttr(100 - skill.competency) +
              "\">" +
              marko_escapeXml(skill.competency) +
              "%</b></div>");
          } else {
            out.w("<div class=\"skill-title\">" +
              marko_escapeXml(skill.name) +
              "<b class=\"hide-js-fallback-element skill-competency\" data-offset=\"" +
              marko_escapeXmlAttr(100 - skill.competency) +
              "\">" +
              marko_escapeXml(skill.competency) +
              "%</b></div>");
          }

          out.w("<div class=\"skill-bar\" data-bar-width=\"" +
            marko_escapeXmlAttr(skill.competency) +
            "\"></div></div>");
        });

        out.w("</div>");
      } else {
        out.w("<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\"><strong>An Error Occurred:</strong> Category has no skills. <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");
      }

      out.w("</div>");
    });

    out.w("</div></div>");
  } else {
    out.w("<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\"><strong>An Error Occurred:</strong> Cannot load skills data from local JSON file. <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/skills.marko"
  };
