import React, {useState} from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";

export default function HospitalSearch()
{
    const [location, setLocation] = useState("Lagos");

    function handleLocationChange(e){
        setLocation(e.target.value);
    }

    return(
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}>

        <form style={{ width: "50%" }}>
          <h1>Search The Nearest Hospital</h1>  
          <FormControl margin="normal" fullWidth>           
            <Input id="location" type="text"
            name="location" 
            value={location} 
            onChange={handleLocationChange}/>
          </FormControl>
          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
          </form>
      </div>
    )
}