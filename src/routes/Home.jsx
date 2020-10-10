import React from "react";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			text: "",
		});
	};

	onChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					value={this.state.text}
					onChange={this.onChange}
					placeholder="todo"
				/>
				<button>add</button>
			</form>
		);
	}
}

export default Home;
