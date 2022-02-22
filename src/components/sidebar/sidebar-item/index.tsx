import {Link} from 'react-router-dom'

export default function SidebarItem(props: SidebarItemInterface) {
    return (
        <Link className="sidebar-link" to={props.to}>
            {props.label}
        </Link>
    )
}
