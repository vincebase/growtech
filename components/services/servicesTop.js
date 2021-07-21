import Image from "next/image"

const ServicesTop = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2 md:py-10">
            <Image 
              className="object-cover object-center rounded-lg md:mt-0 mt-2" 
              src={`https://dummyimage.com/1200x500`}
              width={1200}
              height={1200}
              alt="step"/>
           </div>
          <div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2 py-10 md:py-1">
          <div className="flex flex-wrap overflow-hidden">

<div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2">
<div className="bg-green-100 p-6 rounded-lg">
          <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          src={`https://dummyimage.com/720x400`} 
          width={300}
          height={200}
          alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base"> Distillery hexagon disrupt edison bulbche.</p>
        </div>
</div>

<div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2">
<div className="bg-green-100 p-6 rounded-lg">
          <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          src={`https://dummyimage.com/720x400`} 
          width={300}
          height={200}
          alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Distillery hexagon disrupt edison bulbche.</p>
        </div>
</div>

<div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2">
<div className="p-6 rounded-lg">
          <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          src={`https://dummyimage.com/720x400`} 
          width={300}
          height={200}
          alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.</p>
        </div>
</div>

<div className="w-full overflow-hidden md:w-full lg:w-1/2 xl:w-1/2">
<div className="bg-green-100 p-6 rounded-lg">
          <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          src={`https://dummyimage.com/720x400`} 
          width={300}
          height={200}
          alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Distillery hexagon disrupt edison bulbche.</p>
        </div>
</div>

</div>
          </div>
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default ServicesTop
