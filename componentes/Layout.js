import Head from "next/head";
import { Navbar } from "flowbite-react";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <title>Catálogo Fantasy</title>
                <meta name="description" content="Catálogo para tienda de regalos Fantasy" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar  fluid={true} rounded={true} >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Catálogo Fantasy
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active={true} >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/productos">
                    Productos
                </Navbar.Link>
                <Navbar.Link href="/contacto">
                    Contacto
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Información
                </Navbar.Link>                
            </Navbar.Collapse>
        </Navbar>
        {children}
    </>
    )
          
        
}

export default Layout