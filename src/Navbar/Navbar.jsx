import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Redux/StoreSlice'
import { useEffect } from 'react'
export const Navbar = () => {

    const count = useSelector((state) => state.store.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(count)
    }, [count])

    return <>
        <nav className=" navbar  border-bottom border-body  navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">MS</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/echo'}>Echo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/fire tv'}>Fire Tv</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/swtich'}>Swtich</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/controlir'}>IR</Link>
                        </li>
                    </ul>
                    {count}
                    <button className='btn '><Link to={'/car'} ><FaShoppingCart /></Link></button>
                    <form onSubmit={(e) => { e.preventDefault() }} className="d-flex" role="search">

                    </form>
                </div>
            </div>
        </nav>
    </>
}