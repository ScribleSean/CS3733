import { useState } from "react";
import { form } from "../types/form.ts";
//import ReactDOM from "react-dom";
import axios from "axios";
//import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
//import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./sanitationForm.css";
import Paper from "@mui/material/Paper";

export function SanitationForm() {
    const [name, setName] = useState("");
    const [priority, setPriority] = useState("");
    const [location, setLocation] = useState("");
    const [requestType, setRequestType] = useState("");
    const [permission, setPermission] = useState("");
    const [status, setStatus] = useState("");

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
        if (res.status == 200) {
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
        <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
            my={4}
        >
            <p className={"title"}>Sanitation Request Form</p>

            <Paper elevation={4}>
                <Stack alignItems="center" justifyContent="center" spacing={2} p={3}>
                    <InputLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="demo-simple-select-label"
                    >
                        Name of Requester
                    </InputLabel>
                    <TextField
                        style={{
                            borderColor: "#3B54A0",
                            color: "#3B54A0",
                            accentColor: "#3B54A0",
                            borderBlockColor: "#3B54A0",
                        }}
                        id="outlined-controlled"
                        label=""
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                        sx={{ minWidth: 400 }}
                    />
                    <InputLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="priority-dropdown"
                    >
                        Priority
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={priority}
                        label="Priority"
                        onChange={handlePriorityChange}
                        sx={{ minWidth: 400 }}
                    >
                        <MenuItem value={"Low"}>Low</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Emergency"}>Emergency</MenuItem>
                    </Select>

                    <InputLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="location-form-field"
                    >
                        Location
                    </InputLabel>
                    <TextField
                        id="outlined-controlled"
                        label=""
                        value={location}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setLocation(event.target.value);
                        }}
                        sx={{ minWidth: 400 }}
                    />
                    <InputLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="demo-simple-select-label"
                    >
                        Request Type
                    </InputLabel>
                    <ToggleButtonGroup
                        color="error"
                        value={requestType} // Use the state value here
                        exclusive
                        onChange={(
                            _event: React.MouseEvent<HTMLElement>,
                            newValue: string | null
                        ) => {
                            if (newValue !== null) {
                                setRequestType(newValue); // Update state on change
                            }
                        }}
                        aria-label="Sanitation Type Buttons"
                        sx={{ minWidth: 120 }}
                    >
                        <ToggleButton
                            style={{
                                color: "#A27619",
                                outlineColor: "#949DB5",
                                borderColor: "#949DB5",
                            }}
                            value="Garbage Pickup"
                        >
                            Garbage Pickup
                        </ToggleButton>
                        <ToggleButton
                            style={{
                                color: "#A27619",
                                outlineColor: "#949DB5",
                                borderColor: "#949DB5",
                            }}
                            value="Recycling Pickup"
                        >
                            Recycling Pickup
                        </ToggleButton>
                        <ToggleButton
                            style={{
                                color: "#A27619",
                                outlineColor: "#949DB5",
                                borderColor: "#949DB5",
                            }}
                            value="Hazardous Waste Disposal"
                        >
                            Hazardous Waste Disposal
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <FormLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="demo-controlled-radio-buttons-group"
                    >
                        Permission
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={permission}
                        onChange={(e) => {
                            setPermission(e.target.value);
                        }}
                    >
                        <FormControlLabel
                            style={{
                                color: "#3D4A6B",
                                font: "Jaldi",
                            }}
                            value="Only enter with supervision"
                            control={<Radio />}
                            label="Only enter with supervision"
                        />
                        <FormControlLabel
                            style={{
                                color: "#3D4A6B",
                                font: "Jaldi",
                            }}
                            value="Can enter without supervision"
                            control={<Radio />}
                            label="Can enter without supervision"
                        />
                    </RadioGroup>
                    <InputLabel
                        style={{
                            color: "#3B54A0",
                        }}
                        id="demo-simple-select-label"
                    >
                        Status
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleStatusChange}
                        sx={{ minWidth: 300 }}
                    >
                        <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                        <MenuItem value={"Assigned"}>Assigned</MenuItem>
                        <MenuItem value={"In Progress"}>In Progress</MenuItem>
                        <MenuItem value={"Closed"}>Closed</MenuItem>
                    </Select>

                    <Stack
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button
                            style={{
                                color: "#3B54A0",
                                outlineColor: "#3B54A0",
                                borderColor: "#3B54A0",
                            }}
                            variant="outlined"
                            sx={{ minWidth: 100 }}
                            onClick={clear}
                        >
                            Clear
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#3B54A0",
                            }}
                            variant="contained"
                            sx={{ minWidth: 100 }}
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </Grid>
    );
}
