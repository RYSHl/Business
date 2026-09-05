import {
  ArrowRight,
  ArrowDownRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Lightbulb,
  Megaphone,
  Network,
  Star,
  Target,
  Users,
} from 'lucide-react';

export default function Sponsors() {
  return (
    <div className="sponsors-page">

      {/* HEADER */}
      <header className="sponsors-header">
        <a href="/Business/" className="sponsors-brand">
          <span className="sponsors-brand-mark">VX</span>
          <span>
            <b>VENTURE X 2026</b>
            <small>BIT MESRA - NOIDA CAMPUS</small>
          </span>
        </a>

        <nav className="sponsors-nav">
          <a href="/Business/">HOME</a>
        </nav>
      </header>


      {/* HERO */}
      <section className="sponsors-hero">
        <div className="sponsors-hero-overlay" />

        <div className="sponsors-hero-content">
          <span>PARTNER WITH VENTURE X 2026</span>
          <h1>
            Fuel the next<br />
            generation of ideas.
          </h1>
          <p>
            VentureX 2026 invites forward-looking organizations, investors, and institutions to partner with a platform that supports serious entrepreneurship, responsible innovation, and real-world impact.
 It is a venture discovery and validation ecosystem that brings together founders, mentors, investors, and industry leaders committed to building sustainable and commercially viable businesses.
By partnering with Venture X, your organization becomes part of a community shaping how ideas move from concept to credible ventures.
          </p>
        </div>

        <div className="sponsors-hero-mark">
          <Handshake size={54} strokeWidth={1.3} />
        </div>
      </section>


      {/* INTRO */}
      <section className="sponsors-intro">
        <span className="sponsors-kicker">WHY PARTNER WITH US</span>

        <h2>
          More than a logo.
          <br />
          <span>A meaningful connection.</span>
        </h2>

        <p>
          Venture X 2026 creates a direct connection between forward-thinking
          organizations and the next generation of innovators. Your support
          helps create opportunities for ideas that can shape a more
          sustainable future.
        </p>

        <p>
          By partnering with Venture X 2026, your organization becomes part
          of an ecosystem built around innovation, entrepreneurship,
          sustainability and meaningful engagement.
        </p>
      </section>


      {/* BENEFITS */}
      <section className="sponsors-benefits">
        <div className="sponsors-section-heading">
          <span>01 / WHY PARTNER</span>
          <h2>Why partner with<br /><strong>Venture X.</strong></h2>
        </div>

        <div className="benefit-grid">

          <article className="benefit-card">
            <div className="benefit-icon">
              <Megaphone />
            </div>
            <span>01</span>
            <h3>Strategic Brand Visibility</h3>
            <p>
              Position your organization in front of ambitious students,
              innovators and future entrepreneurs.
            </p>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon">
              <Users />
            </div>
            <span>02</span>
            <h3>Access to Emerging Talent</h3>
            <p>
              Connect with talented young minds and discover fresh
              perspectives, skills and ideas.
            </p>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon">
              <Lightbulb />
            </div>
            <span>03</span>
            <h3>Champion Innovation</h3>
            <p>
              Support innovative solutions addressing real-world
              sustainability and business challenges.
            </p>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon">
              <Handshake />
            </div>
            <span>04</span>
            <h3>Meaningful Engagement</h3>
            <p>
              Build genuine connections with participants, mentors,
              institutions and the wider innovation community.
            </p>
          </article>

        </div>
      </section>


      {/* OPPORTUNITIES */}
      <section className="sponsor-opportunities">
        <div className="sponsors-section-heading">
          <span>02 / OPPORTUNITIES</span>
          <h2>
            Build a partnership
            <br />
            <strong>that matters.</strong>
          </h2>
        </div>

        <div className="opportunity-list">

          <div className="opportunity-item">
            <div className="opportunity-icon">
              <Target />
            </div>
            <div>
              <span>01</span>
              <h3>Event & Track Sponsorship</h3>
              <p>
                Associate your brand with the event or specific
                challenge areas.
              </p>
            </div>
            <ArrowRight />
          </div>

          <div className="opportunity-item">
            <div className="opportunity-icon">
              <Lightbulb />
            </div>
            <div>
              <span>02</span>
              <h3>Keynote & Mentorship</h3>
              <p>
                Bring industry knowledge directly to the innovators
                building tomorrow.
              </p>
            </div>
            <ArrowRight />
          </div>

          <div className="opportunity-item">
            <div className="opportunity-icon">
              <Star />
            </div>
            <div>
              <span>03</span>
              <h3>Awards & Recognition</h3>
              <p>
                Support and celebrate ideas that demonstrate exceptional
                potential.
              </p>
            </div>
            <ArrowRight />
          </div>

          <div className="opportunity-item">
            <div className="opportunity-icon">
              <Network />
            </div>
            <div>
              <span>04</span>
              <h3>Networking & Engagement</h3>
              <p>
                Connect with students, mentors, founders and industry
                professionals.
              </p>
            </div>
            <ArrowRight />
          </div>

          <div className="opportunity-item">
            <div className="opportunity-icon">
              <Megaphone />
            </div>
            <div>
              <span>05</span>
              <h3>Media & Storytelling</h3>
              <p>
                Tell your organization's story through meaningful event
                communication and engagement.
              </p>
            </div>
            <ArrowRight />
          </div>

        </div>
      </section>


      


      {/* SPONSORSHIP PACKAGES */}
      <section className="sponsorship-packages">

        <div className="sponsors-section-heading">
          <span>03 / SPONSORSHIP PACKAGES</span>
          <h2>
            Choose your level.
            <br />
            <strong>Shape the impact.</strong>
          </h2>
          <p>
            Choose a partnership package that gives your organization
            meaningful visibility, engagement and access to the Venture X
            innovation ecosystem.
          </p>
        </div>


        <div className="package-grid">

          {/* TITLE SPONSOR */}
          <article className="package-card package-featured">

            <div className="package-badge">TITLE SPONSOR</div>

            <div className="package-price">₹50,000</div>

            <small>EVENT POWERED BY</small>

            <div className="package-line" />

            <ul>
              <li>Event title association — "Powered by"</li>
              <li>Largest logo placement across event branding</li>
              <li>Exclusive stall / exhibition space</li>
              <li>Speaking opportunity</li>
              <li>Jury / panel representation*</li>
              <li>Stage branding & backdrop visibility</li>
              <li>Social media mega campaign</li>
              <li>Website banner & partner recognition</li>
              <li>Logo on certificates & merchandise</li>
              <li>Press mentions & media coverage</li>
              <li>Email campaign visibility</li>
              <li>Recruitment / interaction desk</li>
              <li>Product / solution showcase opportunity</li>
              <li>VIP seating & special memento</li>
              <li>20 complimentary passes</li>
            </ul>

          </article>


          {/* GOLD SPONSOR */}
          <article className="package-card">

            <div className="package-badge">GOLD SPONSOR</div>

            <div className="package-price">₹30,000</div>

            <div className="package-line" />

            <ul>
              <li>Large logo on event branding</li>
              <li>Dedicated stall space</li>
              <li>Stage branding</li>
              <li>Social media mentions</li>
              <li>Logo on certificates</li>
              <li>Standee at venue</li>
              <li>Speaking / expert mention</li>
              <li>Website recognition</li>
              <li>Recruitment / interaction desk</li>
              <li>10 complimentary passes</li>
            </ul>

          </article>


          {/* SILVER SPONSOR */}
          <article className="package-card">

            <div className="package-badge">SILVER SPONSOR</div>

            <div className="package-price">₹20,000</div>

            <div className="package-line" />

            <ul>
              <li>Medium logo on event branding</li>
              <li>Stall space</li>
              <li>Social media mentions</li>
              <li>Logo on certificates</li>
              <li>Website recognition</li>
              <li>Standee at venue</li>
              <li>6 complimentary passes</li>
            </ul>

          </article>


          {/* ASSOCIATE SPONSOR */}
          <article className="package-card">

            <div className="package-badge">ASSOCIATE SPONSOR</div>

            <div className="package-price">₹10,000</div>

            <div className="package-line" />

            <ul>
              <li>Logo on event branding</li>
              <li>Social media mentions</li>
              <li>Website recognition</li>
              <li>Standee at venue</li>
              <li>Logo on certificates</li>
              <li>4 complimentary passes</li>
            </ul>

          </article>

        </div>


        {/* CUSTOM PARTNERSHIPS */}
        <div className="custom-partnerships">

          <div className="custom-heading">

            <span>CUSTOM OPPORTUNITIES</span>

            <h3>
              Partner with us
              <br />
              in your own way.
            </h3>

            <p>
              We also welcome focused partnerships that align with your
              organization's expertise, products, services or sustainability
              goals.
            </p>

          </div>


          <div className="custom-grid">

            <div>
              <span>01</span>
              <h4>Challenge Track Partner</h4>
              <p>
                Associate your organization with a specific Venture X
                challenge theme and support innovative solutions.
              </p>
            </div>

            <div>
              <span>02</span>
              <h4>AI & Technology Partner</h4>
              <p>
                Support the AI Devices theme and showcase technology,
                tools or solutions that enable smarter innovation.
              </p>
            </div>

            <div>
              <span>03</span>
              <h4>Energy & Sustainability Partner</h4>
              <p>
                Collaborate around energy conservation, efficiency and
                sustainable solutions for the future.
              </p>
            </div>

            <div>
              <span>04</span>
              <h4>Water & Resources Partner</h4>
              <p>
                Support innovations focused on responsible water use,
                conservation and sustainable resource management.
              </p>
            </div>

            <div>
              <span>05</span>
              <h4>Pollution Prevention Partner</h4>
              <p>
                Champion ideas that reduce pollution, waste and
                environmental impact.
              </p>
            </div>

            <div>
              <span>06</span>
              <h4>Prize Sponsor</h4>
              <p>
                Sponsor a prize or recognition category and connect
                your organization with exceptional student ideas.
              </p>
            </div>

            <div>
              <span>07</span>
              <h4>Startup Ecosystem Partner</h4>
              <p>
                Connect with emerging founders, student innovators,
                mentors and the wider startup ecosystem.
              </p>
            </div>

            <div>
              <span>08</span>
              <h4>Media & Outreach Partner</h4>
              <p>
                Help amplify Venture X 2026 through media coverage,
                digital storytelling and communication partnerships.
              </p>
            </div>

            <div>
              <span>09</span>
              <h4>Knowledge & Mentorship Partner</h4>
              <p>
                Bring industry expertise through workshops, mentoring,
                masterclasses, panels or expert sessions.
              </p>
            </div>

            <div>
              <span>10</span>
              <h4>Experience Partner</h4>
              <p>
                Collaborate through food, printing, gifting, hospitality
                or other event-support partnerships.
              </p>
            </div>

          </div>


          <p className="package-note">
            * Sponsorship benefits and custom collaborations are subject
            to organizer discussion, availability and mutual alignment.
          </p>

        </div>

      </section>


     

      {/* PREVIOUS ASSOCIATIONS */}
      <section className="previous-partners">
        <span className="sponsors-kicker">PREVIOUS ASSOCIATIONS</span>

        <h2>Organizations that<br /><span>believed in us.</span></h2>

        <div className="partner-logos">
          <div>PARTNER LOGO</div>
          <div>PARTNER LOGO</div>
          <div>PARTNER LOGO</div>
          <div>PARTNER LOGO</div>
        </div>
      </section>


      {/* CTA */}
      <section className="sponsor-cta">
        <div>
          <span>LET'S BUILD SOMETHING MEANINGFUL</span>
          <h2>
            Your support could
            <br />
            <strong>shape the next big idea.</strong>
          </h2>
          <p>
            Become a partner of Venture X 2026 and help us create a
            platform where ideas can grow into impact.
          </p>
        </div>

        <a
  href="https://simplebooklet.com/venturexsponserbrochurepdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Become a Sponsor
  <ArrowDownRight size={18} />
</a>
      </section>


      {/* FOOTER */}
      <footer className="sponsors-footer">
        <span>© 2026 VENTURE X · BIT MESRA - NOIDA CAMPUS</span>

        <a href="/Business/">
          Home <ArrowRight size={15} />
        </a>
      </footer>

    </div>
  );
}
