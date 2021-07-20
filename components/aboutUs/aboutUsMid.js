import Image from 'next/image'


const AboutMid = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
       
                <div className="container mx-auto flex py-10 items-center justify-center flex-col">
              
                    <Image 
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mt-4" alt="hero" 
                    src={`https://dummyimage.com/720x600`}
                    width={1265}
                    height={704}
                    />
                    <div className="text-center lg:w-3/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 py-5 font-medium text-gray-900">Urban Planning Globally</h1>
                    <p className="mb-8 leading-relaxed text-2xl">   The Global Urban Farming Market revenue is $210 billion by 2017 and forecasted to grow at a CAGR of more than 1.99% during 2018 to 2023 to reach $236.4 billion. </p>
                    <p className="mb-8 leading-relaxed text-2xl"> Community gardening holds maximum revenue of $136.1 billion in 2017. Home gardens generated revenue worth $29.61 billion which is expected to rise in the forecast period. By Non-Food Crop type, Medicinal Herb records $11.5 billion in 2017. By Geography, France Urban Farming Market revenue is $6.88 billion in 2017.</p>
                    </div>
                   
                </div>

                </section>


    </div>
  )
}

export default AboutMid
