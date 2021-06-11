const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ejs$/,
    loaders: ['ejs-compiled-loader'],
    include: path.resolve(__dirname, '../src/components')
  })

  config.module.rules.push({
    test: /\.mjml$/,
    loaders: ['webpack-mjml-loader'],
    include: path.resolve(__dirname, '../src/components')
  })

  // config.node = {fs: 'empty'};

  return config
}

// const fetch = require("node-fetch");
// const mustache = require("mustache");
// const mjml = require("mjml");

// const templateData = {
//     "user": "John"
// }

// const mjmlTemplate = `
// <mjml>
//   <mj-body>
//     <mj-section>
//       <mj-column>
//         <mj-image width="100px" src="https://mjml.io/assets/img/logo-small.png"></mj-image>
//         <mj-divider border-color="#F45E43"></mj-divider>
//         <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello {{user}}</mj-text>
//       </mj-column>
//     </mj-section>
//   </mj-body>
// </mjml>
// `

// const renderedMJML = mustache.render(mjmlTemplate, templateData);

// const html =  mjml(renderedMJML).html;
// // don't forget the `.html`

