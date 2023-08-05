

const dictionaries : Record<string,() => Promise<any>>= {
    'es': () => import("@/dictionaries/es.json").then(r => r.default)
}

const getDictionary = async (lang: string) =>{
    return await dictionaries[lang]();
}

export default getDictionary;