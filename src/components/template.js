import template from './template.mjml'
import mjml2html from 'mjml'

const htmlString = mjml2html(template).html

console.log(htmlString)

export default htmlString