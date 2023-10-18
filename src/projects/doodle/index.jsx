import { useStore } from "./Store"
import { PAGE_MAP } from "./constants"
import { PAGE_NAME } from "./constants";
import './styles.css'

export default function Doodle({}){
    const { displayedPage, setDisplayedPage } = useStore()
    const Display = PAGE_MAP[displayedPage]


    const onProjectsClick = (e) => {
        document.querySelector('#homeContainer').style.opacity=0
        setTimeout(()=>{
            setDisplayedPage(e.target.value || e.target.parentNode.value)
        }, 1500)
    }

    return (
        <div>
            <navigation className='home-navigation'>
                <ul
                    style={{
                        marginTop: '10vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <li>
                        <div className='home-icon' />
                    </li>
                    <li>
                        <button
                            className='link-button'
                            onClick={onProjectsClick}
                            value={PAGE_NAME.PROJECTS} 
                        >
                            <p 
                                value={PAGE_NAME.PROJECTS} 
                                className='link-button-text'
                            >
                                Projects
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className='link-button'
                            onClick={()=>{}}
                            value={PAGE_NAME.CONTACTS}
                        >
                            <p className='link-button-text'>Me</p>
                        </button>
                    </li>
                </ul>
            </navigation>
            <Display />
        </div>
    )
}