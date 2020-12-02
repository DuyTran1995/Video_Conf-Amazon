import React, { useState, useContext, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { User, UserType } from '@tutelage-monorepo/tutelage/api-interfaces';
import { useLocalStorage } from '@tutelage-monorepo/shared/react-util';

import { UserContext, INITIAL_STATE } from '../../../contexts/user';

import './style.scss';

const LoginSuccess = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const { name, type, id } = currentUser as User;

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const [, setStatusAuth] = useLocalStorage('amplify-authenticator-authState', 'SignedIn');

  const handleToggleDropdown = () => setIsOpenDropdown(prevState => !prevState);

  const formatName = (name: string) => {
    let count = 0;
    let nameFormat = '';
    for (let i = 0; i < name.length; i++) {
      if (name[i] === ' ') count++;
      nameFormat += name[i];
      if (count === 2) return nameFormat;
    }

    return nameFormat;
  };

  const handelSignOut = async (event: any) => {
    event.preventDefault();
    await Auth.signOut();
    (setCurrentUser as Dispatch<SetStateAction<User>>)(INITIAL_STATE as any);
    setStatusAuth('SignIn');
  };

  const populateUserProfileLink = () => {
    if (type === UserType.LEARNER) {
      return `/learner-profile`;
    } else if (type === UserType.TUTOR) {
      return '/tutor-profile';
    }
  };

  return (
    <>
      <ul className="menu-user">
        <li className="menu-user__item">
          <div className="btn-group">
            <Dropdown
              isOpen={isOpenDropdown}
              toggle={handleToggleDropdown}
              className="menu-user__item-dropdown"
            >
              <DropdownToggle caret>
                <em className="ic-user-w">icon user</em>
                {formatName(name)}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <td className="text-left py-2">Account</td>
                        <td className="text-right py-2">
                          <Link to={populateUserProfileLink()}>
                            Manager <em className="ic-arrow-gray-01"></em>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left py-2">
                          <Badge color="primary" pill>
                            Validate
                          </Badge>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to={populateUserProfileLink()}>View profile</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/our-tutors">
                    {type === UserType.TUTOR ? 'My learner' : 'My Tutor'}
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/auth/change-password">Change password</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handelSignOut}>
                  <Link to="/">Logout</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </li>
      </ul>
    </>
  );
};

export default LoginSuccess;
