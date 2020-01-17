import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, getByText, fireEvent} from '@testing-library/react';
import * as rt1 from '@testing-library/react';

test('App renders without crashing', () => {
  render( <App/>)

});


test('Nav title', () => {
  const { getByText } = rt1.render(<App />);
  getByText(/dark/i)
})

//test for nav title

test('nav toggle rendered', ()=>{

  const app = render(<App />)
  const navBtn = app.getByTestId('nav');
  const toggle = app.getByTestId('nav');
  fireEvent.click(navBtn)
  expect(toggle.textContent).toBe('');
  })
  //test for nav toggle click

