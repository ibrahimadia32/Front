import {Dialog , DialogTitle , DialogContent , DialogActions , Button , TextField} from '@mui/material';
import {useState} from 'react';
import {Person}  from '../interface/Interface.Profil';

interface Props {
    open : boolean;
    handleClose : () => void;
    addPerson : (person : Person) => void;
    person : Person;
}

interface PersonInput {
    name : string;
    key : string,
    value : any,
    type : "text" | "number" | "date" | "email" | "password" | "tel" | "url" | "search" | "time" | "color" | "file" | "month" | "week" | "datetime-local" | "radio" | "checkbox" | "range" | "image" | "select" | "textarea" | "autocomplete"
    changeValue : (value : any) => void;
}

const AddDailog =({open , handleClose , person} : Props) => {  
      const [personState , setPersonState] = useState<Person>(
        person
      );

      const personInput : PersonInput[] = [
        {
          name : "firstname",
          key : "firstname",
          value : personState.firstname,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , firstname : value})
        },
        {
          name : "lastname",
          key : "lastname",
          value : personState.lastname,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , lastname : value})
        },
        {
          name : "jobtitle",
          key : "jobtitle",
          value : personState.jobtitle,
          type : "date",
          changeValue : (value : any) => setPersonState({...personState , jobtitle : value})
        },
        {
          name : "bio",
          key : "bio",
          value : personState.bio,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , bio : value})
        },
        {
          name:"avatar",
          key : "avatar",
          value : personState.avatarUrl,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , avatarUrl : value})
        },
        {
          name : "phone",
          key : "phone",
          value : personState.phone,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , phone : value})
        },
        {
          name : "email",
          key : "email",
          value : personState.email,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , email : value})
        },
        {
          name : "address",
          key : "address",
          value : personState.address,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , address : value})
        },
        {
          name : "github",
          key : "github",
          value : personState.github,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , github : value})
        },
        {
          name : "linkedin",
          key : "linkedin",
          value : personState.linkedin,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , linkedin : value})
        },
        {
          name : "experiences",
          key : "experiences",
          value : personState.experiences,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , experiences : value})
        },
        {
          name  : "formation",
          key : "formation",
          value : personState.formations,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , formations : value})
        },
        {
          name : "domaines",
          key : "domaines",
          value : personState.domaines,
          type : "text",
          changeValue : (value : any) => setPersonState({...personState , domaines : value})
        }
      ];

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Person</DialogTitle>
        <DialogContent>
          {
            personInput.map((input , index) => (
              <TextField
                key={index}
                label={input.name}
                type={input.type}
                value={input.value}
                onChange={(e) => input.changeValue(e.target.value)}
              />
            ))
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleClose()}>Add</Button>
        </DialogActions>
      </Dialog>
    )
}

export default AddDailog;
