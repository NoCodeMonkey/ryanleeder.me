// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/pages/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("../layout.marko")),
    pre_loader_template = marko_loadTemplate(require.resolve("../components/pre-loader.marko")),
    carousel_template = marko_loadTemplate(require.resolve("../components/carousel.marko")),
    skills_template = marko_loadTemplate(require.resolve("../components/skills.marko")),
    tag_cloud_template = marko_loadTemplate(require.resolve("../components/tag-cloud.marko")),
    timeline_template = marko_loadTemplate(require.resolve("../components/timeline.marko")),
    contact_template = marko_loadTemplate(require.resolve("../components/contact.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeScript = marko_helpers.xs,
    marko_merge = require("marko/src/runtime/helper-merge");

function render(input, out, __component, component, state) {
  var data = input;

  var moment = require('moment');
  var experience = moment().diff('2003-02-01', 'years');

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          styles: {
              renderBody: function renderBody(out) {
                out.w("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\" integrity=\"sha256-j+P6EZJVrbXgwSR5Mx+eCS6FvP9Wq27MBRC/ogVriY0=\" crossorigin=\"anonymous\">");
              }
            },
          content: {
              renderBody: function renderBody(out) {
                include_tag({
                    _target: pre_loader_template
                  }, out, __component, "4");

                out.w("<div class=\"jumbotron jumbotron-fluid d-flex align-items-end intro-wrapper\"><div class=\"intro container\"><div class=\"profile-name\"><h2 class=\"txt-animation-lg title\" data-in-effect=\"fadeInDownBig\">Hello, I'm Ryan</h2><h4 class=\"txt-animation-sm\"><span class=\"subtitle\" data-pause=\"2500\" data-type=\"[ &quot;Solutions Strategist.&quot;, &quot;Software Architect.&quot;, &quot;Bug Tamer.&quot;, &quot;Copious Coffee Drinker.&quot;, &quot;I weave code magic to make your ideas come to life.&quot;, &quot;My passion is technology, business and people.&quot; ]\"></span></h4></div><div class=\"profile-picture\"><img src=\"img/me.png\" class=\"img-fluid\" alt=\"Ryan Leeder\"></div></div></div><section class=\"bg-white\"><div id=\"about\" class=\"container\"><h2>About</h2><hr class=\"hline-face\"><p class=\"lead\">I'm a highly motivated, diligent Software Developer with over " +
                  marko_escapeXml(experience) +
                  " years hands-on professional experience in the IT industry. During this time I have worked for a variety of clients and companies designing and developing solutions especially within .NET space. I have a broad expertise in both “front end” and “back end” development. Excited and enthusiastic about software development and the web, I do not shy away from a challenge and quickly adopt new technologies and trends. I have a passion for exceptional design and a proven ability to build effective, scalable, multi-tiered solutions. I love solving complex software challenges and have a talent for analyzing business requirements.</p><h5>What others say</h5>");

                include_tag({
                    _target: carousel_template
                  }, out, __component, "19");

                out.w("<p>If you are looking for an experienced developer who can offer a fresh take on solving your software problems or just want to connect, we should <a href=\"#contact\">talk</a>.</p><p class=\"text-center\"><a class=\"btn btn-outline-primary\" href=\"#contact\" role=\"button\">Get In Touch</a></p></div></section><section class=\"bg-light\"><div id=\"skills\" class=\"container\"><h2>Skills</h2><hr class=\"hline-face\">");

                include_tag({
                    _target: skills_template
                  }, out, __component, "28");

                out.w("<h5>Recently I've worked with these...</h5>");

                include_tag({
                    _target: tag_cloud_template
                  }, out, __component, "30");

                out.w("</div></section><section class=\"bg-white\"><div id=\"experience\" class=\"container\"><h2>Experience</h2><hr class=\"hline-face\"><p>The following is a brief timeline of my professional development experience in reverse chronological order.</p>");

                include_tag({
                    _target: timeline_template
                  }, out, __component, "36");

                out.w("</div></section><section class=\"bg-light\"><div id=\"portfolio\" class=\"container\"><h2>Portfolio</h2><hr class=\"hline-face\"><p>I am currently finalising my Portfolio, please contact me if you require examples of my work. Please check back soon.</p></div></section><section class=\"bg-white\"><div id=\"contact\" class=\"container\"><h2>Contact</h2><hr class=\"hline-face\">");

                include_tag({
                    _target: contact_template,
                    _arg: {
                        recaptcha_site_key: data.recaptcha_site_key
                      }
                  }, out, __component, "46");

                out.w("</div></section>");
              }
            },
          scripts: {
              renderBody: function renderBody(out) {
                out.w("<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js\" integrity=\"sha256-H3cjtrm/ztDeuhCN9I4yh4iN2Ybx/y1RM7rMmAesA0k=\" crossorigin=\"anonymous\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js\" integrity=\"sha256-7sov0P4cWkfKMVHQ/NvnWVqcLSPYrPwxdz+MtZ+ahl8=\" crossorigin=\"anonymous\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js\" integrity=\"sha256-Tvi6rQj7jAzxY1J8UaFlagR6+ZtWVctieK8pFawiY8Q=\" crossorigin=\"anonymous\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/TypewriterJS/1.0.0/typewriter.min.js\" integrity=\"sha256-0GG30XmRuHKTD54lbTLEd01reloWjlnefU09UzmFpzc=\" crossorigin=\"anonymous\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/autosize.js/4.0.2/autosize.min.js\" integrity=\"sha256-dW8u4dvEKDThJpWRwLgGugbARnA3O2wqBcVerlg9LMc=\" crossorigin=\"anonymous\"></script><script src=\"//maps.googleapis.com/maps/api/js?key=" +
                  marko_escapeXmlAttr(data.maps_api_key) +
                  "\"></script><script src=\"//www.google.com/recaptcha/api.js\"></script><script async src=\"//www.googletagmanager.com/gtag/js?id=" +
                  marko_escapeXmlAttr(data.analytics_tracking_id) +
                  "\"></script><script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '" +
                  marko_escapeScript(data.analytics_tracking_id) +
                  "');\n    </script><script src=\"/js/plugins.js\"></script><script src=\"/js/scripts.js\"></script>");
              }
            },
          [hasRenderBodyKey]: true
        }, {
          title: "Full-Stack Web Developer (.NET, C#, HTML, JS) | Ryan Leeder",
          class: "index"
        })
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/pages/index.marko",
    tags: [
      "../layout.marko",
      "../components/pre-loader.marko",
      "../components/carousel.marko",
      "../components/skills.marko",
      "../components/tag-cloud.marko",
      "../components/timeline.marko",
      "../components/contact.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
