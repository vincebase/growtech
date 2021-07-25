import Image from 'next/image'
import microgreens from "../../public/icons8-lettuce.svg"
import plant from "../../public/icons8-plant.svg"
import field from "../../public/icons8-field.svg"
const AboutBot = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="text-center lg:w-3/3 w-full">
      <span className=" inline-block h-1 w-80 rounded bg-green-500 mt-6 mb-4"></span>

                    <h1 className="title-font sm:text-4xl text-3xl mb-3 py-2 font-medium text-gray-900">4 Years of Indoor Farming for Urban Setting</h1>
                    </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-600" 
              src={plant}
              width={200}
              height={200}
              />
              <p className="leading-relaxed py-5 text-2xl">Grew more than 1 ton of products since start of operations last 2019</p>
              <span className="inline-block h-1 w-20  rounded bg-green-500 mt-6 mb-4"></span>
              
            </div>
          </div>
      <div className="w-full lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-600" src={`https://dummyimage.com/302x302`}
              src={field}
             width={200}
              height={200}
              />
          <p className="leading-relaxed py-5 text-2xl">Grew from 30 sqm to 300 sqm in the span of 2 years.</p>
          <span className="inline-block h-1 w-20  rounded bg-green-500 mt-6 mb-4"></span>
         
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-600" src={`https://dummyimage.com/302x302`}
              src={microgreens}
              width={200}
              height={200}
              />
          <h5 className="leading-relaxed py-5 text-2xl">Expanded our product offering from microgreens to other high value crops like green leafy vegetables and strawberries.</h5>
          <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4"></span>
         
        </div>
      </div>
    </div>
     </div>
    </section>
    </div>
  )
}

export default AboutBot
