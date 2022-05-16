import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import TextField from '@mui/material/TextField'

const MyField = styled(TextField)({
  marginTop: 20,
  marginBottom: 20,
  display: 'block',
})

const UserList = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')

  const [nombreError, setNombreError] = useState(false)
  const [apellidoError, setApellidoError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setNombreError(false)
    setApellidoError(false)
    setEmailError(false)

    if (nombre === '') {
      setNombreError(true)
    }
    if (apellido === '') {
      setApellidoError(true)
    }
    if (email === '') {
      setEmailError(true)
    }

    if (nombre && apellido && email) {
      console.log(nombre, apellido, email)
    }
  }

  return (
    <Container maxWidth='false'>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <MyField
          onChange={(e) => setNombre(e.target.value)}
          label='Nombre'
          color='secondary'
          fullWidth
          required
          error={nombreError}
        />
        <MyField
          onChange={(e) => setApellido(e.target.value)}
          label='Apellido'
          color='secondary'
          //   multiline
          //   rows={4}
          fullWidth
          required
          error={apellidoError}
        />
        <MyField
          onChange={(e) => setEmail(e.target.value)}
          label='Email'
          color='secondary'
          fullWidth
          required
          error={emailError}
        />
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          startIcon={<PersonAddAltOutlinedIcon />}
        >
          Crear Usuario
        </Button>
      </form>

      {/* icons */}
      {/* <br />
      <PersonAddAltOutlinedIcon />
      <PersonAddAltOutlinedIcon color='secondary' fontSize='large' />
      <PersonAddAltOutlinedIcon color='secondary' fontSize='small' />
      <PersonAddAltOutlinedIcon color='action' fontSize='small' />
      <PersonAddAltOutlinedIcon color='error' fontSize='small' />
      <PersonAddAltOutlinedIcon color='disabled' fontSize='small' /> */}
    </Container>
  )
}

export default UserList
