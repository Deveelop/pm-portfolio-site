import Button from "./Button"


const HeroPage = () => {
  return (
    <section>
        <p className=" uppercase font-bold">experienced project manager</p>
        <h1 className="bold-52 lg:bold-88 uppercase">hello i'm Aisha Evelyn</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">I believe that collaboration and creativity are the cornerstones of progress and i deliver successful projects from concept to completion.</p>
        <Button title="Explore my work" type="button" variant="btn_white border-red-400 " />
    </section>
  )
}

export default HeroPage