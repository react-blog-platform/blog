import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from './components/app'
import { REQUEST_ARTICLES, REQUEST_INFO } from './constants'
interface IInfoInterface {
  info: any
}
const mapStateToProps = ({ info }: IInfoInterface) => {
  return { info }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: dispatch({ type: REQUEST_INFO }),
    fetchArticle: (payload: any) => {
      dispatch({
        payload,
        type: REQUEST_ARTICLES
      })
    }
  }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)