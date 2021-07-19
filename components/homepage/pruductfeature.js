
const Productfeature = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden mt-10">
                <div className="flex justify-center">
                    <span class="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4"></span>
                    <h1 className="pt-4 font-bold mx-4 md:text-3xl md:pt-2" > FEATURED PLANT</h1>
                    <span class="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4"></span>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">65% off</h1>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 bold">New Plant Variety</h1>

                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Php 158.00</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div >
    )
}

export default Productfeature
