import { Catalogo } from '../../Catalogo/Catalogo'
import { DataIr } from './DataIr'

export const Ir = () => {
    return <div className='container'>
        <h1 className='fw-lighter text-body-secondary my-5 container '>Control IR</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4 my-5 ">
            {DataIr.map((ir, posicion) => {

                return <Catalogo key={posicion}
                    imagen={ir.imagen}
                    title={ir.title}
                    texto={ir.texto}
                    id={ir.id}
                    btn />
            })}

        </div>
    </div>
}