

export const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <div className="hero-gradient border-t-2 border-t-primaryAccent/5 flex justify-center items-center">
            <div className="py-4">
                <p className="text-primaryAccent/85 font-light">&copy; {date} BaileyKH. All rights reserved.</p>
            </div>
        </div>
    );
}