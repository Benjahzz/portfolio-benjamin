namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        NEXT_PUBLIC_EMAIL_PUBLIC_KEY: string;
        NEXT_PUBLIC_EMAIL_SERVICE_ID: string;
    }
}