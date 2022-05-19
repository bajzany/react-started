import React from 'react'
import logo from '../logo.svg'
import '../assets/App.css'
import { Button, Card, CardContent, CardHeader, Grid, TextField, ThemeProvider } from '@mui/material'
import { theme } from '@wrapped/theme/Theme'
import {ChangeImagePosition} from "@wrapped/components/ChangeImagePosition";


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <ChangeImagePosition image={logo}/>
    </ThemeProvider>
  )
}
