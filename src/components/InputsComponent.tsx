import { Stack, TextField, Typography } from "@mui/material";

export const InputsComponent = () => {

  return (
    <>
      <Typography variant="h1" align="center">Inputs</Typography>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h3">Basic Fields</Typography>
        <Stack spacing={3} direction={{xs:'column', sm:'row'}}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>

        <Typography variant="h3">Form Props</Typography>
        <Stack spacing={3} direction={{xs:'column', sm: 'row'}} useFlexGap flexWrap="wrap">
          <Stack spacing={3} direction={{xs:'column', sm: 'row'}}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="outlined-search" label="Search field" type="search" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </Stack>
        </Stack>
        <Typography variant="h3">Validation</Typography>
        <Stack spacing={3} direction={{xs:'column', sm: 'row'}}>
          <TextField error id="outlined-error" label="Error" defaultValue="Hello World"/>
          <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry."/>
        </Stack>
      </Stack>
    </>
  )
}