import React from "react";
import { connect } from "react-redux";

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
				<ul></ul>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return { toDos: state };
};

export default connect(mapStateToProps)(Home);
