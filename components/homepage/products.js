import Productplants from "./productplant";

const Products = () => {
    return (
        <div>
             <div className="flex justify-center">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4"></span>
                    <h1 className="pt-4 font-bold mx-4 md:text-3xl md:pt-2" >PRODUCTS</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4"></span>
                </div>
            <div className="flex justify-center  py-10">
                <h2 className="md:text-3xl">15% goes to the farmers</h2>
            </div>
            <Productplants />
        </div>
    );
};

export default Products;
