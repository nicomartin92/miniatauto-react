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
import Toaster from '../components/Toaster/Toaster';
import List from '../components/List/List';

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


/* toaster */
export const toasterProps = {
  url: '/#',
  succes: 'succes',
  text: 'Renault Clio 4 RS',
  image: './cars/renault/renault-clio-4-rs.jpg'
};

export const actions = {
  toastDisplay: action('toastDisplay')
};

storiesOf('Toaster', module)
  .addDecorator(story => (<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>))
  .add('default', () => <Toaster item={{ ...toasterProps }} {...actions} />);

/* List */
export const listProps = {
  available: 'true',
  image: './cars/renault/renault-clio-4-rs.jpg',
  model: 'Clio 4',
  title: 'title',
  brand: 'renault',
  version: 'rs',
  year: '2017',
  stock: 1,
  id: 1,
  reference: 'G020'
}

storiesOf('List card', module)
  .addDecorator(story => (<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>))
  .add('default', () => <List item={{ ...listProps }} />);
