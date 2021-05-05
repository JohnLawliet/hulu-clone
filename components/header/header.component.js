import { HeaderContainer, HeaderInfo } from "./header.styles"
import Image from 'next/image'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import HeaderItem from "../header-item/header-item.component"

const Header = () => {

    // External src in Image has to be allowed in a file called next.config.js
    return (
        <HeaderContainer>
            <HeaderInfo>
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </HeaderInfo>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6"
                height={80}
                width={200}
            />
        </HeaderContainer>
    )
}

export default Header
