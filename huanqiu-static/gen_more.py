import re, pathlib
import site_lib as L

def cards(items, cols=3):
    out = f'<div class="grid grid-{cols}">'
    for icon, t, d in items:
        out += f'<div class="card"><div class="icon">{icon}</div><h3>{t}</h3><p>{d}</p></div>'
    return out + '</div>'

# ================= INDUSTRIES =================
body = '''
<section class="page-hero"><h1>Industries We <span class="gold">Serve</span></h1>
<p>Providing high-quality precious metals to diverse industries across East Africa and global markets &mdash; from jewelry manufacturing to electronics, investment, and beyond.</p></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Our Key <span class="gold">Sectors</span></h2><div class="rule"></div></div>
  <div class="grid grid-3">
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="gold1.jpg" style="height:150px" alt="Jewelry"/></div><h3>Jewelry Manufacturing</h3><p>Supplying high-purity gold and precious metals to jewelry manufacturers across East Africa and international markets.</p></div>
    <div class="card"><div class="icon">&#128268;</div><h3>Electronics &amp; Technology</h3><p>Providing precious metals essential for electronic components, circuit boards, and advanced technology manufacturing.</p></div>
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="industry-investment.avif" style="height:150px" alt="Investment"/></div><h3>Investment &amp; Banking</h3><p>Supplying investment-grade gold bars and bullion to financial institutions, investment firms, and private investors.</p></div>
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="industry-mining.jpg" style="height:150px" alt="Mining"/></div><h3>Mining Operations</h3><p>Partnering with artisanal and small-scale mining operations to provide fair market access and trading services.</p></div>
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="industry-research.jpg" style="height:150px" alt="Research"/></div><h3>Research &amp; Education</h3><p>Supplying precious metal samples and materials to universities, research institutions, and laboratories.</p></div>
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="industry-government.jpg" style="height:150px" alt="Government"/></div><h3>Government &amp; Sovereign Entities</h3><p>Partnering with government agencies and sovereign entities for strategic precious metal reserves and trading.</p></div>
    <div class="card"><div class="media-box" style="margin:-26px -26px 16px;border-radius:14px 14px 0 0"><img src="industry-dental.webp" style="height:150px" alt="Dental"/></div><h3>Dental &amp; Medical</h3><p>Providing medical-grade precious metals for dental alloys, medical devices, and healthcare applications.</p></div>
  </div>
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">Success <span class="gold">Stories</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#128142;', 'Supporting Local Jewelers', 'Partnered with 15+ jewelry manufacturers across East Africa to provide consistent, high-purity gold supply.'),
    ('&#128268;', 'Electronics Manufacturing', 'Supplied industrial-grade gold to a major electronics manufacturer for circuit board production.'),
    ('&#128200;', 'Investment Portfolio', 'Helped investment firms build diversified precious metal portfolios with LBMA-standard gold.'),
  ]) + '''
</div></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Meeting Global <span class="gold">Industry Standards</span></h2><div class="rule"></div>
  <p class="section-lead">Our precious metals meet international quality standards required by various industries.</p></div>
  <table class="simple"><tr><th>Standard</th><th>Scope</th></tr>
  <tr><td>LBMA Good Delivery</td><td>Good delivery standards for gold bars</td></tr>
  <tr><td>ISO 9001</td><td>Quality management certification</td></tr>
  <tr><td>OECD Due Diligence</td><td>Conflict-free sourcing compliance</td></tr>
  <tr><td>Fair Trade Principles</td><td>Ethical sourcing guidelines</td></tr></table>
</div></section>

<section class="cta"><h2>Ready to Source Quality Precious Metals?</h2>
<p>Whatever industry you're in, we have the precious metal solutions you need.</p>
<p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Contact Our Team</a></p></section>
'''
L.page('industries.html', 'Industries', body)

# ================= PROCESS =================
steps = [
 ('Sourcing & Identification', 'We identify and connect with artisanal miners across East Africa who have high-quality gold deposits.'),
 ('Verification & Assessment', 'Each batch of gold is carefully verified for authenticity, purity, and quality using professional assessment methods.'),
 ('Fair Valuation & Pricing', 'Transparent, fair market pricing based on current international gold rates and verified purity levels.'),
 ('Weighing & Documentation', 'Precise weighing and comprehensive documentation of all transactions with full transparency.'),
 ('Payment Processing', 'Immediate and secure payment to miners via mobile money, bank transfer, or cash.'),
 ('Export Documentation', 'Preparation of all required export permits, certificates of origin, and customs documentation.'),
 ('Secure Logistics', 'End-to-end secure transportation of gold from source to destination with full chain-of-custody.'),
 ('International Export', 'Shipping gold to international buyers with full compliance and real-time tracking.'),
 ('Final Delivery & Settlement', 'Secure delivery to buyer with final verification and settlement.'),
]
body = '''
<section class="page-hero"><h1>Our <span class="gold">Process</span></h1>
<p>A transparent, ethical, and efficient process that ensures fair value for miners and quality assurance for buyers &mdash; from mine to market.</p></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">From Mine to <span class="gold">Market</span></h2><div class="rule"></div>
  <p class="section-lead">Our comprehensive 9-step process ensures transparency, fairness, and quality at every stage.</p></div>
  <div class="grid grid-3">''' + ''.join(
    f'<div class="card"><div class="n" style="width:46px;height:46px;border-radius:50%;background:#f8b400;font-weight:800;display:flex;align-items:center;justify-content:center">{i+1}</div><h3 style="margin-top:12px">{t}</h3><p>{d}</p></div>'
    for i, (t, d) in enumerate(steps)) + '''</div>
</div></section>

<section class="section section-dark"><div class="container">
  <div class="center"><h2 class="section-title">Quality <span class="gold">Assurance</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#129514;', 'Purity Verification', 'Multi-point verification of gold purity using professional methods.'),
    ('&#128203;', 'Origin Documentation', 'Complete chain-of-custody and origin certification.'),
    ('&#128737;', 'Security Protocols', 'End-to-end security with GPS tracking and armored transport.'),
    ('&#128101;', 'Third-Party Oversight', 'Independent verification at key transaction points.'),
  ]) + '''
  <div class="center" style="margin-top:34px">
    <span class="badge">Licensed Gold Trader</span> <span class="badge">Export Certified</span>
    <span class="badge">OECD Compliant</span> <span class="badge">Fair Trade Partner</span>
  </div>
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">End-to-End <span class="gold">Timeline</span></h2><div class="rule"></div></div>
  <table class="simple"><tr><th>Days</th><th>Stage</th></tr>
  <tr><td>Day 1-3</td><td>Sourcing &amp; Verification</td></tr>
  <tr><td>Day 1</td><td>Valuation &amp; Payment</td></tr>
  <tr><td>Day 2-4</td><td>Documentation &amp; Export Prep</td></tr>
  <tr><td>Day 5-15</td><td>Logistics &amp; Delivery</td></tr></table>
</div></section>

<section class="cta"><h2>Ready to Start Trading?</h2>
<p>Whether you're a miner looking for fair prices or a buyer seeking quality East African gold, our transparent process ensures a smooth experience for everyone.</p>
<p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Start the Process</a></p></section>
'''
L.page('process.html', 'Process', body)

# ================= SUSTAINABILITY =================
body = '''
<section class="page-hero"><h1>Sustainability &amp; <span class="gold">Impact</span></h1>
<p>Building a better future for mining communities across East Africa through ethical practices, environmental stewardship, and lasting economic empowerment.</p></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Three Core <span class="gold">Pillars</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#128149;', 'Social Responsibility', 'Empowering mining communities through fair wages, education, and healthcare support. 500+ families supported, 15+ communities reached, 30-40% higher income for miners.'),
    ('&#127793;', 'Environmental Stewardship', 'Promoting sustainable mining practices and minimizing environmental impact. 100% mercury-free methods, 50+ trees planted, 5+ rehabilitated sites.'),
    ('&#128176;', 'Economic Empowerment', 'Creating sustainable economic opportunities that break the cycle of poverty. 27+ active partners, 3+ years of impact.'),
  ]) + '''
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">Community <span class="gold">Initiatives</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#127979;', 'Education Support', 'Providing school supplies, scholarships, and educational infrastructure to mining communities.'),
    ('&#127973;', 'Healthcare Access', 'Mobile health clinics and medical supplies for remote mining communities.'),
    ('&#128167;', 'Clean Water Projects', 'Installing water wells and filtration systems in mining villages.'),
    ('&#127795;', 'Reforestation', 'Restoring land impacted by mining with native tree planting programmes.'),
  ], 4) + '''
</div></section>

<section class="section section-dark"><div class="container">
  <div class="center"><h2 class="section-title">Voices from the <span class="gold">Community</span></h2><div class="rule"></div></div>
  <div class="grid grid-2">
    <div class="card"><p>"Before Huanqiu, I struggled to feed my children. Now I earn a fair wage and can send them to school. This partnership changed our lives."</p><p class="gold"><strong>Sarah Namukasa</strong> &mdash; Artisanal Miner, Uganda</p></div>
    <div class="card"><p>"We used to sell to middlemen who cheated us. Now we have dignity, fair prices, and our whole community is thriving."</p><p class="gold"><strong>James Okello</strong> &mdash; Community Mining Leader, Uganda</p></div>
    <div class="card"><p>"The clean water well they installed has transformed our village. Our children no longer get sick from contaminated water."</p><p class="gold"><strong>Grace Achieng</strong> &mdash; Community Member, DRC</p></div>
    <div class="card"><p>"Through their education program, my daughter is now the first in our family to attend secondary school."</p><p class="gold"><strong>John Mwangi</strong> &mdash; Miner, Tanzania</p></div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="center"><h2 class="section-title">Aligned with <span class="gold">UN SDGs</span></h2><div class="rule"></div></div>
  ''' + cards([
    ('&#127979;', 'Quality Education', 'Building schools and sponsoring children.'),
    ('&#9878;&#65039;', 'Gender Equality', 'Empowering women miners.'),
    ('&#128188;', 'Decent Work', 'Fair wages and safe conditions.'),
    ('&#9851;&#65039;', 'Responsible Consumption', 'Ethical sourcing practices.'),
    ('&#127758;', 'Climate Action', 'Environmental protection.'),
    ('&#128167;', 'Clean Water', 'Safe water for mining villages.'),
  ]) + '''
</div></section>

<section class="cta"><h2>Join Us in Creating Sustainable Change</h2>
<p>Whether you are a partner, buyer, or supporter &mdash; together we can build a more sustainable and equitable precious metals industry.</p>
<p><a class="btn" style="background:#111;color:#f8b400" href="contact.html">Partner With Us</a></p></section>
'''
L.page('sustainability.html', 'Sustainability', body)

# ================= GALLERY =================
items = [
 ('images/1.jpeg', 'mining', 'Artisanal Gold Mining in Uganda', 'Karamoja, Uganda'),
 ('images/2.jpeg', 'mining', 'Gold Ore Extraction', 'Busia, Uganda'),
 ('images/3.jpeg', 'mining', 'Panning for Gold', 'Mubende, Uganda'),
 ('images/4.jpeg', 'mining', 'Deep Pit Mining', 'Ituri, DRC'),
 ('images/5.jpeg', 'mining', 'Traditional Mining Methods', 'East Africa'),
 ('images/6.mp4', 'mining', 'Mining Pit Operations', 'video'),
 ('images/9.mp4', 'mining', 'Artisanal Gold Mining in Rural Areas', 'video'),
 ('images/10.mp4', 'laboratory', 'Gold Purity Testing', 'video'),
 ('images/7.mp4', 'trading', 'Gold Bar Preparation', 'video'),
 ('images/8.mp4', 'trading', 'International Shipment', 'video'),
]
figs = ''
for src, cat, title, loc in items:
    if src.endswith('.mp4'):
        media = f'<video muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"><source src="{src}" type="video/mp4"/></video>'
    else:
        media = f'<img src="{src}" alt="{title}" loading="lazy"/>'
    figs += f'<figure data-cat="{cat}">{media}<figcaption><strong>{title}</strong></figcaption></figure>'
body = f'''
<section class="page-hero"><h1>Our <span class="gold">Gallery</span></h1>
<p>Moments from the mines, the laboratory, and the communities we work with across East Africa.</p></section>
<section class="section"><div class="container">
  <div class="filters">
    <button class="filter-btn active" data-filter="all">&#128247; All Photos</button>
    <button class="filter-btn" data-filter="mining">&#9935; Mining Operations</button>
    <button class="filter-btn" data-filter="laboratory">&#128300; Laboratory &amp; Testing</button>
    <button class="filter-btn" data-filter="trading">&#128230; Trading &amp; Export</button>
  </div>
  <div class="gallery">{figs}</div>
</div></section>
'''
L.page('gallery.html', 'Gallery', body)

# ================= CONTACT =================
body = '''
<section class="page-hero"><h1>Contact <span class="gold">Us</span></h1>
<p>Visit our office in Kololo, Kampala &mdash; or reach us by phone, WhatsApp, or email.</p></section>

<section class="section"><div class="container">
  <div class="grid grid-4">
    <div class="card"><div class="icon">&#128205;</div><h3>Office Location</h3><p>Luthuli Avenue, Kololo<br/>Kampala, Uganda<br/>P.O Box 7361</p></div>
    <div class="card"><div class="icon">&#128222;</div><h3>Phone &amp; WhatsApp</h3><p>+243 966 344357</p></div>
    <div class="card"><div class="icon">&#9993;&#65039;</div><h3>Email Addresses</h3><p>info@huanqiupreciousmetal.com</p></div>
    <div class="card"><div class="icon">&#128336;</div><h3>Business Hours</h3><p>Monday &ndash; Friday: 8:00am &ndash; 6:00pm<br/>Saturday: 9:00am &ndash; 2:00pm<br/>Sunday: Closed</p></div>
  </div>
</div></section>

<section class="section section-gray"><div class="container">
  <div class="center"><h2 class="section-title">Send Us a <span class="gold">Message</span></h2><div class="rule"></div></div>
  <div id="form-banner" class="form-banner" style="display:none;max-width:640px;margin:0 auto 14px"></div>
  <form id="contact-form" class="form-grid">
    <div><label>Your Name *</label><input name="user_name" required placeholder="John Doe"/></div>
    <div><label>Email *</label><input name="user_email" type="email" required placeholder="john@example.com"/></div>
    <div><label>Phone</label><input name="user_phone" type="tel" placeholder="+256 XXX XXX XXX"/></div>
    <div><label>Subject</label>
      <select name="subject"><option>Gold Trading &amp; Sales</option><option>Miners &amp; Sourcing</option><option>Customer Support</option><option>Media &amp; Partnerships</option></select></div>
    <div><label>Message *</label><textarea name="message" rows="5" required></textarea></div>
    <button class="btn btn-gold" type="submit">Send Message</button>
  </form>
</div></section>

<section class="section"><div class="container" style="max-width:820px">
  <div class="center"><h2 class="section-title">Common <span class="gold">Questions</span></h2><div class="rule"></div></div>
  <details class="faq"><summary>How do I sell my gold to Huanqiu?</summary><p>Simply contact us via phone, WhatsApp, or email to schedule an appointment. Bring your gold to our office in Kololo, Kampala for testing and valuation. We provide immediate payment upon confirmation.</p></details>
  <details class="faq"><summary>What documentation do I need to sell gold?</summary><p>You need a valid ID (passport or national ID), proof of address, and any documentation proving the source of the gold. We can guide you through the process.</p></details>
  <details class="faq"><summary>Do you buy gold from individual miners?</summary><p>Yes! We work directly with individual artisanal miners, small-scale operations, and mining cooperatives across Uganda, DRC, Tanzania, and other East African countries.</p></details>
  <details class="faq"><summary>How do you determine the price of gold?</summary><p>We use real-time international gold market rates, verified through professional testing of your gold's purity. Our pricing is transparent and fair.</p></details>
  <details class="faq"><summary>Do you offer refining services?</summary><p>Yes, we provide professional gold refining services to achieve 99.99% purity, making your gold ready for international markets and investment.</p></details>
  <details class="faq"><summary>How long does payment take?</summary><p>Payment is processed immediately after testing and valuation. You can receive payment via mobile money, bank transfer, or cash on the same day.</p></details>
</div></section>
'''
L.page('contact.html', 'Contact', body)

# ================= BLOG & BLOG POST =================
body = '''
<section class="page-hero"><h1>Our <span class="gold">Blog</span></h1>
<p>Insights, updates, and expert knowledge from the world of precious metals trading and refining.</p></section>
<section class="section"><div class="container"><div class="grid grid-3" id="post-list"><p class="muted">Loading articles&hellip;</p></div></div></section>
<script src="js/blog.js" defer></script>
'''
L.page('blog.html', 'Blog', body)

body = '''
<section class="page-hero"><h1 id="post-title">Loading article&hellip;</h1><p id="post-meta"></p>
<p><a class="gold" href="blog.html">&larr; Back to News</a></p></section>
<section class="section"><div class="container"><div class="prose" id="post-content"><p>Loading&hellip;</p></div>
<p style="margin-top:30px"><button class="btn btn-outline" id="share-btn">&#128279; Share</button>
<button class="btn btn-outline" id="print-btn">&#128424; Print</button>
<a class="btn btn-gold" href="contact.html">Contact Our Team</a></p></div></section>
<script src="js/blog.js" defer></script>
'''
L.page('blog-post.html', 'Blog Post', body)

# ================= LEGAL PAGES (text extracted from the original pages) =================
def legal(fn, src, title):
    s = pathlib.Path(src).read_text()
    s = re.sub(r'\{/\*.*?\*/\}', '', s, flags=re.S)
    texts = re.findall(r'>([^<>{}\n][^<>{}]{15,})<', s)
    paras, h2s = [], []
    for t in texts:
        t = t.strip()
        if not t or t.startswith(('className', 'export', 'import')): continue
        paras.append(t)
    inner = ''
    for t in paras:
        if len(t) < 60 and (t.isupper() or t.endswith(':') or t[:1].isupper() and ',' not in t and '.' not in t):
            inner += f'<h2>{t}</h2>'
        else:
            inner += f'<p>{t}</p>'
    body = f'<section class="page-hero"><h1>{title}</h1></section><section class="section"><div class="container prose">{inner}</div></section>'
    L.page(fn, title, body)

legal('privacy-policy.html', '../src/app/privacy-policy/page.tsx', 'Privacy Policy')
legal('cookie-policy.html', '../src/app/cookie-policy/page.tsx', 'Cookie Policy')
legal('terms-and-conditions.html', '../src/app/terms-and-conditions/page.tsx', 'Terms &amp; Conditions')

# ================= SITEMAP & 404 =================
body = '''
<section class="page-hero"><h1>Site<span class="gold">map</span></h1></section>
<section class="section"><div class="container grid grid-3">
  <div><h3 class="gold">Company</h3><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="sustainability.html">Sustainability</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="blog.html">News &amp; Insights</a></li><li><a href="contact.html">Contact</a></li></ul></div>
  <div><h3 class="gold">Services</h3><ul><li><a href="services.html">All Services</a></li><li><a href="services-ethical-gold-sourcing.html">Ethical Gold Sourcing</a></li><li><a href="services-cross-border-trading.html">Cross-Border Trading</a></li><li><a href="services-international-export.html">International Export</a></li><li><a href="services-fair-trade-assurance.html">Fair Trade Assurance</a></li><li><a href="services-documentation-compliance.html">Documentation &amp; Compliance</a></li><li><a href="services-secure-logistics.html">Secure Logistics</a></li><li><a href="services-fire-assay.html">Fire Assay</a></li></ul></div>
  <div><h3 class="gold">More</h3><ul><li><a href="industries.html">Industries We Serve</a></li><li><a href="process.html">How It Works</a></li><li><a href="privacy-policy.html">Privacy Policy</a></li><li><a href="cookie-policy.html">Cookie Policy</a></li><li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li></ul></div>
</div></section>
'''
L.page('sitemap.html', 'Sitemap', body)

body = '''
<section class="page-hero"><h1>404 &mdash; Page Not Found</h1>
<p>The page you are looking for doesn't exist or has moved.</p>
<p><a class="btn btn-gold" href="index.html">Back to Home</a></p></section>
'''
L.page('404.html', '404', body)
print('remaining pages done')
