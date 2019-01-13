import Typography from 'typography'
import theme from 'typography-theme-github'

theme.headerFontFamily = ["游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "Osaka", "ＭＳ Ｐゴシック", "MS PGothic", "sans-serif"]
theme.bodyFontFamily = ["游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "Osaka", "ＭＳ Ｐゴシック", "MS PGothic", "sans-serif"]

theme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
