import './contact.css';

export default function Contact() {
  return (
    <div className='contact-page'>
       <div className="breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
        <span> &gt; </span>
        <span className="breadcrumb-link active" onClick={() => navigate('/contact')}>Contacts</span>
      </div>
      <div className='contact-box'>
          <div className='contact-left-box'>
            <p style={{fontSize:'20px',fontWeight:'500'}}>Leave a Message</p>
            <form style={{marginTop:'40px'}}>
            <div class="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Enter your name" required />
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your contact email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            </div>
            <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Message text..." required></textarea>
            </div>
            </form>
            <button className='send-message'type="submit">Send Message</button>
          </div>
       

        <div className='contact-right-box'>
            <div style={{maxWidth:'170px', margin:'0 30px', lineHeight:'1.5'}}>   
                <p style={{fontSize:'20px', fontWeight:'500'}}>Contact Info</p>
                <p>0000 Euclid Avenue, Los Angeles 00000</p>
                <p>+0 213 974-0000</p>
                <p>tinijoy@template.com</p>
                <p>Follow Us</p>
                <div style={{display: 'flex',gap: '12px'}}>
  {/* Twitter */}
  <svg viewBox="0 0 24 24" fill="#1DA1F2" width="12" height="12">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016 0c-2.5 0-4.52 2.02-4.52 4.51 0 .35.04.69.11 1A12.94 12.94 0 013 1.67a4.51 4.51 0 001.4 6.03A4.48 4.48 0 012.8 7v.06a4.51 4.51 0 003.63 4.42 4.48 4.48 0 01-2.04.08A4.52 4.52 0 007.29 16a9.07 9.07 0 01-5.62 1.94c-.36 0-.71-.02-1.06-.06A12.79 12.79 0 006.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.34 8.34 0 0023 3z"/>
  </svg>

  {/* Facebook */}
  <svg viewBox="0 0 24 24" fill="#1877F2" width="12" height="12">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.326 1.325 1.326h11.495v-9.84H9.69v-3.84h3.13V7.165c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.84h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z"/>
  </svg>

  {/* Instagram */}
  <svg viewBox="0 0 24 24" width="12" height="12">
    <defs>
      <linearGradient id="insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f09433" }} />
        <stop offset="25%" style={{ stopColor: "#e6683c" }} />
        <stop offset="50%" style={{ stopColor: "#dc2743" }} />
        <stop offset="75%" style={{ stopColor: "#cc2366" }} />
        <stop offset="100%" style={{ stopColor: "#bc1888" }} />
      </linearGradient>
    </defs>
    <path fill="url(#insta-gradient)" d="M7.75 2C4.022 2 1 5.022 1 8.75v6.5C1 18.978 4.022 22 7.75 22h6.5C18.978 22 22 18.978 22 15.25v-6.5C22 5.022 18.978 2 15.25 2h-6.5zm0 1.5h6.5A5.752 5.752 0 0120 8.75v6.5A5.752 5.752 0 0114.25 21h-6.5A5.752 5.752 0 012 15.25v-6.5A5.752 5.752 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
  </svg>

  {/* Pinterest */}
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#E60023">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.43 7.57 5.92 9.07-.08-.77-.15-1.95.03-2.79.17-.75 1.12-4.77 1.12-4.77s-.28-.56-.28-1.39c0-1.3.75-2.27 1.68-2.27.79 0 1.17.59 1.17 1.3 0 .79-.5 1.97-.76 3.07-.22.92.46 1.67 1.37 1.67 1.64 0 2.75-1.72 2.75-4.19 0-2.18-1.57-3.71-3.81-3.71-2.6 0-4.12 1.95-4.12 3.97 0 .79.3 1.64.67 2.1.07.08.08.15.06.23-.07.26-.22.84-.25.96-.04.15-.13.18-.3.11-1.12-.52-1.82-2.14-1.82-3.44 0-2.8 2.04-5.37 5.89-5.37 3.09 0 5.48 2.2 5.48 5.14 0 3.08-1.94 5.56-4.65 5.56-0.91 0-1.76-.47-2.05-1.03l-.56 2.14c-.2.75-.75 1.7-1.12 2.28.84.26 1.73.4 2.66.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>

  {/* YouTube */}
  <svg viewBox="0 0 24 24" fill="#FF0000" width="12" height="12">
    <path d="M19.615 3.184A2.499 2.499 0 0017.87 2.5C15.522 2.417 12 2.417 12 2.417s-3.522 0-5.87.083a2.5 2.5 0 00-1.745.684A2.501 2.501 0 003.5 4.917C3.417 7.264 3.417 12 3.417 12s0 4.736.083 7.083a2.5 2.5 0 00.684 1.745 2.499 2.499 0 001.745.684c2.348.083 5.87.083 5.87.083s3.522 0 5.87-.083a2.499 2.499 0 001.745-.684 2.5 2.5 0 00.684-1.745c.083-2.347.083-7.083.083-7.083s0-4.736-.083-7.083a2.5 2.5 0 00-.684-1.745zM9.75 15.167V8.833l6.25 3.167-6.25 3.167z"/>
  </svg>
</div>

            </div>
        </div>
    </div>
  </div>
  )
}
