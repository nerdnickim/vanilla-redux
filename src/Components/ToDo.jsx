import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

class List extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			id: this.props.id,
			onBtnClick: this.props.onBtnClick,
		};
	}
	render() {
		const { text, onBtnClick, id } = this.state;

		return (
			<li>
				<Link to={`/${id}`}>{text}</Link>
				<button onClick={onBtnClick}>DEL</button>
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onBtnClick: () => dispatch(remove(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(List);
