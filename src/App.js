import React, { useState } from 'react';
import { data } from "./data"
import { Notifications } from './Notifications';

function App() {

  const [notifications, setNotifications] = useState(data)
  const count = data.filter(d => !d.flag)
  const [unread, setUnread] = useState(count.length)


  function handleClick(notification) {
    let clicked = notifications.filter(data => data.idx === notification.idx && !data.flag)
    if (clicked.length > 0) {
      let unclicked = notifications.filter(data => data.idx !== notification.idx)
      setNotifications([...unclicked, { ...clicked[0], flag: true }].sort((a, b) => a.idx - b.idx))
      setUnread(unread - 1)
    }
  }


  function markAllRead() {
    setNotifications([...notifications.map(notification => ({ ...notification, flag: true }))])
    setUnread(0)
  }

  return (
    <div className="App flex  w-screen  h-screen justify-center items-center  ">
      <main className='bg-white w-1/2 p-8 border-1px text-sm border-black rounded-md flex flex-col justify-center items-center max-[500px]:w-full max-[500px]:h-full max-[500px]:text-2xl'>
        <header className='flex justify-between items-center w-full px-4 max-[500px]:text-xs'>
          <div className='flex  justify-center items-center '>
            <h1>Notifications</h1>
            <p className='ml-1 bg-blue-800 text-white font-bold w-auto  px-2 rounded-md'>{unread}</p>
          </div>
          <button onClick={markAllRead}>Mark all as read</button>
        </header>
        <section className='w-full mt-4'>
          <Notifications notifications={notifications} handleClick={handleClick} />
        </section>
      </main>


    </div>
  );
}

export default App;
