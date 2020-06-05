import React from 'react';
const Userbox = () => {
  return (
    <div className="user-box">
      <img src="/img/person.jpg" className="boxavatar" />
      <div>
        <div className="name">
          Mohit <date>February 18, 2020</date>
        </div>

        <div className="position">Trainer</div>
      </div>
    </div>
  );
};

export default Userbox;
