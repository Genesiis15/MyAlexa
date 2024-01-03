
import { useSelector } from 'react-redux'
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import { ListaCart } from '../../ListaCart/ListaCart'
import { MyDocument } from '../../MyDocument/Document'

export const Shooping = () => {

    const count = useSelector((state) => state.store)


    const result = () => {
        const suma = count.reduce((acumulador, objeto) => acumulador + (objeto.texto * objeto.valor), 0)
        return (suma)
    }

    return <div className="container">
        <ul className="list-group">
            {count.map(({ imagen, title, texto, valor, id, }, posicion) => {
                return <ListaCart key={posicion} imagen={imagen} title={title}
                    texto={texto} valor={valor} id={id}

                />


            })}


            {count.length == 0 ? <h1>Debes comprar!</h1> : <> <h5 className="container text-end p-4">  Total :  {result()}$</h5>

                <PDFDownloadLink document={<MyDocument data={count} result={result} />} fileName="myfile.pdf">
                    <button className='btn btn-success'>Imprimir</button>
                </PDFDownloadLink></>
            }

        </ul>


    </div>
}