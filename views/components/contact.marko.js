// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/contact.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    _preserve_tag = marko_loadTag(require("marko/dist/components/taglib/preserve-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"row contact-row\"><div class=\"col-12 col-md-6\"><div class=\"card h-100\"><div class=\"card-body\"><h5 class=\"card-title\">HAVE A QUESTION OR COMMENT?</h5><h6 class=\"card-subtitle mb-2 text-muted\">I'd love to hear from you.</h6><form class=\"form-horizontal contact-form hide-js-element needs-validation\" method=\"post\" novalidate>");

  var __key8 = __component._h_("7");

  _preserve_tag({
      key: __key8,
      renderBody: function renderBody(out) {
        out.w("<div id=\"recaptcha\" class=\"g-recaptcha\" data-sitekey=\"" +
          marko_escapeXmlAttr(data.recaptcha_site_key) +
          "\" data-size=\"invisible\" data-callback=\"handleSubmit\"></div>");
      }
    }, out);

  out.w("<fieldset><div class=\"form-group\"><div class=\"input-wrapper\"><label for=\"name\" class=\"far fa-user input-icon bigicon\"></label><input id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" class=\"form-control\" autocomplete=\"name\" maxlength=\"256\" required><div class=\"invalid-tooltip\">Please enter your name.</div></div></div><div class=\"form-group\"><div class=\"input-wrapper\"><label for=\"email\" class=\"far fa-envelope input-icon bigicon\"></label><input id=\"email\" name=\"email\" type=\"email\" placeholder=\"Email\" class=\"form-control\" autocomplete=\"email\" maxlength=\"320\" required><div class=\"invalid-tooltip\">Please provide a valid email address.</div></div></div><div class=\"form-group\"><div class=\"input-wrapper\"><label for=\"email\" class=\"far fa-question-circle input-icon bigicon\"></label><input id=\"subject\" name=\"subject\" type=\"text\" placeholder=\"Subject\" class=\"form-control\" maxlength=\"128\" required><div class=\"invalid-tooltip\">Please enter a subject.</div></div></div><div class=\"form-group\"><div class=\"input-wrapper\"><label for=\"message\" class=\"far fa-comment-dots input-icon bigicon\"></label><textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Message\" rows=\"1\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 35px;\" maxlength=\"4096\" required></textarea><div class=\"invalid-tooltip\">Please enter your message.</div></div></div><div class=\"form-group text-center\"><button class=\"btn btn-outline-primary submit-form-btn\">Contact Me</button></div></fieldset></form><p class=\"hide-js-fallback-element\">We are sorry, this feature requires JavaScript to be enabled in your browser.</p><div class=\"modal fade contact-modal\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\">&nbsp;</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\"></button></div></div></div></div></div></div></div><div class=\"col-12 col-md-6\"><div class=\"card h-100\"><div class=\"card-body\"><h5 class=\"card-title\">Contact Details</h5><dl class=\"contact-info\"><dt>Phone</dt><dd><a href=\"tel:+61411017504\">+61 411 017 504</a></dd><dt>Email</dt><dd><a href=\"mailto:ryanleeder@gmail.com\">ryanleeder@gmail.com</a></dd></dl><div id=\"map_container\" class=\"map-container hide-js-element\"></div><div id=\"map\" class=\"map hide-js-element\"></div></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/contact.marko",
    tags: [
      "marko/dist/components/taglib/preserve-tag"
    ]
  };
