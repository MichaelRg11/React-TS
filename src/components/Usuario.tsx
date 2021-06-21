import { useUser } from '../hooks/useUser';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
  const { user, paginaSiguiente, paginaAnterior } = useUser()

  const renderUser = ({ avatar, first_name, last_name, id, email }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img src={avatar} alt={first_name} style={{ width: 35, borderRadius: 100 }} />
        </th>
        <th>{`${first_name} ${last_name}`} </th>
        <th>{email}</th>
      </tr>
    )
  }

  return (
    <div>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(usuario => renderUser(usuario))
          }
        </tbody>
      </table>
      <button className='btn btn-primary mr-2' onClick={paginaAnterior}>Pagina anterior</button> {' '}
      <button className='btn btn-primary' onClick={paginaSiguiente}>Pagina siguiente</button>
    </div>
  )
}
