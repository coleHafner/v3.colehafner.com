import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';

import './styles.scss';

ReactDOM.render(
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component={About} />
			<Route path="/portfolio" component={Portfolio} />
		</div>
	</Router>,
	document.getElementById('root'),
);