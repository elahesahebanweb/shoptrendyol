import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    const countProducts = useSelector(state => state.cart.items.length)

    return (
        <>


            <header className="flex flex-col  sm:flex-col items-center sm:justify-between md:flex-col  md:justify-between   lg:flex-row  lg:justify-between gap-4 p-4  " >

                <Link style={{ fontSize: '50px', color:'green' }} to={'/'}>Trendyol Türkçe</Link>
                <span className=" inline-block rounded px-2 py-1">
                    <input className=" rounded w-70 sm:w-50 md:w-120" type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
                <div  > 
                    <span className="flex items-center justify-center " style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <Link to={'/'}>Home</Link>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        <Link to={'/cart'}> Sepetim ( {countProducts} )</Link>

                    </span>
                </div>

            </header>

            <span className=" span flex flex-col  sm:flex-col items-center sm:justify-between md:flex-col  md:justify-between   lg:flex-row  lg:justify-between gap-4  ">
                <figure>
                    <img src="/91f084c8-71af-40e1-84bf-7a76379c7332.gif" alt="" />
                </figure>
                <figure>
                    <img src="/b879f14f-724f-401e-adff-ee4ab738d95d.webp" alt="" />
                </figure>
                <figure>
                    <img src="/d06177cb-7682-4f1d-9489-c20829c87cdd.webp" alt="" />
                </figure>
                <figure>
                    <img src="/b599236d-a71c-4f6b-b035-c6c5ab039c00.webp" alt="" />
                </figure>
                <figure>
                    <img src="/1ffca596-36c2-4a14-8d55-8af29eead16e.webp" alt="" />
                </figure>
                <figure>
                    <img src="/4dbbf828-dbe2-4f79-a049-4de11755eac1.webp" alt="" />
                </figure>
                <figure>
                    <img src="/af030a99-0c34-40a0-9228-64e3cf462eae.webp" alt="" />
                </figure>
            </span>
            <div className="w-full min-h-screen">
                {children}
            </div>




            <footer  className=" flex flex-col sm:flex-row items-center sm:justify-between gap-3   ">
                <h1>            ©2025 DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Her Hakkı Saklıdır <p style={{ color: 'orange', fontSize: '19px' }}>elahe saheban.</p></h1>
                <span className="flex gap-4">
                    <a href="#"> Çerez Tercihleri</a>
                    <a href="#">Kişisel Verilerin Korunması</a>
                    <a href="#">DSM Grup</a>
                    <a href="#">Kullanım Koşulları</a>



                </span>


            </footer>
        </>
    )
}