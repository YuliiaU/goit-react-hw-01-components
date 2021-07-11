import React from 'react';
import FriendList from './FriendList/FriendList';
import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import friends from './FriendList/friends.json';
import user from './SocialProfile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import transactions from './TransactionHistory/transactions.json';

const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
