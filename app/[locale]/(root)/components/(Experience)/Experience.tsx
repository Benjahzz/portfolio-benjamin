'use client'

import { useTranslations } from "next-intl"
import Laboral from "./Laboral"
import Title from "@/components/ui/Title"
import Courses from "./Courses"


const Experience = () => {

  const t = useTranslations('experience')
  return (
    <div className="flex flex-col gap-24">
      <Title >
        {t('title')}
      </Title>
      <div className="flex gap-28 flex-col lg:flex-row">
        <Laboral laborales={t.raw('laborales')} title={t('titleLaboral')}/>
        <Courses cursos={t.raw('cursos')} title={t('titleCourse')}/>
      </div>
    </div >
  )
}

export default Experience