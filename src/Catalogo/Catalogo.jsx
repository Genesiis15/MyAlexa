import { useState } from "react";
import { useDispatch } from 'react-redux'
import { increment } from '../Redux/StoreSlice'


export const Catalogo = ({ imagen, title, texto, vendido, btn, id }) => {


    const dispatch = useDispatch()

    const [valor, setValor] = useState(1)

    const items = [];
    for (let i = 1; i < 10; i++) {
        items.push(i + 1);
    }

    const BtnCompra = () => {
        dispatch(increment({
            imagen, title, texto, valor, id

        }))
    }

    return <>
        <div className="col-md-4 col-12">
            <div className="card h-100">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{texto}</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">{vendido}</small>
                </div>

                {
                    btn && <>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => { setValor(parseInt(e.target.value)) }}>
                            <option selected value={1}>1</option>
                            {items.map((item, index) => (
                                <option key={index} value={item} >{item}</option>
                            ))}
                        </select>
                        <button onClick={BtnCompra} className="btn btn-primary w-100">COMPRAR</button>
                    </>

                }
            </div>
        </div>
    </>
}