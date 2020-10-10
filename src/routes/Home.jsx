import React from "react";
import { connect } from "react-redux";
import ToDo from "../Components/ToDo";
import { actionCreators } from "../store";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addToDo(this.state.text);
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
				<ul>
					{this.props.toDos.map((toDo) => (
						<ToDo {...toDo} key={toDo.id} />
					))}
				</ul>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToDo: (text) => dispatch(actionCreators.addToDo(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
