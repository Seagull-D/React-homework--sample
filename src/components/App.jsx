
import './App.css'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar} 
        stats={userData.stats}
      />
      <FriendList friends={friends } />
      <TransactionHistory transactions = {transactions} />
    </>
  );
};




export default App
