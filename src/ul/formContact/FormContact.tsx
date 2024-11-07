import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputForm from '../input/inputForm';

export const FormContact = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("k01tCnsvQn7LyxTJZ"), []);
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const serviceId = "service_tv0tcmv";
    const templateId = "template_ghlhopc";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        recipient: emailRef.current?.value,
        phone: phoneRef.current?.value,
        message: messageRef.current?.value
      }, "k01tCnsvQn7LyxTJZ");
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex flex-col gap-y-8 ' onSubmit={handleSubmit}>
      <InputForm id="name" name="name" Ref={nameRef} type="text" placeholder="Full name" fullName="Full name" />
      <InputForm id="email" name="email" Ref={emailRef} type="email" placeholder="Email" fullName="Email" />
      <InputForm id="phone" name="phone" Ref={phoneRef} type="tel" placeholder="Phone" fullName="Phone" />
      <InputForm id="message" name="message" textarea Ref={messageRef} type="text" placeholder="Write a little brief about your project or scope of work." fullName="Message" />
      <button className="py-8 px-28 text-white bg-transparent border border-grey rounded-[32px] max-w-[300px]" type="submit" disabled={loading}>Send</button>
    </form>
  );

}

export default FormContact;