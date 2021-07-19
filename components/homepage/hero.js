
const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font hero_bg text-white" >
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">We are committed to building sustainable micro-farms.</h1>
                        <h4 className="mb-8 leading-relaxed text-gray-200">Growtech Farms was established to elevate the Agriculture sector by using modern technologies. Our Philippine-Israeli team has more than 20 years combined experience in Agriculture and Business Development.
                        </h4>
                        <div className="flex justify-center">
                            <button class="bg-green-500 hover:bg-green-200 text-white font-bold py-2 px-4 rounded-full">
                                Our Products
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
