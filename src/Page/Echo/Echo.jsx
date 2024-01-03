import { Catalogo } from '../../Catalogo/Catalogo'
import { echos } from '../../Data'
export const Echo = () => {




    return <div className='container'>
        <h1 className='fw-lighter text-body-secondary my-5 container '>Amazon Alexa</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4 my-5 ">
            {echos.map((echo, posicion) => {

                return <Catalogo key={posicion}
                    imagen={echo.imagen}
                    title={echo.title}
                    texto={echo.texto}
                    id={echo.id}

                    btn />
            })}

        </div>
    </div>
}