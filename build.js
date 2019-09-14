'use strict'

// Pull in our modules
const boxen = require('boxen')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('          Ian Crowther'),
  handle: chalk.white('Senior Engineer'),
  skills: chalk.gray('- Vue | Node | Kubernetes -'),
  github: chalk.gray('https://github.com/iancrowther'),
  linkedin: chalk.gray('https://linkedin.com/in/iancrowther'),
  twitter: chalk.gray('https://twitter.com/iancrowther'),
  npm: chalk.gray('https://npmjs.com/~iancrowther'),
  web: chalk.gray('https://iancrowther.co.uk'),
  npx: chalk.white('npx iancrowther'),

  labelSkills: chalk.white.bold('     Skills:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

const output = `${data.name} / ${data.handle}
            ${data.skills}

${data.labelWeb}  ${data.web}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelGitHub}  ${data.github}
${data.labelTwitter}  ${data.twitter}
${data.labelnpm}  ${data.npm}

${data.labelCard}  ${data.npx}
`

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
