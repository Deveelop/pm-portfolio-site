
import Image from "next/image"

const HeroPage = () => {

  
  return (
    <section className=" min-h-screen flex items-center p-2 md:px-40 bg-feature-bg bg-center bg-no-repeat">
      <div className=" flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        <div>
        <p className="  uppercase font-bold regular-16 text-blue-900">experienced product manager</p>
        <h1 className="bold-32 lg:bold-40 uppercase">hello i<span className=" text-blue-70">'</span>m <span className="text-blue-70"  >isah </span>Aisha</h1>
        <p className="regular-14 text-gray-30 xl:max-w-[520px]">I believe that collaboration and creativity are the cornerstones of progress and i deliver successful products from concept to completion.</p>
        <a href="/projects" className="btn_white mt-6 block text-center transition hover:bg-blue-900 hover:text-white hover:border-white">Explore my works</a>
    </div>
    
    <div>
      <Image src='/eve.jpg' alt="professional photo" width={200} height={200} className="rounded-full shadow-lg shadow-blue-900" />
    </div>
    </div>
    </section>
  )
}

export default HeroPage