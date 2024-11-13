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
      alert("Сообщение отправлено");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex flex-col gap-y-8 ' onSubmit={handleSubmit}>
      <InputForm id="name" name="name" Ref={nameRef} type="text" placeholder="Полное имя" fullName="Полное имя" />
      <InputForm id="email" name="email" Ref={emailRef} type="email" placeholder="Email" fullName="Email" />
      <InputForm id="phone" name="phone" Ref={phoneRef} type="tel" placeholder="+7 (999) 999-99-99" fullName="Телефон" />
      <InputForm id="message" name="message" textarea Ref={messageRef} type="text" placeholder="Напишите небольшую краткую информацию о вашем проекте или объеме работ." fullName="Сообщение" />
      <button className="py-8 px-28 text-white bg-transparent border border-grey rounded-[32px] max-w-[300px]" type="submit" disabled={loading}>Отправить</button>
    </form>
  );

}

export default FormContact;