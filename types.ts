

export type Proyecto = {
    id?: number
    type: string;
    name: string;
    image: string;
    languages: Array<string>;
    imageMain: string;
    width: number;
    height: number;
    linkPagina: string | null;
    puesto: string;
    githubLink: string;
    placeholder: string
    toolsTitle: string;
    placeholderText?: string;
    completed: boolean;
    sections: [{
        id: string
        title: string
        image: [
            {
                image: string,
                width: number,
                height: number,
                border? : boolean
            }
        ]
        description: string
    }]
    palette:{
        title: string
        colors: [
            {
                id: number;
                color: string;
            }
        ]
    } ,
    
        
    textHolder: string
}

export type Trabajo = {
    id: number;
    title: string;
    fecha: string
    description: string;
    image: string;
    location: string;
    link: string
    goPage: string
}

export type Curso = {
    id: number;
    image: string;
    textHolder: string;
    link: string;
    completed: boolean;
    width: number;
    height: number;
}

