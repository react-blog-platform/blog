import React, { ReactHTML } from 'react'

interface ILocation {
  pathname: string
}
interface IProps {
  info: any
  children: ReactHTML
  location: ILocation
  fetchArticle: (payload: any) => void
}

class Detail extends React.Component<IProps> {
  public render() {
    const { info, children, location, fetchArticle } = this.props;
    console.log(this.props)
    return <div>hhhhhhhhj</div>
  }
}

export default Detail;