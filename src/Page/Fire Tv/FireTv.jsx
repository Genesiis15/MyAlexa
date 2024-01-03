import { Catalogo } from '../../Catalogo/Catalogo'
import { Tv } from './DataFire'
export const Fire = () => {


    return <div className='container'>
        <h1 className='fw-lighter text-body-secondary my-5 container'>Fire Tv</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4 my-5 ">
            {Tv.map((tv, posicion) => {
                return <Catalogo key={posicion}
                    imagen={tv.imagen}
                    title={tv.title}
                    texto={tv.texto}
                    id={tv.id}

                    btn />
            })}

        </div>
    </div>

}