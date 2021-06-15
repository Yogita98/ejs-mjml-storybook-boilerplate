import { storiesOf } from '@storybook/html'
import htmlTemplate from '../components/template.html'

console.log(htmlTemplate)
storiesOf('email', module)
  .add('with text', () => htmlTemplate)