import { useDispatch, useSelector } from "react-redux"
import { decreaseQty, increseQty, removeFromCart } from "../features/cart/cartSlice"

export default function CartPage() {
    const cartProducts = useSelector(state => state.cart.items)

    const dispatch = useDispatch() // actions

    const total = cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)

    return (
        <main>
            <section className="parte2 flex flex-col md:flex-row gap-4 p-4">
                <span style={{display:'flex', gap:'20px'}}>
                    <h1 style={{color:'orange'}}>Sepetim </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                </span>
                <div className="flex justify-center">
                    {
                        cartProducts && cartProducts.map(item => {
                            return (
                                <div className="flex flex-col items-center md:flex flex-row md:gap-4" key={item.id}>
                                    <img className="w-full md:w-45 rounded" src={item.image} alt="" />
                                    <h3>{item.title}</h3>

                                    <div className="mt-2 md:mt-0 w-full md:w-auto flex justify-center">

                                        <button className="w-full   sm:w-20 md:w-auto px-7 py-1 button" onClick={() => dispatch(decreaseQty(item))} >-</button>
                                        <span style={{fontSize:'30px'}}>{item.qty}</span>
                                        <button className="px-7 py-1 button"  onClick={() => dispatch(increseQty(item))} >+</button>

                                    </div>
                                    <p>$ {item.price}</p>
                                    <button className="px-7 py-1 buttonv"  onClick={() => dispatch(removeFromCart(item))} >remove</button>

                                </div>
                            )
                        })
                    }
                </div>
                <h2>nehayat: {total} $</h2>
            </section>

        </main>
    )
}