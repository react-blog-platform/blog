import * as React from 'react'
import { ReactHTML } from 'react'

interface ILocation {
  pathname: string
}
interface IProps {
  info: any
  children: ReactHTML
  location: ILocation
  fetchArticle: (payload: any) => void
}

class App extends React.Component<IProps> {
  public render() {
    const { info, children, location, fetchArticle } = this.props;
    console.log(this.props)
    return <div>{children}</div>
  }
}

export default App;