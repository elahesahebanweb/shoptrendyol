import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('error')
            })
            .then(data => {
                // const categoryMens = data.filter(item => item.category === "men's clothing")
                // setProducts(categoryMens)

                setProducts(data)
                setIsError(false)
                setIsLoading(false)
            })
            .catch(error => {
                setProducts([])
                setIsError(true)
                setIsLoading(false)
            })
    }, [])

    return (
        <main>
            <section className="parte1">
                <h1 style={{ fontSize: '44px',color:'orange' }}>Popüler Ürünler</h1>
                <div>

                    {/* <h2>https://680a04fa1f1a52874cdece8c.mockapi.io/products</h2> */}
                    {isLoading && <img src="/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
                    }
                    {isError && <h3>error</h3>}
                    <div className="flex justify-center gap-20 flex-wrap">
                        {
                            products && products.map(item => {
                                return (
                                    <div key={item.id} className=" p-10 w-[350px]">
                                        <img src={item.image} alt="" className="w-full h-[250px] object-cover object-top" />
                                        <h3 style={{ fontSize: '22px' }}>{item.title}</h3>
                                        <p style={{ color: 'green' }}>$ {item.price}</p>
                                        <Link className=" butten border px-4 py-1" to={`/product/${item.id}`}>Sepete Ekle</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>

        </main>
    )
}