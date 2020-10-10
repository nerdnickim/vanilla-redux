import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li>
				{this.props.text}
				<button onClick={this.props.onBtnClick}>DEL</button>
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(List);
