import React from 'react'

import { auth } from '../../firebase'

import MenuItem from 'material-ui/MenuItem'

const SignOutButton = () => (
  <MenuItem onClick={auth.doSignOut} primaryText='Sign Out' />
)

export default SignOutButton
