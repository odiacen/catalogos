import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from "flowbite-react";
import axios from "axios"
import { useRouter } from "next/router"

const variation = (product) => {
    const variations = product['product']
    let isArray = Array.isArray(variations)
    let prod = []
    let showName = []
    
    if (isArray) {
      variations.forEach(function( item, index) {
        if (item.stock_quantity > 0) {
          if (item.attributes.length > 1) {
            let name = []
            item.attributes.forEach(function( option, index) {
                name.push(option.option)
            })
            showName.push(name.toString().replace(",", "-"))
            
          }  
          prod.push(item)
        }
      })  
    }
    
    return (
              <div>
                  {prod.map((producto, index) => (
                      
                      <div key={producto.id} className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <Image src={producto.image.src} alt={''} width={800} height={800} priority={true}/>
                          <div className="px-5 pb-5">
                              <a>
                                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{producto.attributes.length > 1 ? showName[index] : producto.attributes[0].option}</h5>
                              </a>
                              <div className="flex items-center justify-between">
                                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{producto.stock_quantity} Disponibles</span>
                                  </div>
                              <div className="flex items-center justify-between">
                                  <span className="text-3xl font-bold text-gray-900 dark:text-white"> Precio: ${producto.price}</span>
                                  </div>
                          </div>
                      </div>
                  ))}  
              </div>
            )
}

export default variation

export async function getStaticPaths(context) {
    console.log(context)
    const res = await fetch(`https://mercadeocubano.com/wp-json/wc/v3/products?include=12785&consumer_key=ck_42999e7fed435f74ce7e09872c8ee0fd643137ea&consumer_secret=cs_979a8d2977025ed95f62de200c6293f3818f863c`)
    let product = await res.json()
    
    return {
      paths: product.map((prod) => ({
        params: { id: prod.id.toString() },
      })),
      fallback: 'blocking'
    }
  }

export async function getStaticProps (context) {
    
    const prodId = context.params.id
    const res = await fetch(`https://mercadeocubano.com/wp-json/wc/v3/products/${prodId}/variations?per_page=100&consumer_key=ck_42999e7fed435f74ce7e09872c8ee0fd643137ea&consumer_secret=cs_979a8d2977025ed95f62de200c6293f3818f863c`)
    let product = await res.json()
    
    return {
      props: { 
        product,
    
         
      },
      revalidate: 1
      
    }
    
  }