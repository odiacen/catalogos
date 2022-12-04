import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from "flowbite-react";
import axios from "axios"
import { useRouter } from "next/router"

const variation = (product) => {
    const variations = product['product']
    let isArray = Array.isArray(variations)
    let prod = []
    
    if (isArray) {
      variations.forEach(function( item, index) {
        if (item.stock_quantity > 0)
          prod.push(item)
      })  
    }
    
    
       
    return (
      <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>  
        {prod.map((producto) => (   
          <div key={producto.id}>
          <div  className="flex h-full items-center justify-center bg-gray-1200 dark:bg-gray-700 dark:text-white"> 
            <Image src={producto.image.src} alt={''} width={800} height={800} priority={true}/>
            </div>
            <div>
            <p>{producto.id}</p>
            </div>
          </div> 
          ))}  
        </Carousel>
      </div>
        
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
    const res = await fetch(`https://mercadeocubano.com/wp-json/wc/v3/products/${prodId}/variations?per_page=50&consumer_key=ck_42999e7fed435f74ce7e09872c8ee0fd643137ea&consumer_secret=cs_979a8d2977025ed95f62de200c6293f3818f863c`)
    let product = await res.json()
    
    return {
      props: { 
        product,
    
         
      },
      revalidate: 60
      
    }
    
  }