import { Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'


interface IChangeImagePosition {
  image: string
}

interface IPositions {
  x: number
  y: number
}

export const ChangeImagePosition = (props: IChangeImagePosition) => {

  const [positions, setPositions] = useState<IPositions>({ x: 0, y: 0 })

  const [maxAllowedPositions, setMaxAllowedPositions] = useState<IPositions>()

  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      setMaxAllowedPositions({
        x: window.screen.width - 250,
        y: window.screen.height - 320,
      })
    }

  }, [])

  const changePositions = (positions: IPositions) => {
    let x = maxAllowedPositions.x
    let y = maxAllowedPositions.y
    if (positions.x < x) {
      x = positions.x
    }
    if (positions.y < y) {
      y = positions.y
    }
    if (positions.x < 0) {
      x = 0
    }
    if (positions.y < 0) {
      y = 0
    }
    setPositions({
      x, y,
    })
  }


  return (
    <div className={'App-header'}>
      <img ref={ref} src={props.image} className="App-logo" alt="logo" style={{
        position: 'absolute',
        left: positions.x,
        top: positions.y,
      }} />
      <Grid container alignItems={'center'} justifyContent={'center'} direction={'column'} spacing={2} sx={{
        position: 'relative',
      }}>

        <Grid item>
          <Card sx={{ minHeight: 100 }}>
            <CardHeader
              title="Změna pozice"
            />
            <CardContent>
              <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                <Grid item>
                  <TextField
                    value={positions.x}
                    label={'X'}
                    type={'number'}
                    variant={'outlined'}
                    onChange={(e) => {
                      changePositions({
                        ...positions,
                        x: Number(e.target.value),
                      })
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    value={positions.y}
                    label={'Y'}
                    type={'number'}
                    variant={'outlined'}
                    onChange={(e) => {
                      changePositions({
                        ...positions,
                        y: Number(e.target.value),
                      })
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
