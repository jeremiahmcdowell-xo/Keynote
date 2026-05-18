const express = require('express');
const less = require('less');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

let compiledCSS = '';

async function compileLess() {
  const lessSource = fs.readFileSync(path.join(__dirname, 'styles/main.less'), 'utf8');
  const variablesSource = fs.readFileSync(path.join(__dirname, 'styles/variables.less'), 'utf8');
  const combined = variablesSource + '\n' + lessSource;

  const result = await less.render(combined, {
    paths: [path.join(__dirname, 'styles')],
    filename: 'main.less'
  });
  compiledCSS = result.css;
  console.log('LESS compiled successfully');
}

const previewHTML = `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Birdseye Theme Preview</title>
  <link rel="stylesheet" href="/theme.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="header-page header-overlay-on full-width-body-off fade-in">

  <div class="wrapper">
    <div class="birdseye-header">
      <div class="nav-wrap">
        <div class="container">
          <div class="logo">
            <a href="#"><span id="wsite-title">Birdseye</span></a>
          </div>
          <div class="nav desktop-nav">
            <ul class="wsite-menu-default">
              <li class="wsite-menu-item-wrap" id="active">
                <a class="wsite-menu-item" href="#">Home</a>
              </li>
              <li class="wsite-menu-item-wrap">
                <a class="wsite-menu-item" href="#">About</a>
              </li>
              <li class="wsite-menu-item-wrap">
                <a class="wsite-menu-item" href="#">Portfolio</a>
              </li>
              <li class="wsite-menu-item-wrap">
                <a class="wsite-menu-item" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
        </div>
      </div>
    </div>

    <div class="banner-wrap wsite-header-section">
      <div class="container">
        <div class="banner">
          <h2>Beautiful Stories,<br>Beautifully Told</h2>
          <p>Photography &middot; Design &middot; Editorial</p>
        </div>
      </div>
    </div>

    <div class="main-wrap">
      <div class="container">
        <h2>Welcome to Birdseye</h2>
        <p>Birdseye gives your website an editorial, photo-first sense of style. With beautiful headline fade effects and navigation elements that transition as you scroll, Birdseye ensures that your content always looks stunning.</p>
        <p>Birdseye's simple color palette allows your photos and content to do the talking. Whether you're a photographer, writer, or creative professional, this theme provides the perfect canvas for your work.</p>
        <blockquote>
          &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
        </blockquote>
        <p>The minimal aesthetic keeps focus on your imagery and writing, while subtle animations and transitions add a layer of polish that sets your site apart from the crowd.</p>
      </div>
      <div class="container">
        <h2>Our Work</h2>
        <p>Explore our portfolio of editorial photography, brand design, and creative projects. Each piece is crafted with intention and care.</p>
        <p>From intimate portraits to sweeping landscapes, our work spans a wide range of styles and subjects. We believe in the power of a single image to tell a complete story.</p>
      </div>
    </div>

    <div class="footer-wrap">
      <div class="wsite-footer">
        <p>&copy; 2026 Birdseye &mdash; All rights reserved.</p>
      </div>
    </div>
  </div>

  <div id="navMobile" class="nav mobile-nav">
    <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
    <ul class="wsite-menu-default">
      <li class="wsite-menu-item-wrap"><a class="wsite-menu-item" href="#">Home</a></li>
      <li class="wsite-menu-item-wrap"><a class="wsite-menu-item" href="#">About</a></li>
      <li class="wsite-menu-item-wrap"><a class="wsite-menu-item" href="#">Portfolio</a></li>
      <li class="wsite-menu-item-wrap"><a class="wsite-menu-item" href="#">Contact</a></li>
    </ul>
  </div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="/assets/custom.js"></script>
  <style>
    /* Preview-only styles to compensate for missing CMS JS */
    body.fade-in .birdseye-header,
    body.fade-in .banner-wrap,
    body.fade-in .main-wrap {
      opacity: 1;
    }
    .birdseye-header {
      background: transparent;
    }
    .banner-wrap.wsite-header-section {
      min-height: 600px;
      display: flex;
      align-items: flex-end;
    }
    .banner-wrap .container {
      padding-top: 120px !important;
    }
    .hamburger {
      display: none;
    }
    @media (max-width: 768px) {
      .desktop-nav { display: none; }
      .hamburger { display: block !important; }
    }
  </style>
</body>
</html>`;

app.get('/', (req, res) => {
  res.send(previewHTML);
});

app.get('/theme.css', async (req, res) => {
  if (!compiledCSS) {
    try {
      await compileLess();
    } catch (err) {
      return res.status(500).send('/* LESS compile error: ' + err.message + ' */');
    }
  }
  res.setHeader('Content-Type', 'text/css');
  res.send(compiledCSS);
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.listen(PORT, '0.0.0.0', async () => {
  try {
    await compileLess();
  } catch (err) {
    console.error('LESS compile error:', err.message);
  }
  console.log(`Birdseye preview running on port ${PORT}`);
});
