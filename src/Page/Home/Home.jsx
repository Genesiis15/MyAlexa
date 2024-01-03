import { Catalogo } from '../../Catalogo/Catalogo'
import { Home } from '../../Homeppl/Home'

export const HomeView = () => {
    return (
        <div>
            <Home />
            <div className='container'>

                <div className="row g-4 my-5">
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_994193-MLV71091227519_082023-O.webp'}
                        title={'Amazon Echo Pop 2023 Altavoz Inteligente Alexa Corneta'}
                        texto={'Alexa. The perfect fit. Find a color that suits your style, find a spot that suits your small space, and play a track that suits you perfectly, completely hands-free with Alexa.'}
                        vendido={'Nuevo | +5 vendidos'} />
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_661238-MLV50214918965_062022-O.webp'}
                        title={'Amazon Fire Stick Lite Hd Nuevos Sellados'}
                        texto={'The most affordable Fire TV Stick: enjoy fast streaming in Full HD. Comes with Alexa Voice Remote Lite.'}
                        vendido={'Nuevo  |  +100 vendidos'} />
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_846179-MLV68930844665_042023-O.webp'}
                        title={'Interruptor De Pared Wifi Inteligente  Sin Neutro'}
                        texto={'These switches allow you to control the lights in your home. Once installed, to use them remotely, only your WiFi Internet connection is required.'}
                        vendido={'Nuevo  |  +5 vendidos'} />
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_811361-MLV70652221063_072023-O.webp'}
                        title={'Control Remoto Inteligente Wifi Ir Rf Alexa'}
                        texto={'The IR+RF Smart Remote Control is the perfect solution to simplify your digital life. Whether you want to control your entert.'}
                        vendido={'Nuevo  |  +1 vendidos'} />
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_758286-MLV72077809028_102023-O.webp'}
                        title={'Cámara Seguridad Casa Oficina Tapo Hd Calidad Tplink 360'}
                        texto={'Ultra High Definition Video: Records every image in crisp 3MP definition Pan & Tilt: 360º horizontal range Advanced Night Vision: Provides a viewing distance of up to 30 feet'}
                        vendido={'Nuevo  |  +25 vendidos'} />
                    <Catalogo imagen={'https://http2.mlstatic.com/D_NQ_NP_785198-MLV49131259293_022022-O.webp'}
                        title={'Aspiradora Robot Inteligente Is25'}
                        texto={'The Jallen Gabor robot vacuum cleaner from Retail Blade sweeps, suctions, polishes and vacuums your home with the push of a button. And it will do so at an incredibly affordable price. It is a must-have item for every home'}
                        vendido={'Nuevo  |  +2 vendidos'} />
                </div>
            </div>
        </div>
    )
}
