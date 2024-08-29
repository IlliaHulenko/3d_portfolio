import React, { Suspense, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { Canvas } from '@react-three/fiber';
import Pet from '../models/Pet.jsx';
import Loader from '../components/Loader.jsx';
import Indigo from '../models/Indigo.jsx';

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Mollie|NewBirdRun');

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };

  const handleFocus = () => setCurrentAnimation('Mollie|NewBirdCrawl');

  const handleBlur = () => {
    setCurrentAnimation('Mollie|NewBirdRun');    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Mollie|MollieFall');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Elijah',
        from_email: form.email,
        to_email: 'hulenko.illia@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);

      showAlert({show: true, text: 'Your message has been sent successfully', 
        type: 'success'});

      setCurrentAnimation('Mollie|MollieLand');
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('Mollie|NewBirdRun');
        setForm({ name: '', email: '', message: '' });
      }, [2000]);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Mollie|MollieLand');
      console.log(error);

      showAlert({show: true, text: "I didn't get your message, please try again", 
        type: 'danger'});
    })
  };
  
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert {...alert}/>}      

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >

          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className='input'
              placeholder='Enter your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name='email'
              className='input'
              placeholder='email@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your message
            <textarea              
              name='message'
              rows={5}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      
      <div
        className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'
      >
        <Canvas
          camera = {{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          {/* <directionalLight 
            intensity={3.5} 
            position={[7, 3, 1]} 
          />
          <ambientLight intensity={5}/> */}
          <directionalLight 
            intensity={2.5} 
            position={[7, 3, 1]} 
          />
          <ambientLight intensity={1}/>
          <Suspense fallback={<Loader />}>
            {/* <Pet 
              position={[0.2, -1.5, 1]}
              rotation={[12.63, 22, 0]}
              scale={[0.3, 0.3, 0.3]}
            /> */}
            <Indigo
              currentAnimation={currentAnimation}
              position={[0, -1.5, 1]}
              rotation={[2, 22, 3]}
              scale={[0.023, 0.023, 0.023]}
            />
          </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Contact