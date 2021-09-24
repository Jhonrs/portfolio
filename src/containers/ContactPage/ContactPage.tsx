import React from 'react';
import './ContactPage.css';
interface ContactPageProps { }

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (


    <div className="form__container">
      <h1 className="contactTitle">Get in touch</h1>
      <form action="https://formsubmit.co/el/hufewe" method="POST">
        <div className="form__information">
         
            <input className="form__text" name="name" placeholder="Name" type="text" required />
            <input className="form__text" name="email" placeholder="Email" type="email" required />
            <input type="hidden" name="_next" value="https://portafolio-2e964.web.app/contact"/>
          </div>
          <div className="form__message">
            <input className="form__text" name="_subject" placeholder="Subject" type="text" />
            <textarea className="form__messageText" name="message" placeholder="Write your message here!" cols={30} rows={10}></textarea>
            <input type="hidden" name="_captcha" value="false" />
          </div>
        
        <button className="form__button" type="submit">Send message!</button >
      </form>
    </div>

  );
}