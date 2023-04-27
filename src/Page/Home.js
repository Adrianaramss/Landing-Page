import React from 'react';
import '../Page/Home.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to our page</h1>
        <p>Here you can learn all about our amazing product</p>
        <button>Sign up now</button>
      </section>
      <section className="plans" id="plans">
        <h2>Plans</h2>
        <ul>
          <li>Plans 1 - 100 Mega</li>
          <li>Plans 2 - 600 Mega</li>
          <li>Plans 3 - 800 Mega</li>
        </ul>
      </section>
      <section className="pricing" id="pricing">
        <h2>Pricing</h2>
        <ul>
          <li>Basic: $9.99/month</li>
          <li>Pro: $19.99/month</li>
          <li>Premium: $29.99/month</li>
        </ul>
      </section>
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <footer>
        <p>Copyright © 2023
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;