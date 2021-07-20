import Image from 'next/image'


const AboutTop = () => {
  return (
    <div>
          <section className="text-gray-600 body-font">
                <div className="container mx-auto flex py-10 items-center justify-center flex-col">
                    <Image 
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" 
                    src={`https://dummyimage.com/720x600`}
                    width={1265}
                    height={704}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 py-5 font-medium text-gray-900">About Our Company</h1>
                    <h5 className="mb-8 leading-relaxed text-2xl">Growtech Farms was established to elevate the Agriculture sector by using modern technologies. Our Philippine-Israeli team has more than 20 years combined experience in Agriculture and Business Development</h5>
                  
                    </div>
                    <span className=" inline-block h-1 w-80 rounded bg-green-500 mt-6 mb-4"></span>
                </div>
                </section>
    </div>
  )
}

export default  AboutTop