import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Form = ({addUser, updUser, selectedUser, setShowForm}) => {

	const {register, handleSubmit, reset} = useForm()

	  useEffect(() => {
    if (selectedUser) {
      reset(selectedUser)
    } else {
      emptyForm()
    }
  }, [selectedUser])

	const submit = (data) => {
    if (selectedUser) {
      updUser(data) 
      setShowForm(false)
    } else {
      addUser(data)
      emptyForm() 
    }
  }

	 // Empty Form

	 const emptyForm = () => {
    reset(
        {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
			birthday: ""
        }
    )
  }
	return (
		<div className="form__container">

			<form onSubmit={handleSubmit(submit)} className="form">

				<div className="btn__exit-container">
					<button type="submit" className="btn__exit" onClick={() => setShowForm(false)}><i className='bx bx-x'></i></button>
				</div>

				<div className="input__container">
					<label htmlFor="first-name" className="input__title">Name: </label>
					<input type="text" id="first-name" className="input" {...register('first_name')} />
				</div>

				<div className="input__container">
					<label htmlFor="last-name" className="input__title">Last Name: </label>
					<input type="text" id="last-name" className="input" {...register('last_name')} />
				</div>

				<div className="input__container">
					<label htmlFor="email" className="input__title">Email: </label>
					<input type="email" id="email" className="input" {...register('email')} />
				</div>

				<div className="input__container">
					<label htmlFor="password" className="input__title">Password: </label>
					<input type="password" id="password" className="input" {...register('password')} />
				</div>

				<div className="input__container">
					<label htmlFor="birthday" className="input__title">D.O.B: </label>
					<input type="date" id="birthday" className="input" {...register('birthday')} />
				</div>

				<div className="btn__container">
					<button type="submit" className="btn">Add User</button>
				</div>

			</form>

		</div>
	);
};

export default Form;