import React, { useEffect } from 'react'
import './App.css'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  // useEffect Ejecuta codigo basado en una condición dada
  useEffect(() => {
    const hash = getTokenFromUrl()

    // Borramos la token del url por seguridad
    window.location.hash = ''

    const _token = hash.access_token

    if (!_token) return

    dispatch({
      type: 'SET_TOKEN',
      token: _token,
    })

    // Le mandamos la token al api de Spotify
    spotify.setAccessToken(_token)

    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user,
      })
    })

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists,
      })
    })

    spotify.getPlaylist('37i9dQZEVXcLj1qiaIEIO7').then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    })
  }, [])

  console.log('👦', user)
  console.log('👾', token)

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>
}

export default App
