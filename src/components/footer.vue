<template>
    <footer class="footer">
        <p> {{ year }} MyWebsite. All rights reserved.</p>
    </footer>
    </template>

<script>
export default {
    name: "footer",
    data() {
        return{
        year: new Data().GetFullYear()
    }
}
}
</script>
<style scoped>
.foote {
    background-color: #f5f5f5;
    text-align: center;
    padding: 16px;
    color: #555;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>