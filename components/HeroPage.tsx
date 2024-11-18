import Button from "./Button"
import Image from "next/image"

const HeroPage = () => {
  return (
    <section className=" min-h-screen flex items-center px-32">
      <div className=" flex flex-col md:flex-row items-center gap-8 max-w-5xl">
      <div className="">
        <p className=" uppercase font-bold regular-16 text-blue-900">experienced project manager</p>
        <h1 className="bold-32 lg:bold-40 uppercase">hello i<span className=" text-blue-900">'</span>m <span className="text-blue-900"  >Aisha </span>Evelyn</h1>
        <p className="regular-14 text-gray-30 lg:max-w-[520px]">I believe that collaboration and creativity are the cornerstones of progress and I deliver successful projects from concept to completion.</p>
        <Button title="Explore my work" type="button" variant="btn_white mt-3" />
    </div>
    <div className="">
      <Image src='/eve.jpg' alt="professional photo" width={200} height={200} className="rounded-full shadow-lg shadow-blue-900" />
    </div>
    </div>
    </section>
  )
}

export default HeroPage