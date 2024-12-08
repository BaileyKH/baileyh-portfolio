
const techStack = [
    {
        id:1,
        item: 'JavaScript',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        id:2,
        item: 'TypeScript',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        id:3,
        item: 'HTML',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        id:4,
        item: 'CSS',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        id:5,
        item: 'Tailwind',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        id:6,
        item: 'React',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        id:7,
        item: 'Next',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
]

export const Stack = () => {
    return(
        <section className="w-full border-t border-b border-white/20">
            <div className="flex justify-evenly items-center flex-wrap bg-gradient-to-t from-neonPink/10 to-primary py-12">
                {techStack.map(item => (
                    <div key={item.id} className="flex flex-col justify-center items-center bg-white/10 p-4 rounded-md w-28 border border-white/20">
                        <img src={item.src} className="w-12 h-12 mb-3"/>
                        <p className="tracking-wide">{item.item}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}