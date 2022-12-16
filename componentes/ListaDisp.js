import Link from "next/link"
import Image from "next/image"

const ListaDisp = ({prod}) => {
    return (
            <>
                {prod.map((producto) => (
                    <div key={producto.id}>
                        <Link href="/productos/[id]" as={`/productos/${producto.id}`}>          
                            <h2>
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                    <Image src={producto.images[0].src} alt={''} width={60} height={60} loading="lazy" />
                                    <span className="flex items-center">{producto.name}</span>
                                    <span className="flex items-center">
                                    <div  dangerouslySetInnerHTML={{__html: producto.price_html}}/>                            
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </span>
                                </button>
                            </h2>
                        </Link>
                                                
                    </div>            
                        
                        
                ))}
            </>
            )
}

export default ListaDisp
