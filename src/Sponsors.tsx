
import React from 'react';
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
  Trophy,
  Users,
} from 'lucide-react';

export default function Sponsors() {
  return (
    <div className="sponsors-page">

      {/* HEADER */}
      <header className="sponsors-header">
        <a href="/" className="sponsors-brand">
          <span className="sponsors-brand-mark">✦</span>
          <span>
            <b>VENTURE X 2026</b>
            <small>BIT MESRA - NOIDA CAMPUS · 2026</small>
          </span>
        </a>

        <nav className="sponsors-nav">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#challenge">Challenge</a>
          <a href="/#prizes">Prizes</a>
          <a href="/#timeline">Rules</a>
          <a href="/#location">Location</a>
          <a href="/sponsors" className="active">Sponsors</a>

          <a
            className="sponsors-register"
            href="https://forms.gle/v95W2UdKuG1YYir98"
          >
            Register
            <ArrowDownRight size={15} />
          </a>
        </nav>
      </header>


      {/* HERO */}
      <main>

        <section className="sponsors-hero">
          <div className="sponsors-hero-grid">

            <div>
              <p className="sponsors-label">
                <span />
                PARTNER WITH VENTURE X 2026
              </p>

              <h1>
                Fuel the next
                <em> generation.</em>
              </h1>

              <p className="sponsors-hero-text">
                Partner with Venture X 2026 and become part of a platform
                where ambitious ideas meet industry, innovation and
                opportunity.
              </p>

              <div className="sponsors-hero-actions">
                <a href="#partnership" className="sponsors-button primary">
                  Become a Partner
                  <ArrowRight size={17} />
                </a>

                <a href="#opportunities" className="sponsors-button ghost">
                  Explore opportunities
                  <ArrowDownRight size={17} />
                </a>
              </div>
            </div>

            <div className="sponsors-hero-art">
              <div className="sponsor-orbit orbit-one" />
              <div className="sponsor-orbit orbit-two" />
              <div className="sponsor-orbit orbit-three" />

              <div className="sponsor-center">
                <Handshake size={68} strokeWidth={1.1} />
              </div>

              <div className="floating-sponsor-card card-one">
                <Star size={17} />
                <span>VISIBILITY</span>
              </div>

              <div className="floating-sponsor-card card-two">
                <Network size={17} />
                <span>NETWORK</span>
              </div>

              <div className="floating-sponsor-card card-three">
                <Lightbulb size={17} />
                <span>INNOVATION</span>
              </div>
            </div>

          </div>
        </section>


        {/* INTRO */}
        <section className="sponsors-intro">
          <div>
            <p className="sponsors-label">
              <span />
              WHY PARTNER
            </p>

            <h2>
              More than a logo.
              <br />
              <em>A meaningful connection.</em>
            </h2>
          </div>

          <p>
            Venture X 2026 brings together students, entrepreneurs,
            innovators, mentors, investors and industry leaders. Your
            organization can play an active role in helping promising
            ideas move from concept to real-world impact.
          </p>
        </section>


        {/* WHY PARTNER */}
        <section className="sponsor-benefits">

          <div className="sponsor-benefit-card">
            <div className="sponsor-icon">
              <Megaphone />
            </div>
            <span>01</span>
            <h3>Strategic Brand Visibility</h3>
            <p>
              Put your organization in front of an engaged audience
              across the Venture X ecosystem, event communications
              and digital platforms.
            </p>
          </div>

          <div className="sponsor-benefit-card">
            <div className="sponsor-icon">
              <Users />
            </div>
            <span>02</span>
            <h3>Access Emerging Talent</h3>
            <p>
              Connect with ambitious students, founders and innovators
              building solutions for real-world challenges.
            </p>
          </div>

          <div className="sponsor-benefit-card">
            <div className="sponsor-icon">
              <Target />
            </div>
            <span>03</span>
            <h3>Support Innovation</h3>
            <p>
              Associate your organization with entrepreneurship,
              responsible innovation and the next generation of
              business leaders.
            </p>
          </div>

          <div className="sponsor-benefit-card">
            <div className="sponsor-icon">
              <Network />
            </div>
            <span>04</span>
            <h3>Build Meaningful Connections</h3>
            <p>
              Engage beyond traditional sponsorship through mentoring,
              judging, networking and direct interaction with teams.
            </p>
          </div>

        </section>


        {/* OPPORTUNITIES */}
        <section id="opportunities" className="sponsor-opportunities">

          <div className="sponsor-section-heading">
            <p className="sponsors-label">
              <span />
              PARTNERSHIP OPTIONS
            </p>

            <h2>
              Sponsorship &
              <br />
              <em>engagement opportunities.</em>
            </h2>

            <p>
              Choose a partnership format that aligns with your
              organization's objectives.
            </p>
          </div>


          <div className="opportunity-list">

            <div className="opportunity-item">
              <div className="opportunity-number">01</div>
              <div className="opportunity-icon">
                <Trophy />
              </div>
              <div>
                <h3>Event & Track Sponsorship</h3>
                <p>
                  Associate your organization with Venture X 2026,
                  specific challenge tracks, stages or key event
                  moments.
                </p>
              </div>
              <ArrowRight />
            </div>


            <div className="opportunity-item">
              <div className="opportunity-number">02</div>
              <div className="opportunity-icon">
                <Lightbulb />
              </div>
              <div>
                <h3>Mentorship & Expert Sessions</h3>
                <p>
                  Bring your expertise directly to participating
                  teams through mentoring, workshops, panels or
                  expert sessions.
                </p>
              </div>
              <ArrowRight />
            </div>


            <div className="opportunity-item">
              <div className="opportunity-number">03</div>
              <div className="opportunity-icon">
                <Star />
              </div>
              <div>
                <h3>Awards & Recognition</h3>
                <p>
                  Support a special award or recognition category
                  and connect your brand with outstanding ideas.
                </p>
              </div>
              <ArrowRight />
            </div>


            <div className="opportunity-item">
              <div className="opportunity-number">04</div>
              <div className="opportunity-icon">
                <Network />
              </div>
              <div>
                <h3>Networking & Industry Connect</h3>
                <p>
                  Participate in curated interactions with
                  participants, mentors, investors and industry
                  professionals.
                </p>
              </div>
              <ArrowRight />
            </div>


            <div className="opportunity-item">
              <div className="opportunity-number">05</div>
              <div className="opportunity-icon">
                <Megaphone />
              </div>
              <div>
                <h3>Media & Brand Storytelling</h3>
                <p>
                  Showcase your organization's commitment to
                  entrepreneurship and innovation through event
                  communications and digital storytelling.
                </p>
              </div>
              <ArrowRight />
            </div>

          </div>
        </section>


        {/* WHO WE PARTNER WITH */}
        <section className="partner-types">

          <div className="sponsor-section-heading">
            <p className="sponsors-label">
              <span />
              OUR PARTNERS
            </p>

            <h2>
              Who we
              <br />
              <em>partner with.</em>
            </h2>
          </div>

          <div className="partner-type-grid">

            <div>
              <Building2 />
              <h3>Corporates & Industry Leaders</h3>
            </div>

            <div>
              <BriefcaseBusiness />
              <h3>Investment Firms & Funds</h3>
            </div>

            <div>
              <Lightbulb />
              <h3>Innovation-led Enterprises</h3>
            </div>

            <div>
              <Target />
              <h3>Sustainability Organizations</h3>
            </div>

            <div>
              <Users />
              <h3>Foundations & Institutions</h3>
            </div>

            <div>
              <Network />
              <h3>Startup & Ecosystem Partners</h3>
            </div>

          </div>
        </section>


        {/* PARTNERS / LOGOS */}
        <section className="previous-partners">

          <div className="sponsor-section-heading centered">
            <p className="sponsors-label">
              <span />
              OUR ASSOCIATIONS
            </p>

            <h2>
              Previous
              <br />
              <em>associations.</em>
            </h2>

            <p>
              Partner logos and previous associations will be displayed
              here as they are confirmed.
            </p>
          </div>

          <div className="partner-logo-grid">

            <div className="partner-logo">PARTNER 01</div>
            <div className="partner-logo">PARTNER 02</div>
            <div className="partner-logo">PARTNER 03</div>
            <div className="partner-logo">PARTNER 04</div>
            <div className="partner-logo">PARTNER 05</div>
            <div className="partner-logo">PARTNER 06</div>

          </div>
        </section>


        {/* CTA */}
        <section id="partnership" className="sponsor-cta">

          <div className="sponsor-cta-inner">

            <p className="sponsors-label">
              <span />
              LET'S BUILD TOGETHER
            </p>

            <h2>
              Put your brand
              <br />
              <em>behind the next big idea.</em>
            </h2>

            <p>
              Explore a partnership with Venture X 2026 and help create
              a platform where innovative ideas can become meaningful
              ventures.
            </p>

            <a href="mailto:sponsors@venturex2026.com" className="sponsors-button primary">
              Contact for Partnership
              <ArrowRight size={17} />
            </a>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="sponsors-footer">

          <div>
            <b>VENTURE X 2026</b>
            <span>
              National Level Sustainable Innovation and Startup Pitch Competition
            </span>
          </div>

          <div>
            <a href="/">Back to Venture X</a>
          </div>

        </footer>

      </main>
    </div>
  );
}


