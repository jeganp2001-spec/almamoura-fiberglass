/**
 * AL MAMOURA FIBERGLASS - ENTERPRISE CMS ADMIN PANEL ENGINE
 */

// Initial Seed Data for CMS
const DEFAULT_CMS_DATA = {
  settings: {
    siteTitle: 'Al Mamoura Fiberglass | GRP & Fiberglass Solutions UAE',
    brandName: 'Al Mamoura Fiberglass',
    tagline: 'Engineering Strength. Delivering Quality.',
    logoUrl: '../assets/images/logo-transparent.png',
    faviconUrl: '../assets/images/logo-transparent.png',
    primaryColor: '#F5B800',
    whatsappNumber: '+971555115580',
    primaryPhone: '+971 55 511 5580',
    secondaryPhone: '+971 50 467 7800',
    email: 'Info@almamourafiberglass.ae',
    address: 'Shop / Warehouse No. 06, South Sector, Industrial Area 2, Ajman – UAE',
    businessHours: 'Mon - Sat: 8:00 AM - 6:00 PM | Sunday: Closed',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2854917454746!2d55.4851!3d25.3952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzQyLjciTiA1NcKwMjknMDYuNCJF!5e0!3m2!1sen!2sae!4v1786790000000!5m2!1sen!2sae',
    heroTitle: 'ENGINEERING EXCELLENCE IN FIBERGLASS & GRP SOLUTIONS',
    heroSubtitle: 'Al Mamoura Fiberglass Products Trading L.L.C. (License #78445) is a premier UAE manufacturer & supplier of high-grade GRP Panel Water Tanks, GRP Lining, Fiberglass Swimming Pools, GRC Planters, and Industrial FRP Products.'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/al-mamoura-fiberglass',
    instagram: 'https://www.instagram.com/almamourafiberglass',
    facebook: 'https://www.facebook.com/almamourafiberglass',
    youtube: 'https://www.youtube.com/@almamourafiberglass',
    whatsapp: 'https://wa.me/971555115580'
  },
  seo: {
    metaTitle: 'Al Mamoura Fiberglass | GRP Panel Water Tanks & Swimming Pools UAE',
    metaDescription: 'Leading supplier & contractor of GRP panel water tanks, GRP lining, GRC planters, and fiberglass swimming pools in Ajman, Dubai & UAE. Trade License #78445.',
    keywords: 'Fiberglass UAE, GRP Panel Tanks UAE, Fiberglass Swimming Pools Ajman, GRP Lining Dubai, Al Mamoura Fiberglass'
  },
  products: [
    {
      id: 'prod-1',
      name: 'GRP Sectional Water Panel Tank',
      category: 'Water Storage',
      spec: '1,000 to 1,500,000 Liters Capacity',
      description: 'Hot-pressed SMC GRP sectional water panel tanks certified for potable rooftop and underground storage with WRAS/BS EN 13280 standards.',
      status: 'Published',
      featured: true,
      image: '../assets/images/grp-panel-tank.jpg'
    },
    {
      id: 'prod-2',
      name: 'Heavy Industrial GRP Pipes & Fittings',
      category: 'Piping Systems',
      spec: 'DN 50mm - DN 2400mm Diameter',
      description: 'Corrosion-resistant filament wound GRP & FRP industrial pressure pipes engineered for chemical plants, cooling towers, and seawater intake.',
      status: 'Published',
      featured: true,
      image: '../assets/images/grp-pipes.jpg'
    },
    {
      id: 'prod-3',
      name: 'Prefabricated Fiberglass Swimming Pools',
      category: 'Pools & Leisure',
      spec: 'Custom Luxury Shell Designs',
      description: 'One-piece monolithic fiberglass swimming pools with smooth gelcoat finish, UV stabilization, and leak-proof lifetime guarantee.',
      status: 'Published',
      featured: true,
      image: '../assets/images/fiberglass-pool.jpg'
    },
    {
      id: 'prod-4',
      name: 'Architectural GRC & GRP Planters',
      category: 'Architectural',
      spec: 'Indoor & Outdoor Landscape Pots',
      description: 'Heavy-duty lightweight glassfiber reinforced concrete (GRC) planters designed for commercial malls, hotels, and luxury villa landscapes.',
      status: 'Published',
      featured: true,
      image: '../assets/images/grp-planters.jpg'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'City Land Mall Rooftop GRP Panel Tank Installation',
      client: 'City Land Developers',
      location: 'Dubai, UAE',
      category: 'Commercial Storage',
      completionDate: '2025-11-15',
      status: 'Published',
      featured: true,
      image: '../assets/images/hero-facility.jpg'
    },
    {
      id: 'proj-2',
      title: 'Business Bay Prime Tower Chemical Tank GRP Lining',
      client: 'Al Habtoor Contracting',
      location: 'Dubai, UAE',
      category: 'GRP Lining & Waterproofing',
      completionDate: '2025-08-20',
      status: 'Published',
      featured: true,
      image: '../assets/images/grp-lining.jpg'
    },
    {
      id: 'proj-3',
      title: 'Ajman Waterfront Resort Custom Fiberglass Pools',
      client: 'Ajman Hospitality Group',
      location: 'Ajman, UAE',
      category: 'Leisure Pools',
      completionDate: '2026-01-10',
      status: 'Published',
      featured: true,
      image: '../assets/images/fiberglass-pool.jpg'
    }
  ],
  services: [
    {
      id: 'serv-1',
      title: 'GRP Tank Supply & On-Site Erection',
      description: 'Turnkey installation of sectional panel tanks with internal stainless steel 316 tie rods, HDG external supports, and level indicators.',
      status: 'Published',
      image: '../assets/images/grp-panel-tank.jpg'
    },
    {
      id: 'serv-2',
      title: 'Chemical & Concrete GRP Tank Lining',
      description: 'Seamless multi-layer FRP laminate lining applied directly to concrete water pits, sumps, and chemical containment tanks.',
      status: 'Published',
      image: '../assets/images/grp-lining.jpg'
    },
    {
      id: 'serv-3',
      title: 'Fiberglass Pool Fabrication & Plumbing',
      description: 'End-to-end swimming pool manufacturing, transport, positioning, coping stone edging, and filtration system installation.',
      status: 'Published',
      image: '../assets/images/fiberglass-pool.jpg'
    }
  ],
  enquiries: [
    {
      id: 'enq-101',
      name: 'Eng. Rashid Al Maktoum',
      phone: '+971 50 123 4567',
      email: 'rashid@maktoumconsulting.ae',
      location: 'Dubai Maritime City',
      service: 'GRP Panel Water Tank',
      message: 'Need a quotation for a 200,000 Liters rooftop GRP sectional panel tank with WRAS approval.',
      date: '2026-08-28 14:22',
      status: 'New',
      notes: 'High priority commercial lead.'
    },
    {
      id: 'enq-102',
      name: 'Tariq Hassan',
      phone: '+971 55 987 6543',
      email: 'thassan@binladengroup.ae',
      location: 'Ajman Industrial 1',
      service: 'Concrete GRP Lining',
      message: 'Requirement for 450 sq.m fiberglass lining on underground concrete fire water pit.',
      date: '2026-08-27 10:15',
      status: 'Contacted',
      notes: 'Site inspection scheduled for tomorrow.'
    },
    {
      id: 'enq-103',
      name: 'Sarah Jenkins',
      phone: '+971 52 444 3322',
      email: 'sarah@dubaihillsvillas.com',
      location: 'Dubai Hills Estate',
      service: 'Fiberglass Pool',
      message: 'Looking for a prefabricated 8m x 4m luxury fiberglass swimming pool for private villa.',
      date: '2026-08-26 16:45',
      status: 'Converted',
      notes: 'Contract signed. Deposit paid.'
    }
  ],
  media: [
    { id: 'm-1', name: 'logo-transparent.png', url: '../assets/images/logo-transparent.png', size: '120 KB' },
    { id: 'm-2', name: 'grp-panel-tank.jpg', url: '../assets/images/grp-panel-tank.jpg', size: '450 KB' },
    { id: 'm-3', name: 'grp-lining.jpg', url: '../assets/images/grp-lining.jpg', size: '380 KB' },
    { id: 'm-4', name: 'fiberglass-pool.jpg', url: '../assets/images/fiberglass-pool.jpg', size: '520 KB' },
    { id: 'm-5', name: 'grp-planters.jpg', url: '../assets/images/grp-planters.jpg', size: '410 KB' },
    { id: 'm-6', name: 'grp-pipes.jpg', url: '../assets/images/grp-pipes.jpg', size: '490 KB' }
  ],
  users: [
    { id: 'u-1', name: 'Super Admin', email: 'admin@almamourafiberglass.ae', role: 'Super Admin', status: 'Active' },
    { id: 'u-2', name: 'Sales Manager', email: 'sales@almamourafiberglass.ae', role: 'Editor', status: 'Active' }
  ]
};

// Data Store Controller
class CMSStore {
  constructor() {
    this.key = 'ALMAMOURA_CMS_STORE';
    this.initStore();
  }

  initStore() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(DEFAULT_CMS_DATA));
    }
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || DEFAULT_CMS_DATA;
    } catch (e) {
      return DEFAULT_CMS_DATA;
    }
  }

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}

const store = new CMSStore();

// Navigation & Auth Logic
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initNavigation();
  renderAllViews();
});

function initAuth() {
  const authOverlay = document.getElementById('authOverlay');
  const loginForm = document.getElementById('loginForm');
  const btnLogout = document.getElementById('btnLogout');
  const isLoggedIn = sessionStorage.getItem('ADMIN_AUTH') === 'true';

  if (!isLoggedIn) {
    authOverlay.classList.remove('hidden');
  } else {
    authOverlay.classList.add('hidden');
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('authEmail').value;
      const pass = document.getElementById('authPassword').value;

      if (email === 'admin@almamourafiberglass.ae' && pass === 'admin123') {
        sessionStorage.setItem('ADMIN_AUTH', 'true');
        authOverlay.classList.add('hidden');
        showToast('Welcome back, Super Admin!');
      } else {
        alert('Invalid email or password. Use: admin@almamourafiberglass.ae / admin123');
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      sessionStorage.removeItem('ADMIN_AUTH');
      authOverlay.classList.remove('hidden');
      showToast('Logged out successfully');
    });
  }
}

function initNavigation() {
  const menuItems = document.querySelectorAll('.sidebar-menu-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');

      menuItems.forEach(i => i.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      item.classList.add('active');
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) {
        activePane.classList.add('active');
      }

      // Close mobile sidebar if open
      document.querySelector('.admin-sidebar').classList.remove('open');
    });
  });
}

function renderAllViews() {
  const data = store.get();
  renderDashboard(data);
  renderContentForms(data);
  renderProductsTable(data);
  renderProjectsTable(data);
  renderServicesTable(data);
  renderEnquiriesTable(data);
  renderMediaGrid(data);
  renderUsersTable(data);
}

// 1. DASHBOARD
function renderDashboard(data) {
  document.getElementById('dashTotalEnquiries').innerText = data.enquiries.length;
  document.getElementById('dashTotalProducts').innerText = data.products.length;
  document.getElementById('dashTotalProjects').innerText = data.projects.length;
  document.getElementById('dashTotalServices').innerText = data.services.length;

  const enquiryTableBody = document.getElementById('dashRecentEnquiriesBody');
  if (enquiryTableBody) {
    enquiryTableBody.innerHTML = data.enquiries.slice(0, 5).map(e => `
      <tr>
        <td><strong>${e.name}</strong><br><span style="font-size:0.75rem; color:#64748B;">${e.location}</span></td>
        <td>${e.service}</td>
        <td><a href="tel:${e.phone}" style="color:inherit; text-decoration:none;">${e.phone}</a></td>
        <td><span class="status-pill ${e.status.toLowerCase()}">${e.status}</span></td>
        <td>${e.date}</td>
      </tr>
    `).join('');
  }
}

// 2. CONTENT MANAGEMENT & SETTINGS
function renderContentForms(data) {
  // Settings
  if (document.getElementById('settingSiteTitle')) {
    document.getElementById('settingSiteTitle').value = data.settings.siteTitle || '';
    document.getElementById('settingHeroTitle').value = data.settings.heroTitle || '';
    document.getElementById('settingHeroSubtitle').value = data.settings.heroSubtitle || '';
    document.getElementById('settingEmail').value = data.settings.email || '';
    document.getElementById('settingPhone1').value = data.settings.primaryPhone || '';
    document.getElementById('settingPhone2').value = data.settings.secondaryPhone || '';
    document.getElementById('settingWhatsapp').value = data.settings.whatsappNumber || '';
    document.getElementById('settingAddress').value = data.settings.address || '';
    document.getElementById('settingHours').value = data.settings.businessHours || '';
    
    // Social
    document.getElementById('socialLinkedin').value = data.social.linkedin || '';
    document.getElementById('socialInstagram').value = data.social.instagram || '';
    document.getElementById('socialFacebook').value = data.social.facebook || '';
    document.getElementById('socialYoutube').value = data.social.youtube || '';

    // SEO
    document.getElementById('seoMetaTitle').value = data.seo.metaTitle || '';
    document.getElementById('seoMetaDescription').value = data.seo.metaDescription || '';
    document.getElementById('seoKeywords').value = data.seo.keywords || '';
  }
}

function saveWebsiteSettings() {
  const data = store.get();
  data.settings.siteTitle = document.getElementById('settingSiteTitle').value;
  data.settings.heroTitle = document.getElementById('settingHeroTitle').value;
  data.settings.heroSubtitle = document.getElementById('settingHeroSubtitle').value;
  data.settings.email = document.getElementById('settingEmail').value;
  data.settings.primaryPhone = document.getElementById('settingPhone1').value;
  data.settings.secondaryPhone = document.getElementById('settingPhone2').value;
  data.settings.whatsappNumber = document.getElementById('settingWhatsapp').value;
  data.settings.address = document.getElementById('settingAddress').value;
  data.settings.businessHours = document.getElementById('settingHours').value;

  data.social.linkedin = document.getElementById('socialLinkedin').value;
  data.social.instagram = document.getElementById('socialInstagram').value;
  data.social.facebook = document.getElementById('socialFacebook').value;
  data.social.youtube = document.getElementById('socialYoutube').value;

  data.seo.metaTitle = document.getElementById('seoMetaTitle').value;
  data.seo.metaDescription = document.getElementById('seoMetaDescription').value;
  data.seo.keywords = document.getElementById('seoKeywords').value;

  store.save(data);
  showToast('Website content & settings updated successfully!');
}

// 3. PRODUCTS MANAGEMENT
function renderProductsTable(data) {
  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.products.map(p => `
    <tr>
      <td><img src="${p.image}" style="width:44px; height:44px; border-radius:4px; object-fit:cover;"></td>
      <td><strong>${p.name}</strong><br><span style="font-size:0.75rem; color:#64748B;">${p.spec}</span></td>
      <td>${p.category}</td>
      <td><span class="status-pill ${p.status.toLowerCase()}">${p.status}</span></td>
      <td>${p.featured ? '⭐ Yes' : 'No'}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="editProduct('${p.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function openProductModal(id = null) {
  const modal = document.getElementById('productModal');
  const data = store.get();
  modal.classList.add('open');

  if (id) {
    const prod = data.products.find(p => p.id === id);
    document.getElementById('prodId').value = prod.id;
    document.getElementById('prodName').value = prod.name;
    document.getElementById('prodCategory').value = prod.category;
    document.getElementById('prodSpec').value = prod.spec;
    document.getElementById('prodDesc').value = prod.description;
    document.getElementById('prodStatus').value = prod.status;
    document.getElementById('prodFeatured').checked = prod.featured;
    document.getElementById('prodModalTitle').innerText = 'Edit Product';
  } else {
    document.getElementById('prodId').value = '';
    document.getElementById('prodName').value = '';
    document.getElementById('prodSpec').value = '';
    document.getElementById('prodDesc').value = '';
    document.getElementById('prodModalTitle').innerText = 'Add New Product';
  }
}

function saveProduct() {
  const data = store.get();
  const id = document.getElementById('prodId').value;
  const name = document.getElementById('prodName').value;
  const category = document.getElementById('prodCategory').value;
  const spec = document.getElementById('prodSpec').value;
  const description = document.getElementById('prodDesc').value;
  const status = document.getElementById('prodStatus').value;
  const featured = document.getElementById('prodFeatured').checked;

  if (!name) { alert('Please enter product name'); return; }

  if (id) {
    const index = data.products.findIndex(p => p.id === id);
    if (index !== -1) {
      data.products[index] = { ...data.products[index], name, category, spec, description, status, featured };
    }
  } else {
    data.products.unshift({
      id: 'prod-' + Date.now(),
      name,
      category,
      spec,
      description,
      status,
      featured,
      image: '../assets/images/grp-panel-tank.jpg'
    });
  }

  store.save(data);
  closeModal('productModal');
  renderAllViews();
  showToast('Product saved successfully!');
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    const data = store.get();
    data.products = data.products.filter(p => p.id !== id);
    store.save(data);
    renderAllViews();
    showToast('Product deleted');
  }
}

// 4. PROJECTS MANAGEMENT
function renderProjectsTable(data) {
  const tbody = document.getElementById('projectsTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.projects.map(p => `
    <tr>
      <td><img src="${p.image}" style="width:44px; height:44px; border-radius:4px; object-fit:cover;"></td>
      <td><strong>${p.title}</strong><br><span style="font-size:0.75rem; color:#64748B;">Client: ${p.client}</span></td>
      <td>${p.location}</td>
      <td>${p.category}</td>
      <td><span class="status-pill ${p.status.toLowerCase()}">${p.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="deleteProject('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function saveProject() {
  const data = store.get();
  const title = document.getElementById('projTitle').value;
  const client = document.getElementById('projClient').value;
  const location = document.getElementById('projLocation').value;
  const category = document.getElementById('projCategory').value;

  if (!title) { alert('Please enter project title'); return; }

  data.projects.unshift({
    id: 'proj-' + Date.now(),
    title,
    client,
    location,
    category,
    status: 'Published',
    featured: true,
    image: '../assets/images/hero-facility.jpg'
  });

  store.save(data);
  closeModal('projectModal');
  renderAllViews();
  showToast('Project added successfully!');
}

function deleteProject(id) {
  if (confirm('Delete this project?')) {
    const data = store.get();
    data.projects = data.projects.filter(p => p.id !== id);
    store.save(data);
    renderAllViews();
    showToast('Project deleted');
  }
}

// 5. SERVICES MANAGEMENT
function renderServicesTable(data) {
  const tbody = document.getElementById('servicesTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.services.map(s => `
    <tr>
      <td><img src="${s.image}" style="width:44px; height:44px; border-radius:4px; object-fit:cover;"></td>
      <td><strong>${s.title}</strong></td>
      <td>${s.description}</td>
      <td><span class="status-pill ${s.status.toLowerCase()}">${s.status}</span></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteService('${s.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function deleteService(id) {
  if (confirm('Delete service?')) {
    const data = store.get();
    data.services = data.services.filter(s => s.id !== id);
    store.save(data);
    renderAllViews();
    showToast('Service deleted');
  }
}

// 6. ENQUIRIES & LEADS CRM
function renderEnquiriesTable(data) {
  const tbody = document.getElementById('enquiriesTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.enquiries.map(e => `
    <tr>
      <td><strong>${e.name}</strong><br><span style="font-size:0.75rem; color:#64748B;">${e.date}</span></td>
      <td><a href="tel:${e.phone}">${e.phone}</a><br><a href="mailto:${e.email}">${e.email}</a></td>
      <td>${e.service}</td>
      <td>${e.location}</td>
      <td>
        <select onchange="updateEnquiryStatus('${e.id}', this.value)" class="form-select" style="padding:4px 8px; font-size:0.78rem;">
          <option value="New" ${e.status === 'New' ? 'selected' : ''}>New</option>
          <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
          <option value="Follow-up" ${e.status === 'Follow-up' ? 'selected' : ''}>Follow-up</option>
          <option value="Converted" ${e.status === 'Converted' ? 'selected' : ''}>Converted</option>
          <option value="Closed" ${e.status === 'Closed' ? 'selected' : ''}>Closed</option>
        </select>
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewEnquiryDetails('${e.id}')">View</button>
      </td>
    </tr>
  `).join('');
}

function updateEnquiryStatus(id, status) {
  const data = store.get();
  const enq = data.enquiries.find(e => e.id === id);
  if (enq) {
    enq.status = status;
    store.save(data);
    showToast(`Enquiry status updated to ${status}`);
    renderDashboard(data);
  }
}

function exportEnquiriesCSV() {
  const data = store.get();
  let csv = 'ID,Name,Phone,Email,Location,Service,Status,Date\n';
  data.enquiries.forEach(e => {
    csv += `"${e.id}","${e.name}","${e.phone}","${e.email}","${e.location}","${e.service}","${e.status}","${e.date}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', `Al_Mamoura_Enquiries_${Date.now()}.csv`);
  a.click();
}

// 7. MEDIA LIBRARY
function renderMediaGrid(data) {
  const grid = document.getElementById('mediaLibraryGrid');
  if (!grid) return;

  grid.innerHTML = data.media.map(m => `
    <div class="media-item">
      <img src="${m.url}" alt="${m.name}">
      <div class="media-item-overlay">
        <button class="btn btn-secondary btn-sm" onclick="copyMediaUrl('${m.url}')">Copy URL</button>
      </div>
    </div>
  `).join('');
}

function copyMediaUrl(url) {
  navigator.clipboard.writeText(url);
  showToast('Media URL copied to clipboard!');
}

// 8. USERS TABLE
function renderUsersTable(data) {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.users.map(u => `
    <tr>
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td><span class="status-pill published">${u.role}</span></td>
      <td><span class="status-pill converted">${u.status}</span></td>
    </tr>
  `).join('');
}

// UTILITIES
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function editProduct(id) {
  openProductModal(id);
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
