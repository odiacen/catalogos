import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <title>Catálogo Fantasy</title>
                <meta name="description" content="Catálogo para tienda de regalos Fantasy" />
            <link rel="icon" href="/fantasy-logo.jpg" />
        </Head>
        
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <Link href="/" className="flex items-center">
                    <Image src="/fantasy-logo.jpg" alt="Fantasy Logo" width={72} height={50} loading="lazy"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Catálogo Fantasy</span>
                </Link>
                <div className="flex items-center">
                    <Link href="https://api.whatsapp.com/send?phone=5358640192">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Contactar</span>
                    </Link>  
                </div>
            </div>
        </nav>
        
        <div className="pt-30">
        {children}
        </div>
    </>
    )
          
        
}

export default Layout