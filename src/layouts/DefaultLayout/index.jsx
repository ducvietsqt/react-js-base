export function DefaultLayout(props) {
  const { children } = props
  return (
    <div className="layout layout--default">
      {children}
    </div>
  )
}
