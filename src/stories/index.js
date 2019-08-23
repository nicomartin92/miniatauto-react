import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router';

// import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import PanelNav from '../components/PanelNav/PanelNav';
import Autocomplete from '../components/Autocomplete/Autocomplete';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

/* storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); */

storiesOf('App', module).add('default', () => <App />);

storiesOf('Header', module)
  .addDecorator(story => (<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>))
  .add('Header', () => <Header />)
  .add('PanelNav', () => <PanelNav />);

storiesOf('Footer', module).add('default', () => <Footer />);

storiesOf('Autocomplete', module).add('default', () => <Autocomplete />);
