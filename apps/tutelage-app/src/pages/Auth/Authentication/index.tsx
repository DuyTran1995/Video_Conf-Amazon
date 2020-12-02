import React, { useContext, Dispatch, SetStateAction, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Authenticator, UsernameAttributes } from 'aws-amplify-react';
import { useHistory, useLocation } from 'react-router-dom';

import { User } from '@tutelage-monorepo/tutelage/api-interfaces';

import { UserContext } from '../../../contexts/user';
import Register from '../../../components/Auth/Register';
import ConfirmSignUp from '../../../components/Auth/ConfirmSignUp';
import ForgotPassword from '../../../components/Auth/ForgotPassword';
import RequireNewPassword from '../../../components/Auth/RequireNewPass';
import VerifyContact from '../../../components/Auth/VerifyContact';
import Login from '../../../components/Auth/Login';

interface Props {
  authState?: string;
}

const Authentication = (props: Props) => {
  // get props authState follow router URL
  const { authState } = props;
  const history = useHistory();
  const { search } = useLocation();
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const handelOnChangeState = (value: string) => {
    if (value === 'signedIn') {
      (setCurrentUser as Dispatch<SetStateAction<User>>)({
        ...currentUser,
        authorized: true,
      } as User);
    }
  };

  useEffect(() => {
    if (authState === 'signIn' && search.includes('error=access_denied')) {
      history.push('/auth/login');

      return history.go(0); // Reload page and component Authenticator of Amplify
    }
  }, [search, authState, history]);

  return (
    <>
      <Helmet title="Login page" />
      {/* Call Authenticator with usernameAttributes is Email */}
      <Authenticator
        hideDefault
        usernameAttributes={UsernameAttributes.EMAIL}
        onStateChange={handelOnChangeState}
        authState={authState ? authState : ''}
      >
        <Login override={'SignIn'} />
        <ForgotPassword override={'ForgotPassword'} />
        <VerifyContact override={'verifyContact'} />
        <RequireNewPassword override="requireNewPassword" />
        <Register override={'SignUp'} />
        <ConfirmSignUp override={'ConfirmSignUp'} />
      </Authenticator>
    </>
  );
};
export default Authentication;
