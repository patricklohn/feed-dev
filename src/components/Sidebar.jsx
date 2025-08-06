import StyleSidebar from './Sidebar.module.css'

export function Sidebar() {
    return(
        <div>
            <aside className={StyleSidebar.sidebar}>
                <img
                    className={StyleSidebar.cover} 
                    src="https://images.unsplash.com/photo-1754206352604-0a4f13ca2a22?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                />

                <div className={StyleSidebar.profile}>
                    <strong>Patrick Lohn</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </div>
    )
}