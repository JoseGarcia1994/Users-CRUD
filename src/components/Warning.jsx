
const Warning = ({deleteUser, eliminateUser, cancel}) => {
	return (
		<div className="warning__container">
			<div className="warning">
				<h2 className="warning__title">Are you sure you want to delete? <br />{eliminateUser?.name}</h2>
				<button className="warning__btn" type="submit" onClick={() => deleteUser(eliminateUser)}>Delete</button>
				<button className="warning__btn" type="submit" onClick={() => cancel()}>Cancel</button>
			</div>
		</div>

	);
};

export default Warning;