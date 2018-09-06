import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component<any, any> {
	render() {
		return (
			<div className="app-nav clearfix visible no-print">
				<div className="inner">
					<div className="logo"><span>CH</span></div>
					<ul>
						<li>
							<NavLink to="/" exact activeClassName="active">About</NavLink>
						</li>
						<li>
							<NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
						</li>

						<li>
							<a href="https://coleonsoftware.com" target="_blank">
								Blog
							</a>
						</li>
					</ul>

					<div className="social">
						<a href="mailto:colehafner@gmail.com">
							<i className="fi-mail"></i>
						</a>

						<a href="https://github.com/colehafner" target="_blank">
							<i className="fi-social-github"></i>
						</a>

						<a href="https://www.linkedin.com/in/colehafner" target="_blank">
							<i className="fi-social-linkedin"></i>
						</a>

						<a href="http://colescodeco.tumblr.com" target="_blank">
							<i className="fi-social-tumblr"></i>
						</a>
					</div>
				</div>

				<a href="#" ng-click="toggle()" className="toggle">
					<i className="fi-list"></i>
				</a>
			</div>
		);
	}
}