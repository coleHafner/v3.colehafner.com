import * as React from 'react';
import { debounce } from 'typescript-debounce-decorator';

interface State {
	allTags: string[];
	filteredTags: string[];
	selectedTags: string[];
	term: string;
	selectedIndex: number;
}

export default class Filter extends React.Component<{}, State> {
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
	}

	@debounce(100)
	onKeyUp($event: any): void {
		const keyPressed: string = $event.key;

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
				const term: string = $event.target.value || '';
				let filteredTags: string[] = [];

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
				filteredTags = this.state.filteredTags.slice();

			selectedTags.push(this.state.filteredTags[this.state.selectedIndex]);
			filteredTags.splice(this.state.selectedIndex, 1);

			this.setState({
				selectedTags,
				filteredTags,
			});
		}
	}

	render() {
		return (
			<div className="filters">
				<div className="inner">
					<i className="fi-magnifying-glass search-icon"></i>
					<div className="result-count">8 result<span ng-show="ctrl.resultCount !== 1">s</span></div>
					<div style={{ display: this.state.selectedTags.length > 0 ? 'block' : 'none' }}>
						<ul>
							{this.state.selectedTags.map((tag: string, i: number) => {
								return React.createElement('a', { onClick: this.removeTag.bind(this, [i]), href: '#' }, `${tag}`);
							})}
						</ul>
					</div>
					<input type="text" placeholder="Filter by technology" onKeyUp={this.onKeyUp.bind(this)} />
					<div style={{ display: this.state.filteredTags.length > 0 ? 'block' : 'none' }}>
						<ul>
							{this.state.filteredTags.map((tag: string, i: number) => {
								const selectedBgColor = this.state.selectedIndex === i ? 'blue' : 'white';
								const selectedColor = this.state.selectedIndex === i ? 'white' : 'black';
								const selectedStyle = { backgroundColor: selectedBgColor, color: selectedColor };
								return React.createElement('li', { onClick: this.addToSelected.bind(this), style: selectedStyle }, `${tag}`);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}