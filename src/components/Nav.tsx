

export const Nav = () => {
    return(
        <nav className="fixed flex justify-center items-center w-full mt-4 z-10">
            <ul className="flex justify-between items-center w-[96] px-2 py-1">
                <li className="nav-list">About</li>
                <li className="nav-list">Projects</li>
                <li className="nav-list">Experience</li>
                <li className="nav-list">Contact</li>
            </ul>
        </nav>
    );
}