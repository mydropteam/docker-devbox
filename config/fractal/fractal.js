'use strict';
const pkg = require('./package.json');
const path = require('path');
const fractal = require('@frctl/fractal').create();
const twigAdapter = require('@frctl/twig');
const twig = twigAdapter({
  handlePrefix: '@components/',
});

const components = fractal.components;
const docs = fractal.docs;
const web = fractal.web;

/*
 * Global project settings.
 */
fractal.set('project.title', 'STAGO EXTRANET');
fractal.set('project.version', '0.1.0');
fractal.set('project.author', 'JPR');

/*
 * Tell Fractal where to look for components.
 */
components.set('path', path.join(__dirname, 'components'));
components.set('build_path', path.join(__dirname, 'build'));
components.set('ext', '.twig');
components.set('engine', '@frctl/twig');
/*
 * Tell Fractal where to look for documentation pages.
 */
docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
web.set('static.path', path.join(__dirname, 'assets'));

/*
 * Further components settings.
 */
// components.set('default.preview', '@fddemo');

/*
 * Further web settings.
 */

web.theme(require('@frctl/mandelbrot')({
  lang: 'en-US',
  skin: 'red',
  // display context data in YAML
  format: 'yaml',
  // which panels to show
  panels: [
    'html',
    'view',
    'context',
    'resources',
    'info',
    'notes',
  ],
}));

web.set('static.mount', path.join(__dirname, 'assets'));
// output files to /build
web.set('builder.dest', path.join(__dirname, 'build'));

module.exports = fractal;