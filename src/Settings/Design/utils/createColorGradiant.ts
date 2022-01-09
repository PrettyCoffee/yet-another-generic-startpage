import Color from "color"

type HSL = {
  h: number
  s: number
  l: number
}

const getHslValues = (color: string): HSL => ({
  h: Color(color).hsl().hue(),
  s: Color(color).hsl().saturationv(),
  l: Color(color).hsl().lightness(),
})

const calcStep = (start: number, end: number, steps: number, step: number) => {
  if (start >= end) {
    const difference = start - end
    const change = (difference / (steps - 1)) * step
    return start - change
  }

  const difference = end - start
  const change = (difference / (steps - 1)) * step
  return start + change
}

const getColorStep = (start: HSL, end: HSL, steps: number, step: number) => {
  const hue = calcStep(start.h, end.h, steps, step)
  const saturation = calcStep(start.s, end.s, steps, step)
  const lightness = calcStep(start.l, end.l, steps, step)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export const createColorGradiant = (
  start: string,
  end: string,
  steps: number
) => {
  if (steps < 2) return [start]
  const startHsl = getHslValues(start)
  const endHsl = getHslValues(end)

  const colors = []
  for (let step = 0; step < steps; step++)
    colors.push(getColorStep(startHsl, endHsl, steps, step))

  return colors
}
