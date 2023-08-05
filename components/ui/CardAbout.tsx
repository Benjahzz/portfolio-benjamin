
interface CardAboutProps{
    title: string;
    text: string
}

const CardAbout: React.FC<CardAboutProps> = ({text,title}) => {
  return (
    <div className="bg-[#2d2d2d] p-4 rounded-lg hover:bg-[#3d3d3d] hover:scale-105 transition duration-300 text-left flex flex-col gap-4 z-10">
      <h4 className="text-secondary font-bold">{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default CardAbout