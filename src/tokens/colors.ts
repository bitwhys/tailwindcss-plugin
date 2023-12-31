import {
  slate,
  slateDark,
  slateA,
  slateDarkA,
  gray,
  grayDark,
  grayA,
  grayDarkA,
  sage,
  sageDark,
  sageA,
  sageDarkA,
  sand,
  sandDark,
  sandA,
  sandDarkA,
  olive,
  oliveDark,
  oliveA,
  oliveDarkA,
  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,
  lime,
  limeDark,
  limeA,
  limeDarkA,
  crimson,
  crimsonDark,
  crimsonA,
  crimsonDarkA,
} from '@radix-ui/colors'


const radixColorScales = {
  slate: [slate, slateDark, slateA, slateDarkA],
  gray: [gray, grayDark, grayA, grayDarkA],
  sage: [sage, sageDark, sageA, sageDarkA],
  sand: [sand, sandDark, sandA, sandDarkA],
  olive: [olive, oliveDark, oliveA, oliveDarkA],
  mauve: [mauve, mauveDark, mauveA, mauveDarkA],
  lime: [lime, limeDark, limeA, limeDarkA],
  crimson: [crimson, crimsonDark, crimsonA, crimsonDarkA],
}
export const getRadixColorScales = (scale: keyof typeof radixColorScales) => {
  return radixColorScales[scale]
}
export const getRadixPaletteObject = (prefix: string, palette: 'neutral' | 'neutral-inverted'| 'accent',alpha?: boolean) => {
  const base = ({
    1: `var(--${prefix}-${palette}-1)`,
    2: `var(--${prefix}-${palette}-2)`,
    3: `var(--${prefix}-${palette}-3)`,
    4: `var(--${prefix}-${palette}-4)`,
    5: `var(--${prefix}-${palette}-5)`,
    6: `var(--${prefix}-${palette}-6)`,
    7: `var(--${prefix}-${palette}-7)`,
    8: `var(--${prefix}-${palette}-8)`,
    9: `var(--${prefix}-${palette}-9)`,
    10: `var(--${prefix}-${palette}-10)`,
    11: `var(--${prefix}-${palette}-11)`,
    12: `var(--${prefix}-${palette}-12)`,
  })
  const alphaChannel = alpha ? ({
    a1: `var(--${prefix}-${palette}-alpha-1)`,
    a2: `var(--${prefix}-${palette}-alpha-2)`,
    a3: `var(--${prefix}-${palette}-alpha-3)`,
    a4: `var(--${prefix}-${palette}-alpha-4)`,
    a5: `var(--${prefix}-${palette}-alpha-5)`,
    a6: `var(--${prefix}-${palette}-alpha-6)`,
    a7: `var(--${prefix}-${palette}-alpha-7)`,
    a8: `var(--${prefix}-${palette}-alpha-8)`,
    a9: `var(--${prefix}-${palette}-alpha-9)`,
    a10: `var(--${prefix}-${palette}-alpha-10)`,
    a11: `var(--${prefix}-${palette}-alpha-11)`,
    a12: `var(--${prefix}-${palette}-alpha-12)`,
  }) : {}
  return ({...base,...alphaChannel})
}
