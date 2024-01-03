import './Home.css'
import { FaStar } from 'react-icons/fa'

export const Home = () => {
    return <>
        <div className='contenedorHome container'>
            <div> <div className='container'>
                <h1 className='smart'>Smart Home</h1>
            </div>
                <div className='cajota container'>

                    <h1 className='star'><FaStar /></h1>
                    <h1 className='star'><FaStar /></h1>
                    <h1 className='star'><FaStar /></h1>
                    <h1 className='star'><FaStar /></h1>
                    <h1 className='star'><FaStar /></h1>



                </div>

            </div>
            <div className=''>
                <h1 className='titleHome fw-lighter'>The happiest hour of all the years</h1>
                <p className='my-5 fw-lighter'>Here you can find new technology for your home</p>
            </div>

        </div>

    </>
}