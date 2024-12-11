import React, { useEffect } from 'react';
import manifoldLogo from '../assets/manifold_logo.png';
import labofOZLogo from '../assets/loz_logo_small.png';
import NEBlogo from '../assets/neb_logo.png';

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Manifold Bio",
      logo: manifoldLogo, // Replace with actual logo URL
      role: "Associate Scientist",
      period: "2023 - Present",
      description: "Working at the intersection of computational biology and protein engineering",
      highlights: [
        "Leveraged programmatic library design, display based screening technologies and computational analysis to characterize and evaluate antibody binders.",
        "Nominated drug candidates to Manifold’s in-vivo pipeline through the analysis of diverse readouts from NGS, flow cytrometry, ELISA, cell binding and biolayer interferometry.",
        "Designed, conducted and analyzed a wide array of wet lab experiments employing technologies such as phage and yeast display, FACS and both long and short read sequencing to carry out affinity maturation and deep mutational scanning of antibody sequence variants"
      ]
    },
    {
      company: "Dartmouth College",
      logo: labofOZLogo, // Replace with actual logo URL
      role: "Research Assistant - Dartmouth Computational Evolutionary Genomics Lab",
      period: "2019 - 2023",
      description: "Focused on microbial evolutionary biology, genomics, and bioinformatics",
      highlights: [
        "Employed in-silico techniques to elucidate the evolutionary histories of Gene Transfer Agents (GTAs)",
        "Experienced manipulating large protein and sequence datasets and employing high performance computing environments for computationally expensive work. ",
        "Used ancestral reconstruction and supervised machine learning techniques to identify characteristic mutations in the Large Terminase protein which may help explain the unique, altruistic, DNA packaging behavior."
      ]
    },
    {
      company: "New England Biolabs",
      logo: NEBlogo, // Replace with actual logo URL
      role: "Research Intern - Yigit Lab",
      period: "2019 - 2023",
      description: "Establishing a hybrid foundation while working with RNA",
      highlights: [
        "Developed a pipeline for the custom computational analysis of RNA-seq data to evaluate biases in sequencing performance relevant to new enzymatic RNA modification detection methods. ",
        "Examined site specificity and cleavage sequence preference of RNAses to evaluate their utility as enzymatic tools to reliably detect specific RNA modifications.",
        "Trained on many molecular biology techniques including but not limited to Golden Gate and homology based Gibson cloning, transformation, PCR optimization, gel electrophoresis, protein production and purification."
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add visible class when entering viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
        } else {
          // Remove visible class when leaving viewport
          entry.target.classList.remove('timeline-visible');
        }
      });
    }, observerOptions);

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    // Also observe the title for animation
    const title = document.querySelector('.timeline-title');
    if (title) {
      observer.observe(title);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">Professional Experience</h2>
        
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-company">
                    <div className="company-logo-container">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="company-logo"
                      />
                    </div>
                    <div className="company-info">
                      <h3>{exp.company}</h3>
                      <h4>{exp.role}</h4>
                    </div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <div className="timeline-content">
                  <p>{exp.description}</p>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;