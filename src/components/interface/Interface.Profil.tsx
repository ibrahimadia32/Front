interface Person {
    name: string;
    jobTitle: string;
    location: string;
    bio: string;
    avatarUrl: string;
    phone: string;
    email: string;
    address: string;
    birthday: string;
    github: string;
    linkedin: string;
    experience: {
        company: string;
        position: string;
        duration: string;
    }[];
    formation: {
        school: string;
        degree: string;
        duration: string;
    }[];
};

const person1: Person = {
    name: "John Doe",
    jobTitle: "Full Stack Developer",
    location: "Paris",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, ante ut rutrum placerat, diam augue fringilla ante, vitae bibendum nisl nisl nec nisi. Nulla facilisi. Sed vitae erat euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit. Sed nec nisl euismod, aliquam nisl vitae, aliquam elit.",
    avatarUrl: "https://avatars.githubusercontent.com/u/62892288?v=4",
    phone: "+33 6 12 34 56 78",
    email: "email@gmail.com",
    address: "1 rue de la Paix, 75000 Paris",
    birthday: "01/01/2000",
    github:"www.github.com",
    linkedin:"www.linkedin.com",
    experience: [
        {
            company: "ABC Inc.",
            position: "Web Developer",
            duration: "January 2020 - Present",
        },
        {
            company: "XYZ Corp.",
            position: "Development Intern",
            duration: "June 2019 - December 2019",
        },
    ],
    formation: [
        {
            school: "School 1",
            degree: "Degree 1",
            duration: "2018 - 2020",
        },
        {
            school: "School 2",
            degree: "Degree 2",
            duration: "2016 - 2018",
        },
    ],



};