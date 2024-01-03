import './Footer.css'
export const Footer = () => {
    return <footer className='  text-center'>
        <div className=' border   footer row'>

            <div className='text-silver col'>
                <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/buy-heart.svg' />
                <h5 className="card-title  ">Compra sin moverte</h5>
                <p className="card-text">Encuentra lo que necesitas, y coordina el pago y la entrega con el vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!</p>
            </div>
            <div className=' text-silver col'>
                <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg' />
                <h5 className="card-title ">Recibe tu producto</h5>
                <p className="card-text ">Acuerda la entrega de tu compra con el vendedor. Puedes recibirlo en tu casa, en la oficina o retirarlo. ¡Tú decides qué prefieres!</p>
            </div>
            <div className='text-silver col'>
                <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/free-sell.svg' />
                <h5 className="card-title ">Vende gratis</h5>
                <p className="card-text">Miles de personas quieren lo que ofreces. Publica y verás qué pronto llegan las compras. ¡Tú no pagas nada!</p>
            </div>

        </div>
        <div className='parrafoHome  text-silver py-4 container'> Copyright © 1999-2023 MS Venezuela S.R.L. RIF: J-26510955-5</div>
        <hr className='mt-2 text-silver' />
    </footer>
}