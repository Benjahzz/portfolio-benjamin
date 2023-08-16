'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"
import ImageHero from '@/public/images/image-hero.webp'
import HomeContent from "./HomeContent"
import { ArrowDownIcon, GithubIcon, Instagram, LinkedinIcon, Mail } from "lucide-react"
import IconButton from "@/components/ui/IconButton"
import Link from 'next/link'
const links = [
  {
    name: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/Benjahzz'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/benja_bstidas/'
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/benjam%C3%ADn-bastidas-8b70921a6/'
  },
  {
    name: 'Mail',
    icon: Mail,
    href: 'mailto:ben.ja07@live.cl?subject=Call'
  }
]

const HomeSection = () => {
  const t = useTranslations('main')
  return (
    <section className="flex items-center min-h-[85vh] gap-12 md:gap-x-30 relative flex-col md:flex-row mt-12 md:mt-0" id="home">
      <div className="flex flex-col flex-[2] gap-4 order-2 md:order-1 z-10">
        <HomeContent title={t.rich('title', { color: (chunks) => <span>{chunks}</span> })} text={t('text')}
          actionLabel={t("actionLabel")} />
      </div>
      <div className="flex flex-col gap-8 order-1 md:order-2">
        <picture className="relative w-48 md:w-72 mx-auto shadow-md bg-primary dark:bg-primaryLight dark:bg-opacity-60 bg-blend-saturation satu p-4 rounded-full  z-10">
          <Image src={ImageHero} alt="Hero image" className="object-cover w-fit" priority />
        </picture>
        <hr className="z-10 border-gray-400 dark:border-white" />
        <div className="flex justify-center gap-4 flex-wrap">
          {
            links.map((link) => (
              <IconButton key={link.href} name={link.name} icon={link.icon} href={link.href} />
            ))
          }
        </div>
      </div>

      <Link href="#about" className="absolute left-0 right-0 mx-auto bottom-10 w-fit hidden md:block">
        <ArrowDownIcon size={30} className="animate-bounce" />
      </Link>
    </section>
  )
}

export default HomeSection