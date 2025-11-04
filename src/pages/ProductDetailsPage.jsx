import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "../features/cart/cartSlice"

export default function ProductDetailsPage() {
    const [product, setProduct] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()  // 3

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('error')
            })
            .then(data => {
                setProduct(data)
                setIsError(false)
                setIsLoading(false)
            })
            .catch(error => {
                setProduct({})
                setIsError(true)
                setIsLoading(false)
            })
    }, [])


    return (
        <main>
            <h1 style={{ fontSize: '45px', textAlign: 'center', marginTop: '40px',color:'orange' }}>Şimdi Al </h1>

            <section className="parte3">
                <div>
                    {isLoading && <img  src="/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
                    }
                    {isError && <h3>error</h3>}

                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div>
                        <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
                    </div>

                </div>

            </section>

        </main>
    )
}