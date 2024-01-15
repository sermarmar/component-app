import { Delete, Send } from '@mui/icons-material';
import { Button, Stack, Typography } from "@mui/material";

export const ButtonsComponent = () => {

  return (
    <>
      <Typography variant="h1" align="center">Buttons</Typography>
      <Stack spacing={4} alignItems="center" alignContent='center'>
        <Typography variant="h3">Background</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="inherit">Inherit</Button>
        </Stack>

        <Typography variant="h3">Outline</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="warning">Warning</Button>
          <Button variant="outlined" color="info">Info</Button>
          <Button variant="outlined" color="inherit">Inherit</Button>
        </Stack>

        <Typography variant="h3">Text</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="error">Error</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
          <Button color="inherit">Inherit</Button>
        </Stack>

        <Typography variant="h3">Size</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button variant="contained" color="primary" size="small">Small</Button>
          <Button variant="contained" color="primary" size="medium">Medium</Button>
          <Button variant="contained" color="primary" size="large">Large</Button>
        </Stack>

        <Typography variant="h3">Icons</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button variant="contained" color="primary" startIcon={<Send />}>Enviar</Button>
          <Button variant="contained" color="primary" endIcon={<Delete />}>Borrar</Button>
        </Stack>

        <Typography variant="h3">Disabled</Typography>
        <Stack spacing={2} direction={{xs:'column', sm:'row'}}>
          <Button variant="contained" color="primary" disabled>Disabled</Button>
        </Stack> 
      </Stack>
    </>
  )
}