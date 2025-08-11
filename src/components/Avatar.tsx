import StyleAvatar from './Avatar.module.css'
import { type ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    avatarUrl: string;
}

export function Avatar({hasBorder = true, avatarUrl, alt}:AvatarProps) {
    return(
        <img className={hasBorder ? StyleAvatar.avatarWithBorder : StyleAvatar.avatar} src={avatarUrl} alt={alt}/>
    )
}

