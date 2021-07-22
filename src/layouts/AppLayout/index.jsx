export function AppLayout(props) {
  const { children } = props
  console.error(1)
  return (
    <div className="layout layout--app">
      {children}
    </div>
  )
}
