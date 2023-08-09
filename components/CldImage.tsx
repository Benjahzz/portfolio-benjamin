"use client"

import { CldImage as NextCldImage } from 'next-cloudinary'
import { Suspense, useEffect, useState } from 'react'

const CldImage = (props: any) => {

  return (
    <NextCldImage {...props} />
  )
}

export default CldImage