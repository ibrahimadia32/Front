export interface Domaine {
    _id: string;
    name: string;
}

export interface Duration {
    start: Date;
    end: Date;
}

export interface Experience {
    company: string;
    position: string;
    duration: Duration;
}

export interface Formation {
    school: string;
    degree: string;
    duration: Duration;
}
export interface Person {
    _id: string;
    firstname: string;
    lastname: string;
    jobtitle: string;
    bio?: string;
    avatarUrl?: string;
    phone: string;
    email: string;
    address?: string;
    github?: string;

    linkedin?: string;
    experiences: Experience[];
    formations: Formation[];
    domaines: Domaine[];
}
