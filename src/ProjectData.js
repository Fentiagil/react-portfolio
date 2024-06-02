
const projectData = [
    {
      id: 1,
      image: '../img/kanban-app.png',
      title: 'Kanban Application',
      desc: 'The Kanban Application is a task management tool designed to help users create, manage, and track tasks acrossdifferent stages of a workflow. The application features task creation, movement between boards, editing, anddeletion. Additionally, it supports a drag-and-drop mechanism for moving tasks seamlessly. Developed using React JS,the application offers a user-friendly and dynamic interface for efficient task management.',
      link: 'https://kanban-app-fenti.netlify.app/v1'
    },
    {
      id: 2,
      image: '../img/spk.png',
      title: 'Best Laptop Selection Decision Support System ',
      desc: 'The Decision Support System (DSS) for selecting the best laptop is designed to assist Informatics students at UPN Veteran of East Java in choosing the most suitable laptop based on their specific needs and budget. The application leverages the Analytic Hierarchy Process (AHP) method for decision-making and is built using Laravel. This system provides a structured approach to evaluating various laptop options, ensuring students make informed and optimal decisions.',
      link: 'https://github.com/Fentiagil/spk_laptop'
    },
    {
        id: 3,
        image: '../img/donora.png',
        title: 'Donora - Blood Donation Application',
        desc: 'Donora is a blood donation application designed to assist users in locating blood stock in their vicinity. The application aims to streamline the process of finding and donating blood, ensuring timely and efficient access to blood supplies. The application supports mobile users and features a web-based admin panel. Donora is developed using HTML, CSS, Bootstrap, Laravel 9, React JS, API, Kotlin, and PostgreSQL.',
        link: 'https://github.com/otak-kanan/donora-frontend'
    },
    {
        id: 4,
        image: '../img/qwords.png',
        title: 'Qwords Landing Page Redesign',
        desc: 'The Qwords Landing Page Redesign project is a comprehensive overhaul of the previous Qwords website. This project serves as the final task for my virtual internship at Qwords x Rakamin Academy as a fullstack developer. The goal of this redesign is to enhance the user experience, improve the visual appeal, and ensure the website is responsive and functional across various devices. The project utilizes HTML, CSS, Bootstrap, Laravel 9, and PHP for its development.',
        link: 'https://github.com/Fentiagil/Redesign-landingpage'
    },
    {
        id: 5,
        image: '../img/investre.png',
        title: 'Article and Category Management Application',
        desc: 'This application is a simple web-based platform designed to perform CRUD (Create, Read, Update, Delete) operations on articles and categories using a REST API. The application is built using Laravel 9 for the backend, MySQL for the database, and HTML, CSS, and Bootstrap for the frontend. This project is developed as a final task for the Virtual Internship Fullstack Developer program by Investree x Rakamin Academy.',
        link: 'https://github.com/Fentiagil/task-5-fullstack'
    },
    {
        id: 6,
        image: '../img/kursus.png',
        title: 'Online Course Application',
        desc: 'The Online Course Application is a web-based platform designed to provide course materials to users with various pricing options and payment methods. The application supports two types of roles: users (students) and teachers (instructors). Users can browse and enroll in courses, while teachers can create and manage their courses. The project is built using HTML, CSS, Bootstrap, Laravel 9, React JS, and PostgreSQL to ensure a comprehensive and user-friendly experience.',
        link: 'https://kursusonline.com/'
    },
    {
        id: 7,
        image: '../img/docti.png',
        title: 'Document Numbering Website',
        desc: 'The Document Numbering Website is a web application designed to assign and manage structured numbering for documents. This application facilitates quick and easy access to documents by assigning clear and understandable sequential numbers to each document. This reduces confusion regarding document order and aids users in efficiently locating the desired documents. The project is built using Laravel, HTML, CSS, Bootstrap, PostgreSQL, SSO (Single Sign-On), and REST API.',
        link: 'https://github.com/Fentiagil/Doc-TI'
    },
    {
        id: 8,
        image: '../img/sekolah.png',
        title: 'School Management Application',
        desc: 'The School Management Application is a web-based platform designed to streamline the management of school data, including students, teachers, classes, grades, and subjects. This application aims to facilitate teachers and school administrators in managing student information and attendance. The app features distinct interfaces for admin and teacher logins, providing role-specific functionalities. The project is developed using HTML, PHP, JavaScript, SQL, and CSS to ensure a comprehensive and user-friendly experience.',
        link: 'https://github.com/Natalia1221/skpm_hunter'
    },
    {
        id: 9,
        image: '../img/photo.png',
        title: 'Photo Gallery App',
        desc: 'The Photo Gallery App is a simple web application designed for managing photos through CRUD operations using a RESTful API. The app allows users to add, delete, edit, sort, and search photos. It is structured into three main pages: Home, My Photos, and Add Photo. The project is developed using HTML, JavaScript, React, Node.js, REST API, and CSS to ensure a seamless and responsive user experience.',
        link: 'https://final-project-frontend-deploy.web.app'
    },
    {
        id: 10,
        image: '../img/yogi.png',
        title: 'Yugi OH Card Display Website',
        desc: 'Yugi OH is a simple and interactive web application built with React, designed to fetch and display various Yu-Gi-Oh! cards. This website leverages a third-party API to retrieve card data and provides functionality to sort the cards based on attributes such as name, attack, and defense. The application is built using HTML, JavaScript, React, Node.js, REST API, and Chakra UI to ensure a modern and responsive design.',
        link: 'https://yugi-oh-card-fenti.netlify.app/'
    },
    {
        id: 11,
        image: '../img/starwars.png',
        title: 'Star Wars Information Website',
        desc: 'The Star Wars Information Website is a web application built with React, designed to fetch and display information related to the Star Wars franchise. This application utilizes a third-party API to retrieve data about Star Wars characters, planets, and movies. The website is structured into three main pages: People, Planets, and Movies, each dedicated to a specific type of information. The project leverages HTML, JavaScript, React, Node.js, REST API, and Chakra UI to provide a modern and responsive user experience.',
        link: 'https://star-wars-app-fenti.netlify.app/'
    },
    {
        id: 12,
        image: '../img/pokedeh.png',
        title: 'PokeDeh Website',
        desc: 'PokeDeh is a simple yet engaging web application built with React that displays data about Pokémon fetched from the PokeAPI. The website consists of three main pages: Home, Pokémon, and Legend. The Home page serves as a welcoming entry point, the Pokémon page displays a list of Pokémon with pagination, and the Legend page is a hidden page accessible via a secret password in the URL. The application leverages HTML, JavaScript, React, Node.js, REST API, and Chakra UI for a modern and responsive design.',
        link: 'https://pokedeh-app-fenti.netlify.app/'
    },
    {
        id: 13,
        image: '../img/calculate.png',
        title: 'Calculator App',
        desc: 'The Calculator App is a web-based application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Leveraging modern web technologies, this app provides a user-friendly interface for performing calculations directly in a web browser. The application is built using HTML for structure, JavaScript for functionality, DOM manipulation and Browser API for interactive features, and styled with CSS and Bootstrap for a polished look.',
        link: 'https://calculator-app-fenti.netlify.app/'
    },
    {
        id: 14,
        image: '../img/portfolio.png',
        title: 'Personal Portfolio Website',
        desc: 'The Personal Portfolio Website is a web-based platform that presents your personal information alongside a dummy portfolio. This website showcases your background, skills, and projects in a visually appealing manner, providing visitors with a comprehensive overview of your professional capabilities. The website is built using HTML for content structuring and Tailwind CSS for styling, ensuring a modern and responsive design.',
        link: 'https://fenti-agil-s-final-project.netlify.app'
    },
    {
        id: 15,
        image: '../img/resume.png',
        title: 'Personal Website',
        desc: 'The Personal Website is a digital portfolio that showcases personal information, educational background, professional experience, and contact details. This website is designed to provide a comprehensive view of your personal and professional life, making it easier for others to learn about you and get in touch. The website is developed using HTML and styled with Tailwind CSS for a modern and responsive design.',
        link: 'https://fenti-agil-sakinah.netlify.app/'
    },
    {
        id: 16,
        image: '../img/absensi.png',
        title: 'Student Attendance Web Application',
        desc: 'The Student Attendance Web Application is designed to streamline the process of student attendance management in educational institutions. This web-based application has three types of users: Admin, Lecturer, and Student. Each user has specific functionalities tailored to their role. Admins can manage data for both lecturers and students, lecturers can manage courses and view student attendance, and students can register for courses and record their attendance. Developed using PHP native, HTML, CSS, and MySQL, this application ensures efficient and accurate attendance tracking.',
        link: 'https://github.com/Fentiagil/Aplikasi-Absensi-berbasis-website/tree/main/FP%20APP%20Absensi'
    },
    {
        id: 17,
        image: '../img/ramadan.png',
        title: 'Ramadan Website',
        desc: 'The Ramadhan Schedule Website is a comprehensive platform designed to provide users with essential information during the holy month of Ramadhan. The website displays prayer schedules, iftar (breaking fast) times, and Taraweeh prayer timings. Developed using PHP native, HTML, CSS, and MySQL, this application allows for efficient management of the schedules through CRUD (Create, Read, Update, Delete) operations, ensuring that the information is always accurate and up-to-date.',
        link: 'https://github.com/Fentiagil/Website-Ramadhan/tree/main/WEB%20Ramadhan'
    },
    {
        id: 18,
        image: '../img/24puz.png',
        title: '24-Puzzle Game App',
        desc: '24-Puzzle Game App is a powerful application designed to solve 24-puzzle problems using heuristic search algorithms. The app is developed using java programming language. By using the heuristic function h3 and the best first search algorithm A* (A-star), the app efficiently finds the solution path from the initial state to the goal state. The program outputs the solution steps, shows the movement of the tiles and calculates the Euclidean distance (distance between the empty tiles and the goal state) at each step.',
        link: 'https://github.com/Fentiagil/Game-24-Puzzle'
    },
    {
        id: 19,
        image: '../img/vmachine.png',
        title: 'Vending Machine Application',
        desc: 'The Vending Machine App is an intuitive tool designed to simplify the process of ordering drinks. The app was created using the C programming language. By providing a digital interface for users to select, purchase, and print receipts for their drinks, the app minimizes the need to queue at crowded stores or supermarkets. The main goal of the app is to improve the convenience and efficiency of purchasing beverages, offering a seamless experience from selection to payment.',
        link: 'https://github.com/Fentiagil/Bahasa-C/blob/main/mesin%20minuman%20kel7.cpp'
    },
    {
        id: 20,
        image: '../img/matriks.png',
        title: 'Matrix Operation Application',
        desc: 'The Matrix Operations Application is a robust tool designed to perform fundamental matrix calculations, including matrix addition, subtraction, multiplication, and determinant calculation using both Sarrus and Laplace methods. Developed using the C programming language, this application provides a user-friendly interface for executing essential matrix operations, making it an invaluable resource for students, educators, and professionals dealing with linear algebra and matrix computations.',
        link: 'https://github.com/Fentiagil/Bahasa-C.git'
    }
      
    // Tambahkan lebih banyak objek proyek hingga mencapai 20 proyek
  ];
  
  export default projectData;
  