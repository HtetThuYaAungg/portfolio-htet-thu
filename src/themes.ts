export interface ColorTheme {
  name: string
  primary: string
  secondary: string
  borderGlow: string
  textDim: string
  accent: string
  matrixHead: string
  matrixBody: string
  matrixDim: string
  isRainbow?: boolean
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    name: 'cyan',
    primary: '#00ffff',
    secondary: '#00ff88',
    borderGlow: 'rgba(0, 255, 255, 0.3)',
    textDim: 'rgba(0, 255, 255, 0.6)',
    accent: '#00a8ff',
    matrixHead: '#00ffff',
    matrixBody: '#00ff88',
    matrixDim: 'rgba(0, 255, 136, 0.4)',
  },
  {
    name: 'green',
    primary: '#00ff88',
    secondary: '#88ff00',
    borderGlow: 'rgba(0, 255, 136, 0.3)',
    textDim: 'rgba(0, 255, 136, 0.6)',
    accent: '#00ff44',
    matrixHead: '#88ff00',
    matrixBody: '#00ff88',
    matrixDim: 'rgba(0, 255, 136, 0.4)',
  },
  {
    name: 'blue',
    primary: '#00a8ff',
    secondary: '#8888ff',
    borderGlow: 'rgba(0, 168, 255, 0.3)',
    textDim: 'rgba(0, 168, 255, 0.6)',
    accent: '#4488ff',
    matrixHead: '#88ccff',
    matrixBody: '#00a8ff',
    matrixDim: 'rgba(0, 168, 255, 0.4)',
  },
  {
    name: 'red',
    primary: '#ff4466',
    secondary: '#ff8844',
    borderGlow: 'rgba(255, 68, 102, 0.3)',
    textDim: 'rgba(255, 68, 102, 0.6)',
    accent: '#ff6688',
    matrixHead: '#ff8888',
    matrixBody: '#ff4466',
    matrixDim: 'rgba(255, 68, 102, 0.4)',
  },
  {
    name: 'purple',
    primary: '#bf5fff',
    secondary: '#ff66cc',
    borderGlow: 'rgba(191, 95, 255, 0.3)',
    textDim: 'rgba(191, 95, 255, 0.6)',
    accent: '#9944ff',
    matrixHead: '#dd88ff',
    matrixBody: '#bf5fff',
    matrixDim: 'rgba(191, 95, 255, 0.4)',
  },
  {
    name: 'orange',
    primary: '#ff8800',
    secondary: '#ffcc00',
    borderGlow: 'rgba(255, 136, 0, 0.3)',
    textDim: 'rgba(255, 136, 0, 0.6)',
    accent: '#ffaa44',
    matrixHead: '#ffcc44',
    matrixBody: '#ff8800',
    matrixDim: 'rgba(255, 136, 0, 0.4)',
  },
  {
    name: 'pink',
    primary: '#ff44aa',
    secondary: '#ff88dd',
    borderGlow: 'rgba(255, 68, 170, 0.3)',
    textDim: 'rgba(255, 68, 170, 0.6)',
    accent: '#ff66cc',
    matrixHead: '#ffaadd',
    matrixBody: '#ff44aa',
    matrixDim: 'rgba(255, 68, 170, 0.4)',
  },
  {
    name: 'gold',
    primary: '#ffd700',
    secondary: '#ffee88',
    borderGlow: 'rgba(255, 215, 0, 0.3)',
    textDim: 'rgba(255, 215, 0, 0.6)',
    accent: '#ffcc00',
    matrixHead: '#ffee88',
    matrixBody: '#ffd700',
    matrixDim: 'rgba(255, 215, 0, 0.4)',
  },
  {
    name: 'mint',
    primary: '#00ffaa',
    secondary: '#88ffcc',
    borderGlow: 'rgba(0, 255, 170, 0.3)',
    textDim: 'rgba(0, 255, 170, 0.6)',
    accent: '#44ffbb',
    matrixHead: '#aaffdd',
    matrixBody: '#00ffaa',
    matrixDim: 'rgba(0, 255, 170, 0.4)',
  },
  {
    name: 'ice',
    primary: '#88ddff',
    secondary: '#aaeeff',
    borderGlow: 'rgba(136, 221, 255, 0.3)',
    textDim: 'rgba(136, 221, 255, 0.6)',
    accent: '#66ccff',
    matrixHead: '#ccf0ff',
    matrixBody: '#88ddff',
    matrixDim: 'rgba(136, 221, 255, 0.4)',
  },
]

// Rainbow theme is separate - used only for inactive state
export const RAINBOW_THEME: ColorTheme = {
  name: 'rainbow',
  primary: '#ff0000',
  secondary: '#00ff00',
  borderGlow: 'rgba(255, 255, 255, 0.3)',
  textDim: 'rgba(255, 255, 255, 0.6)',
  accent: '#ffff00',
  matrixHead: '#ffffff',
  matrixBody: '#ff00ff',
  matrixDim: 'rgba(255, 255, 255, 0.4)',
  isRainbow: true,
}

export const getRandomTheme = (): ColorTheme => {
  const randomIndex = Math.floor(Math.random() * COLOR_THEMES.length)
  return COLOR_THEMES[randomIndex]
}

export const applyTheme = (theme: ColorTheme): void => {
  const root = document.documentElement
  root.style.setProperty('--primary-cyan', theme.primary)
  root.style.setProperty('--primary-green', theme.secondary)
  root.style.setProperty('--border-glow', theme.borderGlow)
  root.style.setProperty('--text-dim', theme.textDim)
  root.style.setProperty('--accent-blue', theme.accent)
  
  // Toggle rainbow class for animated rainbow theme
  if (theme.isRainbow) {
    root.classList.add('rainbow-theme')
  } else {
    root.classList.remove('rainbow-theme')
  }
}

