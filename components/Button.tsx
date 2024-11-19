import Image from "next/image"
type ButtonProp = {
    title: string,
    type: 'button' | 'submit',
    icon?: string,
    variant: string,
    onClick: () => void;
}

const Button = ({title, type, icon, variant, onClick}: ButtonProp) => {
  return (
    <button className={` cursor-pointer flexCenter gap-3 rounded-full border ${variant}`} type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label className=" cursor-pointer bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button