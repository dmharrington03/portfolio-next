type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto w-3/4 lg:w-3/5">{children}</div>
}

export default Container
