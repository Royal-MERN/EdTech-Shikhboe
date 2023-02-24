import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const WAChat = () => {
  return (
    <div className='w-5 h-5'>
      <FloatingWhatsApp
        phoneNumber="+8801603842503"
        accountName="Shikhboe"
        chatMessage="Hello World"
        avatar="https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default WAChat;