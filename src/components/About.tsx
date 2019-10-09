import * as React from 'react';
import { getTitle } from '../utils';

export const About: React.FunctionComponent = () => {
	React.useEffect(() => {
		document.title = getTitle('About');
	}, []);

	return (
		<div className="about">
			<h1>Hello, I'm Cole</h1>
			<h3>
				I'm a passionate software engineer, husband, and father.
			</h3>
		</div>
	);
};
