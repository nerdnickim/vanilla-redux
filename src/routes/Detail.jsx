import React from "react";
import { connect } from "react-redux";

class Detail extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			toDo: this.props.toDo,
		};
	}
	render() {
		const {
			toDo: { text, id },
		} = this.state;
		return (
			<>
				<h1>{text}</h1>
				<h5>created at: {id}</h5>
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const {
		match: {
			params: { id },
		},
	} = ownProps;

	return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
