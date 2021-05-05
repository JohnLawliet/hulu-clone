import Header from "../header/header.component"
import Navbar from "../navbar/navbar.component"

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
