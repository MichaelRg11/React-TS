import { useForm } from "../hooks/useForm"

export const Formularios = () => {

  const { state, email, password, onChange } = useForm({
    email: 'test@test.com',
    password: '1234'
  })

  return (
    <div>
      <h3>Formularios</h3>

      <input type="text" value={email} onChange={({ target }) => onChange(target.value, 'email')} className='form-control' placeholder='Email' />

      <input type="text" value={password} onChange={({ target }) => onChange(target.value, 'password')} className='form-control' placeholder='password' />

      <code>
        <pre>
          {JSON.stringify(state, null, 2)}
        </pre>
      </code>

    </div>
  )
}
