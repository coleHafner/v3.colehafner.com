import * as React from 'react';
import Filter from './Filter';
import Results from './Results';
import axios from 'axios';
import { Project } from '../../models';

interface State {
	allProjects: Project[];
	selectedProjects: Project[];
}

export default class Portfolio extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			allProjects: [],
			selectedProjects: [],
		};
	}

	componentDidMount(): void {
		const url = 'https://1639u7vxbe.execute-api.us-west-2.amazonaws.com/dev/projects';
		const apiKey = '0VS7jwXhIe68KNSSgrosmzS9t26eXNb1xwT4pGjj';

		axios.get(url, { headers: { 'X-Api-Key': apiKey } })
			.then((res: any) => {
				const allProjects: Project[] = res.data && res.data.projects
					? res.data.projects
					: [];

				if (!allProjects.length) {
					throw new Error('Cannot retrieve projects');
				}

				const selectedProjects = allProjects.slice();
				this.setState({ allProjects, selectedProjects });
			})
			.catch(err => {
				console.log('err', err);
			});
	}

	onFilterChange(selectedTags: string[]): void {
		let selectedProjects: Project[] = this.state.allProjects.slice();

		if (selectedTags.length) {
			selectedProjects = this.state.allProjects.filter((project: Project): boolean => {
				let doesInclude: boolean = false;

				for (let i: number = 0, len: number = selectedTags.length; i < len; ++i) {
					if (project.tags.indexOf(selectedTags[i]) > -1) {
						doesInclude = true;
						break;
					}

				}

				return doesInclude;
			});
		}

		this.setState({ selectedProjects });
	}

	render() {
		return (
			<div className="projects">
				<Filter
					onFilterChange={this.onFilterChange.bind(this)}
					totalResults={this.state.selectedProjects.length}
				/>
				<Results projects={this.state.selectedProjects} />
			</div>
		);
	}
}