import React, { useState } from 'react'
import { UseGlobalContext } from '../components/Context'

const Settings = () => {
  const {setColors , newColors, setNewColors } = UseGlobalContext()

  const handleChange = (mode, key, value) => {
    setNewColors(prev => ({
      ...prev,
      [mode]: {
        ...prev[mode],
        [key]: value
      }
    }))
  }

  const saveColors = () => {
    setColors(newColors)
    alert("Colors updated successfully!")
  }

  return (
    <div className="settings-page">
      <h2>Customize Theme Colors</h2>
      
      <div>
        <h3>🌙 Dark Mode</h3>
        <label>On Color: <input type="color" value={newColors.dark.onColor} onChange={(e) => handleChange("dark", "onColor", e.target.value)} /></label>
        <label>Handle Color: <input type="color" value={newColors.dark.onHandleColor} onChange={(e) => handleChange("dark", "onHandleColor", e.target.value)} /></label>
        <label>Background: <input type="color" value={newColors.dark.background} onChange={(e) => handleChange("dark", "background", e.target.value)} /></label>
        <label>Text Color: <input type="color" value={newColors.dark.text} onChange={(e) => handleChange("dark", "text", e.target.value)} /></label>
      </div>

      <div>
        <h3>☀️ Light Mode</h3>
        <label>Off Color: <input type="color" value={newColors.light.offColor} onChange={(e) => handleChange("light", "offColor", e.target.value)} /></label>
        <label>Handle Color: <input type="color" value={newColors.light.offHandleColor} onChange={(e) => handleChange("light", "offHandleColor", e.target.value)} /></label>
        <label>Background: <input type="color" value={newColors.light.background} onChange={(e) => handleChange("light", "background", e.target.value)} /></label>
        <label>Text Color: <input type="color" value={newColors.light.text} onChange={(e) => handleChange("light", "text", e.target.value)} /></label>
      </div>


      <button onClick={saveColors}>Save Colors</button>
    </div>
  )
}

export default Settings
