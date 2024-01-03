import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../Redux/StoreSlice'

export const ListaCart = ({ imagen, title, texto, valor, id }) => {
    const count = useSelector((state) => state.store)
    const dispatch = useDispatch()
    const deleteItems = () => {
        const result = count.filter((valor) => {
            return id !== valor.id
        })
        dispatch(deleteItem(id))
    }

    return <>

        <li className="list-group-item">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} style={{ width: 200 }} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h5 className="card-text"><small className="text-body-secondary"> Precio: {texto}</small></h5>
                            <h5 className="card-text"><small className="text-body-secondary">Cantidad: {valor}</small></h5>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-end justify-content-end">
                        <button className="btn btn-danger" onClick={deleteItems}>Eliminar</button>

                    </div>
                </div>
            </div></li>


    </>
}