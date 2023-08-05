'use client'

import CardAbout from "@/components/ui/CardAbout";
import Title from "@/components/ui/Title";
import { useTranslations } from "next-intl"

const cards = ["work", "organization", "competivity", "learning", "problems", "adaptable"]


const About = () => {
    const t = useTranslations("about")

    return (
        <section className="flex flex-col text-center gap-12" id="about">
            <Title variant={'default'} >
                {t("title")}
            </Title>
            <p className="max-w-4xl mx-auto z-10">{t("text")}</p>
            <div className="grid grid-auto-fit-[min(100%,20rem)] gap-14">
                {
                    t.raw("cards").map((txt: { id: number, title: string, description: string }) => (
                        <CardAbout text={txt.description} title={txt.title} key={txt.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default About