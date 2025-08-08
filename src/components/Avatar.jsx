import StyleAvatar from './Avatar.module.css'

export function Avatar({hasBorder = true, avatarUrl}) {
    return(
        <img className={hasBorder ? StyleAvatar.avatarWithBorder : StyleAvatar.avatar} src={avatarUrl}/>
    )
}

