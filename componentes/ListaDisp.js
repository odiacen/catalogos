import Link from "next/link"

const ListaDisp = ({productos}) => {
    return (
        
        <div id="accordion-open" data-accordion="open">
  
            {productos["productos"].map((producto) => (
            
                <div key={producto.id}>
                    
                    <h2 id="accordion-open-heading-2">
                        <a type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                            <span className="flex items-center">{producto.name}</span>
                            <span className="flex items-center">{producto.id}</span>
                            <span className="flex items-center">${producto.price}
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </span>
                        </a>
                    </h2>
                    <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    
                </div>
            
            )
            )}
  
        </div>
  
        
    )
}

export default ListaDisp