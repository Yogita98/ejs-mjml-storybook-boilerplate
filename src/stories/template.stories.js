import { storiesOf } from '@storybook/html'
import emailTemplate from '../components/template.mjml'

storiesOf('email', module)
  .add('with text', () => emailTemplate)