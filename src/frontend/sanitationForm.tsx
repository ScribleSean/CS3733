import { useState } from "react";
import { form } from "../types/form.ts";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


export function SanitationForm() {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('');
    const [location, setLocation] = useState('');
    const [requestType, setRequestType] = useState('');
    const [permission, setPermission] = useState('');
    const [status, setStatus] = useState('');

    const handlePriorityChange = (event: SelectChangeEvent) => {
        setPriority(event.target.value as string);
    };
    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };


    async function submit() {
        const sanitionFormData: form = {
            name: name,
            priority: priority,
            location: location,
            requestType: requestType,
            permission: permission,
            status: status,
        };
        const res = await axios.post("/api/sanitation", sanitionFormData, {
            headers: {
                "content-type": "Application/json",
            },
        });
        if(res.status == 200) {
            console.log(res.data);
        }
    }

    function clear() {
        setName("");
        setPriority("");
        setLocation("");
        setRequestType("");
        setPermission("");
        setStatus("");
    }

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-controlled"
                        label="Name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                    />
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={priority}
                        label="Priority"
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value={"Low"}>Low</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Emergency"}>Emergency</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-controlled"
                        label="Location"
                        value={location}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setLocation(event.target.value);
                        }}
                    />
                </FormControl>
            </Box>

            <ToggleButtonGroup
                color="primary"
                value={requestType}
                exclusive
                onChange={(e) => {
                    setRequestType(e.target.value);
                }}
                aria-label="Platform"
            >
                <ToggleButton value="Garbage Pickup">Garbage Pickup</ToggleButton>
                <ToggleButton value="Recycling Pickup">Recycling Pickup</ToggleButton>
                <ToggleButton value="Hazardous Waste Disposal">Hazardous Waste Disposal</ToggleButton>
            </ToggleButtonGroup>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Permission</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={permission}
                    onChange={(e) => {
                        setPermission(e.target.value);
                    }}
                >
                    <FormControlLabel value="Only enter with supervision" control={<Radio />} label="Only enter with supervision" />
                    <FormControlLabel value="Can enter without supervision" control={<Radio />} label="Can enter without supervision" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleStatusChange}
                    >
                        <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                        <MenuItem value={"Assigned"}>Assigned</MenuItem>
                        <MenuItem value={"In Progress"}>In Progress</MenuItem>
                        <MenuItem value={"Closed"}>Closed</MenuItem>

                    </Select>
                </FormControl>
            </Box>

            <button
                className={
                    "border-2 w-32 px-5 py-2 rounded-3xl border-gray-400 drop-shadow-xl"
                }
                onClick={submit}
            >
                Submit
            </button>
            <button
                className={
                    "border-2 w-32 px-5 py-2 rounded-3xl border-gray-400 drop-shadow-xl"
                }
                onClick={clear}
            >
                Clear
            </button>
        </div>

    );

}