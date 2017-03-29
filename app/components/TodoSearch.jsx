var React = require('react');

var TodoSearch = React.createClass({
	handleSeach: function(){
		var showCompleted = this.refs.showCompleted.checked;
		var seachText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function (){
		return (
			<div>
				<div>
					<input type="text" ref="seachText" placeholder="Search todos" onChange={this.handleSeach}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
						Show completed todos
					</label>

				</div>
			</div>
		)
	}

});

module.exports = TodoSearch;