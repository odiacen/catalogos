import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const Footer = () => {
    return ( 
            <>

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

export default Footer