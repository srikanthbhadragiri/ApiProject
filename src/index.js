'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import classes from './index.css';
import PicOfDay from './components/PicOfDay';

ReactDOM.render(
	<PicOfDay />,
	document.getElementById('root')
);
