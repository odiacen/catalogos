import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ListaDisp from '../componentes/ListaDisp'
import ShowChild from '../componentes/ShowChild'
import { useState } from 'react'
import { Carousel } from "flowbite-react";


export default function Home(productos: any) {
  let prod: any = []
  const products: any = productos['productos']  
  products.forEach(function( item: any, index: any) {
    if ((item.price !== "") && (item.name !== 'Velas Volcánicas')) {
      prod.push(item)
      
    }
  })

  return (
    <>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>  
        {prod.map((producto: any, index: any) => (   
          <div key={index}>
          <div  className="flex h-full items-center justify-center bg-gray-1200 dark:bg-gray-700 dark:text-white"> 
            <Image src={producto.images[0].src} alt={''} width={1200} height={2100} />
            
            </div>
            <div>
            <p>{producto.name}</p>
            </div>
          </div> 
          ))}  
        </Carousel>
    </div>

    <div id="accordion-open" data-accordion="open">
  
            {prod.map((producto: any) => (
                
                <div key={producto.id}>
                    <Link href="/productos/[id]" as={`/productos/${producto.id}`}>          
                    <h2 id="accordion-open-heading-2">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                            <Image src={producto.images[0].src} alt={''} width={60} height={60} />
                            <span className="flex items-center">{producto.name}</span>
                            <span className="flex items-center">${producto.price}
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </span>
                        </button>
                    </h2>
                    </Link>
                    <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <ShowChild id={producto.id}/>
                </div>
                
          ))} 
          </div>
     
      <footer className={styles.footer}>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fantasy Tienda de Regalos</span>
                    <Image src="/fantasy-logo.jpg" alt="Fantasy Logo" width={72} height={50} />
                </Link>
            </div>
      </footer>
    </>
  )
}

export const getStaticProps = async () =>  {
  const res = await fetch('https://mercadeocubano.com/wp-json/wc/v3/products?per_page=50&orderby=popularity&consumer_key=ck_42999e7fed435f74ce7e09872c8ee0fd643137ea&consumer_secret=cs_979a8d2977025ed95f62de200c6293f3818f863c')
  let productos = await res.json()
  
  
  
  
  return {
    props: { 
      productos, 
    },
    revalidate: 60
    
  }
  
}

