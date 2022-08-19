import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    const { usuarios, cargarUsuarios } = useUsuarios();
    const renderItem = ({ id, avatar, email, first_name, last_name }: Usuario) => {
        return (
            <tr key={id}>
                <td>
                    <img src={avatar} alt={first_name} style={{ width: 50, borderRadius: 100 }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={cargarUsuarios}>Anterior</button>
            &nbsp;
            <button className='btn btn-primary' onClick={cargarUsuarios}>Siguiente</button>
        </>
    )
}
