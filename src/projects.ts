import protecly from '/src/assets/projects/protecly.png'
import devfusion from '/src/assets/projects/devfusion-img.png'
import snap from '/src/components/snapai.png'
import ns from '/src/assets/projects/nature-shot.png'
import unknown from '/src/assets/projects/unknown.png'

export const projects = [
    {
        id: 2,
        title: 'Protecly',
        img: protecly,
        description: 'Protecly is a cutting-edge cybersecurity platform dedicated to ensuring individuals and organizations can combat the growing threat of cyber attacks. The mission is to enhance cybersecurity awareness and provide reliable tools to identify and prevent phishing attempts, helping users stay one step ahead of threat actors',
        code: '',
        demo: 'https://protecly.com/',
        language: 'JavaScript',
        framework: 'React',
        style: 'Tailwind'
    },
    {
        id: 2,
        title: 'DevFusion',
        img: devfusion,
        description: 'DevFusion is a collaboration platform designed to streamline project management and enhance teamwork for developers. It offers features such as real-time chat, transparent task management, GitHub integration for viewing commits and change logs, and a secure invite system for managing contributors. With an intuitive and responsive design optimized for all devices, DevFusion ensures a seamless user experience, making it a powerful tool for efficient and effective collaboration.',
        code: 'https://github.com/BaileyKH/DevFusion',
        demo: 'https://www.devfusion.me/',
        language: 'TypeScript',
        framework: 'React',
        style: 'Tailwind'
    },
    {
        id: 3,
        title: 'SnapAI',
        img: snap,
        description: 'SnapAI is a development tool that uses ai to transform the front-end development workflow. With a sleek and minimalist interface developers can simply describe the UI component they need in natural language, and the application instantly generates a fully-functional React component with Tailwind CSS styling. The tool provides real-time previews alongside syntax-highlighted code that can be copied with a single click, eliminating repetitive coding tasks and allowing developers to focus on solving unique problems rather than implementing standard UI elements.',
        code: 'https://github.com/BaileyKH/snap',
        demo: 'https://snapai-component.vercel.app/',
        language: 'TypeScript',
        framework: 'React',
        style: 'Tailwind'
    },
    {
        id: 4,
        title: 'Nature Shot',
        img: ns,
        description: 'Nature Shot is a sleek and responsive photography portfolio website built with React. This project showcases stunning nature photography, emphasizing clean design and seamless user experience. This website also features form validation on the contact page to ensure reliable communication.',
        code: 'https://github.com/BaileyKH/nature-shot',
        demo: 'https://natureshot.vercel.app/',
        language: 'JavaScript',
        framework: 'React',
        style: 'Tailwind'
    },
    {
        id: 5,
        title: 'The Unknown',
        img: unknown,
        description: 'The Unknown is an innovative e-commerce platform specializing in camping equipment. Users can explore various product pages, detailed product descriptions, campsite information, and a shopping cart. The platform features advanced filtering options to categorize products effectively. Additionally, it integrates the NPS API, enabling users to search for campsites by their preferred state.',
        code: 'https://github.com/BaileyKH/the-unknown',
        demo: 'https://the-unknown.vercel.app/',
        language: 'JavaScript',
        framework: 'React',
        style: 'Tailwind'
    },
]