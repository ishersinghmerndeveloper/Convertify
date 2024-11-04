import React from 'react'
export default function About() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Convertify</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
                At Convertify, we’re dedicated to helping businesses transform their digital presence and drive measurable growth. In an ever-evolving digital world, we understand the importance of connecting with audiences in meaningful ways that lead to conversions. That’s why we provide tailor-made digital solutions that amplify your online impact and turn potential leads into loyal customers.
                Our team of experts specializes in [list your core services, e.g., web design, SEO, content marketing, conversion rate optimization], focusing on data-driven strategies and innovative design to create websites that aren’t just visually appealing but are also optimized for performance. We believe in the power of personalization and the science of engagement, ensuring every strategy aligns with your unique goals.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Why Choose Us?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      With years of industry experience, we combine creativity with advanced analytics to deliver results that speak for themselves. Our commitment to transparency, client collaboration, and measurable success makes us the ideal partner to help elevate your brand in a competitive digital landscape.
      </div>
    </div>
  </div>
 </div>
    </div>
  )
}
