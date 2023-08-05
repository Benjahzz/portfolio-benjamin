'use client'
import Button from "@/components/ui/Button";
import Link from "next/link";
import { JSXElementConstructor, ReactElement, ReactNodeArray } from "react";
interface HomeContentProps {
    title: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray;
    text: string
    actionLabel: string
}
const HomeContent: React.FC<HomeContentProps> = ({ title, actionLabel, text }) => {
    return (
        <>
            <h1 className="[&__span]:border-b-4 [&>*:nth-child(1)]:border-secondary [&>*:nth-child(2)]:border-greenPale text-xl md:text-xl">
                {title}
            </h1>
            <p className="text-base max-w-2xl font-light mb-10 text-gray-100">
                {text}
            </p>
            <Link href={'#about'}>
                <Button className="w-full md:w-40">
                    {actionLabel}
                </Button>
            </Link>
        </>
    )
}

export default HomeContent