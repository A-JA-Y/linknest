import { useState, useEffect, useRef } from "react";

const FAVICON_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23E8553A'/><text x='16' y='23' text-anchor='middle' font-size='20' font-weight='bold' fill='white' font-family='sans-serif'>L</text></svg>`;

// --- PAGE DATA ---
const PRIVACY_CONTENT = `
Last Updated: May 1, 2026

1. INTRODUCTION

LinkNest ("we," "our," or "us") respects your privacy and is committed to protecting the personal data of our users ("you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services (collectively, the "Service").

By accessing or using LinkNest, you consent to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Service immediately.

2. INFORMATION WE COLLECT

2.1 Information You Provide
We collect information you voluntarily provide, including: your name, email address, company name, and billing information when you register for an account; content you upload, such as product descriptions, blog posts, and keyword configurations; communications you send to us, including support requests and feedback.

2.2 Automatically Collected Information
When you use our Service, we may automatically collect: device information (browser type, operating system, device identifiers); log data (IP address, access times, pages viewed, referring URL); usage data (features used, click patterns, session duration); cookies and similar tracking technologies.

2.3 Information from Third Parties
We may receive information from third-party integrations you connect, such as Shopify, WooCommerce, or other e-commerce platforms. This may include store data, product catalogs, and sales metrics necessary to provide our Service.

3. HOW WE USE YOUR INFORMATION

We use collected information to: provide, maintain, and improve the Service; process transactions and send related information; send administrative notifications and updates; respond to your comments, questions, and support requests; analyze usage patterns to enhance user experience; develop new features and functionality; detect, prevent, and address technical issues or fraud; comply with legal obligations.

4. NEURAL FLOW DATA

Our Neural Flow feature processes anonymized behavioral data (click patterns, keyword interactions) to personalize product recommendations. This data is processed locally within your store environment and is never shared with third parties. You may disable Neural Flow at any time through your dashboard settings.

5. DATA SHARING AND DISCLOSURE

We do not sell your personal information. We may share your data with: service providers who assist in operating our platform (hosting, analytics, payment processing); law enforcement or regulatory authorities when required by law; business partners, with your explicit consent; in connection with a merger, acquisition, or sale of assets (with prior notice).

6. DATA RETENTION

We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. Account data is retained for the duration of your active subscription plus 30 days. You may request deletion of your data at any time by contacting privacy@linknest.io.

7. DATA SECURITY

We implement industry-standard security measures including encryption in transit (TLS 1.3), encryption at rest (AES-256), regular security audits and penetration testing, access controls and authentication mechanisms, and SOC 2 Type II compliance.

8. YOUR RIGHTS

Depending on your jurisdiction, you may have the right to: access, correct, or delete your personal data; object to or restrict processing; data portability; withdraw consent at any time; lodge a complaint with a supervisory authority.

To exercise any of these rights, contact us at privacy@linknest.io.

9. INTERNATIONAL DATA TRANSFERS

If you are located outside the United States, your data may be transferred to and processed in the United States. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant authorities.

10. CHILDREN'S PRIVACY

LinkNest is not intended for use by individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware of such collection, we will promptly delete the information.

11. CHANGES TO THIS POLICY

We may update this Privacy Policy periodically. We will notify you of material changes via email or a prominent notice on our website at least 30 days before changes take effect.

12. CONTACT US

For questions about this Privacy Policy, contact us at:
LinkNest Inc.
Email: privacy@linknest.io
Address: 42 Commerce Street, Suite 800, San Francisco, CA 94105
`;

const TERMS_CONTENT = `
Last Updated: May 1, 2026

1. ACCEPTANCE OF TERMS

These Terms and Conditions ("Terms") govern your access to and use of LinkNest's website, platform, and services (collectively, the "Service") provided by LinkNest Inc. ("Company," "we," "our," or "us"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.

2. DESCRIPTION OF SERVICE

LinkNest provides an AI-powered content monetization platform that automatically identifies keywords in merchant content and converts them into interactive, shoppable links. The Service includes keyword detection and highlighting, product recommendation engine (Neural Flow), analytics and reporting (Opportunity Radar), and integration with supported e-commerce platforms.

3. ACCOUNT REGISTRATION

3.1 To use LinkNest, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

3.2 You must be at least 18 years old and have the legal authority to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.

3.3 We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.

4. SUBSCRIPTION AND PAYMENT

4.1 LinkNest offers multiple subscription tiers (Starter, Growth, Enterprise). Features, pricing, and usage limits for each tier are described on our pricing page and may be updated from time to time.

4.2 Subscriptions are billed monthly or annually, as selected at the time of purchase. All fees are non-refundable except as required by applicable law or as expressly stated in these Terms.

4.3 We may change pricing with 30 days' written notice. Continued use after the effective date constitutes acceptance of the new pricing.

4.4 If payment fails, we will attempt to charge your payment method for up to 7 days. If payment remains unsuccessful, your account may be downgraded or suspended.

5. ACCEPTABLE USE

You agree not to: use the Service for any unlawful purpose or in violation of any applicable laws; upload or transmit malicious code, viruses, or harmful content; attempt to gain unauthorized access to our systems or other users' accounts; interfere with or disrupt the integrity or performance of the Service; reverse engineer, decompile, or disassemble any part of the Service; use the Service to send unsolicited communications or spam; resell, sublicense, or redistribute the Service without written authorization; scrape, data-mine, or automatically extract data from the Service.

6. INTELLECTUAL PROPERTY

6.1 The Service, including its design, features, code, algorithms, and documentation, is owned by LinkNest Inc. and protected by intellectual property laws. Nothing in these Terms grants you ownership of any intellectual property.

6.2 You retain ownership of content you upload to the Service. By uploading content, you grant us a limited, non-exclusive license to process, display, and analyze your content solely to provide the Service.

6.3 Feedback, suggestions, or ideas you provide about the Service may be used by us without obligation to you.

7. NEURAL FLOW AND AI FEATURES

7.1 Our AI-powered features, including Neural Flow, use machine learning to analyze behavioral patterns and optimize product recommendations. These features process data algorithmically and may not always produce perfect results.

7.2 You acknowledge that AI-generated recommendations are suggestions only and should not be relied upon as the sole basis for business decisions.

7.3 We continuously improve our algorithms. Feature behavior may change over time as models are updated.

8. DATA AND ANALYTICS

8.1 Analytics data provided through the Service, including Opportunity Radar insights, are estimates and should be used for informational purposes only. We do not guarantee the accuracy of revenue projections or traffic estimates.

8.2 You are responsible for complying with all applicable data protection laws when using the Service, including obtaining necessary consents from your end users.

9. THIRD-PARTY INTEGRATIONS

9.1 The Service may integrate with third-party platforms (e.g., Shopify, WooCommerce). We are not responsible for the availability, accuracy, or policies of third-party services.

9.2 Your use of third-party integrations is subject to the respective third party's terms of service and privacy policy.

10. LIMITATION OF LIABILITY

10.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, LINKNEST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.

10.2 OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

10.3 THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

11. INDEMNIFICATION

You agree to indemnify and hold harmless LinkNest, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of the Service, your violation of these Terms, or your infringement of any third-party rights.

12. TERMINATION

12.1 You may terminate your account at any time through your dashboard settings. Termination takes effect at the end of your current billing period.

12.2 We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or fail to pay applicable fees.

12.3 Upon termination, your right to use the Service ceases immediately. We will retain your data for 30 days, after which it will be permanently deleted unless legally required to retain it.

13. DISPUTE RESOLUTION

13.1 These Terms are governed by the laws of the State of California, without regard to conflict of law principles.

13.2 Any disputes arising from these Terms shall first be submitted to good-faith mediation. If mediation is unsuccessful, disputes shall be resolved through binding arbitration in San Francisco, California.

13.3 You waive any right to participate in class action lawsuits or class-wide arbitration.

14. MODIFICATIONS

We reserve the right to modify these Terms at any time. Material changes will be communicated via email or a prominent notice on the Service at least 30 days in advance. Continued use after changes take effect constitutes acceptance.

15. MISCELLANEOUS

15.1 If any provision of these Terms is found unenforceable, the remaining provisions shall continue in full force and effect.

15.2 Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.

15.3 These Terms constitute the entire agreement between you and LinkNest regarding the Service.

16. CONTACT

For questions about these Terms, contact us at:
LinkNest Inc.
Email: legal@linknest.io
Address: 42 Commerce Street, Suite 800, San Francisco, CA 94105
`;

// --- COMPONENTS ---

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
      animation: "fadeIn 0.25s ease"
    }} onClick={onClose}>
      <div style={{
        background: "#fff", borderRadius: 18, padding: "36px 32px", maxWidth: 440, width: "92%",
        boxShadow: "0 24px 80px rgba(0,0,0,0.18)", position: "relative",
        animation: "slideUp 0.3s cubic-bezier(.22,1,.36,1)",
        maxHeight: "90vh", overflowY: "auto"
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute", top: 14, right: 16, background: "none", border: "none",
          fontSize: 22, cursor: "pointer", color: "#999", lineHeight: 1
        }}>✕</button>
        {children}
      </div>
    </div>
  );
}

function ContactForm({ title, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmit) onSubmit(form);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>✉️</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 8, color: "#1a1a2e" }}>
          Thank you!
        </h3>
        <p style={{ color: "#666", fontSize: 15, lineHeight: 1.6 }}>
          We'll inform you shortly. Our team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 4, color: "#1a1a2e" }}>
        {title || "Get in Touch"}
      </h3>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>Fill in your details and we'll get back to you.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { key: "name", label: "Full Name", type: "text" },
          { key: "email", label: "Email Address", type: "email" },
          { key: "company", label: "Company / Store URL", type: "text" },
        ].map(f => (
          <input key={f.key} type={f.type} placeholder={f.label} required
            value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            style={{
              padding: "12px 14px", border: "1.5px solid #e0e0e0", borderRadius: 10,
              fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif",
              transition: "border 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#E8553A"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
        ))}
        <textarea placeholder="Message (optional)" rows={3}
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          style={{
            padding: "12px 14px", border: "1.5px solid #e0e0e0", borderRadius: 10,
            fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif",
            resize: "vertical", transition: "border 0.2s"
          }}
          onFocus={e => e.target.style.borderColor = "#E8553A"}
          onBlur={e => e.target.style.borderColor = "#e0e0e0"}
        />
        <button onClick={handleSubmit} style={{
          padding: "13px 0", background: "linear-gradient(135deg, #E8553A 0%, #D4442B 100%)",
          color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          transition: "transform 0.15s, box-shadow 0.15s",
          boxShadow: "0 4px 16px rgba(232,85,58,0.3)"
        }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 24px rgba(232,85,58,0.4)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 16px rgba(232,85,58,0.3)"; }}
        >Submit</button>
      </div>
    </div>
  );
}

// --- INTERACTIVE DEMO ---
function LiveDemo() {
  const [highlights, setHighlights] = useState({});
  const [drawer, setDrawer] = useState(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [neuralHistory, setNeuralHistory] = useState([]);
  const [demoText, setDemoText] = useState(`Discover our latest collection of organic cotton essentials, designed for the modern sustainable lifestyle. Each piece is handcrafted with care, offering a minimalist aesthetic that doesn't compromise on comfort or quality.`);
  const [isEditing, setIsEditing] = useState(false);

  const keywords = {
    "organic cotton": [
      { name: "Classic Organic Cotton Tee", price: "$34.99", img: "🧵" },
      { name: "Cotton Blend Hoodie", price: "$62.00", img: "👕" },
      { name: "Organic Cotton Socks (3-Pack)", price: "$18.50", img: "🧦" },
    ],
    "sustainable": [
      { name: "Eco-Friendly Water Bottle", price: "$24.99", img: "🍶" },
      { name: "Bamboo Cutlery Set", price: "$15.00", img: "🥢" },
      { name: "Recycled Canvas Tote", price: "$28.00", img: "👜" },
    ],
    "minimalist": [
      { name: "Slim Leather Wallet", price: "$45.00", img: "👛" },
      { name: "Simple Watch - Black", price: "$129.00", img: "⌚" },
      { name: "Minimalist Desk Lamp", price: "$67.00", img: "💡" },
    ],
    "handcrafted": [
      { name: "Artisan Ceramic Mug", price: "$22.00", img: "☕" },
      { name: "Hand-Poured Soy Candle", price: "$19.99", img: "🕯️" },
      { name: "Woven Macramé Planter", price: "$38.00", img: "🪴" },
    ]
  };

  // Flatten all products into a single array for searching
  const allProducts = Object.values(keywords).flat();

  const demoTextSuggestions = [
    {
      title: "Fashion Essentials",
      text: "Discover our latest collection of organic cotton essentials, designed for the modern sustainable lifestyle. Each piece is handcrafted with care, offering a minimalist aesthetic. Try our Classic Organic Cotton Tee and Slim Leather Wallet for the perfect minimalist look."
    },
    {
      title: "Tech Gadgets",
      text: "Explore our premium tech accessories featuring sustainable materials and minimalist design. Our collection includes the Eco-Friendly Water Bottle for hydration and a Bamboo Cutlery Set for on-the-go meals. Each handcrafted item combines organic cotton elements with innovative sustainable technology."
    },
    {
      title: "Home Decor",
      text: "Transform your space with our sustainable home decor collection. We offer handcrafted pieces like the Artisan Ceramic Mug, Woven Macramé Planter, and Hand-Poured Soy Candle featuring organic cotton accents and minimalist designs, perfect for creating an elegant living environment."
    },
    {
      title: "Sports & Fitness",
      text: "Stay active with our premium sports collection featuring sustainable, minimalist athletic wear and accessories. The Eco-Friendly Water Bottle keeps you hydrated, while our Organic Cotton Socks and handcrafted minimalist gear provide comfort and performance."
    }
  ];

  const text = demoText;

  const handleKeywordClick = (kw) => {
    setDrawer(kw);
    setSelectedProductIndex(0);
    setNeuralHistory(prev => [...new Set([...prev, kw])]);
  };

  const handleProductClick = (productName) => {
    // Find which keyword category this product belongs to
    for (const [keyword, products] of Object.entries(keywords)) {
      const productIndex = products.findIndex(p => p.name.toLowerCase() === productName.toLowerCase());
      if (productIndex !== -1) {
        setDrawer(keyword);
        setSelectedProductIndex(productIndex);
        setNeuralHistory(prev => [...new Set([...prev, keyword])]);
        return;
      }
    }
  };

  const renderText = () => {
    if (!text) return [];
    
    // Find all keyword and product occurrences with their positions
    const matches = [];
    
    // Find keyword matches
    Object.keys(keywords).forEach(kw => {
      const regex = new RegExp(kw, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          type: 'keyword',
          keyword: kw,
          start: match.index,
          end: match.index + kw.length,
          matchedText: match[0]
        });
      }
    });

    // Find product matches
    allProducts.forEach(product => {
      const regex = new RegExp(product.name, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          type: 'product',
          productName: product.name,
          start: match.index,
          end: match.index + product.name.length,
          matchedText: match[0]
        });
      }
    });

    // Remove overlapping matches (prioritize products over keywords)
    matches.sort((a, b) => a.start - b.start);
    const filteredMatches = [];
    for (let match of matches) {
      const isOverlapping = filteredMatches.some(
        m => (match.start >= m.start && match.start < m.end) || 
             (match.end > m.start && match.end <= m.end)
      );
      if (!isOverlapping) {
        filteredMatches.push(match);
      }
    }

    // Build the JSX
    let parts = [];
    let lastIndex = 0;

    filteredMatches.forEach((match, idx) => {
      // Add text before this match
      if (match.start > lastIndex) {
        parts.push(text.slice(lastIndex, match.start));
      }

      if (match.type === 'product') {
        // Product highlight (stronger color)
        parts.push(
          <span key={`prod-${idx}`} onClick={() => handleProductClick(match.productName)} style={{
            background: "linear-gradient(135deg, rgba(232,85,58,0.25) 0%, rgba(232,85,58,0.35) 100%)",
            color: "#D4442B", padding: "3px 7px", borderRadius: 5, cursor: "pointer",
            borderBottom: "3px solid #E8553A", fontWeight: 700,
            transition: "all 0.2s", display: "inline", whiteSpace: "nowrap",
            textDecoration: "underline"
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(232,85,58,0.4)"; e.target.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.target.style.background = "rgba(232,85,58,0.25)"; e.target.style.transform = "scale(1)"; }}
            title="Click to view this product"
          >{match.matchedText}</span>
        );
      } else {
        // Keyword highlight (lighter color)
        parts.push(
          <span key={`kw-${idx}`} onClick={() => handleKeywordClick(match.keyword)} style={{
            background: "linear-gradient(135deg, rgba(232,85,58,0.12) 0%, rgba(232,85,58,0.18) 100%)",
            color: "#D4442B", padding: "2px 6px", borderRadius: 5, cursor: "pointer",
            borderBottom: "2px solid #E8553A", fontWeight: 600,
            transition: "all 0.2s", display: "inline", whiteSpace: "nowrap"
          }}
            onMouseEnter={e => e.target.style.background = "rgba(232,85,58,0.25)"}
            onMouseLeave={e => e.target.style.background = "rgba(232,85,58,0.12)"}
            title="Click to see related products"
          >{match.matchedText}</span>
        );
      }

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
      {/* Blog content */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: "clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 28px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)", border: "1px solid #f0ebe6",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: 12, fontSize: 12, color: "#aaa", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>yourstore.com/blog/new-collection</span>
        </div>
        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 12, color: "#1a1a2e" }}>
          Our New Spring Collection
        </h4>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "#444", fontFamily: "'DM Sans', sans-serif" }}>
          {renderText()}
        </p>
        <p style={{ fontSize: 12, color: "#bbb", marginTop: 16, fontStyle: "italic" }}>
          ↑ Click any highlighted keyword to see LinkNest in action
        </p>

        {/* Edit button */}
        <button onClick={() => setIsEditing(!isEditing)} style={{
          marginTop: 16, padding: "8px 16px", background: isEditing ? "#E8553A" : "#f5f0ea",
          color: isEditing ? "#fff" : "#E8553A", border: "none", borderRadius: 8,
          fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
        }}
          onMouseEnter={e => { if (!isEditing) { e.target.style.background = "#ede4d9"; } }}
          onMouseLeave={e => { if (!isEditing) { e.target.style.background = "#f5f0ea"; } }}
        >
          {isEditing ? "✓ Done Editing" : "✏️ Edit Text"}
        </button>
      </div>

      {/* Edit mode */}
      {isEditing && (
        <div style={{
          marginTop: 24, padding: 20, background: "#fef6f4", borderRadius: 16,
          border: "2px solid #E8553A", animation: "slideUp 0.3s ease"
        }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", display: "block", marginBottom: 12 }}>
            Edit Demo Text:
          </label>
          <textarea value={demoText} onChange={e => setDemoText(e.target.value)} style={{
            width: "100%", minHeight: 100, padding: 12, border: "1.5px solid #E8553A",
            borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            outline: "none", resize: "vertical", color: "#1a1a2e"
          }} />
          
          <div style={{ marginTop: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", marginBottom: 10 }}>Quick suggestions:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
              {demoTextSuggestions.map((s, i) => (
                <button key={i} onClick={() => setDemoText(s.text)} style={{
                  padding: "10px 12px", background: "#fff", border: "1px solid #E8553A",
                  borderRadius: 8, fontSize: 12, fontWeight: 500, color: "#E8553A",
                  cursor: "pointer", transition: "all 0.2s", textAlign: "left"
                }}
                  onMouseEnter={e => { e.target.style.background = "#E8553A"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = "#E8553A"; }}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Side drawer */}
      {drawer && (
        <div className="demo-drawer" style={{
          position: "absolute", top: 0, right: -8, width: 280, background: "#fff",
          borderRadius: "0 16px 16px 0", boxShadow: "-4px 0 30px rgba(0,0,0,0.1)",
          padding: "20px 16px", zIndex: 10, animation: "slideRight 0.3s ease",
          border: "1px solid #f0ebe6", borderLeft: "3px solid #E8553A",
          maxHeight: "100%", overflow: "auto"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#E8553A" }}>
              Shop "{drawer}"
            </span>
            <button onClick={() => setDrawer(null)} style={{
              background: "#f5f5f5", border: "none", borderRadius: 6, width: 24, height: 24,
              cursor: "pointer", fontSize: 13, color: "#888", display: "flex", alignItems: "center", justifyContent: "center"
            }}>✕</button>
          </div>
          {keywords[drawer]?.map((p, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 10px",
              borderRadius: 10, marginBottom: 6, cursor: "pointer",
              transition: "background 0.15s", background: i === selectedProductIndex ? "#fef6f4" : "transparent"
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#fef6f4"}
              onMouseLeave={e => { if (i !== selectedProductIndex) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: 28, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f4f0", borderRadius: 10 }}>
                {p.img}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#E8553A", fontWeight: 700 }}>{p.price}</div>
              </div>
            </div>
          ))}
          {neuralHistory.length > 1 && (
            <div style={{
              marginTop: 12, padding: "10px 12px", background: "#f0f7ff",
              borderRadius: 8, fontSize: 11, color: "#4a6fa5"
            }}>
              🧠 Neural Flow: Adapting to your interests ({neuralHistory.join(", ")})
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- MAIN APP ---
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set favicon
    let link = document.querySelector("link[rel='icon']");
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.href = FAVICON_SVG;
    document.title = "LinkNest — Turn Content into Conversions";

    // Load fonts
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (title) => { setModalTitle(title); setModalOpen(true); };

  const scrollTo = (id) => {
    setCurrentPage("home");
    setMobileMenu(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // --- LEGAL PAGES ---
  if (currentPage === "privacy" || currentPage === "terms") {
    const content = currentPage === "privacy" ? PRIVACY_CONTENT : TERMS_CONTENT;
    const title = currentPage === "privacy" ? "Privacy Policy" : "Terms & Conditions";
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf8f5", minHeight: "100vh" }}>
        <style>{globalStyles}</style>
        <nav style={{
          padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#fff", borderBottom: "1px solid #f0ebe6", position: "sticky", top: 0, zIndex: 100
        }}>
          <div onClick={() => setCurrentPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #E8553A, #D4442B)",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
              fontWeight: 800, fontSize: 18, fontFamily: "'Playfair Display', serif"
            }}>L</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#1a1a2e" }}>LinkNest</span>
          </div>
          <button onClick={() => setCurrentPage("home")} style={{
            padding: "8px 20px", background: "#1a1a2e", color: "#fff", border: "none",
            borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600
          }}>← Back to Home</button>
        </nav>
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "48px 24px 80px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#1a1a2e", marginBottom: 8 }}>{title}</h1>
          <div style={{ whiteSpace: "pre-line", fontSize: 14.5, lineHeight: 1.8, color: "#444" }}>{content}</div>
        </div>
      </div>
    );
  }

  // --- HOME PAGE ---
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf8f5", overflowX: "hidden" }}>
      <style>{globalStyles}</style>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm title={modalTitle || "Request a Demo"} />
      </Modal>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "10px 32px" : "16px 32px",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240,235,230,0.8)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div onClick={() => scrollTo("hero")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, zIndex: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #E8553A, #D4442B)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 19, fontFamily: "'Playfair Display', serif",
            boxShadow: "0 4px 12px rgba(232,85,58,0.3)"
          }}>L</div>
          <span style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 21,
            color: scrolled ? "#1a1a2e" : "#fff"
          }}>LinkNest</span>
        </div>

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[
            { label: "Home", id: "hero" },
            { label: "About Us", id: "creator" },
            { label: "Contact Us", id: "contact" },
          ].map(n => (
            <span key={n.id} onClick={() => scrollTo(n.id)} style={{
              cursor: "pointer", fontSize: 14, fontWeight: 500,
              color: scrolled ? "#555" : "rgba(255,255,255,0.85)",
              transition: "color 0.2s"
            }}
              onMouseEnter={e => e.target.style.color = "#E8553A"}
              onMouseLeave={e => e.target.style.color = scrolled ? "#555" : "rgba(255,255,255,0.85)"}
            >{n.label}</span>
          ))}
        </div>

        {/* Right side: Demo button (always visible) + hamburger (mobile only) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 10 }}>
          <button className="demo-btn" onClick={() => openModal("Request a Demo")} style={{
            padding: "10px 22px", background: "linear-gradient(135deg, #E8553A, #D4442B)",
            color: "#fff", border: "none", borderRadius: 10, fontSize: 13.5, fontWeight: 600,
            cursor: "pointer", boxShadow: "0 4px 16px rgba(232,85,58,0.3)",
            transition: "transform 0.15s", whiteSpace: "nowrap"
          }}
            onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >Request a Demo</button>

          {/* Mobile hamburger */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            flexDirection: "column", gap: 5, padding: 8
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 22, height: 2.5, borderRadius: 2,
                background: scrolled ? "#1a1a2e" : "#fff",
                transition: "all 0.3s",
                transform: mobileMenu ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none"
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenu && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(26,26,46,0.97)", zIndex: 5,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
            animation: "fadeIn 0.2s ease"
          }}>
            {["Home:hero", "About Us:creator", "Contact Us:contact"].map(s => {
              const [label, id] = s.split(":");
              return (
                <span key={id} onClick={() => scrollTo(id)} style={{
                  color: "#fff", fontSize: 24, fontWeight: 500, cursor: "pointer",
                  fontFamily: "'Playfair Display', serif"
                }}>{label}</span>
              );
            })}
            <button onClick={() => { setMobileMenu(false); openModal("Request a Demo"); }} style={{
              padding: "14px 40px", background: "#E8553A", color: "#fff", border: "none",
              borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: "pointer", marginTop: 8
            }}>Request a Demo</button>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" style={{
        background: "linear-gradient(165deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)",
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", padding: "120px 24px 80px"
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,85,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,85,58,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ textAlign: "center", maxWidth: 720, position: "relative", zIndex: 2 }}>
          <div style={{
            display: "inline-block", padding: "6px 18px", borderRadius: 50,
            background: "rgba(232,85,58,0.12)", color: "#E8553A",
            fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase",
            marginBottom: 28, border: "1px solid rgba(232,85,58,0.2)"
          }}>
            AI-Powered Content Monetization
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5.5vw, 64px)",
            fontWeight: 800, color: "#fff", lineHeight: 1.12, marginBottom: 20,
            letterSpacing: "-0.02em"
          }}>
            Turn Every Word Into a<br />
            <span style={{ color: "#E8553A" }}>Shopping Moment</span>
          </h1>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto 36px"
          }}>
            LinkNest auto-highlights keywords in your content and transforms them into instant, shoppable experiences — no page reloads, zero friction.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.producthunt.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px",
              background: "#1a1a2e", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: 12,
              color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 600,
              transition: "all 0.2s", cursor: "pointer"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#E8553A"; e.currentTarget.style.background = "rgba(232,85,58,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "#1a1a2e"; }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 7, background: "#E8553A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 16, color: "#fff"
              }}>P</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 400, letterSpacing: 0.5 }}>VIEW ON</div>
                <div style={{ fontSize: 15 }}>Product Hunt</div>
              </div>
            </a>
            <button onClick={() => scrollTo("creator")} style={{
              padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)",
              border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: 12, fontSize: 14,
              fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.7)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >About Us</button>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 56px)", marginTop: 56,
            flexWrap: "wrap"
          }}>
            {[
              { num: "3.2×", label: "Conversion Lift" },
              { num: "47%", label: "Lower Bounce Rate" },
              { num: "12K+", label: "Stores Active" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#E8553A", fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>How It Works</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1a1a2e", marginTop: 8 }}>Three Steps to Smarter Sales</h2>
        </div>
        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {[
            { step: "01", icon: "🔌", title: "Install & Connect", desc: "Add LinkNest to your store in under 2 minutes. Works with any Shopify theme — no code changes needed." },
            { step: "02", icon: "🧠", title: "AI Scans Your Content", desc: "Our engine reads your blogs, descriptions, and pages. It identifies high-value keywords and highlights them automatically." },
            { step: "03", icon: "💰", title: "Readers Become Buyers", desc: "Visitors click highlighted words, a side drawer opens with product suggestions. No reloads, no friction — just conversions." },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 16, padding: "36px 28px",
              border: "1px solid #f0ebe6", position: "relative",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#E8553A", letterSpacing: 2, marginBottom: 14 }}>STEP {s.step}</div>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a1a2e", marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LIVE DEMO ===== */}
      <section id="demo" style={{
        padding: "80px 24px 100px",
        background: "linear-gradient(180deg, #faf8f5 0%, #f5f0ea 100%)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>Interactive Demo</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1a1a2e", marginTop: 8 }}>See LinkNest in Action</h2>
          <p style={{ color: "#888", maxWidth: 480, margin: "8px auto 0", fontSize: 15 }}>
            Click any highlighted keyword below to experience the shoppable drawer.
          </p>
        </div>
        <LiveDemo />
      </section>

      {/* ===== FEATURES ===== */}
      <section style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>Features</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1a1a2e", marginTop: 8 }}>What Sets LinkNest Apart</h2>
        </div>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {[
            { icon: "⚡", title: "Zero Friction Shopping", desc: "Side drawer opens instantly — no page reloads, no popups. Readers shop without interrupting their reading flow." },
            { icon: "🧠", title: "Neural Flow Engine", desc: "Learns from every click in real time. Tap 'cotton' and the next suggestions prioritize cotton products. Like a shop assistant that adapts." },
            { icon: "📡", title: "Opportunity Radar", desc: "Scans your store and reveals: 'This keyword gets 500 clicks/month but has no products linked. You're losing $2,000.' Actionable intelligence." },
            { icon: "🔒", title: "Privacy-First Architecture", desc: "All behavioral data is processed locally within your store environment. No data sold to third parties. GDPR and CCPA compliant out of the box." },
            { icon: "🎨", title: "Theme-Agnostic Design", desc: "Adapts to any Shopify theme automatically. The highlight style, drawer design, and colors all match your brand — no custom CSS required." },
            { icon: "📊", title: "Revenue Attribution", desc: "Track exactly which keywords drive sales. See revenue per keyword, conversion rates by content type, and ROI on every blog post." },
          ].map((f, i) => (
            <div key={i} style={{
              padding: "32px 28px", borderRadius: 16, border: "1px solid #f0ebe6",
              background: "#fff", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#E8553A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#f0ebe6"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#1a1a2e", marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>Pricing</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#fff", marginTop: 8 }}>Plans That Scale With You</h2>
        </div>
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }}>
          {[
            {
              name: "Starter", price: "$29", period: "/mo", desc: "Perfect for new stores testing content monetization.",
              features: ["Up to 50 keywords", "5,000 monthly impressions", "Basic analytics", "Email support", "1 store connected"],
              featured: false
            },
            {
              name: "Growth", price: "$79", period: "/mo", desc: "For growing stores ready to maximize every page.",
              features: ["Unlimited keywords", "50,000 monthly impressions", "Neural Flow engine", "Opportunity Radar", "Priority support", "5 stores connected"],
              featured: true
            },
            {
              name: "Enterprise", price: "$199", period: "/mo", desc: "Full power for high-traffic stores and agencies.",
              features: ["Everything in Growth", "Unlimited impressions", "Custom AI training", "Dedicated account manager", "API access", "Unlimited stores", "White-label option"],
              featured: false
            },
          ].map((p, i) => (
            <div key={i} style={{
              borderRadius: 18, padding: p.featured ? "40px 28px" : "36px 28px",
              background: p.featured ? "linear-gradient(165deg, #E8553A 0%, #D4442B 100%)" : "rgba(255,255,255,0.04)",
              border: p.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
              position: "relative", transform: p.featured ? "scale(1.04)" : "none",
              boxShadow: p.featured ? "0 20px 60px rgba(232,85,58,0.3)" : "none"
            }}>
              {p.featured && <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "#fff", color: "#E8553A", fontSize: 11, fontWeight: 700,
                padding: "4px 16px", borderRadius: 50, letterSpacing: 0.5
              }}>MOST POPULAR</div>}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: p.featured ? "#fff" : "#fff", marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: p.featured ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)", marginBottom: 16 }}>{p.desc}</p>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif" }}>{p.price}</span>
                <span style={{ fontSize: 14, color: p.featured ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)" }}>{p.period}</span>
              </div>
              <div style={{ marginBottom: 24 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
                    fontSize: 13.5, color: p.featured ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)"
                  }}>
                    <span style={{ color: p.featured ? "#fff" : "#E8553A" }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => openModal(`Get Started — ${p.name} Plan`)} style={{
                width: "100%", padding: "13px 0", borderRadius: 10, fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "transform 0.15s",
                background: p.featured ? "#fff" : "transparent",
                color: p.featured ? "#E8553A" : "#fff",
                border: p.featured ? "none" : "1.5px solid rgba(255,255,255,0.2)",
              }}
                onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
                onMouseLeave={e => e.target.style.transform = "translateY(0)"}
              >Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MEET THE CREATOR (About Us) ===== */}
      <section id="creator" style={{ padding: "100px 24px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>About Us</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1a1a2e", marginTop: 8 }}>Meet the Creator</h2>
        </div>
        <div className="creator-card" style={{
          background: "#fff", borderRadius: 20, padding: "48px 40px",
          border: "1px solid #f0ebe6", boxShadow: "0 8px 40px rgba(0,0,0,0.04)",
          display: "flex", gap: 36, alignItems: "flex-start"
        }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: 120, height: 120, borderRadius: 20, overflow: "hidden",
              background: "linear-gradient(145deg, #f5f0ea, #ece4d9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 52, boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
            }}>
              👨‍💻
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "center" }}>
              {["𝕏", "in", "🔗"].map((s, i) => (
                <a key={i} href="#" style={{
                  width: 32, height: 32, borderRadius: 8, background: "#f5f0ea",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", color: "#888", fontSize: 13, fontWeight: 700
                }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1a1a2e", marginBottom: 2 }}>
              Arjun Mehta
            </h3>
            <p style={{ fontSize: 13, color: "#E8553A", fontWeight: 600, letterSpacing: 0.5, marginBottom: 16 }}>
              Founder & CEO, LinkNest
            </p>
            <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.85 }}>
              Arjun Mehta is a product engineer and e-commerce strategist who spent seven years building conversion tools at two Y Combinator-backed startups before launching LinkNest. With a background in machine learning from Stanford and hands-on experience managing Shopify stores that collectively processed over $40 million in revenue, he understands the gap between content and commerce at a visceral level. The idea for LinkNest was born from a simple frustration: watching beautifully written blog posts drive thousands of visitors but almost zero sales. Arjun realized that the missing link wasn't better writing — it was smarter infrastructure. He built the first prototype of Neural Flow in a weekend hackathon and was stunned when conversion rates tripled overnight. That prototype became LinkNest. Today, Arjun leads a lean, fully remote team committed to privacy-first AI that serves merchants, not advertisers. When he's not coding, you'll find him mentoring indie hackers, writing about the intersection of content and commerce, or experimenting with his sourdough starter — which he insists also follows a neural-flow optimization process.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT US ===== */}
      <section id="contact" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #faf8f5 0%, #f5f0ea 100%)"
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#E8553A", textTransform: "uppercase", letterSpacing: 2 }}>Contact Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1a1a2e", marginTop: 8 }}>Let's Talk</h2>
            <p style={{ color: "#888", fontSize: 15, marginTop: 4 }}>Have questions? Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          <div style={{
            background: "#fff", borderRadius: 20, padding: "clamp(24px, 4vw, 40px) clamp(20px, 3.5vw, 36px)",
            border: "1px solid #f0ebe6", boxShadow: "0 8px 40px rgba(0,0,0,0.04)"
          }}>
            <ContactForm title="Send Us a Message" />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        background: "#1a1a2e", padding: "64px 24px 32px", color: "rgba(255,255,255,0.5)"
      }}>
        <div className="footer-grid" style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #E8553A, #D4442B)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "'Playfair Display', serif"
              }}>L</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>LinkNest</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
              Turn your content into a revenue engine. AI-powered shoppable links for modern e-commerce.
            </p>
            {/* Product Hunt button */}
            <a href="https://www.producthunt.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, textDecoration: "none", marginTop: 20, transition: "all 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#E8553A"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
            >
              <div style={{
                width: 26, height: 26, borderRadius: 6, background: "#E8553A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 15, color: "#fff"
              }}>P</div>
              <div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: 0.5 }}>VIEW ON</div>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>Product Hunt</div>
              </div>
            </a>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5 }}>Product</h4>
            {["Features", "Pricing", "Demo", "Integrations"].map(l => (
              <div key={l} style={{ marginBottom: 10 }}>
                <span onClick={() => scrollTo(l.toLowerCase() === "features" ? "how" : l.toLowerCase())} style={{
                  fontSize: 13, cursor: "pointer", transition: "color 0.2s"
                }}
                  onMouseEnter={e => e.target.style.color = "#E8553A"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                >{l}</span>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5 }}>Company</h4>
            {[
              { label: "About Us", action: () => scrollTo("creator") },
              { label: "Contact", action: () => scrollTo("contact") },
              { label: "Careers", action: () => {} },
              { label: "Blog", action: () => {} },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: 10 }}>
                <span onClick={l.action} style={{
                  fontSize: 13, cursor: "pointer", transition: "color 0.2s"
                }}
                  onMouseEnter={e => e.target.style.color = "#E8553A"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                >{l.label}</span>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5 }}>Legal</h4>
            {[
              { label: "Privacy Policy", action: () => { setCurrentPage("privacy"); window.scrollTo(0, 0); } },
              { label: "Terms & Conditions", action: () => { setCurrentPage("terms"); window.scrollTo(0, 0); } },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: 10 }}>
                <span onClick={l.action} style={{
                  fontSize: 13, cursor: "pointer", transition: "color 0.2s"
                }}
                  onMouseEnter={e => e.target.style.color = "#E8553A"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                >{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24,
          maxWidth: 1000, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12
        }}>
          <span style={{ fontSize: 12 }}>© 2026 LinkNest Inc. All rights reserved.</span>
          <span style={{ fontSize: 12 }}>Crafted with care in San Francisco</span>
        </div>
      </footer>
    </div>
  );
}

const globalStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; overflow-x: hidden; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideUpMobile { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

  /* --- TABLET (768px) --- */
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: flex !important; }
    .demo-btn { padding: 8px 16px !important; font-size: 12px !important; }
    .steps-grid { grid-template-columns: 1fr !important; }
    .features-grid { grid-template-columns: 1fr !important; }
    .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px !important; margin: 0 auto !important; }
    .pricing-grid > div { transform: none !important; }
    .creator-card {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      padding: 32px 20px !important;
    }
    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
    .demo-drawer {
      position: relative !important;
      top: auto !important;
      right: auto !important;
      width: 100% !important;
      border-radius: 16px !important;
      margin-top: 16px !important;
      border-left: none !important;
      border-top: 3px solid #E8553A !important;
      animation: slideUpMobile 0.3s ease !important;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08) !important;
    }
    .navbar { padding-left: 16px !important; padding-right: 16px !important; }
  }

  /* --- SMALL MOBILE (480px) --- */
  @media (max-width: 480px) {
    .footer-grid { grid-template-columns: 1fr !important; }
    .demo-btn { padding: 7px 14px !important; font-size: 11.5px !important; border-radius: 8px !important; }
    .navbar { padding-left: 12px !important; padding-right: 12px !important; }
  }

  /* --- VERY SMALL (360px) --- */
  @media (max-width: 360px) {
    .demo-btn { padding: 6px 10px !important; font-size: 11px !important; }
  }
`;
