import site_lib as L

def cards(items, dark=False):
    out = '<div class="grid grid-3">'
    for icon, t, d in items:
        out += f'<div class="card"><div class="icon">{icon}</div><h3>{t}</h3><p>{d}</p></div>'
    return out + '</div>'

# ================= HOME =================
body = '''
<section class="hero">
  <div class="hero-slide"><img src="gold1.jpg" alt="Gold bars"/></div>
  <div class="hero-slide"><img src="images/3.jpeg" alt="Gold mining"/></div>
  <div class="hero-slide"><img src="gold2.jpg" alt="Gold nuggets"/></div>
  <div class="hero-slide"><img src="gold3.jpg" alt="Gold refining"/></div>
  <div class="hero-slide"><img src="gemstones1.webp" alt="Gemstones"/></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1><span class="gold">Uganda's Most Trusted</span><br/>Precious Metal Trading Company</h1>
    <p>Huanqiu Precious Metal delivers certified, precise gold testing and precious metals analysis trusted by miners, traders, and exporters across East Africa.</p>
    <div class="hero-actions">
      <button class="btn btn-gold" data-open-assay>REQUEST AN ASSAY</button>
      <a class="btn btn-outline" href="services.html">EXPLORE SERVICES</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container stats">
    <div class="stat"><div class="icon">&#9881;&#65039;</div><div class="num"><span data-count="250">0</span>kg</div><div class="lbl">Daily Refining Capacity</div></div>
    <div class="stat"><div class="icon">&#127757;</div><div class="num"><span data-count="7">0</span>+</div><div class="lbl">Countries Served</div></div>
    <div class="stat"><div class="icon">&#128197;</div><div class="num"><span data-count="3">0</span>+</div><div class="lbl">Years Experience</div></div>
    <div class="stat"><div class="icon">&#128101;</div><div class="num"><span data-count="27">0</span>+</div><div class="lbl">Clients Served</div></div>
  </div>
</section>

<section class="section section-gray">
  <div class="container split">
    <div>
      <span class="badge">ABOUT HUANQIU PRECIOUS METAL</span>
      <h2 class="section-title">Precious Metal Trading <span class="gold">You Can Trust</span></h2>
      <p>HUANQIU PRECIOUS METAL is East Africa's leading gold precious metal trading company, providing certified precious metals testing to miners, exporters, jewellers, and investors across the region.</p>
      <p>Our facility uses internationally recognised methodologies &mdash; <strong>Fire Assay, XRF, and ICP spectrometry</strong> &mdash; delivering results that meet global standards for gold trade and export documentation.</p>
      <p><a class="btn btn-gold" href="about.html">OUR COMPANY</a></p>
    </div>
    <div class="media-box"><img src="gold2.jpg" alt="Gold in hand"/></div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="center">
      <h2 class="section-title">From the Earth, <span class="gold">With Their Hands</span></h2>
      <div class="rule"></div>
      <p class="section-lead">Every ounce of gold begins its journey in the hands of hardworking local miners, using traditional methods passed down through generations. This is their story.</p>
    </div>
    <div class="media-box">
      <video autoplay muted loop playsinline><source src="images/9.mp4" type="video/mp4"/></video>
      <div class="media-caption"><strong>Artisanal Gold Mining in Rural Areas</strong><span>Watch as local miners work from dawn to dusk, using traditional methods that have been practiced for generations.</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="center">
      <h2 class="section-title">From Mine to <span class="gold">Laboratory</span></h2>
      <div class="rule"></div>
      <p class="section-lead">Every batch is tested with professional equipment so purity is proven, not promised.</p>
    </div>
    <div class="media-box">
      <video autoplay muted loop playsinline><source src="images/10.mp4" type="video/mp4"/></video>
      <div class="media-caption"><strong>Modern Laboratory Analysis</strong><span>Fire assay, XRF and precise weighing behind every certificate.</span></div>
    </div>
  </div>
</section>

<section class="cta">
  <h2>Ready to Partner With a Trusted Precious Metal Trading Company?</h2>
  <p>Whether you are a miner looking for fair prices or a buyer seeking quality East African gold, we are here to help.</p>
  <p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Contact Our Team</a>
     <button class="btn btn-white" data-open-assay>Request an Assay</button></p>
</section>
'''
L.page('index.html', 'Home', body)

# ================= ABOUT =================
body = '''
<section class="page-hero"><h1>About <span class="gold">Huanqiu Precious Metal</span></h1>
<p>A leading precious metal trading company based in Kampala, Uganda &mdash; connecting miners across East Africa to global markets through ethical sourcing, fair trade, and transparent practices.</p></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Connecting East Africa's Gold <span class="gold">to the World</span></h2><div class="rule"></div></div>
  <div class="prose">
    <p>Huanqiu Precious Metal is a premier precious metal trading company based in Kampala, Uganda. We specialize in the ethical sourcing, trading, and export of high-quality gold and precious metals from across East Africa &mdash; including the Democratic Republic of Congo, Uganda, Tanzania, Rwanda, Burundi, and Kenya &mdash; to global markets.</p>
    <p>Unlike traditional trading companies, we work directly with artisanal miners and local communities across multiple countries &mdash; eliminating exploitative middlemen and ensuring fair compensation for every gram of gold we trade, regardless of its origin.</p>
  </div>
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">Where We <span class="gold">Source Our Gold</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#127482;&#127480;', 'Uganda', 'Gold-rich regions in Karamoja, Busia, and Mubende'),
    ('&#127464;&#127469;', 'DR Congo', 'Ituri, North Kivu, and South Kivu regions'),
    ('&#127481;&#127487;', 'Tanzania', 'Lake Victoria gold belt and Geita region'),
    ('&#127479;&#127484;', 'Rwanda', 'Emerging gold mining districts'),
    ('&#127463;&#127470;', 'Burundi', 'Artisanal mining communities'),
    ('&#127472;&#127466;', 'Kenya', 'Western Kenya gold belt'),
  ]) + '''
</div></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">What We Do</h2><div class="rule"></div></div>
  ''' + cards([
    ('&#129309;', 'Multi-Country Sourcing', 'We source gold directly from artisanal miners across Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya.'),
    ('&#128666;', 'Cross-Border Trading', 'We facilitate legal cross-border gold trading, handling logistics, documentation, and international export.'),
    ('&#127758;', 'Market Access', 'We provide miners across East Africa with access to fair international markets, maximizing returns.'),
    ('&#9878;&#65039;', 'Direct Trade Model', 'Connecting raw materials from miners directly to final consumers, eliminating exploitative middlemen.'),
  ]) + '''
</div></section>

<section class="section section-dark"><div class="container">
  <div class="center"><h2 class="section-title">Our Impact in Numbers</h2><div class="rule"></div>
  <p class="section-lead">Behind every statistic is a story of transformation, growth, and community empowerment across East Africa.</p></div>
  <div class="stats">
    <div class="stat"><div class="num"><span data-count="500">0</span>+</div><div class="lbl">Families Supported</div></div>
    <div class="stat"><div class="num"><span data-count="15">0</span>+</div><div class="lbl">Communities Reached</div></div>
    <div class="stat"><div class="num"><span data-count="10">0</span>+</div><div class="lbl">Countries Served</div></div>
    <div class="stat"><div class="num"><span data-count="27">0</span>+</div><div class="lbl">Active Partners</div></div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Empowering <span class="gold">Mining Communities Across East Africa</span></h2><div class="rule"></div></div>
  <div class="prose">
    <p>The gold we trade comes from the hands of hardworking men and women in poverty-stricken communities across Uganda, the Democratic Republic of Congo, Tanzania, and beyond. These are not just miners &mdash; they are mothers, fathers, and dreamers working to build better lives for their families.</p>
    <p>Through our ethical trading model, we work directly with local miners across borders, providing them with fair compensation, education, and sustainable opportunities. We don't just buy gold; we build relationships that last generations.</p>
    <p class="quote">"Every miner we work with, whether in Uganda, DRC, or Tanzania, becomes part of our trading family. Their success is our success, and their dreams are our mission." &mdash; Management, Huanqiu Precious Metal</p>
  </div>
</div></section>

<section class="cta"><h2>Ready to Partner With a Trusted Precious Metal Trading Company?</h2>
<p>Ethical sourcing, fair trade and transparent practices across East Africa.</p>
<p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Contact Our Team</a></p></section>
'''
L.page('about.html', 'About Us', body)

# ================= SERVICES HUB =================
body = '''
<section class="page-hero"><h1>Our <span class="gold">Services</span></h1>
<p>Comprehensive precious metal trading services connecting East African miners to global markets through ethical sourcing, fair trade, and transparent practices.</p></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">What <span class="gold">We Offer</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#129309;', 'Ethical Gold Sourcing', 'We source high-quality gold directly from artisanal miners across Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya, ensuring fair prices and ethical practices. <a href="services-ethical-gold-sourcing.html">Learn more &rarr;</a>'),
    ('&#128666;', 'Cross-Border Trading', 'Facilitating legal cross-border gold trading across East Africa with full documentation and compliance with regional regulations. <a href="services-cross-border-trading.html">Learn more &rarr;</a>'),
    ('&#9992;&#65039;', 'International Export', 'Connecting East African gold to global markets with professional export services, documentation, and international trade compliance. <a href="services-international-export.html">Learn more &rarr;</a>'),
    ('&#9878;&#65039;', 'Fair Trade Assurance', 'Ensuring transparent and fair pricing for miners while maintaining competitive rates for international buyers. <a href="services-fair-trade-assurance.html">Learn more &rarr;</a>'),
    ('&#128203;', 'Documentation &amp; Compliance', 'Complete handling of all required documentation for legal gold trading, including export permits and certificates of origin. <a href="services-documentation-compliance.html">Learn more &rarr;</a>'),
    ('&#128274;', 'Secure Logistics', 'End-to-end secure logistics solutions for precious metal transportation across borders with full chain-of-custody. <a href="services-secure-logistics.html">Learn more &rarr;</a>'),
  ]) + '''
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">Our Trading <span class="gold">Process</span></h2><div class="rule"></div>
  <p class="section-lead">A transparent, step-by-step process designed to benefit everyone in the supply chain.</p></div>
  <div class="grid grid-3">
    <div class="card"><div class="icon">1&#65039;&#8413;</div><h3>Sourcing</h3><p>We source gold directly from artisanal miners across East Africa through our established network.</p></div>
    <div class="card"><div class="icon">2&#65039;&#8413;</div><h3>Verification</h3><p>All gold is verified for quality, origin, and compliance with international standards.</p></div>
    <div class="card"><div class="icon">3&#65039;&#8413;</div><h3>Documentation</h3><p>Complete export documentation and compliance paperwork is prepared.</p></div>
    <div class="card"><div class="icon">4&#65039;&#8413;</div><h3>Logistics</h3><p>Secure transportation arranged with full chain-of-custody.</p></div>
    <div class="card"><div class="icon">5&#65039;&#8413;</div><h3>Export</h3><p>Gold is exported to international buyers with full transparency.</p></div>
    <div class="card"><div class="icon">6&#65039;&#8413;</div><h3>Delivery</h3><p>Final delivery to buyers with complete documentation and support.</p></div>
  </div>
</div></section>

<section class="section section-dark"><div class="container">
  <div class="center"><h2 class="section-title">Our Quality Commitment</h2><div class="rule"></div>
  <p class="section-lead">Every transaction we handle is backed by our commitment to quality, transparency, and ethical practices. All gold we trade is properly documented, conflict-free, and sourced from legitimate artisanal mining operations across East Africa.</p></div>
  <div class="stats">
    <div class="stat"><div class="num">100%</div><div class="lbl">Ethically Sourced</div></div>
    <div class="stat"><div class="num">24/48h</div><div class="lbl">Processing Time</div></div>
    <div class="stat"><div class="num">10+</div><div class="lbl">Countries Served</div></div>
  </div>
</div></section>

<section class="cta"><h2>Ready to Start Trading?</h2>
<p>Whether you're a miner looking for fair prices or a buyer seeking quality East African gold, we're here to help.</p>
<p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Contact Our Trading Team</a>
   <button class="btn btn-white" data-open-assay>Request Trading Information</button></p></section>
'''
L.page('services.html', 'Services', body)

# ================= SERVICE SUB-PAGES =================
def service_page(fn, title, lead, intro, items, stats=None):
    b = f'<section class="page-hero"><h1>{title}</h1><p>{lead}</p></section>'
    b += f'<section class="section"><div class="container"><div class="prose"><p>{intro}</p></div></div></section>'
    b += '<section class="section section-gray"><div class="container">' + cards(items) + '</div></section>'
    if stats:
        b += '<section class="section section-dark"><div class="container"><div class="stats">'
        for v, l in stats:
            b += f'<div class="stat"><div class="num">{v}</div><div class="lbl">{l}</div></div>'
        b += '</div></div></section>'
    b += f'<section class="cta"><h2>Ready to Start Trading?</h2><p>Talk to our team about {title.lower()} today.</p><p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Contact Our Team</a> <button class="btn btn-white" data-open-assay>Request Information</button></p></section>'
    L.page(fn, title, b)

service_page('services-ethical-gold-sourcing.html', 'Ethical Gold Sourcing',
  'Sourcing high-quality gold directly from artisanal miners across East Africa with fair prices and ethical practices.',
  'We work directly with artisanal miners and mining cooperatives across Uganda, DRC, Tanzania, Rwanda, Burundi and Kenya, ensuring every gram of gold is conflict-free and every miner is paid fairly.',
  [('&#128176;', 'Fair Compensation', 'Miners receive 30-40% more than traditional market rates, ensuring they can support their families and invest in their communities.'),
   ('&#128330;', 'Conflict-Free Sourcing', 'We strictly adhere to OECD Due Diligence guidelines, ensuring all gold is sourced from conflict-free zones.'),
   ('&#129309;', 'Community Empowerment', 'Direct partnerships with mining communities create sustainable livelihoods and economic opportunities.'),
   ('&#127793;', 'Environmental Responsibility', 'Promoting mercury-free processing and sustainable mining practices to protect the environment.')],
  [('500+', 'Families Supported'), ('30-40%', 'Higher Income'), ('15+', 'Communities Reached'), ('100%', 'Conflict-Free')])

service_page('services-cross-border-trading.html', 'Cross-Border Trading',
  'Facilitating legal cross-border gold trading across East Africa with full documentation and compliance.',
  'Our cross-border trading desk handles the legal, logistical and compliance side of moving gold between East African countries and onward to international markets.',
  [('&#9878;&#65039;', 'Full Compliance', 'All cross-border trades comply with regional and international regulations.'),
   ('&#9889;', 'Fast Processing', 'Efficient documentation and customs clearance for quick turnaround.'),
   ('&#128666;', 'Secure Logistics', 'End-to-end secure transportation across borders.'),
   ('&#128203;', 'Complete Documentation', 'All necessary permits, certificates, and customs paperwork handled.')])

service_page('services-international-export.html', 'International Export',
  'Connecting East African gold to global markets with professional export services and full trade compliance.',
  'From export permits to final delivery, we manage the complete export journey so miners and buyers can trade with confidence.',
  [('&#128203;', 'Export Permits', 'All licences and permits arranged with the relevant authorities.'),
   ('&#127758;', 'Global Markets', 'Access to verified international buyers and refineries.'),
   ('&#128230;', 'Professional Handling', 'Sealed, insured and tracked shipments from Kampala to destination.'),
   ('&#129309;', 'Buyer Support', 'Final verification and settlement support on delivery.')])

service_page('services-fair-trade-assurance.html', 'Fair Trade Assurance',
  'Transparent and fair pricing for miners while maintaining competitive rates for international buyers.',
  'Our fair trade model removes exploitative middlemen and pays miners what their gold is truly worth.',
  [('&#128200;', 'Transparent Pricing', 'Real-time international market rates with no hidden fees or deductions.'),
   ('&#129309;', 'Dignity &amp; Respect', 'Every miner is treated as a valued partner, not just a supplier.'),
   ('&#128176;', 'Premium Payments', 'Miners receive 30-40% more than traditional market rates.'),
   ('&#129309;', 'Direct Relationships', 'No middlemen &mdash; we work directly with mining communities.')])

service_page('services-documentation-compliance.html', 'Documentation &amp; Compliance',
  'Complete handling of all required documentation for legal gold trading, export permits and certificates of origin.',
  'Every shipment travels with a complete, verifiable paper trail that satisfies Ugandan law and international standards.',
  [('&#128203;', 'Export Permit', 'Official authorization for gold export from Uganda.'),
   ('&#127757;', 'Certificate of Origin', 'Verifies the source country of the gold.'),
   ('&#129514;', 'Assay Certificate', 'Official document confirming gold purity.'),
   ('&#128737;', 'Customs &amp; Insurance', 'Customs declaration, packing list, bill of lading and insurance certificate handled.'),
   ('&#9878;&#65039;', 'OECD Due Diligence', 'Conflict-free sourcing compliance.'),
   ('&#127942;', 'LBMA Standards', 'Good delivery standards for gold bars.')])

service_page('services-secure-logistics.html', 'Secure Logistics',
  'End-to-end secure logistics for precious metal transportation across borders with full chain-of-custody.',
  'From collection at the mine to final delivery, every movement is secured, tracked and insured.',
  [('&#128663;', 'Armored Transport', 'Secure, armored vehicles for local transportation of precious metals.'),
   ('&#128225;', 'GPS Tracking', 'Real-time tracking of all shipments with location monitoring.'),
   ('&#128065;', '24/7 Monitoring', 'Continuous surveillance throughout the logistics chain.'),
   ('&#128737;', 'Insurance Coverage', 'Comprehensive insurance for all shipments against loss or damage.')])

# ================= FIRE ASSAY =================
body = '''
<section class="page-hero"><h1>Fire Assay <span class="gold">Services</span></h1>
<p>The most accurate and globally recognized method for determining gold and silver content.</p></section>
<section class="section"><div class="container split">
  <div class="prose">
    <p>Fire assay is the most accurate and globally recognized method for determining gold and silver content in ores, concentrates, and bullion.</p>
    <h2>Our Process</h2>
    <ul>
      <li>Sample preparation and weighing</li>
      <li>Flux mixing and fusion</li>
      <li>Cupellation and parting</li>
      <li>Gravimetric analysis</li>
      <li>Certified results reporting</li>
    </ul>
    <p><strong>Turnaround Time:</strong> 24-48 hours<br/><strong>Accreditation:</strong> ISO 17025 Certified</p>
    <p><button class="btn btn-gold" data-open-assay>Request an Assay</button></p>
  </div>
  <div class="media-box"><img src="gold3.jpg" alt="Gold assay"/></div>
</div></section>
'''
L.page('services-fire-assay.html', 'Fire Assay', body)
print('core pages done')
