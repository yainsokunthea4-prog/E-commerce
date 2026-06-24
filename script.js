// ===========================
// PRODUCT DATA
// ===========================
const PRODUCTS = [
  { id: 1, name: "Organic Apples", category: "fruits", emoji: "🍎", price: 4.99, oldPrice: 6.99, weight: "1 kg bag", badge: "Sale", image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&q=80" },
  { id: 2, name: "Fresh Bananas", category: "fruits", emoji: "🍌", price: 2.49, weight: "6 pack", badge: null, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80" },
  { id: 3, name: "Strawberries", category: "fruits", emoji: "🍓", price: 5.99, oldPrice: 7.49, weight: "400g punnet", badge: "Sale", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80" },
  { id: 4, name: "Oranges", category: "fruits", emoji: "🍊", price: 3.99, weight: "1 kg bag", badge: null, image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=300&q=80" },
  { id: 5, name: "Broccoli", category: "vegetables", emoji: "🥦", price: 1.99, weight: "1 head", badge: "Organic", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&q=80" },
  { id: 6, name: "Carrots", category: "vegetables", emoji: "🥕", price: 1.49, weight: "500g bag", badge: null, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&q=80" },
  { id: 7, name: "Cherry Tomatoes", category: "vegetables", emoji: "🍅", price: 3.49, weight: "250g punnet", badge: "Organic", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300&q=80" },
  { id: 8, name: "Spinach", category: "vegetables", emoji: "🥬", price: 2.99, weight: "200g bag", badge: null, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&q=80" },
  { id: 9, name: "Whole Milk", category: "dairy", emoji: "🥛", price: 2.29, weight: "2L bottle", badge: null, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80" },
  { id: 10, name: "Free Range Eggs", category: "dairy", emoji: "🥚", price: 4.49, weight: "12 pack", badge: null, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&q=80" },
  { id: 11, name: "Greek Yogurt", category: "dairy", emoji: "🍶", price: 3.99, weight: "500g tub", badge: null, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&q=80" },
  { id: 12, name: "Sourdough Bread", category: "bakery", emoji: "🍞", price: 4.29, weight: "800g loaf", badge: null, image: "https://i.pinimg.com/webp87/1200x/58/f1/7a/58f17a55f9a71c6cdbfadf1277b27c3e.webp" },
  { id: 13, name: "Blueberries", category: "fruits", emoji: "🫐", price: 4.99, weight: "300g punnet", badge: null, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300&q=80" },
  { id: 14, name: "Bell Peppers", category: "vegetables", emoji: "🫑", price: 2.99, weight: "3 pack", badge: null, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80" },
  { id: 15, name: "Organic Kale", category: "organic", emoji: "🥗", price: 3.49, weight: "200g bag", badge: "Organic", image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=300&q=80" },
  { id: 16, name: "Avocados", category: "organic", emoji: "🥑", price: 5.99, weight: "2 pack", badge: "Organic", image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=300&q=80" },
  { id: 17, name: "Orange Juice", category: "beverages", emoji: "🧃", price: 3.99, weight: "1L carton", badge: null, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&q=80" },
  { id: 18, name: "Sparkling Water", category: "beverages", emoji: "💧", price: 1.99, weight: "6 × 500ml", badge: null, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&q=80" },
  { id: 19, name: "Potato Chips", category: "snacks", emoji: "🍿", price: 2.49, weight: "150g bag", badge: null, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&q=80" },
  { id: 20, name: "Dark Chocolate", category: "snacks", emoji: "🍫", price: 3.29, weight: "100g bar", badge: null, image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80" },
  { id: 21, name: "Salmon Fillet", category: "meat", emoji: "🐟", price: 8.99, weight: "300g", badge: null, image: "https://i.pinimg.com/736x/74/8f/66/748f662d438daffda663a8abc64c75d0.jpg" },
  { id: 22, name: "Chicken Breast", category: "meat", emoji: "🍗", price: 6.49, weight: "500g pack", badge: null, image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80" },
  { id: 23, name: "Beef Mince", category: "meat", emoji: "🥩", price: 7.99, weight: "400g pack", badge: null, image: "https://i.pinimg.com/736x/72/1a/88/721a88642c035b0075f6252f85b94bec.jpg" },
  { id: 24, name: "French Bread", category: "bakery", emoji: "🍞", price: 4.29, weight: "800g loaf", badge: null, image: "https://i.pinimg.com/1200x/eb/02/08/eb02084f4ef795f187aa35de9693f419.jpg" },
  { id: 25, name: "Croissant", category: "bakery", emoji: "🥐", price: 7.99, weight: "400g loaf", badge: null, image: "https://i.pinimg.com/1200x/b3/62/f3/b362f30f8faba86e7f3050d6595ea41d.jpg" },
  { id: 26, name: "Watermelon", category: "fruits", emoji: "🍉", price: 2.99, weight: "1 head", badge: null, image: "https://i.pinimg.com/736x/ac/26/49/ac2649d23fc1be8d44bcee5513958329.jpg" },
  { id: 27, name: "Kiwi", category: "fruits", emoji: "🥝", price: 6.39, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/32/8c/99/328c999c61e5e38d1e9f73f2b8a4888f.jpg" },
  { id: 28, name: "corn", category: "vegetables", emoji: "🌽", price: 4.49, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/9a/31/74/9a31741a54dea3e266bf4b23edf2be3c.jpg" },
  { id: 29, name: "bitter gourd", category: "vegetables", emoji: "🥒", price: 3.69, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/30/6b/fc/306bfc8d082727541f1eea559ed06a50.jpg" },
  { id: 30, name: "Mango", category: "fruits", emoji: "🥭", price: 2.50, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/b2/5c/ba/b25cba73498b301e630de7334c4081d0.jpg" },
  { id: 31, name: "Radish", category: "vegetables", emoji: "🥕", price: 2.69, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/f5/1e/e7/f51ee7c03c5ef74e067866f1fba92888.jpg" },
  { id: 32, name: "Cheese", category: "dairy", emoji: "🧀", price: 8.49, weight: "100g pack", badge: null, image: "https://i.pinimg.com/1200x/10/26/47/102647c9d58c1bbda1192395a3bc8038.jpg" },
  { id: 33, name: "Butter", category: "dairy", emoji: "🧈", price: 8.49, weight: "100g pack", badge: null, image: "https://i.pinimg.com/1200x/ad/0d/4f/ad0d4f293944b871766284b1122af1b0.jpg" },
  { id: 34, name: "Olive Oil", category: "dairy", emoji: "🫒", price: 8.49, weight: "100g pack", badge: null, image: "https://i.pinimg.com/736x/5f/20/54/5f2054d87e1730e1e49adf27d4071ee7.jpg" },
  
];

// ===========================
// CART STATE
// ===========================
let cart = JSON.parse(localStorage.getItem('freshmart_cart') || '[]');

function saveCart() {
  localStorage.setItem('freshmart_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    saveCart();
    updateCartUI();
    renderCartItems();
  }
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
  });
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Your cart is empty</p>
        <small>Add some fresh groceries!</small>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <small>${item.weight}</small>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  if (footer) {
    footer.style.display = 'block';
    totalEl.textContent = `$${getCartTotal().toFixed(2)}`;
  }
}

// ===========================
// CART SIDEBAR TOGGLE
// ===========================
function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
}

// ===========================
// TOAST
// ===========================
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===========================
// PRODUCT CARD RENDERER
// ===========================
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;

  const badgeHtml = product.badge
    ? `<div class="product-badge ${product.badge === 'Organic' ? 'organic' : ''}">${product.badge}</div>`
    : '';

  const oldPriceHtml = product.oldPrice
    ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>`
    : '';

  card.innerHTML = `
    ${badgeHtml}
    <div class="product-img">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=font-size:56px>${product.emoji}</span>'" />
    </div>
    <div class="product-body">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-weight">${product.weight}</div>
      <div class="product-footer">
        <div class="product-price">${oldPriceHtml}$${product.price.toFixed(2)}</div>
        <button class="add-btn" title="Add to cart">+</button>
      </div>
    </div>
  `;

  card.querySelector('.add-btn').addEventListener('click', () => addToCart(product));
  return card;
}

// ===========================
// HOME PAGE: FEATURED PRODUCTS
// ===========================
function initHomePage() {
  const grid = document.getElementById('productsGrid');
  if (!grid || document.querySelector('.shop-layout')) return;

  const featured = PRODUCTS.filter(p => ['fruits','vegetables','dairy','organic'].includes(p.category));
  let currentFilter = 'all';

  function renderFeatured(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? featured : featured.filter(p => p.category === filter);
    filtered.forEach(p => grid.appendChild(createProductCard(p)));
  }

  renderFeatured('all');

  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderFeatured(currentFilter);
    });
  });
}

// ===========================
// PRODUCTS PAGE
// ===========================
function initProductsPage() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productCount');
  if (!grid || !document.querySelector('.shop-layout')) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get('cat') || 'all';
  let maxPrice = 50;
  let sortMode = 'default';
  let searchTerm = params.get('q') || '';  // ← CHANGE 1

  function getFiltered() {
    let result = [...PRODUCTS];
    if (activeCategory !== 'all') result = result.filter(p => p.category === activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
      // ← CHANGE 2: sort exact match first, then starts-with, then contains
      result.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const aRank = aName === term ? 0 : aName.startsWith(term) ? 1 : 2;
        const bRank = bName === term ? 0 : bName.startsWith(term) ? 1 : 2;
        return aRank - bRank;
      });
    }
    if (sortMode === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortMode === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortMode === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }

  function render() {
    const filtered = getFiltered();
    grid.innerHTML = '';
    filtered.forEach(p => grid.appendChild(createProductCard(p)));
    if (countEl) countEl.textContent = `${filtered.length} products`;
  }

  // Sidebar category filter
  const catItems = document.querySelectorAll('.sidebar-cats li');
  catItems.forEach(li => {
    if (li.dataset.cat === activeCategory) {
      catItems.forEach(x => x.classList.remove('active'));
      li.classList.add('active');
    }
    li.addEventListener('click', () => {
      catItems.forEach(x => x.classList.remove('active'));
      li.classList.add('active');
      activeCategory = li.dataset.cat;
      render();
    });
  });

  // Price range
  const priceRange = document.getElementById('priceRange');
  const priceVal = document.getElementById('priceVal');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      maxPrice = +priceRange.value;
      priceVal.textContent = priceRange.value;
      render();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortMode = sortSelect.value;
      render();
    });
  }

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value;
      render();
    });
  }

  // View toggle
  document.getElementById('gridView')?.addEventListener('click', () => {
    grid.style.gridTemplateColumns = '';
    document.getElementById('gridView').classList.add('active');
    document.getElementById('listView').classList.remove('active');
  });

  document.getElementById('listView')?.addEventListener('click', () => {
    grid.style.gridTemplateColumns = '1fr';
    document.getElementById('listView').classList.add('active');
    document.getElementById('gridView').classList.remove('active');
  });

  // ← CHANGE 3: pre-fill search box from URL
  if (searchInput && searchTerm) searchInput.value = searchTerm;

  render();
}

// ===========================
// CHECKOUT PAGE
// ===========================
function initCheckoutPage() {
  const orderItemsEl = document.getElementById('orderItems');
  const orderSubtotalEl = document.getElementById('orderSubtotal');
  const orderTotalEl = document.getElementById('orderTotal');
  const orderDeliveryEl = document.getElementById('orderDelivery');
  if (!orderItemsEl) return;

  let deliveryFee = 3.99;

  function renderOrderSummary() {
    if (cart.length === 0) {
      orderItemsEl.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">No items in cart</p>';
      return;
    }
    orderItemsEl.innerHTML = cart.map(item => `
      <div class="order-item">
        <span>${item.emoji}</span>
        <span>${item.name} × ${item.qty}</span>
        <span>$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('');
    const subtotal = getCartTotal();
    orderSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    orderTotalEl.textContent = `$${(subtotal + deliveryFee).toFixed(2)}`;
  }

  // Delivery option toggle
  document.querySelectorAll('.delivery-option').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.delivery-option').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
      const val = label.querySelector('input')?.value;
      if (val === 'express') { deliveryFee = 3.99; orderDeliveryEl.textContent = '$3.99'; }
      else if (val === 'standard') { deliveryFee = 1.99; orderDeliveryEl.textContent = '$1.99'; }
      else if (val === 'free') { deliveryFee = 0; orderDeliveryEl.textContent = 'Free'; }
      renderOrderSummary();
    });
  });

  // Payment option toggle
  document.querySelectorAll('.payment-options .delivery-option').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.payment-options .delivery-option').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
      const val = label.querySelector('input')?.value;
      const cardFields = document.getElementById('cardFields');
      if (cardFields) cardFields.style.display = val === 'card' ? 'block' : 'none';
    });
  });

  // Place order
  document.getElementById('placeOrderBtn')?.addEventListener('click', () => {
    const overlay = document.getElementById('successOverlay');
    const orderId = document.getElementById('orderId');
    if (overlay) {
      orderId.textContent = Math.floor(100000 + Math.random() * 900000);
      overlay.style.display = 'flex';
      cart = [];
      saveCart();
      updateCartUI();
    }
  });

  renderOrderSummary();
}

// ===========================
// LOGIN PAGE
// ===========================
function initLoginPage() {
  const loginCard = document.getElementById('loginCard');
  const registerCard = document.getElementById('registerCard');
  if (!loginCard) return;

  document.getElementById('showRegister')?.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.style.display = 'none';
    registerCard.style.display = 'block';
  });

  document.getElementById('showLogin')?.addEventListener('click', (e) => {
    e.preventDefault();
    registerCard.style.display = 'none';
    loginCard.style.display = 'block';
  });

  document.getElementById('loginBtn')?.addEventListener('click', () => {
    const email = document.getElementById('loginEmail')?.value;
    if (!email) { showToast('⚠️ Please enter your email'); return; }
    showToast('✅ Signed in successfully!');
    setTimeout(() => window.location.href = 'index.html', 1200);
  });

  document.getElementById('registerBtn')?.addEventListener('click', () => {
    showToast('✅ Account created! Welcome to FreshMart 🥬');
    setTimeout(() => window.location.href = 'index.html', 1200);
  });
}

// ===========================
// MOBILE MENU
// ===========================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ===========================
// SEARCH (NAVBAR)
// ===========================
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `products.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });

  // Handle ?q= query from URL on products page
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q && input) input.value = q;
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Cart toggle
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  initMobileMenu();
  initSearch();
  initHomePage();
  initProductsPage();
  initCheckoutPage();
  initLoginPage();
});