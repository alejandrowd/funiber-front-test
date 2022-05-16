import { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import Avatar from '@mui/material/Avatar'
import axios from 'axios'
import Header from './Header'

export const UserTable = () => {
  const [users, setUsers] = useState([])

  const baseURL = 'https://reqres.in/api/users'

  const getData = async () => {
    await axios.get(baseURL).then((response) => {
      const data = response.data.data

      setUsers(data)
    })
  }

  useEffect(() => {
    getData()
    console.log()
  }, [])

  const columns = [
    {
      name: 'id',
      label: 'ID',
    },
    {
      name: 'avatar',
      label: 'Foto',
      options: {
        customBodyRender: (value) => {
          return <Avatar src={value} />
        },
      },
    },
    {
      name: 'first_name',
      label: 'Nombre',
    },
    {
      name: 'last_name',
      label: 'Apellido',
    },
    {
      name: 'email',
      label: 'Email',
    },
  ]

  return (
    <>
      <Header />

      <MUIDataTable
        title={`Lista de Usuarios (${users.length})`}
        data={users}
        columns={columns}
      />
    </>
  )
}
