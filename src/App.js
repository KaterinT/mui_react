import { Button, ButtonGroup, styled, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

function App() {


  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.otherColor.main,
    color:"#888",
    margin:5,
    "&:hover":{
      backgroundColor:"violet"
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"
    }
  }));
  return (
    <div >
      <Button variant="text" startIcon={<SettingsIcon />}>Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <Button variant="contained" color="otherColor">
        My Unique Button
      </Button>
      <BlueButton>
        One button
      </BlueButton>
      <BlueButton>
        Other button
      </BlueButton>

    </div>
  );
}

export default App;
