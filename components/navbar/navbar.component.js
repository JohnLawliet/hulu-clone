import {useRouter} from 'next/router'
import requests from "../../utils/requests"
import { FadeGradient, Genres, NavbarContainer, NavbarList } from "./navbar.styles"

const Navbar = () => {
    const router = useRouter()

    return (
        <NavbarContainer>
            <NavbarList>
            {
                Object.entries(requests).map(([key, {title, url}]) => (
                    <Genres 
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                    >
                        {title}
                    </Genres>
                ))
            }
            </NavbarList>
            <FadeGradient className="from-[#06202A]"/>
        </NavbarContainer>
    )
}

export default Navbar
