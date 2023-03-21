import React from 'react';

const NewSletter = () => {
     return (
          <div className='center_contact' id="contact">
          <div className='container_contact'>
              <div className='contact'>
                  <p className='email'>Newsletter</p>
                  <p className='infos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima.</p>
              </div>
              <div className='contact_form'>
                  <form action="">
                      <input type="text" placeholder='Entrer votre e-mail svp' />
                      <button>Subscribe</button>
                  </form>
              </div>
          </div>
      </div>
     );
};

export default NewSletter;