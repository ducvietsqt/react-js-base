export function AuthLayout(props) {
  const { children } = props
  return (
    <div className="layout layout--auth">
      {children}
    </div>
  )
}
