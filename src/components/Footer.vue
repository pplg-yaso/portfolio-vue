<script setup>
</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <p>© 2026 MyApp All right reserved.</p>
            <div class="footer-links">
                <a href="#">Primary</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
                <a href="#">Bussiness</a>
                <a href="#">MyBini</a>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
  width: 100%;
  background-color: #0f172a;
}

.footer-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 24px;
}

.footer p {
  margin: 0;
  color: #9ca3af;
}

.footer-links {
  display: flex;
  gap: 24px; 
  margin-left: auto;
  padding: 0;
}

.footer-links a {
  text-decoration: none;
  color: #e5e7eb;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #38bdf8;
}

</style>