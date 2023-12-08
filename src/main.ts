import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="showcase">
    <header>
      <h2 class="logo">RCSCTF</h2>
    </header>
    <video src="/back.mp4" muted loop autoplay></video>
    <div class="overlay"></div>
    <div class="text">
      <div class="text2">
        <h2 id="t1">RCS</h2> 
        <h2 id="t2">CTF</h2>
        <h2 id="t3">2024</h2>
      </div>
      <h3>Organised by EncryptEdge</h3>
      <p>Based on Republic Day Theme</p>
      <a href="#">Stay Tuned</a>
    </div>
    <ul class="social">
      <li><a href="https://twitter.com/Encrypt_Edge"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></a></li>
      <li><a href="https://instagram.com/encryptedge"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></a></li>
    </ul>
  </section>
`