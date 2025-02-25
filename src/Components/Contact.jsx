import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // EmailJS configuration (store these in .env file)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setMessage({
        text: 'Message sent successfully! 🎉',
        type: 'success'
      });
      formRef.current.reset();
    } catch (error) {
      setMessage({
        text: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <p className={`text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message.text}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;