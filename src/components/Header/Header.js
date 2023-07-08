import React from 'react'
import "./Header.css";
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import categories from "../../data/category";

const Header = ({setCategory, category, word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    
      const handleChange = (language) => {
        setCategory(language);
        setWord("");
      };

  return (
    <div className='header'>
      <span className='title'>{word? word: "Word Hunt"}</span>
      <div className='inputs'>

      <ThemeProvider theme={darkTheme}>
      <CssBaseline id="standard-basic" label="Standard" variant="standard" />
      
      <TextField 
      className='search' 
      label="Search a Word"
       value={word}
       onChange={(e) => setWord(e.target.value)}
      variant="standard" 
      />

      <TextField
      className='select'
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
          defaultValue="EUR"
          variant="standard"
        >
          
          {
            categories.map((option)=> (
                <MenuItem key={option.label} value={option.label}>
                    {option.value}
                </MenuItem>
            ))
          }
            

           
        </TextField>
      </ThemeProvider>
      
      </div>
    </div>
  )
}

export default Header;
