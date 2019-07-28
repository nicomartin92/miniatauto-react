import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

/* storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); */

storiesOf('App', module).add('default', () => <App />);

storiesOf('Footer', module).add('default', () => <Footer />);

storiesOf('PanelNav', module).add('default', () => <PanelNav />);