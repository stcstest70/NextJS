import React from 'react'
import ContactCard from '../components/ContactCard';
import styles from './contact.module.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.212622859793!2d72.93487127495628!3d19.14216794989238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9fe8b666be7%3A0xe7c60938b5490eb8!2sBhandup%20Station!5e0!3m2!1sen!2sin!4v1703307692161!5m2!1sen!2sin" 
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
  )
}

export default Contact 