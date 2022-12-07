import ListaDisp from '../componentes/ListaDisp'


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
      
      <ListaDisp prod={prod}/>
     
      
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

