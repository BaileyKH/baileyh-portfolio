

export const Nav = () => {
    return(
        <nav className="fixed flex justify-center items-center w-full mt-4 z-10">
            <div className="flex justify-between items-center w-96 px-2 py-1 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm">
                <div>
                    <h1>BKH</h1>
                </div>
                <div>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
            </div>
        </nav>
    );
}