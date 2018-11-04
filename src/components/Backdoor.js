import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from '../routers/AppRouter'
import { startLogin } from '../actions/auth'
import { firebase } from '../firebase/firebase'

class Backdoor extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.startLogin()
    history.push('/board')
  }

  render() {
    return (
      <div>
        Logging in
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => {
    dispatch(startLogin())
  }
})

export default connect(undefined, mapDispatchToProps)(Backdoor)

// <Popper
//   style={{zIndex: 1999}}
//   placement="bottom"
//   open={this.state.open}
//   anchorEl={this.state.anchorEl}
// >
//   <form onSubmit={this.onSubmit}>
//     <TextField
//       placeholder='Enter password'
//       value={this.state.password}
//       onChange={this.onPasswordChange}
//       variant='outlined'
//     >
//     </TextField>
//   </form>
// </Popper>
