import * as React from 'react';
import { debounce } from 'typescript-debounce-decorator';

interface State {
	allTags: string[];
	filteredTags: string[];
	selectedTags: string[];
	term: string;
	selectedIndex: number;
	projects: [];
}

interface Props {
	onFilterChange: Function;
	totalResults: number;
}

export default class Filter extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			allTags: [
				'angularjs',
				'html',
				'javascript',
				'reactjs',
				'laravel',
				'php',
				'vuejs',
				'typescript',
			],
			selectedTags: [],
			filteredTags: [],
			term: '',
			selectedIndex: 0,
			projects: [],
		};
	}

	removeTag(index: number): void {
		let selectedTags = this.state.selectedTags.slice(),
			filteredTags = this.state.filteredTags.slice();

		filteredTags.push(this.state.selectedTags[index]);
		selectedTags.splice(index, 1);

		this.setState({
			selectedTags,
			filteredTags,
		});

		this.props.onFilterChange(selectedTags);
	}

	@debounce(100)
	onKeyUp($event: any): void {
		const keyPressed: string = $event.key;
		const term: string = $event.target.value || '';

		switch (keyPressed) {
			case 'ArrowDown':
			case 'ArrowUp':
				let selectedIndex: number = this.state.selectedIndex;

				switch ($event.key) {
					case 'ArrowDown':
						if (selectedIndex < (this.state.filteredTags.length - 1)) {
							selectedIndex++;
						}
						break;
					case 'ArrowUp':
						if (selectedIndex > 0) {
							selectedIndex--;
						}
						break;
				}

				this.setState({ selectedIndex });
				break;

			case 'Enter':
				this.addToSelected();
				break;

			default:
				let filteredTags: string[] = [];

				if (keyPressed === 'Backspace' && this.state.term.length === 0) {
					this.removeTag(this.state.selectedTags.length - 1);
				}

				if (term.length) {
					filteredTags = this.state.allTags.filter((tag: string): boolean => {
						const regex: RegExp = new RegExp(term, 'g');
						return regex.test(tag) && !this.state.selectedTags.includes(tag);
					});
				}

				this.setState({
					term,
					filteredTags,
				});
				break;
		}
	}

	private addToSelected() {
		if (this.state.selectedIndex >= 0) {
			let selectedTags = this.state.selectedTags.slice(),
				filteredTags = this.state.filteredTags.slice(),
				selectedIndex = this.state.selectedIndex;

			selectedTags.push(this.state.filteredTags[this.state.selectedIndex]);
			filteredTags.splice(this.state.selectedIndex, 1);

			// if you choose the last one on the list, shift the selected index to the new end of the list
			if (selectedIndex > (filteredTags.length - 1)) {
				selectedIndex = (filteredTags.length - 1);
			}

			this.setState({
				selectedTags,
				filteredTags,
				selectedIndex,
			});

			this.props.onFilterChange(selectedTags);
		}
	}

	render() {
		return (
			<div className="filters">
				<div className="result-count">{this.props.totalResults} result<span ng-show="ctrl.resultCount !== 1">s</span></div>
				<div className="inner">

					{this.state.selectedTags.map((tag: string, i: number) => {
						return React.createElement('div', {}, React.createElement('a', {
							onClick: this.removeTag.bind(this, [i]),
							href: '#',
							className: 'tag',
						},
							React.createElement('span', {}, `${tag}`),
						),
						);
					})}
					<input type="text" placeholder="Filter by technology" onKeyUp={this.onKeyUp.bind(this)} />
				</div>

				<div
					style={{ display: this.state.filteredTags.length > 0 ? 'block' : 'none' }}
					className="auto-complete"
				>
					<ul>
						{this.state.filteredTags.map((tag: string, i: number) => {
							const className: string = this.state.selectedIndex === i ? 'active' : '';
							return React.createElement('li', { onClick: this.addToSelected.bind(this), className }, `${tag}`);
						})}
					</ul>
				</div>

			</div>
		);
	}
}