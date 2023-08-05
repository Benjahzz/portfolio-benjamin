

export type Proyecto = {
    id?: number
    type: string;
    name: string;
    image: string;
    languages: Array<string>;
    imageMain: string;
    linkPagina: string | null;
    puesto: string;
    githubLink: string;
    placeholder: string
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
    palette: [
        {
            id: number;
            color: string;
        }
    ]
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
}

export type Curso = {
    id: number;
    image: string;
    textHolder: string;
    link: string;
    completed: boolean;
}

