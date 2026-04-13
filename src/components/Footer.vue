<template>
  <footer class="custom-footer">
    <div class="footer-container">
      
      <!-- LEFT -->
      <div class="footer-left">
        © 2026 FC Barcelona
      </div>

      <!-- RIGHT -->
      <div class="footer-right">
        Masih dalam pengembangan
      </div>

    </div>
  </footer>
</template>

 <style>
.custom-footer {
  background: linear-gradient(
    90deg,
    rgba(10,31,68,0.95),
    rgba(139,0,0,0.95)
  );
  backdrop-filter: blur(6px);
  padding: 18px 50px;
  color: white;
  border-top: 3px solid #0723de;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  opacity: 0.85;
}

/* Smooth hover effect kalau mau dikasih sedikit animasi */
.footer-left,
.footer-right {
  transition: 0.3s ease;
}

.footer-left:hover,
.footer-right:hover {
  opacity: 1;
}
  
 </style>