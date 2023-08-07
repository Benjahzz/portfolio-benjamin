'use client'
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'

import { useTranslations } from 'next-intl'
import React from 'react'
import Form from './Form'

const Contact = () => {
    const t = useTranslations("contact")
    return (
        <div className='flex flex-col gap-24 ' id='contact'>
            <Title>
                {t('title')}
            </Title>
            <div className="flex gap-24 flex-col lg:flex-row">
                <div className="flex flex-col gap-4 flex-1 justify-center ">
                    <Title variant={"secondary"} className='font-bold text-secondary after:bg-secondary '>
                        {t('subtitle')}
                    </Title>
                    <div className="flex">
                        <span className='font-bold mr-3'>Email:</span>
                        ben.ja07@live.cl
                    </div>
                    <div className="flex">
                        <span className='font-bold mr-3'>{t('infoName')}:</span>
                        Benjamin Bastidas
                    </div>
                    <div>
                        <Button>{t("buttonLabel")}</Button>
                    </div>
                </div>
                <Form />
            </div>

        </div>
    )
}

export default Contact