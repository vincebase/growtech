import Head from 'next/head'
import AboutTop from '../components/aboutUs/aboutUStop'
import AboutMid from '../components/aboutUs/aboutUsMid'
import AboutBot from '../components/aboutUs/aboutUsBot'

const About = () => {
    return (
        <div>
            <Head>
                <title>Growtech-About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
            <div className="flex justify-center py-10">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                    <h1 className="pt-3 text-3xl font-bold mx-4 md:text-6xl md:pt-0">ABOUT US</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                </div>
                <AboutTop/>
                <AboutMid/>  
                <AboutBot/> 
                </div>
        </div>
    )
}

export default About
