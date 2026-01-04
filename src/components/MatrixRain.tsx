import { useEffect, useRef } from 'react'
import './MatrixRain.css'
import { ColorTheme } from '../themes'

interface MatrixRainProps {
  theme: ColorTheme
}

// Helper to generate HSL colors for rainbow effect
const getHslColor = (hue: number, saturation = 100, lightness = 50, alpha = 1) => {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}

const MatrixRain: React.FC<MatrixRainProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|\\/@#$%^&*'
    const charArray = chars.split('')
    
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)
    let hueOffset = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 14, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        if (theme.isRainbow) {
          // Rainbow mode: each column gets a different color based on position
          const hue = ((i * 10) + hueOffset) % 360
          if (Math.random() > 0.98) {
            ctx.fillStyle = getHslColor(hue, 100, 80)
          } else if (Math.random() > 0.9) {
            ctx.fillStyle = getHslColor(hue, 100, 60)
          } else {
            ctx.fillStyle = getHslColor(hue, 100, 50, 0.4)
          }
        } else {
          // Normal theme colors
          if (Math.random() > 0.98) {
            ctx.fillStyle = theme.matrixHead
          } else if (Math.random() > 0.9) {
            ctx.fillStyle = theme.matrixBody
          } else {
            ctx.fillStyle = theme.matrixDim
          }
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      
      // Slowly shift rainbow hue over time
      if (theme.isRainbow) {
        hueOffset = (hueOffset + 2) % 360
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="matrix-rain" />
}

export default MatrixRain

