/**
 * AL MAMOURA FIBERGLASS - REINFORCING THE CONCEPTS
 * Core Web Application Engine & Interactive Components (Refined Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMegaMenuInteraction();
  initMobileNav();
  initStatsCounter();
  initTankComparisonTabs();
  initCutawayHotspots();
  initProductsCatalogue();
  initProjectsPortfolio();
  initRfqCalculator();
  initContactForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   01. STICKY HEADER & SCROLL SPY
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNavLink();
  }, { passive: true });

  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 100;
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   02. DESKTOP & TOUCH INTERACTIVE MEGA MENU
   -------------------------------------------------------------------------- */
function initMegaMenuInteraction() {
  const megaItem = document.getElementById('navItemMega');
  const toggleBtn = document.getElementById('megaMenuToggleBtn');
  const dropdown = document.getElementById('megaMenuDropdown');

  if (!megaItem || !toggleBtn || !dropdown) return;

  // Toggle on click/tap for hybrid touch devices
  toggleBtn.addEventListener('click', (e) => {
    // If on screen width where mega menu is enabled
    if (window.innerWidth > 992) {
      e.preventDefault();
      megaItem.classList.toggle('open');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!megaItem.contains(e.target)) {
      megaItem.classList.remove('open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      megaItem.classList.remove('open');
    }
  });

  // Close mega menu when any link inside is clicked
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      megaItem.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   03. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    drawer.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      drawer.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

/* --------------------------------------------------------------------------
   04. TRUST & COMPANY STATISTICS COUNT-UP COUNTER
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  let activated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !activated) {
        activated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          let count = 0;
          const speed = target > 50 ? 15 : 50;
          const timer = setInterval(() => {
            count++;
            counter.innerText = count;
            if (count >= target) {
              counter.innerText = target;
              clearInterval(timer);
            }
          }, speed);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsCounterSection');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   05. GRP PANEL TANKS COMPARISON TABS
   -------------------------------------------------------------------------- */
function initTankComparisonTabs() {
  const tabButtons = document.querySelectorAll('.tab-trigger-btn');
  const tabPanels = document.querySelectorAll('.tab-panel-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`tab-${targetTab}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   06. INTERACTIVE 3D CUTAWAY TANK ENGINEERING VIEW (19 HOTSPOTS)
   -------------------------------------------------------------------------- */
const tankComponentsData = [
  { id: 1, title: 'Top Panel', category: 'Main Components', x: 42, y: 14, material: 'Hot Pressed GRP SMC', spec: 'Convex design with water runoff slope & UV gelcoat', function: 'Watertight roof containment' },
  { id: 2, title: 'Side Panel', category: 'Main Components', x: 26, y: 44, material: 'Sheet Moulding Compound (SMC)', spec: 'Flanged modular 1m x 1m & 1m x 0.5m panels', function: 'Hydraulic pressure resistance' },
  { id: 3, title: 'Bottom Panel', category: 'Main Components', x: 86, y: 64, material: 'Heavy Duty Structural GRP', spec: 'Reinforced 1000x1000mm base with concave drain', function: 'Full dead-load water distribution' },
  { id: 4, title: 'Drain / Pit Panel', category: 'Main Components', x: 62, y: 88, material: 'Moulded GRP Sump Unit', spec: 'Deep concave sump with DN50-DN150 outlet fitting', function: 'Complete sedimentation evacuation' },
  { id: 5, title: 'Body Angle', category: 'External Support', x: 38, y: 28, material: 'Hot Dipped Galvanized Steel', spec: '50x50x5mm structural angle bolted exterior', function: 'Perimeter seam rigidity' },
  { id: 6, title: 'Corner Angle', category: 'External Support', x: 92, y: 16, material: 'HDG / SS316 Heavy Angle', spec: 'Vertical 90° structural corner reinforcement', function: 'Corner shear distribution' },
  { id: 7, title: 'Side Panel Support', category: 'External Support', x: 34, y: 38, material: 'Structural Steel HDG', spec: 'Exterior joint stiffeners & gusset plates', function: 'Panel deflection suppression' },
  { id: 8, title: 'Flat Bar', category: 'External Support', x: 50, y: 78, material: 'Cold Formed Galvanized Bar', spec: 'Perimeter bottom tie strap', function: 'Base perimeter lock' },
  { id: 9, title: 'Stay Plate', category: 'External Support', x: 44, y: 60, material: 'Moulded GRP + Steel Washer Plate', spec: 'Internal/External load spreader plates', function: 'Tie rod stress distribution' },
  { id: 10, title: 'Pole (Internal Support)', category: 'Internal Support', x: 80, y: 74, material: 'SS304 / SS316 Stainless Steel', spec: 'Heavy wall vertical compression column', function: 'Vertical roof load transfer' },
  { id: 11, title: 'Pole Support Base', category: 'Internal Support', x: 56, y: 12, material: 'Cast Stainless Steel / GRP Cup', spec: 'Anchored bottom receiver cup', function: 'Base column localization' },
  { id: 12, title: 'Tie Rod System', category: 'Internal Support', x: 93, y: 32, material: 'SS316 High Tensile Rods', spec: 'M16/M20 stainless tension rods with turnbuckles', function: 'Lateral hydrostatic load tensioning' },
  { id: 13, title: 'Roof Support Structure', category: 'Internal Support', x: 93, y: 22, material: 'GRP Pultruded Profile / SS316', spec: 'Overhead beam truss network', function: 'Dead and wind roof load support' },
  { id: 14, title: 'In Corner Bracket', category: 'Internal Support', x: 74, y: 9, material: 'SS316 Stainless Gusset', spec: 'Internal 3-way corner reinforcement bracket', function: 'Internal corner locking' },
  { id: 15, title: 'Access Manhole', category: 'Tank Accessories', x: 83, y: 13, material: 'GRP Hinged Double-Seal Cover', spec: 'Ø600mm airtight & insect-screened manhole', function: 'Secure maintenance access' },
  { id: 16, title: 'Air Vent', category: 'Tank Accessories', x: 67, y: 8, material: 'UV Stabilized GRP Gooseneck', spec: 'Ø100mm with SS micro-mesh insect screen', function: 'Atmospheric pressure equalization' },
  { id: 17, title: 'Water Level Indicator', category: 'Tank Accessories', x: 42, y: 22, material: 'Magnetic Float & Direct Scale', spec: 'Direct clear acrylic scale or pulley pointer', function: 'Real-time volume visual monitoring' },
  { id: 18, title: 'Internal Ladder', category: 'Tank Accessories', x: 93, y: 44, material: 'SS316 Stainless Steel / GRP', spec: 'Safety rungs with anti-slip knurling', function: 'Internal cleaning & inspection' },
  { id: 19, title: 'External Ladder', category: 'Tank Accessories', x: 91, y: 11, material: 'HDG Steel / GRP with Safety Cage', spec: 'Heavy duty safety cage ladder with handrails', function: 'Safe exterior roof access' }
];

function initCutawayHotspots() {
  const container = document.getElementById('schematicHotspotsContainer');
  const indexGrid = document.getElementById('hotspotsIndexGrid');
  const activeTitle = document.getElementById('activeHotspotTitle');
  const activeCategory = document.getElementById('activeHotspotCategory');
  const activeMaterial = document.getElementById('activeHotspotMaterial');
  const activeSpec = document.getElementById('activeHotspotSpec');
  const activeFunction = document.getElementById('activeHotspotFunction');

  if (!container) return;

  // Clear existing pins
  const existingPins = container.querySelectorAll('.hotspot-pin');
  existingPins.forEach(p => p.remove());

  // Render Hotspots Pins on Diagram
  tankComponentsData.forEach(comp => {
    const pin = document.createElement('div');
    pin.className = 'hotspot-pin';
    pin.id = `pin-${comp.id}`;
    pin.style.left = `${comp.x}%`;
    pin.style.top = `${comp.y}%`;
    pin.innerText = comp.id;
    pin.title = `${comp.id}. ${comp.title}`;

    pin.addEventListener('click', () => selectHotspot(comp.id));
    container.appendChild(pin);

    // Render Quick Index Card
    if (indexGrid) {
      const card = document.createElement('div');
      card.className = 'hotspot-quick-card';
      card.id = `card-${comp.id}`;
      card.innerHTML = `
        <div class="hotspot-quick-num">${comp.id}</div>
        <div class="hotspot-quick-title">${comp.title}</div>
      `;
      card.addEventListener('click', () => selectHotspot(comp.id));
      indexGrid.appendChild(card);
    }
  });

  function selectHotspot(id) {
    const comp = tankComponentsData.find(c => c.id === id);
    if (!comp) return;

    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.hotspot-quick-card').forEach(c => c.classList.remove('active'));

    const activePin = document.getElementById(`pin-${id}`);
    const activeCard = document.getElementById(`card-${id}`);
    if (activePin) activePin.classList.add('active');
    if (activeCard) activeCard.classList.add('active');

    if (activeTitle) activeTitle.innerText = `${comp.id}. ${comp.title}`;
    if (activeCategory) activeCategory.innerText = comp.category;
    if (activeMaterial) activeMaterial.innerText = comp.material;
    if (activeSpec) activeSpec.innerText = comp.spec;
    if (activeFunction) activeFunction.innerText = comp.function;
  }

  // Initialize with component 1
  selectHotspot(1);
}

/* --------------------------------------------------------------------------
   07. PRODUCTS CATALOGUE & SEARCH/FILTER
   -------------------------------------------------------------------------- */
const allProductsCatalogue = [
  { id: 'grp-panel-tank', name: 'GRP Sectional Panel Tanks', category: 'water', tag: 'Water Storage', img: 'assets/images/grp-panel-tank.jpg', desc: 'Hot and cold pressed SMC/GRP modular tanks certified for potable water in commercial and residential towers.', specs: 'Capacities: 1,000L to 5,000,000L+ | Brands: Korea Sangwon, Malaysia Pepico & UAE OEM' },
  { id: 'grp-lining-concrete', name: 'GRP Concrete Tank Lining', category: 'lining', tag: 'Lining Systems', img: 'assets/images/grp-lining.jpg', desc: 'Seamless, high-build resin lining preventing leaks, structural erosion and chemical attack in water reservoirs.', specs: 'Layers: 3-5 Ply Fiberglass CSM + Isophthalic / Vinyl Ester Resin + Food-grade Gelcoat' },
  { id: 'grp-pool-luxury', name: 'Prefabricated Fiberglass Swimming Pools', category: 'pools', tag: 'Architectural Pools', img: 'assets/images/fiberglass-pool.jpg', desc: 'One-piece luxury monobloc fiberglass pools engineered for quick installation, ultra-smooth finish and UV durability.', specs: 'Shapes: Rectangular, Infinity, Compact Plunge | Warranty: 15 Years Hull Integrity' },
  { id: 'grc-planters', name: 'Architectural GRC & GRP Planters', category: 'architectural', tag: 'Architectural Landscape', img: 'assets/images/grp-planters.jpg', desc: 'Custom geometric rectangular, cylindrical, and tall luxury planters for high-end UAE hotels, villas and urban plazas.', specs: 'Material: Glass Reinforced Concrete (GRC) & GRP | Finishes: Concrete Grey, Sandstone, RAL Custom' },
  { id: 'grp-pipes-fittings', name: 'GRP Industrial Pipes & Fittings', category: 'industrial', tag: 'Industrial Infrastructure', img: 'assets/images/grp-pipes.jpg', desc: 'Filament wound GRP pipes, elbows, tees and flanges for sewerage, chemical transport, cooling and desalination lines.', specs: 'Diameters: DN50 to DN3000 | Pressure Classes: PN6 to PN32 | Temp: Up to 110°C' },
  { id: 'grp-cable-trays', name: 'GRP Cable Trays & Cable Ladders', category: 'accessories', tag: 'Electrical Support', img: 'assets/images/grp-pipes.jpg', desc: 'Non-conductive, zero-corrosion pultruded cable support systems designed for harsh coastal and oil & gas environments.', specs: 'Type: Perforated Tray & Heavy Ladder | Standards: NEMA / IEC Compliant | Fire Retardant' },
  { id: 'grp-ladders', name: 'GRP Safety Ladders & Cages', category: 'accessories', tag: 'Safety Systems', img: 'assets/images/grp-cutaway-tank.jpg', desc: 'Lightweight, electrically safe pultruded ladders with anti-slip rungs and optional fall arrest cages for wet wells and tanks.', specs: 'Load Rating: 150kg/rung | Chemical Resistant | High Dielectric Strength' },
  { id: 'grp-manhole-covers', name: 'GRP Manhole & Sealing Covers (Type A, B, C)', category: 'accessories', tag: 'Access & Drainage', img: 'assets/images/grp-lining.jpg', desc: 'Gas-tight and water-tight sealing covers, grease trap lids and drainage buckets for commercial developments.', specs: 'Ratings: Pedestrian (A15) to Heavy Duty (D400) | Single & Double Seal Designs' },
  { id: 'grp-grease-traps', name: 'Grease Trap Covers & Sand Traps', category: 'accessories', tag: 'Drainage Products', img: 'assets/images/grp-lining.jpg', desc: 'Heavy duty corrosion-proof grease trap lids, sand trap buckets, and floor drainage sumps.', specs: 'Material: High Grade GRP Resin | Odour Tight Seal | Chemical Resistant' },
  { id: 'grp-delivery-box', name: 'GRP Delivery Boxes & Enclosures', category: 'accessories', tag: 'Commercial Utility', img: 'assets/images/hero-facility.jpg', desc: 'Weather-resistant, insulated GRP delivery boxes and equipment enclosures for logistics and food transport.', specs: 'Features: Lockable Hasp, Thermal Lining, Custom Decals' },
  { id: 'grp-ductings', name: 'GRP Round & Rectangular Ducting', category: 'industrial', tag: 'HVAC & Industrial', img: 'assets/images/grp-pipes.jpg', desc: 'Corrosion-resistant ventilation ducting and scrubbers for acidic exhaust, wastewater treatment plants and chemical facilities.', specs: 'Resin: Fire-retardant Vinyl Ester | Complete with Dampers, Flanges & Supports' },
  { id: 'grp-fountains-bowls', name: 'GRP Sculptural Water Bowls & Fountains', category: 'architectural', tag: 'Water Features', img: 'assets/images/grp-planters.jpg', desc: 'Modern minimalist water bowls, spillways, and architectural cascading fountains for luxury landscapes.', specs: 'Finishes: Matte Basalt, Stone Grey, Sandstone, Charcoal' }
];

function initProductsCatalogue() {
  const container = document.getElementById('productsEcosystemGrid');
  const filterButtons = document.querySelectorAll('.category-pill-btn');
  const searchInput = document.getElementById('productSearchInput');

  if (!container) return;

  function renderProducts(items) {
    container.innerHTML = '';
    if (items.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 30px; color:#888;">No products found matching your search query.</div>`;
      return;
    }

    items.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-card-img">
          <span class="product-tag-floating">${prod.tag}</span>
          <img src="${prod.img}" alt="${prod.name}" loading="lazy">
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title">${prod.name}</h3>
          <p class="product-card-desc">${prod.desc}</p>
          <div class="product-card-features">
            <span class="prod-feat-badge">Corrosion Resistant</span>
            <span class="prod-feat-badge">UAE Certified</span>
            <span class="prod-feat-badge">High Strength</span>
          </div>
          <div class="product-card-action">
            <button class="btn-view-details" onclick="openProductModal('${prod.id}')">
              TECHNICAL SPECS &rarr;
            </button>
            <button class="btn btn-primary btn-sm" onclick="triggerQuoteForProduct('${prod.name}')">
              QUOTE
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Initial render
  renderProducts(allProductsCatalogue);

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      const filtered = (cat === 'all') 
        ? allProductsCatalogue 
        : allProductsCatalogue.filter(p => p.category === cat);
      renderProducts(filtered);
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      const filtered = allProductsCatalogue.filter(p => 
        p.name.toLowerCase().includes(val) || 
        p.desc.toLowerCase().includes(val) ||
        p.tag.toLowerCase().includes(val)
      );
      renderProducts(filtered);
    });
  }
}

// Global modal triggers
window.openProductModal = function(productId) {
  const prod = allProductsCatalogue.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('productDetailModal');
  const modalTitle = document.getElementById('modalProdTitle');
  const modalTag = document.getElementById('modalProdTag');
  const modalDesc = document.getElementById('modalProdDesc');
  const modalSpecs = document.getElementById('modalProdSpecs');
  const modalImg = document.getElementById('modalProdImg');

  if (modalTitle) modalTitle.innerText = prod.name;
  if (modalTag) modalTag.innerText = prod.tag;
  if (modalDesc) modalDesc.innerText = prod.desc;
  if (modalSpecs) modalSpecs.innerText = prod.specs;
  if (modalImg) modalImg.src = prod.img;

  if (modal) modal.classList.add('active');
};

window.closeProductModal = function() {
  const modal = document.getElementById('productDetailModal');
  if (modal) modal.classList.remove('active');
};

window.triggerQuoteForProduct = function(productName) {
  const rfqSelect = document.getElementById('rfqProductType');
  const rfqSection = document.getElementById('quoteSection');
  if (rfqSelect) {
    for (let i = 0; i < rfqSelect.options.length; i++) {
      if (rfqSelect.options[i].text.includes(productName) || productName.includes(rfqSelect.options[i].value)) {
        rfqSelect.selectedIndex = i;
        break;
      }
    }
  }
  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Selected "${productName}" in quotation builder`);
  }
};

/* --------------------------------------------------------------------------
   08. MAJOR PROJECTS PORTFOLIO (11 VERIFIED PROJECTS FROM PROFILE)
   -------------------------------------------------------------------------- */
const verifiedProjects = [
  { id: 1, num: 'PROJECT 01', client: 'IMDAD – UAE', location: 'City Land Mall – Dubai', category: 'commercial', scope: 'GRP lining work, supply of GRP manhole sealing cover and drainage GRP bucket.', duration: 'Completed on schedule', status: 'Delivered' },
  { id: 2, num: 'PROJECT 02', client: 'SAHARA GLOBAL FM – UAE', location: 'Prime Tower – Dubai Business Bay', category: 'commercial', scope: 'GRP tank repair and plumbing works.', duration: 'Critical Facility Shutdown', status: 'Delivered' },
  { id: 3, num: 'PROJECT 03', client: 'AL BWARDY ENGINEERING – UAE', location: 'Spinneys Building – near BurJuman Center, Dubai', category: 'commercial', scope: 'GRP tank repair and plumbing works.', duration: 'High Rise Commercial', status: 'Delivered' },
  { id: 4, num: 'PROJECT 04', client: 'SECURE FACILITY MANAGEMENT – UAE', location: 'Falcon Tower – Near properties, Ajman', category: 'residential', scope: 'GRP Tank Repair, Plumbing works.', duration: 'Residential High Rise', status: 'Delivered' },
  { id: 5, num: 'PROJECT 05', client: 'AL DAR PROPERTIES', location: 'Dash Building – International city, Dubai', category: 'residential', scope: 'GRP Tank Repair, Plumbing works.', duration: 'Master Community Asset', status: 'Delivered' },
  { id: 6, num: 'PROJECT 06', client: 'ADEEB FACILITY MANAGEMENT – UAE', location: 'Abhar Tower – Ajman', category: 'residential', scope: 'GRP Panel Tank Repairs of 27 Building, Plumbing Works, Painting Works.', duration: 'Complete Refurbishment', status: 'Delivered' },
  { id: 7, num: 'PROJECT 07', client: 'AL BAZZAM FACILITY MANAGEMENT – UAE', location: 'ADIB Bank Building – RAK', category: 'commercial', scope: 'GRP panel tank repair works.', duration: 'Banking Sector Facility', status: 'Delivered' },
  { id: 8, num: 'PROJECT 08', client: 'AL BARIZ CONTRACTING – DUBAI, UAE', location: 'Dubai Hills – Dubai', category: 'contracting', scope: 'GRP lining concrete tank, plumbing works and booster pump installation.', duration: 'Luxury Residential Estate', status: 'Delivered' },
  { id: 9, num: 'PROJECT 09', client: 'EMIRATES PROPERTIES – UPTOWN', location: 'Uptown – Ajman, UAE', category: 'properties', scope: 'GRP lining concrete tank and plumbing works.', duration: 'Large Reservoir Protection', status: 'Delivered' },
  { id: 10, num: 'PROJECT 10', client: 'EMIRATES PROPERTIES – EMIRATES CITY', location: 'Gold Crest – Ajman, UAE', category: 'properties', scope: 'GRP lining panel tank and plumbing repairs.', duration: 'Sectional Water Tank Overhaul', status: 'Delivered' },
  { id: 11, num: 'PROJECT 11', client: 'EMIRATES PROPERTIES – EMIRATES CITY', location: 'Ajman, UAE', category: 'properties', scope: 'GRP lining concrete tank, electrical maintenance and painting.', duration: 'Infrastructure Maintenance', status: 'Delivered' }
];

function initProjectsPortfolio() {
  const container = document.getElementById('projectsListGrid');
  const filterBtns = document.querySelectorAll('.proj-filter-btn');

  if (!container) return;

  function renderProjects(list) {
    container.innerHTML = '';
    list.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-card-header">
          <div class="project-client-name">${proj.client}</div>
          <span class="project-num-badge">${proj.num}</span>
        </div>
        <div class="project-card-body">
          <div class="project-loc-tag">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${proj.location}
          </div>
          <p class="project-scope-desc"><strong>Scope:</strong> ${proj.scope}</p>
          <div style="font-size:0.75rem; color:#718096; margin-bottom:10px;"><strong>Sector:</strong> ${proj.duration}</div>
        </div>
        <div class="project-card-footer">
          <span style="font-size:0.75rem; font-weight:800; color:#10B981; display:flex; align-items:center; gap:5px;">
            <span style="width:7px; height:7px; background:#10B981; border-radius:50%; display:inline-block;"></span>
            ${proj.status}
          </span>
          <button class="btn-view-details" onclick="openProjectDetail(${proj.id})">
            DETAILS &rarr;
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderProjects(verifiedProjects);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      const filtered = (cat === 'all') 
        ? verifiedProjects 
        : verifiedProjects.filter(p => p.category === cat);
      renderProjects(filtered);
    });
  });
}

window.openProjectDetail = function(projectId) {
  const proj = verifiedProjects.find(p => p.id === projectId);
  if (!proj) return;
  alert(`Al Mamoura Fiberglass Project Reference:\n\n${proj.num}: ${proj.client}\nLocation: ${proj.location}\nScope: ${proj.scope}\nStatus: Commissioned`);
};

/* --------------------------------------------------------------------------
   09. COMMERCIAL LICENSE & LEGAL DOCUMENT VIEWER (PAGE 17 REPLICA)
   -------------------------------------------------------------------------- */
function initLegalDocumentViewer() {
  const docElement = document.getElementById('legalDocCanvas');
  const zoomInBtn = document.getElementById('btnDocZoomIn');
  const zoomOutBtn = document.getElementById('btnDocZoomOut');
  const zoomResetBtn = document.getElementById('btnDocZoomReset');
  const toggleRedactBtn = document.getElementById('btnToggleRedaction');

  if (!docElement) return;

  let currentScale = 1;
  let isRedacted = true;

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      if (currentScale < 1.35) {
        currentScale += 0.1;
        docElement.style.transform = `scale(${currentScale})`;
        docElement.style.transformOrigin = 'top center';
      }
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      if (currentScale > 0.8) {
        currentScale -= 0.1;
        docElement.style.transform = `scale(${currentScale})`;
        docElement.style.transformOrigin = 'top center';
      }
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', () => {
      currentScale = 1;
      docElement.style.transform = 'scale(1)';
    });
  }

  if (toggleRedactBtn) {
    toggleRedactBtn.addEventListener('click', () => {
      isRedacted = !isRedacted;
      const redactedElements = document.querySelectorAll('.doc-redacted-badge');
      redactedElements.forEach(el => {
        el.innerText = isRedacted ? '[Protected Privacy Data]' : 'Verified UAE Legal Record (License #78445)';
        el.style.background = isRedacted ? '#E2E8F0' : '#DCFCE7';
        el.style.color = isRedacted ? '#64748B' : '#166534';
      });
      showToast(isRedacted ? 'Document privacy mode enabled' : 'Full legal verification mode enabled');
    });
  }
}

window.downloadDocumentPdf = function() {
  showToast('Downloading official Trade License No. 78445 document...');
  setTimeout(() => {
    alert('Al Mamoura Fiberglass Products Trading L.L.C.\nGovernment of Ajman Department of Economic Development\nTrade License No: 78445\nRegister No: 81774 | ACCI No: 93019\nAddress: Shop No. 06, Ajman Industrial 2, UAE');
  }, 600);
};

/* --------------------------------------------------------------------------
   10. INTERACTIVE RFQ QUOTATION CALCULATOR
   -------------------------------------------------------------------------- */
function initRfqCalculator() {
  const prodSelect = document.getElementById('rfqProductType');
  const lengthInput = document.getElementById('rfqLength');
  const widthInput = document.getElementById('rfqWidth');
  const heightInput = document.getElementById('rfqHeight');
  const insulationSelect = document.getElementById('rfqInsulation');
  const calcOutput = document.getElementById('calcOutputCapacity');
  const calcOutputSq = document.getElementById('calcOutputArea');
  const calcOutputPanels = document.getElementById('calcOutputPanels');

  function calculateEstimates() {
    const l = parseFloat(lengthInput?.value) || 4;
    const w = parseFloat(widthInput?.value) || 4;
    const h = parseFloat(heightInput?.value) || 3;

    // Volume in m3 and US Gallons
    const volumeM3 = l * w * h;
    const volumeGallons = Math.round(volumeM3 * 264.172);

    // Surface Area in m2 (Bottom + 4 Sides + Top)
    const surfaceArea = (l * w) * 2 + (l * h) * 2 + (w * h) * 2;
    // Estimated 1x1m panels
    const totalPanels = Math.ceil(surfaceArea);

    if (calcOutput) calcOutput.innerText = `${volumeM3.toFixed(1)} m³ (${volumeGallons.toLocaleString()} Gallons)`;
    if (calcOutputSq) calcOutputSq.innerText = `${surfaceArea.toFixed(1)} m²`;
    if (calcOutputPanels) calcOutputPanels.innerText = `~${totalPanels} SMC Panels`;
  }

  [lengthInput, widthInput, heightInput, insulationSelect, prodSelect].forEach(input => {
    if (input) input.addEventListener('input', calculateEstimates);
  });

  calculateEstimates();

  // RFQ Form Submission
  const rfqForm = document.getElementById('rfqQuoteForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Engineering Quotation Request Submitted. Our technical sales engineer will contact you shortly.');
      rfqForm.reset();
      calculateEstimates();
    });
  }
}

/* --------------------------------------------------------------------------
   11. CONTACT FORM & INSTANT TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('mainContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contactName');
    const name = nameInput ? nameInput.value : 'Valued Client';
    showToast(`Thank you, ${name}! Your inquiry has been routed to Al Mamoura Engineering.`);
    form.reset();
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5B800"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

function createToastContainer() {
  const cont = document.createElement('div');
  cont.id = 'toastContainer';
  cont.className = 'toast-container';
  document.body.appendChild(cont);
  return cont;
}

/* --------------------------------------------------------------------------
   12. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
