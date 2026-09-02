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


      {/* PARTNER TYPES */}
      <section className="partner-types">
        <div className="sponsors-section-heading">
          <span>03 / WHO WE PARTNER WITH</span>
          <h2>
            Built for organizations
            <br />
            <strong>that believe in ideas.</strong>
          </h2>
        </div>

        <div className="partner-type-grid">

          <div>
            <Building2 />
            <h3>Corporates & Industry Leaders</h3>
          </div>

          <div>
            <BriefcaseBusiness />
            <h3>Investors & Angel Networks</h3>
          </div>

          <div>
            <Lightbulb />
            <h3>Innovation-Led Enterprises</h3>
          </div>

          <div>
            <Target />
            <h3>Sustainability Organizations</h3>
          </div>

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

        <a href="mailto:sponsors@venturex2026.com">
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
