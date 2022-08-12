import { themes, create } from '@storybook/theming'
import logo from '../assets/logos/sci-kmitl-logo.png'

export default create({
  ...themes.dark,
  brandTitle: 'Sci KMITL Storybook',
  brandImage: logo,
})
