import Home from "./Home"
import MindSupport from "./MindSupport"
import PacificParadise from "./PacificParadise"
import Projects from "./Projects"
import bird from '../../images/bird.png'
import golf from '../../images/golf.png'
import sneakers from '../../images/sneakers.png'

export const PAGE_NAME = {
    HOME: 'HOME',
    PROJECTS: 'PROJECTS',
    CONTACTS: 'CONTACTS',
    PACIFIC_PARADISE: 'PACIFIC_PARADISE',
    MIND_SUPPORT: 'MIND_SUPPORT',
    ANOTHER_PROJECT: 'ANOTHER_PROJECT'
}

const { 
    HOME, 
    PROJECTS, 
    PACIFIC_PARADISE, 
    MIND_SUPPORT,
    ANOTHER_PROJECT
} = PAGE_NAME

export const PAGE_MAP = {
    [HOME]: Home,
    [PROJECTS]: Projects,
    [PACIFIC_PARADISE]: PacificParadise,
    [MIND_SUPPORT]: MindSupport,
}

export const PROJECTS_MAP = {
    [PACIFIC_PARADISE]:{
        src: bird,
        value: 10,
        styles: {
            left: '60%',
        }
    },
    [MIND_SUPPORT]:{
        src: golf,
        value: -10,
        styles: {
            left: '35%',
        }
    },
    [ANOTHER_PROJECT]:{
        src: sneakers,
        value: 20,
        styles: {
            left: '70%',
        }
    }
}

export const DOODLES_MAP = {
    [PACIFIC_PARADISE]:{
        src: sneakers,
        value: 20,
        styles: {
            left: '30%',
        }
    },
    [MIND_SUPPORT]:{
        src: golf,
        value: 30,
        styles: {
            left: '80%',
        }
    },
    [ANOTHER_PROJECT]:{
        src: bird,
        value: -20,
        styles: {
            left: '20%',
        }
    }
}