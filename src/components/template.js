var ejs = require("ejs");
var fs = require("fs");
var prettier = require("prettier");
var mjml2html = require('mjml');
const context = {
    message: 'Hello Yogita'
};

const template = ejs.compile(`<mjml>
<mj-body>
    <mj-section>
        <mj-column>
            <mj-image width="100px" src="https://mjml.io/assets/img/logo-small.png"></mj-image>
            <mj-divider border-color="#F45E43"></mj-divider>
            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
                <%= message %>
            </mj-text>
        </mj-column>
    </mj-section>
</mj-body>
</mjml>`,context);

const mjmlTemplate = template(context);
const htmlTemplate = mjml2html(mjmlTemplate).html;
let prettyHtml = prettier.format(htmlTemplate, { parser: "html" });
let outputFile = "./src/components/template.html";
fs.writeFileSync(outputFile, prettyHtml);
