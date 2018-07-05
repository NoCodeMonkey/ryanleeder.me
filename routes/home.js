const nodemailer = require('nodemailer'),
      nodemailerSendgrid = require('nodemailer-sendgrid'),
      moment = require('moment-timezone'),
      requestIp = require('request-ip'),
      fs = require('fs'),
      _ = require('lodash'),
      { body, validationResult } = require('express-validator/check'),
      { sanitizeBody } = require('express-validator/filter');

function loadEmailTemplate(template, locals = {}) {
  return _.template(fs.readFileSync(`./views/email/${template}`))(locals)
}

function randomQuote() {
  var quotes = [
    'Code is like humor. When you have to explain it, it\'s bad.',
    'Code never lies, comments sometimes do.',
    'The proper use of comments is to compensate for our failure to express ourself in code',
    'Simplicity is prerequisite for reliability.',
    'In design, complexity is toxic.',
    'You want it in one line? Does it have to fit in 80 columns?',
    'Talk is cheap, show me the code!',
    'The best way to get a project done faster is to start sooner.',
    'Every good work of software starts by scratching a developer\'s personal itch.',
    'Developer: an organism that turns coffee into code.',
    'The three great virtues of a programmer: laziness, impatience, and hubris.',
    'It is a mistake to think you can solve any major problems just with potatoes.',
    'Weeks of coding can save you hours of planning.',
    'Profanity is the one language all programmers know best.',
    'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    'Only half of programming is coding. The other 90% is debugging.',
    'Code generation, like drinking alcohol, is good in moderation',
    'With enough coffee anything is possible.'
  ];
	return quotes[Math.floor(Math.random()*quotes.length)];
}

module.exports = function (app, nconf) {
  const transport = nodemailer.createTransport(nodemailerSendgrid({
    apiKey: nconf.get('sendgrid:api_key')
  }));

  app.get('/', function(req, res) {
    res.marko(require('../views/pages/index.marko'), {
      recaptcha_site_key: nconf.get('recaptcha:site_key'),
      maps_api_key: nconf.get('maps:api_key'),
      analytics_tracking_id: nconf.get('analytics:tracking_id')
    });
  });

  app.post('/contact', [
    body('token', 'The security token is missing from your request').isLength({ min: 1 }).trim(),
    body('name', 'Name is required').isLength({ min: 1 }).trim(),
    body('email', 'Email is required').isLength({ min: 1 }).trim(),
    body('email', 'Email is not valid').isEmail(),
    body('subject', 'Subject is required').isLength({ min: 1 }).trim(),
    body('message', 'Message is required').isLength({ min: 1 }).trim(),
    sanitizeBody('name').trim().escape(),
    sanitizeBody('email').trim().escape(),
    sanitizeBody('subject').trim().escape(),
    sanitizeBody('message').trim().escape(),
  ], function(req, res) {
    if (req.headers["x-requested-with"] === 'XMLHttpRequest') {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json(422, { errors: errors.array() });
      }
      else {
        var locals = {
          'url': `${req.protocol}://${req.get('host')}${req.originalUrl}`,
          'ip': requestIp.getClientIp(req),
          'subject': req.body.subject,
          'name': req.body.name,
          'email': req.body.email,
          'message': req.body.message,
          'datetime': moment.tz(nconf.get('email:moment_timezone')).format('dddd, MMMM Do YYYY, h:mm A'),
          'quote': randomQuote()
        };
        transport.sendMail({
          to: nconf.get('email:to_address'),
          from: req.body.email,
          subject: `Contact Request: ${req.body.subject}`,
          text: loadEmailTemplate('email.txt', locals),
          html: loadEmailTemplate('email.html', locals)
        }, function(err, info) {
          if (err) {
            res.sendStatus(500);
          } else {
            res.json(200, 'API OK');
          }
        });
      }
    } else {
      res.status(403).send('Access denied');
    }
  });
}
