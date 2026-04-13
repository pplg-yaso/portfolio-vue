<template>
  <div class="contact">

    <div class="contact-wrapper">

      <div class="left">
        <h1>CONTACT BARÇA</h1>
        <p class="desc">
          Feel free to reach out for collaboration or partnership inquiries.
        </p>

  
      </div>

      <div class="right">
        <div class="card">
          <h3>Send Message</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>SEND MESSAGE</button>
        </div>
      </div>

    </div>

  </div>

<div class="partners">

  <div class="partners-inner">

    <h3><span>Main</span> Partners</h3>

    <div class="partners-logos">
      <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2023/04/04/39a0961f-249a-4456-ad73-dd621c1266b4/Nike.png" alt="Nike" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/960px-Spotify_logo_with_text.svg.png" alt="Spotify" />
      <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2025/03/27/7a68b373-5d39-4f83-ba97-961215436b0d/AmbilightNEW.png" alt="Philips Ambilight" />
    </div>

    <div class="divider"></div>

    <div class="social">
      <p>Follow FC Barcelona on social media</p>

      <div class="icons">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwTVwlq8Fv-JmSh94nvz9tWj3Ti1K_vEaXA&s" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiflKV5RdEMoTxcnqrZ0UpGjMVxtx8yGeMow&s" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBTi2kWIPvCXbj4rzgYtl2uJ2CJxsyGNHaw&s" />
        <img src="https://img.freepik.com/vektor-premium/ikon-logo-instagram_1273375-1177.jpg?semt=ais_user_personalization&w=740&q=80" />
        <img src="https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_640.jpg" />
        <img src="https://img.freepik.com/vektor-premium/ikon-aplikasi-tiktok-logo-media-sosial_277909-647.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
    </div>

  </div>

</div>

</template>

<style scoped>
.contact {
  min-height: 100vh;
  background: #0f1333;
  padding: 200px 80px;
  color: white;
}

/* WRAPPER */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1400px;
  margin: auto;
}

/* LEFT SIDE */
.left h1 {
  font-size: 36px;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.desc {
  color: #b8b8c8;
  margin-bottom: 40px;
  font-size: 15px;
}

.info {
  list-style: none;
  padding: 0;
}

.info li {
  margin: 15px 0;
  font-size: 15px;
  color: #f4c430;
}

/* RIGHT CARD */
.card {
  background: #161a40;
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);
}

.card h3 {
  margin-bottom: 30px;
  letter-spacing: 2px;
  color: #b8b8c8;
}

.card input,
.card textarea {
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
}

.card input:focus,
.card textarea:focus {
  outline: none;
  border: 1px solid #f4c430;
}

.card textarea {
  height: 120px;
  resize: none;
}

/* BUTTON */
.card button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #c9a227, #f4c430);
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease;
}

.card button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(244,196,48,0.3);
}

.partners {
  background: linear-gradient(180deg, #0f1333 0%, #0f1333 100%);
  padding: 120px 80px;
  color: white;
}

.partners-inner {
  max-width: 1400px;
  margin: auto;
  text-align: center;
}

/* TITLE */
.partners h3 {
  font-size: 30px;
  margin-bottom: 80px;
  font-weight: 500;
}

/* LOGOS */
.partners-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.partners-logos img {
  height: 70px;
  opacity: 0.75;
  transition: 0.3s ease;
  cursor: pointer;
}

.partners-logos img:hover {
  opacity: 1;
  transform: scale(1.05);
}

/* DIVIDER */
.divider {
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin-bottom: 60px;
}

/* SOCIAL */
.social p {
  margin-bottom: 40px;
  font-size: 16px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.icons img {
  width: 50px;
  height: 50px;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  transition: 0.3s ease;
  cursor: pointer;
}

.icons img:hover {
  background: linear-gradient(135deg, #c9a227, #f4c430);
  filter: none;
  transform: translateY(-5px);
}
</style>