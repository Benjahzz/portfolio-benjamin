import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    image: string;
    languages?: Array<string>;
    text?: string
    placeholder?: string
    completed?: boolean
    textHolder?: string
    href: string;
    target?: string
}


const Card: React.FC<CardProps> = ({ languages, image, text, placeholder, completed, textHolder, href, target }) => {
    return (
        <div className="flex flex-col z-10 h-full relative">
            <div className={`relative w-full h-fit flex flex-col group`} >
                <Image src={`/images/${image}.webp`} alt="image" className="object-cover rounded-t-md w-full" width={1000} height={800} />
                {
                    (languages || completed) && (
                        <Link className="group-hover:opacity-100 opacity-0 transition-opacity absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-80 rounded-t-md flex flex-col gap-2 items-center justify-center" href={href} target={target}>
                            {
                                placeholder && (
                                    <Image src={`/logos/placeholder-${placeholder}.webp`} alt="image holder" width={100} height={100} className="shadow-lg bg-primary bg-opacity-60 shadow-primary rounded-full hidden xs:block" />
                                )
                            }
                            Ver más
                        </Link>
                    )
                }
            </div>
            <div className="text-center p-2 bg-primaryLight rounded-b-md">
                {
                    languages ? (
                        <div className="flex gap-4 overflow-x-scrolls sm:overflow-x-auto justify-between xs:justify-center">
                            {
                                languages?.map((language: string) => (
                                    <Image src={`/icons/${language}.webp`} alt="Icon" key={language} width={40} height={20} className="w-8 xs:w-10  object-contain" />
                                ))
                            }
                        </div>
                    ) : (
                        textHolder
                    )
                }
                {text}
            </div>
        </div>

    )
}

export default Card