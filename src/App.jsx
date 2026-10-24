import React, { useState } from "react";

const classes = [
  {
    number: "01",
    name: "Strength",
    description:
      "Build real-world strength with focused coaching and a plan that grows with you.",
    icon: "↗",
  },
  {
    number: "02",
    name: "Cardio",
    description:
      "Find your pace, push your limits, and leave every session feeling unstoppable.",
    icon: "⌁",
  },
  {
    number: "03",
    name: "Yoga",
    description:
      "Reset your body and mind with movement, mobility, and a little more breathing room.",
    icon: "✳",
  },
  {
    number: "04",
    name: "Boxing",
    description:
      "Sharpen your technique and get a full-body workout that hits different.",
    icon: "◈",
  },
];

const trainers = [
  {
    name: "Coach Daniel",
    specialty: "Strength Coach",
    initials: "D",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=520&q=85",
  },
  {
    name: "Coach Amaka",
    specialty: "Cardio & Yoga",
    initials: "A",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=520&q=85",
  },
  {
    name: "Coach Tunde",
    specialty: "Boxing Trainer",
    initials: "T",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=520&q=85",
  },
];

const plans = [
  {
    name: "Basic",
    price: "₦10,000",
    features: ["Gym access", "Locker room"],
  },
  {
    name: "Pro",
    price: "₦20,000",
    popular: true,
    features: ["Gym access", "All classes", "Diet plan"],
  },
  {
    name: "Elite",
    price: "₦35,000",
    features: [
      "Everything in Pro",
      "Personal trainer",
      "Sauna access",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`IronPulse enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:hello@ironpulsefitness.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="logo" href="#home" onClick={closeMenu} aria-label="IronPulse home">
            IRON<span>PULSE</span>
            <i className="logo-mark" aria-hidden="true" />
          </a>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`nav-links${menuOpen ? " nav-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {[
              ["About", "#about"],
              ["Classes", "#classes"],
              ["Trainers", "#trainers"],
              ["Pricing", "#pricing"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#pricing" onClick={closeMenu}>
              Join the club <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content page-width">
            <p className="eyebrow"><span /> Your strongest starts here</p>
            <h1>
              BUILD YOUR
              <br />
              STRONGEST <span>SELF.</span>
            </h1>
            <p className="hero-copy">
              More than a gym. A place to show up, push through, and become
              proud of what you can do.
            </p>
            <a className="button button-primary" href="#pricing">
              Join now <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-note">
              <span className="hero-note-line" />
              <span>Good energy. Serious results.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>SCROLL TO EXPLORE</span>
            <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-index" aria-hidden="true">01 / 06</div>
        </section>

        <section className="about section-pad" id="about">
          <div className="page-width about-grid">
            <div>
              <p className="eyebrow"><span /> A little about us</p>
              <h2>BUILT FOR THE<br /><span>WAY YOU MOVE.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                At IronPulse, we believe showing up is the hardest rep—and the
                most important one. We bring great equipment, expert coaches,
                and a community that has your back, so you can focus on getting
                stronger at your own pace.
              </p>
              <div className="hours">
                <span className="hours-icon" aria-hidden="true">◷</span>
                <div>
                  <strong>Open every day</strong>
                  <span>5:00 AM — 10:00 PM</span>
                </div>
                <span className="hours-status"><i /> OPEN DAILY</span>
              </div>
            </div>
          </div>
          <div className="page-width about-stats">
            <div><strong>05<span>AM</span></strong><span>EARLY BIRDS WELCOME</span></div>
            <div><strong>07<span>/7</span></strong><span>HERE WHEN YOU NEED US</span></div>
            <div><strong>10<span>PM</span></strong><span>ROOM FOR ONE MORE SET</span></div>
          </div>
        </section>

        <section className="classes section-pad" id="classes">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> Find your thing</p>
                <h2>MOVE WITH <span>PURPOSE.</span></h2>
              </div>
              <p className="heading-aside">Different goals. Different energy.<br />One place to get after it.</p>
            </div>
            <div className="class-grid">
              {classes.map((item) => (
                <article className="class-card" key={item.name}>
                  <div className="class-card-top">
                    <span className="card-number">{item.number}</span>
                    <span className="class-icon" aria-hidden="true">{item.icon}</span>
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <a href="#contact" aria-label={`Ask us about ${item.name} classes`}>
                    <span>Explore class</span><span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trainers section-pad" id="trainers">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> Good people. Great coaches.</p>
                <h2>IN YOUR <span>CORNER.</span></h2>
              </div>
              <p className="heading-aside">Real coaches who meet you where you are<br />and help you go further.</p>
            </div>
            <div className="trainer-grid">
              {trainers.map((trainer) => (
                <article className="trainer-card" key={trainer.name}>
                  <div className="trainer-photo">
                    <img
                      src={trainer.image}
                      alt=""
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.classList.add("photo-fallback");
                      }}
                    />
                    <span className="trainer-initial" aria-hidden="true">{trainer.initials}</span>
                    <span className="trainer-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="trainer-info">
                    <div><h3>{trainer.name}</h3><p>{trainer.specialty}</p></div>
                    <span className="trainer-dot" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing section-pad" id="pricing">
          <div className="page-width">
            <div className="pricing-heading">
              <p className="eyebrow"><span /> Your next chapter</p>
              <h2>GOOD INVESTMENT.<br /><span>GREAT FEELING.</span></h2>
              <p>Simple plans. No guesswork. Just pick what feels right.</p>
            </div>
            <div className="plan-grid">
              {plans.map((plan) => (
                <article
                  className={`plan-card${plan.popular ? " plan-featured" : ""}`}
                  key={plan.name}
                >
                  {plan.popular && <span className="popular-label">✳ MOST POPULAR</span>}
                  <div className="plan-top">
                    <h3>{plan.name}</h3>
                    <span className="plan-symbol" aria-hidden="true">{plan.name === "Pro" ? "✳" : "↗"}</span>
                  </div>
                  <p className="plan-price">{plan.price}<span> / month</span></p>
                  <div className="plan-divider" />
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>
                    ))}
                  </ul>
                  <a className={`button ${plan.popular ? "button-primary" : "button-outline"}`} href="#contact">
                    Choose {plan.name} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">All memberships billed monthly in Nigerian Naira. No surprises, just progress.</p>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="page-width contact-grid">
            <div className="contact-intro">
              <p className="eyebrow"><span /> Let’s get moving</p>
              <h2>YOUR FIRST<br />REP STARTS <span>HERE.</span></h2>
              <p>Got a question or ready to join? Drop us a line and we’ll be in your corner.</p>
              <a className="contact-email" href="mailto:hello@ironpulsefitness.com">
                hello@ironpulsefitness.com <span aria-hidden="true">↗</span>
              </a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input type="text" name="name" placeholder="How should we call you?" autoComplete="name" required />
              </label>
              <label>
                Email address
                <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
              </label>
              <label>
                Your message
                <textarea name="message" placeholder="Tell us what’s on your mind..." rows="4" required />
              </label>
              <button className="button button-primary submit-button" type="submit">
                Send message <span aria-hidden="true">↗</span>
              </button>
              {submitted && (
                <p className="form-success" role="status">
                  Your email app should open with your message ready to send.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="logo" href="#home" aria-label="IronPulse home">IRON<span>PULSE</span><i className="logo-mark" aria-hidden="true" /></a>
          <p>Show up. Find your strength. <span>Repeat.</span></p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
          <span className="copyright">© {new Date().getFullYear()} IRONPULSE FITNESS</span>
        </div>
      </footer>
    </>
  );
}

export default App;
