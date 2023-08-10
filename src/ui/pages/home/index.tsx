import React from 'react';
import {
  List,
  Page,
  Icon,
  useNavigate
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userInfo } from "zmp-sdk";
import { userState } from 'ui/state/recoil';

import UserCard from './components/user-card';

const HomePage:React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(userState);
  const navigate = useNavigate()
  return (
    <Page  className="page">
    <div className="section-container">
      <UserCard user={user}/> 
    </div>
    <div className="section-container">
    <List >
      <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div  onClick={()=>navigate('/about')}>About</div>
      </List.Item>
      <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div onClick={()=>navigate('/user')}>User</div>
      </List.Item>
    </List>
    </div>
  </Page>
  );
}

export default HomePage;