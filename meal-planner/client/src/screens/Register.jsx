import {useState} from 'react'

export default function Register(props) {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { handleRegister } = props
  
  const handdleChange = (e) => {
    const { name, value } = e.target
    setRegisterData((...prevState) => ({
      ...prevState,
      [name]:value,
    }))
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
