import StyleComment from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar.jsx';

export function Comment({coment, onDeleteComment}){
    
    function handleDeleteComment(){
        onDeleteComment(coment)
    }

    return (
        <div className={StyleComment.comment}>
            <Avatar hasBorder={false} avatarUrl='https://github.com/patricklohn.png'/>
            <div className={StyleComment.commentBox}>
                <div className={StyleComment.commentContent}>
                    <header>
                        <div className={StyleComment.authorAndTime}>
                            <strong>Patrick Lohn</strong>
                            <time title='08 de Agosto às 21:58' dateTime='2025-08-07'>Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{coment}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}