import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../fonts/foundation-icons.css';
import { withRouter } from 'react-router';

interface State {
	navClass: string;
}

class Nav extends React.Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			navClass: '',
		};

		this.props.history.listen((location: any, action: any) => {
			if (this.state.navClass) {
				this.setState({navClass: ''});
			}
		});
	}

	toggleNav(e?: React.MouseEvent): void {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		const navClass: string = !this.state.navClass ? 'visible' : '';
		this.setState({navClass});
	}

	render() {
		const logoStyle = {background: 'url(images/logo.png) center center no-repeat', backgroundSize: '150px'};
		return (
			<div className="app-nav clearfix visible no-print">
				<div className="inner">
					<div className="logo" style={logoStyle}><span>CH</span></div>
					<ul className={this.state.navClass}>
						<li>
							<NavLink to="/" exact activeClassName="active">About</NavLink>
						</li>
						<li>
							<NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
						</li>

						<li>
							<a onClick={e => this.toggleNav()} href="https://medium.com/@colehafner" target="_blank">
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

						<a href="https://twitter.com/colehafner" target="_blank">
							<i className="fi-social-twitter"></i>
						</a>
					</div>
				</div>

				<a href="#" onClick={e => this.toggleNav(e)} className="toggle">
					<i className="fi-list"></i>
				</a>
			</div>
		);
	}
}

export default withRouter(Nav);