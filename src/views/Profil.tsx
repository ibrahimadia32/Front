import Bio from '../components/profil/Bio.profil';
import Experience from '../components/profil/Experience.profil';
import Formation from '../components/profil/Competences.profil';
import Contact from '../components/profil/Contact.profil';
import Username from '../components/profil/Username.profil';
import { Person } from '../components/interface/Interface.Profil';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Requestapi from '../services/Requestapi';


const styles = {
  paper: {
    padding: 20,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  section: {
    marginTop: 20,
    
  },  
};

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const [profil, setProfil] = useState<Person>({
        _id: "",
        firstname: "",
        lastname: "",
        jobtitle: "",
        address: "",
        avatarUrl: "",
        bio: "",
        experiences: [],
        formations: [],
        phone: "",
        email: "",
        domaines: [],
    });
    
    useEffect(() => {
        id &&
        Requestapi.getprofil(id).then((response: any) => {
            console.log(response.data);
            setProfil(response.data);
        });

    }, []);
    return (
        <div
        style={{ width: "100%", height: "50vh", justifyContent: "left", alignItems: "center" , backgroundColor: "#F5F5F5"}}
        >
        <Username
            firstname={profil.firstname} 
            lastname={profil.lastname}
            jobTitle={profil.jobtitle}
            address={profil.address}
            avatarUrl={profil.avatarUrl}
        />
        
        <Bio
            bio={profil.bio}
        />

        <Experience
            experiences={profil.experiences}
        />

        <Formation
            formation={profil.formations}
        />


        <Contact
            telephone={profil.phone}
            email={profil.email}
            address={profil.address ? profil.address : "Adresse renseignée"}

        />
        </div>
    );
}

export default  ProfilePage;


