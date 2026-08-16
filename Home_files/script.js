const products = [
  { id: 11, title: 'SOLANA DUMPED WALLET', sol: 3.467, desc: 'Fresh dumped wallet, private key included.', price: 48, stock: 148, icon: 'zap', badge: null, rating: 4.5, addr: 'D7WodK26tETSqyWBW35vvMGfige9afLEyTsm1Pvvropd' },
  { id: 18, title: 'SOLANA DUMPED WALLET', sol: 2.853, desc: 'Low-balance wallet with full key access.', price: 34, stock: 156, icon: 'minus', badge: null, rating: 4.3, addr: 'GXHAWY6zJr4iSYTGUPYgRtfZnFFNNRTYMhmQNPZivCxR' },
  { id: 2, title: 'SOLANA DUMPED WALLET', sol: 2.973, desc: 'Recovered private key, instant withdrawal.', price: 35, stock: 162, icon: 'gem', badge: 'new', rating: 4.8, addr: 'G7UFEKkNg1agDHi8V6i19GBPLe56EDcg4zhvR4ARePoB' },
  { id: 12, title: 'SOLANA DUMPED WALLET', sol: 4.09, desc: 'Clean wallet with no transaction history.', price: 50, stock: 115, icon: 'droplets', badge: 'new', rating: 4.7, addr: '4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf' },
  { id: 19, title: 'SOLANA DUMPED WALLET', sol: 5.065, desc: 'Verified active wallet, no restrictions.', price: 54, stock: 132, icon: 'check-circle', badge: null, rating: 4.6, addr: '9Nw9LnnvbmwggNY2wpwvT9mantVU2S6j1DRyWvh7fKuA' },
  { id: 8, title: 'SOLANA DUMPED WALLET', sol: 6.421, desc: 'Instant access, no KYC required.', price: 59, stock: 78, icon: 'sparkles', badge: null, rating: 4.7, addr: 'vALigXFg9wnnhVHN16vNxHxXtAXiBv5QjAE6udoniBY' },
  { id: 16, title: 'SOLANA DUMPED WALLET', sol: 2.197, desc: 'Solid wallet for betting and gaming platforms.', price: 32, stock: 106, icon: 'gamepad-2', badge: 'popular', rating: 4.8, addr: 'J6etcxDdYjPHrtyvDXrbCkx3q9W1UjMj1vy1jBFPJEbK' },
  { id: 14, title: 'SOLANA DUMPED WALLET', sol: 6.159, desc: 'Mid-balance wallet ready for dumping.', price: 58, stock: 6, icon: 'target', badge: null, rating: 4.6, addr: 'Tri1F8B6YtjkBztGCwBNSLEZib1EAqMUEUM7dTT7ZG3' },
  { id: 17, title: 'SOLANA DUMPED WALLET', sol: 4.578, desc: 'Premium budget dump, high value for price.', price: 52, stock: 74, icon: 'crown', badge: null, rating: 4.7, addr: '6xWLi1TDSh65fWsSqE1zdvANTSuVDRMx4ghsGJwgunS8' },
  { id: 20, title: 'SOLANA DUMPED WALLET', sol: 4.279, desc: 'High-potential wallet for multi-platform use.', price: 51, stock: 82, icon: 'trending-up', badge: 'popular', rating: 4.8, addr: '8a4juhtQScHcXPAcqVF3otxLMqxZMDALcE3FEVGBnKu8' },
  { id: 4, title: 'SOLANA DUMPED WALLET', sol: 6.015, desc: 'Clean wallet, no history, ready to use.', price: 57, stock: 98, icon: 'backpack', badge: null, rating: 4.7, addr: 'HEL1USMZKAL2odpNBj2oCjffnFGaYwmbGmyewGv1e2TU' },
  { id: 10, title: 'SOLANA DUMPED WALLET', sol: 9.238, desc: 'Verified working wallet with key access.', price: 69, stock: 122, icon: 'atom', badge: null, rating: 4.6, addr: '2Le6TjeEescF87qDA8Ftdz6U8Kq6SNVwoLJLhzBCHUr5' },
  { id: 1, title: 'SOLANA DUMPED WALLET', sol: 9.642, desc: 'Full private key access, ready to use.', price: 70, stock: 61, icon: 'shield', badge: 'popular', rating: 4.9, addr: 'BKfQLhJprKdmaUzfgjX3xrboEjFSjmnrEiLpmuqC1eqM' },
  { id: 5, title: 'SOLANA DUMPED WALLET', sol: 39.596, desc: 'Premium dumped wallet, private keys included.', price: 180, stock: 41, icon: 'snowflake', badge: 'popular', rating: 4.8, addr: 'DDnAqxJVFo2GVTujibHt5cjevHMSE9bo8HJaydHoshdp' },
  { id: 7, title: 'SOLANA DUMPED WALLET', sol: 0.004, desc: 'Recovered seed phrase, full control.', price: 30, stock: 24, icon: 'lock', badge: 'new', rating: 4.8, addr: 'HwRia5HUmQcvundpC6iFqwfK4iVNKRSmYm1NKsrMkZBC' },
  { id: 3, title: 'SOLANA DUMPED WALLET', sol: 35.363, desc: 'High balance wallet with full access.', price: 165, stock: 20, icon: 'smartphone', badge: null, rating: 4.9, addr: 'AWZhUiQjrjtxL8MEMWsCFbMausFQKkdTnDsFW2i411hN' },
  { id: 9, title: 'SOLANA DUMPED WALLET', sol: 85.907, desc: 'Whale dumped wallet, highest balance.', price: 350, stock: 8, icon: 'diamond', badge: 'whale', rating: 4.9, addr: 'CAo1dCGYrB6NhHh5xb1cGjUiu86iyCfMTENxgHumSve4' },
];

let cart = [];
try { cart = JSON.parse(localStorage.getItem('blackSolCart') || '[]'); } catch { cart = []; }

// Smart stock: updates itself automatically between sessions, no manual edits needed.
// - Each new day starts with a fresh inventory batch within [min, max].
// - Stock gently "sells down" during the day (~1 unit every 3 hours).
// - Each browsing session nudges the number by ±1 so it always looks alive.
function getStockQty(id, min, max) {
  const key = 'bs_smart_stock_v2_' + id;
  const dayKey = new Date().toDateString();
  const now = Date.now();
  const HOUR = 3600000;

  let rec;
  try { rec = JSON.parse(localStorage.getItem(key)); } catch (e) { rec = null; }

  // New day → fresh batch.
  if (!rec || rec.day !== dayKey) {
    rec = { day: dayKey, base: min + Math.floor(Math.random() * (max - min + 1)), sold: 0, seenAt: now };
  }

  // Simulate sales during the day: remove 1 unit per ~3 hours elapsed.
  const elapsed = now - rec.seenAt;
  if (elapsed >= 3 * HOUR) {
    const soldUnits = Math.floor(elapsed / (3 * HOUR));
    rec.sold = Math.min(rec.sold + soldUnits, rec.base - min);
    rec.seenAt += soldUnits * 3 * HOUR;
  }

  // Per-session nudge so numbers differ between sessions.
  const jKey = 'bs_session_jitter_' + id;
  let jitter = sessionStorage.getItem(jKey);
  if (jitter === null) {
    jitter = Math.floor(Math.random() * 3) - 1;
    sessionStorage.setItem(jKey, jitter);
  } else {
    jitter = parseInt(jitter);
  }

  const qty = Math.max(min, Math.min(max, rec.base - rec.sold + jitter));

  localStorage.setItem(key, JSON.stringify(rec));
  return qty;
}

// Render Products
function renderProducts() {
  const grid = document.getElementById('productsGrid');

  grid.innerHTML = products.map((p, index) => {
    const inCart = cart.find(c => c.id === p.id);
    const badgeClass = p.soldOut ? 'badge-soldout' : p.badge === 'new' ? 'badge-new' : p.badge === 'popular' ? 'badge-popular' : p.badge === 'whale' ? 'badge-whale' : '';
    const badgeText = p.soldOut ? 'SOLD OUT' : p.badge === 'new' ? 'New' : p.badge === 'popular' ? 'Popular' : p.badge === 'whale' ? 'WHALE' : '';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const qty = getStockQty(p.id, 7, 15);

    const imgSrc = `./w=6001`;

    const whaleClass = p.badge === 'whale' ? ' product-card-whale' : '';
    return `
      <div class="product-card${whaleClass}">
        <div class="product-image" style="background: var(--bg-secondary);">
          ${badgeText ? `<span class="badge ${badgeClass}">${badgeText}</span>` : ''}
          <img src="${imgSrc}" alt="SOLANA DUMPED WALLET" style="width:100%;height:100%;object-fit:contain;padding:12px;position:absolute;top:0;left:0;">
          <div class="sol-watermark">${p.sol}<span class="sol-unit">SOL</span></div>
          <div style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,0.5);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);">
            <i data-lucide="${p.icon}" style="width:16px;height:16px;color:#fff;"></i>
          </div>
        </div>
        <div class="product-info">
          <div class="product-title">${p.title} <span style="color:var(--accent);font-size:14px;font-weight:400;">${p.sol} SOL</span></div>
          <div class="product-desc">${p.desc}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="color:#f59e0b;font-size:12px;">${stars}</span>
            ${p.soldOut ? '<span class="product-stock sold-out" style="color:#f87171;">Sold Out</span>' : `<span class="product-stock${qty <= 7 ? ' low' : ''}">${qty} in stock</span>`}
          </div>
          ${p.soldOut ? '' : `<a href="https://solscan.io/account/${p.addr}" target="_blank" rel="noopener" class="solscan-verify" title="Verify balance on Solscan">
            <i data-lucide="external-link" style="width:12px;height:12px;"></i> Verify on Solscan
          </a>`}
          <div class="product-footer">
            <div class="product-price">$${Math.round(p.price)}</div>
            <div class="product-actions">
              ${p.soldOut ? '<button class="btn-buy btn-soldout" disabled>SOLD OUT</button>' : `<button class="btn-buy" onclick="window.open('checkout.html?id=${p.id}', '_blank')">BUY NOW</button>`}
              <button class="add-to-cart" onclick="addToCart(${p.id})" ${p.soldOut ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : (inCart ? 'style="background:var(--accent);border-color:var(--accent);color:#fff;"' : '')}>
                <i data-lucide="shopping-cart" style="width:16px;height:16px;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Cart functions
function addToCart(id) {
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
    showToast('Added to cart', '+');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
    updateCart();
  }
}

function updateCart() {
  localStorage.setItem('blackSolCart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
  renderProducts();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `$${total}`;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCount');
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('visible');
  } else {
    badge.classList.remove('visible');
  }
}

function renderCart() {
  const container = document.getElementById('cartItems');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon"><i data-lucide="shopping-bag" style="width:40px;height:40px;color:var(--text-muted);"></i></div>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon"><i data-lucide="wallet" style="width:24px;height:24px;"></i></div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price * item.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartSidebar').classList.toggle('open');
}

// Toast
function showToast(msg, icon = '✓') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// Animate SOL counter
function initSolCounter() {
  const el = document.getElementById('totalSol');
  const total = 874200;
  let start = null;
  const duration = 2000;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * total);
    el.textContent = current.toLocaleString('en-US') + ' SOL+';
    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Header hide/show on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});



// Modal
function openDumpModal() {
  document.getElementById('dumpModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDumpModal(e) {
  if (e && e.target !== document.getElementById('dumpModal')) return;
  document.getElementById('dumpModal').classList.remove('open');
  document.body.style.overflow = '';
}

// PGP copy
function copyPGP() {
  const key = document.querySelector('.pgp-key');
  if (!key) return;
  navigator.clipboard.writeText(key.textContent).catch(() => {});
  const btn = document.querySelector('.pgp-copy');
  const og = btn.textContent;
  btn.textContent = '[COPIED]';
  setTimeout(() => btn.textContent = og, 2000);
}

// Auth
function updateAuthUI() {
  const userData = JSON.parse(localStorage.getItem('blackSolUser') || 'null');
  const signUpLink = document.getElementById('navSignUp');
  const userDiv = document.getElementById('navUser');
  const userName = document.getElementById('navUserName');
  if (userData && userData.registered) {
    signUpLink.style.display = 'none';
    userDiv.classList.remove('hidden');
    userName.textContent = userData.username || 'User';
  } else {
    signUpLink.style.display = '';
    userDiv.classList.add('hidden');
  }
}

function logout() {
  localStorage.removeItem('blackSolUser');
  updateAuthUI();
  showToast('Logged out successfully', '→');
  setTimeout(() => window.location.href = 'signin.html', 300);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initSolCounter();
  renderProducts();
  updateCart();
  updateAuthUI();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
