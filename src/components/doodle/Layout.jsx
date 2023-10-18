import { useStore } from "../../pages/doodle/Store"
import { PAGE_MAP } from "../../projects/doodle/constants"

export default function Layout({}){
    const { displayedPage } = useStore()
    const Display = PAGE_MAP[displayedPage]

    return <Display />
}