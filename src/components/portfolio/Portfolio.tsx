import * as React from 'react';
import Filter from './Filter';
import Results from './Results';



export default class Portfolio extends React.Component<any, any> {
	onKeyDown($event: any): void {
		if ($event.keyCode === 13) {
			alert('yup. It was enter.');
		}
	}

	render() {
		return (
			<div className="projects">
				<Filter />
				<Results />
			</div>
		);
	}
}