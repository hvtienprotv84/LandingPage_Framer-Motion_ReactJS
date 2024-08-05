import { STRINGS } from "./Strings"

import ProjWebI from '../assets/images/react.webp';
import ProjWebII from '../assets/images/vue.webp';
import ProjWebIII from '../assets/images/next.webp';
import ProjWebIV from '../assets/images/angular.png';

import IconTypescript from '../assets/icons/typescript.svg'
import IconReact from '../assets/icons/react.svg'
import IconAngular from '../assets/icons/angular2.svg'
import IconHTML from '../assets/icons/html.svg'
import IconCSS from '../assets/icons/css.svg'
import IconJS from '../assets/icons/javascript.svg'
import IconVue from '../assets/icons/vue.svg'
import IconTailwind2 from '../assets/icons/tailwind2.svg'
import IconTailwind from '../assets/icons/tailwind.svg'
import IconNextJS from '../assets/icons/nextjs.svg'
import IconReactWhite from '../assets/icons/reactwhite.svg'
import IconTypescriptWhite from '../assets/icons/typescriptwhite.svg'

import IconGithub from '../assets/icons/github.svg'
import IconGmail from '../assets/icons/gmail.svg'
import IconFB from '../assets/icons/fb.svg'
import IconZalo from '../assets/icons/zalooo.svg'


export const ARRAY = {
    Skills: ['Software Engineer.', 'Front-End Developer.', 'Back-End Developer.', 'Designer UI/UX.'],

    Projects: [
        {
            // Bhive
            image: ProjWebI,
            title: STRINGS.projTitleWebI,
            description: STRINGS.projDescWebI,
            height: 100,
            width: 600,
            gap: true,
            url: '/',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconJS },
                { src: IconReact },
                { src: IconTailwind2 },
            ]
        },
        {
            // UDM CLinic
            image: ProjWebII,
            title: STRINGS.projTitleWebII,
            description: STRINGS.projDescWebII,
            height: 100,
            width: 600,
            leftSpace: '10',
            url: '/',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconJS },
                { src: IconVue },
                { src: IconTailwind2 },
            ]
        },
        {
            // Snaps
            image: ProjWebIII,
            title: STRINGS.projTitleWebIII,
            description: STRINGS.projDescWebIII,
            height: 100,
            width: 600,
            url: '/',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconJS },
                { src: IconTypescript },
                { src: IconReact },
                { src: IconNextJS },
                { src: IconTailwind2 },
            ]
        },
        {
            // Web Library Management System 
            image: ProjWebIV,
            title: STRINGS.projTitleWebIV,
            description: STRINGS.projDescWebIV,
            height: 100,
            width: 595,
            url: '/',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconJS },
                { src: IconTypescript },
                { src: IconAngular },
            ]
        },
    ],

    Stack: [
        { src: IconTypescriptWhite },
        { src: IconReactWhite },
        { src: IconNextJS },
        { src: IconTailwind }
    ],

    Socials: [
        { src: IconFB, url: '/' },
        { src: IconZalo, url: '/' },
        { src: IconGithub, url: '/'},
        { src: IconGmail, url: '/' }
    ]
}