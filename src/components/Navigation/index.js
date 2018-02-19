import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import SignOutButton from '../SignOut'
import * as routes from '../../constants/routes'

const Navigation = ({ authUser }) => (
  <div>
    <AppBar
      title='Club App'
      showMenuIconButton={false}
      iconElementLeft={
        <IconButton>
          <NavigationClose />
        </IconButton>
      }
      iconElementRight={authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    />
  </div>
)

const NavigationAuth = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    iconStyle={{ fill: 'rgba(255, 255, 255, 0.87)' }}
  >
    <MenuItem
      containerElement={<Link to={routes.LANDING} />}
      primaryText='Landing'
    />
    <MenuItem containerElement={<Link to={routes.HOME} />} primaryText='Home' />
    <MenuItem
      containerElement={<Link to={routes.ACCOUNT} />}
      primaryText='Account'
    />
    <SignOutButton />
  </IconMenu>
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
)

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
})

export default connect(mapStateToProps)(Navigation)
