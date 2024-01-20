export interface Person {
    firstname: string;
    lastname: string;
    jobtitle: string;
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
