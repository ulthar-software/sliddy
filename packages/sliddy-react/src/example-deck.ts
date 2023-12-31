import { Deck } from "@ulthar/sliddy-core";

const deck: Deck = {
    name: "NodeJS - Day 1",
    theme: {
        colors: {
            primary: "#fff",
            accent: "#E84545",
            background: "#202124",
        },
        fonts: {
            primary: "Roboto, sans-serif",
            headings: "Montserrat, sans-serif",
        },
        text: {
            size: "32px",
        },
    },
    slides: [
        {
            layout: "welcome",
            properties: {
                title: "Intro a **NodeJS**",
                subtitle: "Day 1",
                footer: "Modulo 3 - Backend (NodeJS)",
                startHour: "18",
                startMinute: "05",
                media: "https://www.youtube.com/embed/MVPTGNGiI-4",
                logo: "https://ultharsoftware.com/img/ulthar.svg",
            },
        },
        {
            layout: "presenter",
            properties: {
                name: "Pablo Baleztena",
                handle: "@piarrot",
                contact: "pablo.baleztena@gmail.com",
                avatar: "/perfil.jpg",
            },
        },
        {
            layout: "objectives",
            properties: {
                objectivesTitle: "Objetivos de hoy...",
                objectives: [
                    "Introducir las bases de **NodeJS**",
                    "Comprender cómo funciona el sistema de módulos **CommonJS**",
                    "Practicar usar la **terminal** y los **argumentos** de un programa de Node",
                    "Mirar lo básico del manager de paquetes de node: **NPM**",
                ],
            },
        },
        {
            layout: "title",
            properties: {
                title: "**NodeJS**",
                subtitle: "¿Qué es?",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F454%2Fnodejs-new-pantone-white-1024.png&f=1&nofb=1&ipt=5aeda1158b870a285dfcbc269ecbb06705668104c5e9d3d7fb3eec57fb8e66f0&ipo=images",
            },
        },
        {
            layout: "two-columns",
            content: [
                [
                    {
                        type: "heading",
                        content: "**NodeJS**",
                    },
                ],
                [
                    {
                        type: "text",
                        content:
                            "Es un programa de terminal (sin ventana), y tiene dos maneras de ejecutarse (REPL, Script)",
                    },
                    {
                        type: "text",
                        content: "Es un entorno de ejecución de JavaScript",
                    },
                    {
                        type: "text",
                        content:
                            "Es un conjunto de librerías de JavaScript para trabajar en un ambiente diferente al navegador (desktop)",
                    },
                    {
                        type: "text",
                        content:
                            "Es una plataforma de desarrollo de aplicaciones, principalmente web",
                    },
                ],
            ],
        },
        {
            layout: "blackboard",
            properties: {
                title: "¿Qué es **NodeJS**?",
                // file: "/nodejs-architecture.excalidraw",
            },
        },
        {
            layout: "title",
            properties: {
                title: "La **Terminal**",
                subtitle: "¿Qué conocen?",
            },
        },
        {
            layout: "two-columns",
            content: [
                [
                    {
                        type: "heading",
                        content: "La **terminal**",
                    },
                ],
                [
                    {
                        type: "text",
                        content:
                            "Es una interfaz de texto que nos permite interactuar con el sistema operativo.",
                    },
                    {
                        type: "text",
                        content:
                            "Nos permite ejecutar programas y configurar dicha ejecución pasándoles argumentos.",
                    },
                    {
                        type: "text",
                        content:
                            "Con lo que interactuamos es en realidad un emulador de terminal, que es un programa gráfico que simula una terminal.",
                    },
                    {
                        type: "text",
                        content:
                            "Cada emulador de terminal se ve distinto, pero todos funcionan de la misma manera.",
                    },
                ],
            ],
        },
        {
            layout: "default",
            content: [
                {
                    type: "block",
                    styles: {
                        flexDirection: "column",
                        height: "100%",
                        width: "100%",
                        padding: "15px",
                        justifyContent: "center",
                    },
                    content: [
                        {
                            type: "text",
                            content: "**Implementemos...**",
                            styles: {
                                textAlign: "center",
                            },
                        },
                        {
                            type: "code",
                            properties: {
                                code: "$ node calculadora-v1.js 1 + 2\n3",
                                language: "bash",
                            },
                        },
                    ],
                },
            ],
        },
        {
            layout: "title",
            properties: {
                title: "¿Cómo venimos hasta aquí?",
            },
        },
        {
            layout: "break",
            properties: {
                title: "Intro a **NodeJS** - Day 1",
                footer: "Modulo 3 - Backend (NodeJS)",
                durationInMinutes: 10,
                media: "https://www.youtube.com/embed/MVPTGNGiI-4",
                logo: "https://ultharsoftware.com/img/ulthar.svg",
            },
        },
        {
            layout: "title",
            properties: {
                title: "**CommonJS**",
                subtitle: "Sistema de **módulos** de NodeJS",
            },
        },
        {
            layout: "two-columns",
            content: [
                [
                    {
                        type: "heading",
                        content: "**CommonJS**",
                    },
                ],
                [
                    {
                        type: "text",
                        content:
                            "En el 2009 cuando NodeJS fue creado, aun no existía un método estándar para importar y exportar código en JavaScript.",
                    },
                    {
                        type: "text",
                        content:
                            "Por ese tiempo existía un proyecto llamado ServerJS que luego se convirtió en CommonJS.",
                    },
                    {
                        type: "text",
                        content:
                            "Dada la necesidad de modularizar el código, NodeJS adoptó CommonJS como su sistema de módulos.",
                    },
                ],
            ],
        },
        {
            layout: "two-columns",
            properties: {
                column1Width: "50%",
                column2Width: "50%",
            },
            content: [
                [
                    {
                        type: "text",
                        content: "**ESModules**",
                        styles: {
                            textAlign: "center",
                        },
                    },
                    {
                        type: "code",
                        properties: {
                            file: "/module-esm.js",
                            language: "javascript",
                        },
                    },
                ],
                [
                    {
                        type: "text",
                        content: "**CommonJS**",
                        styles: {
                            textAlign: "center",
                        },
                    },
                    {
                        type: "code",
                        properties: {
                            file: "/module-commonjs.js",
                            language: "javascript",
                        },
                    },
                ],
            ],
        },
        {
            layout: "default",
            content: [
                {
                    type: "block",
                    styles: {
                        flexDirection: "column",
                        height: "100%",
                        width: "100%",
                        padding: "15px",
                        justifyContent: "center",
                    },
                    content: [
                        {
                            type: "text",
                            content: "**Implementemos...**",
                            styles: {
                                textAlign: "center",
                            },
                        },
                        {
                            type: "code",
                            properties: {
                                code: "$ node calculadora-v2.js factorial 5\n 120",
                                language: "bash",
                            },
                        },
                    ],
                },
            ],
        },
        {
            layout: "title",
            properties: {
                title: "¿Cómo venimos hasta aquí?",
            },
        },
        {
            layout: "break",
            properties: {
                title: "Intro a **NodeJS** - Day 1",
                footer: "Modulo 3 - Backend (NodeJS)",
                durationInMinutes: 10,
                media: "https://www.youtube.com/embed/MVPTGNGiI-4",
                logo: "https://ultharsoftware.com/img/ulthar.svg",
            },
        },
        {
            layout: "title",
            properties: {
                title: "**NPM**",
                subtitle: "Manager de paquetes (módulos) de NodeJS",
            },
        },
        {
            layout: "default",
            content: [
                {
                    type: "block",
                    styles: {
                        flexDirection: "column",
                        height: "100%",
                        width: "100%",
                        padding: "15px",
                        justifyContent: "center",
                    },
                    content: [
                        {
                            type: "text",
                            content: "**Implementemos...**",
                            styles: {
                                textAlign: "center",
                            },
                        },
                        {
                            type: "code",
                            properties: {
                                code: "$ node calculadora-v3.js",
                                language: "bash",
                            },
                        },
                    ],
                },
            ],
        },
        {
            layout: "break",
            properties: {
                title: "Intro a **NodeJS** - Day 1",
                footer: "Modulo 3 - Backend (NodeJS)",
                durationInMinutes: 10,
                media: "https://www.youtube.com/embed/MVPTGNGiI-4",
                logo: "https://ultharsoftware.com/img/ulthar.svg",
            },
        },
        {
            layout: "objectives",
            properties: {
                objectivesTitle: "Objetivos de la clase que viene...",
                objectives: [
                    "Aplicar el uso de los core-modules de NodeJS - OS, FS, PATH, etc",
                    "Aprender a leer archivos de texto y JSON",
                    "Implementar una aplicación de NodeJS usando todo lo aprendido hasta ahora",
                ],
            },
        },
    ],
};

export default deck;
