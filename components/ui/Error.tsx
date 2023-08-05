import { AlertCircle } from 'lucide-react'
import React from 'react'

interface ErrorProps {
    error: string
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className='flex gap-4 border-secondary rounded-md border p-2'>
            <AlertCircle className='text-secondary' />
            <span className='text-white'>{error}</span>
        </div>
    )
}

export default Error