import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface IconButtonProps{
    name: string;
    href: string;
    icon: LucideIcon
}

const IconButton: React.FC<IconButtonProps> = ({name,href,icon : Icon}) => {
  return (
    <Link href={href} className="p-3 border-[1px] bg-primary rounded-md hover:text-secondary hover:dark:text-secondary hover:border-secondary transition-colors z-10 border-gray-400 text-gray-500 dark:text-white " target="_blank">
        <Icon size={20}/>
    </Link>
  )
}

export default IconButton