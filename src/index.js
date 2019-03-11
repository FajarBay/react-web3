import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App';

const items = [
  {
      name : 'IpRed',
      color : 'Merah',
      img : 'red.jpg',
  },
  {
    name : 'IpYellow',
    color : 'Kuning',
    img : 'yellow.jpg',
  },
  {
    name : 'IpGreen',
    color : 'Hijau',
    img : 'green.jpg',
  },
  {
    name : 'IpBlue',
    color : 'Biru',
    img : 'blue.jpg',
  },
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);
