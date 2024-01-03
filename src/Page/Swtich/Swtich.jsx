import { Catalogo } from '../../Catalogo/Catalogo'
import { DataSwtich } from './DataSwtich'

export const Swtich = () => {
    console.log(DataSwtich)
    return <div className='container'>
        <h1 className='fw-lighter text-body-secondary my-5 container'>Interruptores Inteligentes</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4 my-5 ">
            {DataSwtich.map((Swtich, posicion) => {
                return <Catalogo key={posicion}
                    imagen={Swtich.imagen}
                    title={Swtich.title}
                    texto={Swtich.texto}
                    id={Swtich.id}
                    suma={Swtich.suma}
                    btn />
            })}
        </div>
    </div>
}