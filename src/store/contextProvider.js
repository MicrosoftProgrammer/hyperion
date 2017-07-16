import { Children, Component } from 'react'
import PropTypes from 'prop-types'

class ContextProvider extends Component {
    static childContextTypes = {
        token: PropTypes.string
    };

    getChildContext() {
        return {
            token: this.props.token
        }
    }
    render() {
        return Children.only(this.props.children)
    }
}

export default ContextProvider;