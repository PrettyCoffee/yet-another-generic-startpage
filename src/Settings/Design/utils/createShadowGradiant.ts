import { createColorGradiant } from "./createColorGradiant"

const getShadow = (offset: number, blur: number, color: string) =>
  `${offset}px ${offset}px ${blur}px ${color}`

export type ShadowParameters = {
  amount: number
  blur: number
  offset: number
}

export const createShadowGradiant = (
  colorStart: string,
  colorEnd: string,
  { amount, blur, offset }: ShadowParameters
) => {
  const colorGradient = createColorGradiant(colorStart, colorEnd, amount)
  const shadows = colorGradient.map((color, index) =>
    getShadow(offset * (index + 1), blur, color)
  )
  return shadows.join(", ")
}
