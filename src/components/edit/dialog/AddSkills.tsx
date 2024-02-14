import { Box, Chip, MenuItem, Select, Typography } from '@mui/material';
import Requestapi from '../../../services/Requestapi';
import { useState, useEffect } from 'react';
import { Domaine } from '../../interface/Interface.Profil';

const AddSkills = ({
    defaultSkills,
    handleSkills,
}: {
    defaultSkills?: Domaine[];
    handleSkills: (skills: Domaine[]) => void;
}) => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const [skills, setSkills] = useState<Domaine[]>([]);

    const getSkills = async () => {
        const response = await Requestapi.getalldomaine();
        setSkills(response.data);
    };

    useEffect(() => {
        getSkills();
        if (defaultSkills) {
            setSelectedSkills(defaultSkills.map((skill) => skill.name));
            console.log(defaultSkills);
        }
    }, []);

    return (
        <>
            <Typography variant="h6">Skills</Typography>
            <Select
                multiple
                sx={{ width: '100%' }}
                value={selectedSkills}
                onChange={(e) => {
                    setSelectedSkills(e.target.value as string[]);
                }}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {(selected as string[]).map((value) => (
                            <Chip key={value} label={value} sx={{ m: 0.5 }} />
                        ))}
                    </Box>
                )}>
                {skills.map((skill) => (
                    <MenuItem key={skill._id} value={skill.name} sx={{ width: '100%' }}>
                        {skill.name}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
};

export default AddSkills;
