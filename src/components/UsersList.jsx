
const UsersList = ({ usersData, selectUser, getWarning, setShowForm }) => {
	return (
		<>
			{
				usersData?.map(user => {
					return (
						<div key={user.id} className="card">

							<div className="card__name">
								<h2>{user?.first_name} {user.last_name}</h2>
							</div>

							<div className='card__info'>
								<p className='card__email'>Email:</p>
								<p className='card__email-p'>{user.email}</p>
								<p className='card__birthday'>D.O.B:</p>
								<p className='card__birthday-p'>{user.birthday}</p>
							</div>

							<div className="card__btn-container">
								<button className='card__btn' onClick={() => getWarning(user)}><i className='bx bx-trash bx-sm'></i></button>
								<button className='card__btn' onClick={() => {
									selectUser(user)
									setShowForm(true)
								}}><i className='bx bx-edit-alt bx-sm' ></i></button>
							</div>

						</div>
					)
				})
			}
		</>
	);
};

export default UsersList;