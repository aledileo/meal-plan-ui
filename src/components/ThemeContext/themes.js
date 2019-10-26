const commonTheme = {}

const lightTheme = {
  ...commonTheme,
  main: "#1E4147",
  background: '#FFF',
  textColor: '#000'
}

const darkTheme = {
  ...commonTheme,
  main: '#F34A53',
  background: '#121212',
  textColor: '#fff'
}

export { darkTheme, lightTheme }