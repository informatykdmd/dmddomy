import React from "react";

/**
 * OrlySection
 * Props:
 * - variant: "center" | "split" | "compact"
 * - imgSrc: string (np. "/images/orly.png")
 * - imgAlt: string
 * - title: string
 * - lead: string
 * - ctaText?: string
 * - ctaHref?: string
 * - className?: string (dodatkowe klasy na <section>)
 */
export default function OrlySection({
  variant = "center",
  imgSrc = "/images/orly.png",
  imgAlt = "Orły Nieruchomości",
  title = "Laureat Orłów Nieruchomości",
  lead = "Wyróżnienie, które potwierdza jakość naszej pracy i zaufanie klientów.",
  ctaText,
  ctaHref,
  className = "",
}) {
  if (variant === "split") {
    return (
        <section className={`orly-section section-padding-all ${className}`}>
        <div className="default-container">
            {/* Nagłówek sekcji jak wszędzie */}
            <div className="row clearfix">
            <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                <div className="sec-con-title text-center centered mx-auto">
                <div className="con-title-text con-title-border-l">
                    Nasze Wyróżnienia
                </div>
                <h2>Orły Nieruchomości</h2>
                <div className="text">
                    Wyróżnienie, które potwierdza standard realizacji i zaufanie naszych klientów.
                </div>
                </div>
            </div>
            </div>

            {/* Treść sekcji */}
            <div className="row align-items-center clearfix" style={{ marginTop: 30 }}>
            <div className="col-12 col-lg-5 text-center text-lg-start">
                <img
                src={imgSrc}
                alt={imgAlt}
                className="img-fluid orly-img"
                loading="lazy"
                />
            </div>

            <div className="col-12 col-lg-7">
                <h3 className="orly-title mb-2">{title}</h3>
                <p className="orly-lead mb-0">{lead}</p>

                {ctaText && ctaHref ? (
                <div className="mt-3">
                    <a className="btn btn-dark" href={ctaHref}>
                    {ctaText}
                    </a>
                </div>
                ) : null}
            </div>
            </div>
        </div>
        </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className={`py-4 border-top border-bottom ${className}`}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center gap-3">
            <img
              src={imgSrc}
              alt={imgAlt}
              style={{ height: 56, width: "auto" }}
              loading="lazy"
            />

            <div className="text-center text-md-start">
              <div className="fw-bold">{title}</div>
              <div className="text-muted">{lead}</div>
            </div>

            {ctaText && ctaHref ? (
              <div className="ms-md-auto">
                <a className="btn btn-outline-dark" href={ctaHref}>
                  {ctaText}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  // variant === "center"
  return (
    <section className={`py-5 bg-light border-top border-bottom ${className}`}>
      <div className="container text-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mb-4"
          style={{ maxHeight: 140 }}
          loading="lazy"
        />

        <h3 className="fw-bold">{title}</h3>
        <p className="text-muted mx-auto mb-0" style={{ maxWidth: 760 }}>
          {lead}
        </p>

        {ctaText && ctaHref ? (
          <div className="mt-3">
            <a className="btn btn-dark" href={ctaHref}>
              {ctaText}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}