import Color from "color"

type RGB = {
  r: number
  g: number
  b: number
}

const getRgbValues = (color: string) => Color(color).object() as RGB

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

const getColorStep = (start: RGB, end: RGB, steps: number, step: number) => {
  const red = calcStep(start.r, end.r, steps, step)
  const green = calcStep(start.g, end.g, steps, step)
  const blue = calcStep(start.b, end.b, steps, step)

  return `rgb(${red}, ${green}, ${blue})`
}

export const createColorGradiant = (
  start: string,
  end: string,
  steps: number
) => {
  if (steps < 2) return [start]
  const startHsl = getRgbValues(start)
  const endHsl = getRgbValues(end)

  const colors = []
  for (let step = 0; step < steps; step++)
    colors.push(getColorStep(startHsl, endHsl, steps, step))

  return colors
}
