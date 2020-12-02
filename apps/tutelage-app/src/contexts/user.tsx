import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import { User, UserType, createLearner } from '@tutelage-monorepo/tutelage/api-interfaces';

const INITIAL_STATE = {
  id: '',
  name: '',
  email: '',
  type: UserType.LEARNER,
  authorized: false,
  loading: false,
};
const INITIAL_STATE_AUTH = {
  attributes: {
    name: '',
    email: '',
    type: UserType.LEARNER,
    sub: '',
  },
};
const DISPATCH_STATE: Dispatch<SetStateAction<User>> = () => {};
const UserContext = createContext([INITIAL_STATE, DISPATCH_STATE]);

function UserProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);
  const [userAuth, setUserAuth] = useState(INITIAL_STATE_AUTH);

  useEffect(() => {
    const getUserAuth = async () => {
      // Get Info User to Auth Amplify
      const currentUser = await Auth.currentUserInfo();
      if (currentUser) {
        const { sub, name, email } = currentUser.attributes;
        setUserAuth(currentUser);

        setState(preState => ({
          ...preState,
          id: sub,
          name: name ? name : 'Users',
          email: email,
          type: currentUser.attributes['custom:userType'],
          authorized: true,
          loading: false,
        }));

        if (!currentUser.attributes['custom:userType']) {
          try {
            await Auth.updateUserAttributes(currentUser, { 'custom:userType': 'learner' });
            const newLearner = {
              id: sub,
              name: `${name}`,
              gender: 'Male',
              phone: '',
              avatar: 'Default',
            };
            await API.graphql(graphqlOperation(createLearner, { input: newLearner }));
          } catch (err) {
            setState(INITIAL_STATE);
          }
        }
      } else {
        setState(INITIAL_STATE);
      }
    };

    getUserAuth();
  }, [state.authorized, userAuth.attributes.name]);

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider, INITIAL_STATE };
