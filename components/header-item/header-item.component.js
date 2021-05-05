import { Group, IconTitle } from "./header-item.styles"

const HeaderItem = ({title, Icon}) => {
    return (
        <Group className="group" >
            <Icon className="group-hover:animate-bounce"/>
            <IconTitle>
                {title}
            </IconTitle>
        </Group>
    )
}

export default HeaderItem
