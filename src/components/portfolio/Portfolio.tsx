import * as React from 'react';
import axios from 'axios';

import Filter from './Filter';
import { Results } from './Results';
import { Project, getTitle } from '../../utils';

interface State {
	allProjects: Project[];
	selectedProjects: Project[];
	tags: string[];
}

export default class Portfolio extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			allProjects: [],
			selectedProjects: [],
			tags: [],
		};
	}

	componentDidMount(): void {
		const url = 'https://1639u7vxbe.execute-api.us-west-2.amazonaws.com/dev/projects';
		const apiKey = '0VS7jwXhIe68KNSSgrosmzS9t26eXNb1xwT4pGjj';
		document.title = getTitle('Portfolio');

		axios.get(url, { headers: { 'X-Api-Key': apiKey } })
			.then((res: any) => {
				const allProjects: Project[] = res.data && res.data.projects
					? res.data.projects
					: [];

				if (!allProjects.length) {
					throw new Error('Cannot retrieve projects');
				}

				let allTags: string[] = [];
				allProjects.forEach(project => {
					allTags = allTags.concat(project.tags);
				});

				const tags = allTags.filter((tag: string, curIndex: number, allTags: string[]): boolean => {
					return allTags.indexOf(tag) === curIndex;
				});

				tags.sort();
				const selectedProjects = allProjects.slice();
				this.setState({ allProjects, selectedProjects, tags });
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
					tags={this.state.tags}
				/>
				<Results projects={this.state.selectedProjects} />
			</div>
		);
	}
}