import styled from "@emotion/styled/macro"
import { ColorGradient, GreyScale } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { ColorInput } from "../../../components"
import { CenterLayout } from "../../fragments/CenterLayout"

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  > div {
    align-items: flex-start;
    margin: 0;
  }
`

export const PostColoring = () => {
  const { theme, setTheme } = useTheme()
  const {
    color: { bg, fg, primary, secondary },
  } = theme

  const setGrey = (
    group: "bg" | "fg",
    shade: keyof GreyScale,
    color: string
  ) => {
    if (theme.color[group][shade] !== color) {
      const cpy = { ...theme }
      cpy.color.name = "custom"
      cpy.color[group][shade] = color
      setTheme(cpy)
    }
  }

  const setAccent = (
    group: "primary" | "secondary",
    shade: keyof ColorGradient,
    color: string
  ) => {
    if (theme.color[group][shade] !== color) {
      const cpy = { ...theme }
      cpy.color.name = "custom"
      cpy.color[group][shade] = color
      setTheme(cpy)
    }
  }

  const setBgShade = (value: string) => setGrey("bg", "shade", value)
  const setBgBase = (value: string) => setGrey("bg", "base", value)
  const setBgSurface = (value: string) => setGrey("bg", "surface", value)
  const setBgHighlight = (value: string) => setGrey("bg", "highlight", value)

  const setFgShade = (value: string) => setGrey("fg", "shade", value)
  const setFgBase = (value: string) => setGrey("fg", "base", value)
  const setFgSurface = (value: string) => setGrey("fg", "surface", value)
  const setFgHighlight = (value: string) => setGrey("fg", "highlight", value)

  const setPrimaryBg = (value: string) => setAccent("primary", "bg", value)
  const setPrimaryBase = (value: string) => setAccent("primary", "base", value)
  const setPrimaryFg = (value: string) => setAccent("primary", "fg", value)

  const setSecondaryBg = (value: string) => setAccent("secondary", "bg", value)
  const setSecondaryBase = (value: string) =>
    setAccent("secondary", "base", value)
  const setSecondaryFg = (value: string) => setAccent("secondary", "fg", value)

  return (
    <Wrapper>
      {/** Background */}
      <CenterLayout>
        <h4>Background</h4>
      </CenterLayout>
      <CenterLayout>
        <ColorInput label="Unused" value={bg.shade} onChange={setBgShade} />
        <ColorInput label="Background" value={bg.base} onChange={setBgBase} />
        <ColorInput
          label="Surface background"
          value={bg.surface}
          onChange={setBgSurface}
        />
        <ColorInput
          label="Icon:focus"
          value={bg.highlight}
          onChange={setBgHighlight}
        />
      </CenterLayout>

      {/** Forground */}
      <CenterLayout>
        <h4>Forground</h4>
      </CenterLayout>
      <CenterLayout>
        <ColorInput label="Unused" value={fg.shade} onChange={setFgShade} />
        <ColorInput label="Input border" value={fg.base} onChange={setFgBase} />
        <ColorInput
          label="Bookmark label | Input text"
          value={fg.surface}
          onChange={setFgSurface}
        />
        <ColorInput
          label="Unused"
          value={fg.highlight}
          onChange={setFgHighlight}
        />
      </CenterLayout>

      {/** Primary */}
      <CenterLayout>
        <h4>Primary</h4>
      </CenterLayout>
      <CenterLayout>
        <ColorInput
          label="Shadow start"
          value={primary.bg}
          onChange={setPrimaryBg}
        />
        <ColorInput
          label="Surface border | Icon:hover | Input:focus"
          value={primary.base}
          onChange={setPrimaryBase}
        />
        <ColorInput
          label="Headline | Icon"
          value={primary.fg}
          onChange={setPrimaryFg}
        />
      </CenterLayout>

      {/** Secondary */}
      <CenterLayout>
        <h4>Secondary</h4>
      </CenterLayout>
      <CenterLayout>
        <ColorInput
          label="Shadow end"
          value={secondary.bg}
          onChange={setSecondaryBg}
        />
        <ColorInput
          label="Unused"
          value={secondary.base}
          onChange={setSecondaryBase}
        />
        <ColorInput
          label="Group label"
          value={secondary.fg}
          onChange={setSecondaryFg}
        />
      </CenterLayout>
    </Wrapper>
  )
}
