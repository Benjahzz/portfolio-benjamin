'use client'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import Error from '@/components/ui/Error'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Username tiene que tener al menos un carácter"
    }),
    email: z.string().email({
        message: "Email no válido"
    }),
    message: z.string().min(1, {
        message: "Mensaje tiene que tener al menos un carácter"
    })

})

const Form = () => {
    const t = useTranslations("contact")
    const [isDisabled, setIsDisabled] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful }
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }

    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsDisabled(true)
        try {
            await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 'template_3jyk2qn', {
                from_name: data.name,
                from_email: data.email,
                message: data.message
            }, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
            toast.success(t('successMessage'))


        } catch (error) {
            toast.error(t('errorMessage'))
            console.log(error)
        } finally {
            setIsDisabled(false)
        }
    }
    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                name: "",
                email: "",
                message: ""
            })
        }
    },[isSubmitSuccessful,reset])
    return (
        <form className='flex flex-col flex-1 bg-primary shadow-md dark:bg-[#464646] p-4 sm:p-14 gap-10 border-t-[1.4rem] border-secondary z-10 relative' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <Input placeholder={t('placeholderName')} {...register("name")} />
                {
                    errors.name?.message && (
                        <Error error={errors.name.message} />
                    )
                }

            </div>
            <div className="flex flex-col gap-4 ">
                <Input placeholder={t('placeholderEmail')} {...register("email")}  />
                {
                    errors.email?.message && (
                        <Error error={errors.email.message} />
                    )
                }
            </div>
            <textarea rows={10} className='border-b dark:bg-[#414141]   border-b-secondary outline-none p-4  text-sm' placeholder={t('placeholderMessage')} {...register("message")} />
            <Button variant={'secondary'} disabled={isDisabled} >
                {t("buttonSend")}
            </Button>
        </form>
    )
}

export default Form