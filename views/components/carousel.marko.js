// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/carousel.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"carousel\"><div class=\"carousel-inner\"><input class=\"carousel-open d-none\" type=\"radio\" id=\"carousel-1\" name=\"carousel\" aria-hidden=\"true\" checked=\"checked\"><div class=\"carousel-item\"><blockquote><p class=\"quotation\">Ryan is a talented and creative, designer, architect and developer. Unleashed him and he will never disappoint.</p><footer>Steve Dumbrell</footer></blockquote></div><input class=\"carousel-open d-none\" type=\"radio\" id=\"carousel-2\" name=\"carousel\" aria-hidden=\"true\"><div class=\"carousel-item\"><blockquote><p class=\"quotation\">Ryan is highly highly motivated and responsible resource to work with. Whilst working with Webit Online, when we encountered any technical issues, he was quick to suggest workaround solutions and with his positive attitude and enthusiasm for his work, the issues were resolved with satisfaction. An absolute pleasure to work with and a real asset for a team!</p><footer>Harish Saini</footer></blockquote></div><input class=\"carousel-open d-none\" type=\"radio\" id=\"carousel-3\" name=\"carousel\" aria-hidden=\"true\"><div class=\"carousel-item\"><blockquote><p class=\"quotation\">I worked with Ryan at Webit Online. He enjoyed a challenge and developing new online solutions. He was able to work to very tight deadlines and on many occasions would work round the clock to complete a project. Ryan would make a great contribution to any company.</p><footer>Lisa Fish</footer></blockquote></div><label for=\"carousel-3\" class=\"carousel-control prev control-1\">‹</label><label for=\"carousel-2\" class=\"carousel-control next control-1\">›</label><label for=\"carousel-1\" class=\"carousel-control prev control-2\">‹</label><label for=\"carousel-3\" class=\"carousel-control next control-2\">›</label><label for=\"carousel-2\" class=\"carousel-control prev control-3\">‹</label><label for=\"carousel-1\" class=\"carousel-control next control-3\">›</label><ol class=\"carousel-indicators js-hide\"><li><label for=\"carousel-1\" class=\"carousel-bullet\">•</label></li><li><label for=\"carousel-2\" class=\"carousel-bullet\">•</label></li><li><label for=\"carousel-3\" class=\"carousel-bullet\">•</label></li></ol></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/carousel.marko"
  };
