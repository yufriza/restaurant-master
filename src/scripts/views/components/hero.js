class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero">
            <div class="hero-inner" title="Picture of the hero banner">
                <h1>Are you hungry yet?</h1>
                <p>
                Amazing restaurants around you in just one click away!<br />We saved
                you a seat!
                </p>
                <button class="button button-hero" onclick="window.location.href='#restaurant';"
                title="Skip to content area">Let's Go</button>
            </div>
        </section>
      `;
  }
}

customElements.define('hero-component', Hero);
export default Hero;
