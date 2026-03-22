
    // ========== PRODUCT DATA ==========
    const products = [
      { id: 1, title: "Silk Midi Dress", price: 189, originalPrice: 249, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80", category: "dresses", description: "Luxurious silk midi dress with elegant draping.", rating: 4.9, reviews: 124, isNew: true },
      { id: 2, title: "Cashmere Sweater", price: 245, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80", category: "tops", description: "Ultra-soft cashmere sweater in a relaxed fit.", rating: 4.8, reviews: 89, isBestseller: true },
      { id: 3, title: "Tailored Wool Coat", price: 395, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", category: "outerwear", description: "Impeccably tailored wool blend coat.", rating: 4.9, reviews: 156, isBestseller: true },
      { id: 4, title: "High-Waisted Trousers", price: 135, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80", category: "bottoms", description: "Elegant high-waisted trousers in premium stretch fabric.", rating: 4.7, reviews: 78 },
      { id: 5, title: "Satin Blouse", price: 125, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80", category: "tops", description: "Lustrous satin blouse with subtle sheen.", rating: 4.8, reviews: 92, isNew: true },
      { id: 6, title: "Pleated Maxi Skirt", price: 165, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=500&q=80", category: "bottoms", description: "Flowing pleated maxi skirt.", rating: 4.6, reviews: 64 },
      { id: 7, title: "Leather Belt", price: 85, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", category: "accessories", description: "Premium Italian leather belt.", rating: 4.9, reviews: 145 },
      { id: 8, title: "Linen Blend Blazer", price: 275, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80", category: "outerwear", description: "Relaxed linen blend blazer.", rating: 4.7, reviews: 71, isNew: true },
      { id: 9, title: "Wrap Dress", price: 175, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", category: "dresses", description: "Flattering wrap dress in signature print.", rating: 4.8, reviews: 108, isBestseller: true },
      { id: 10, title: "Cashmere Cardigan", price: 225, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80", category: "tops", description: "Cozy cashmere cardigan.", rating: 4.9, reviews: 134 },
      { id: 11, title: "Wide Leg Jeans", price: 145, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", category: "bottoms", description: "Vintage-inspired wide leg jeans.", rating: 4.7, reviews: 89 },
      { id: 12, title: "Silk Scarf", price: 95, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80", category: "accessories", description: "Luxurious silk scarf.", rating: 4.8, reviews: 67 },
      { id: 13, title: "Cocktail Dress", price: 265, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80", category: "dresses", description: "Elegant cocktail dress.", rating: 4.9, reviews: 82, isNew: true },
      { id: 14, title: "Puffer Jacket", price: 325, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80", category: "outerwear", description: "Lightweight puffer jacket.", rating: 4.6, reviews: 56 },
      { id: 15, title: "Cotton Shirt", price: 95, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", category: "tops", description: "Classic cotton shirt.", rating: 4.7, reviews: 143 },
      { id: 16, title: "A-Line Skirt", price: 125, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=500&q=80", category: "bottoms", description: "Timeless A-line skirt.", rating: 4.8, reviews: 91 },
      { id: 17, title: "Statement Earrings", price: 75, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", category: "accessories", description: "Bold statement earrings.", rating: 4.9, reviews: 112, isBestseller: true },
      { id: 18, title: "Maxi Dress", price: 195, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80", category: "dresses", description: "Flowing maxi dress.", rating: 4.7, reviews: 76 },
      { id: 19, title: "Trench Coat", price: 365, image: "https://images.unsplash.com/photo-1544923246-77307dd628b0?w=500&q=80", category: "outerwear", description: "Classic trench coat.", rating: 4.9, reviews: 167, isBestseller: true },
      { id: 20, title: "Knit Tank", price: 85, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80", category: "tops", description: "Refined knit tank.", rating: 4.6, reviews: 58 },
      { id: 21, title: "Culottes", price: 145, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80", category: "bottoms", description: "Wide-leg culottes.", rating: 4.7, reviews: 64, isNew: true },
      { id: 22, title: "Crossbody Bag", price: 195, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", category: "accessories", description: "Structured crossbody bag.", rating: 4.8, reviews: 98 },
      { id: 23, title: "Shirt Dress", price: 185, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80", category: "dresses", description: "Classic shirt dress.", rating: 4.8, reviews: 87 },
      { id: 24, title: "Quilted Vest", price: 175, image: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=500&q=80", category: "outerwear", description: "Lightweight quilted vest.", rating: 4.6, reviews: 52 },
      { id: 25, title: "Turtleneck", price: 115, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80", category: "tops", description: "Essential turtleneck in fine merino wool.", rating: 4.9, reviews: 189, isBestseller: true },
      { id: 26, title: "Leather Pants", price: 295, image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&q=80", category: "bottoms", description: "Luxurious leather pants.", rating: 4.7, reviews: 73, isNew: true },
      { id: 27, title: "Straw Hat", price: 65, image: "https://images.unsplash.com/photo-1514227345583-a7be90a6f2a3?w=500&q=80", category: "accessories", description: "Natural straw hat.", rating: 4.8, reviews: 84 },
      { id: 28, title: "Slip Dress", price: 155, image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=500&q=80", category: "dresses", description: "Sleek slip dress in silk blend.", rating: 4.8, reviews: 95 },
      { id: 29, title: "Bomber Jacket", price: 245, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", category: "outerwear", description: "Modern bomber jacket.", rating: 4.7, reviews: 61 },
      { id: 30, title: "Peasant Blouse", price: 105, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80", category: "tops", description: "Romantic peasant blouse.", rating: 4.6, reviews: 67 },
      { id: 31, title: "Midi Skirt", price: 135, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=500&q=80", category: "bottoms", description: "Elegant midi skirt.", rating: 4.8, reviews: 79, isNew: true },
      { id: 32, title: "Sunglasses", price: 145, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80", category: "accessories", description: "Classic sunglasses.", rating: 4.9, reviews: 134 }
    ];

    // ========== STATE ==========
    let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];
    let currentFilter = 'all';
    let currentSort = 'featured';
    let isLoggedIn = localStorage.getItem('luxeLoggedIn') === 'true';
    let currentUser = JSON.parse(localStorage.getItem('luxeUser')) || null;
    let productReviews = JSON.parse(localStorage.getItem('luxeReviews')) || {};

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      renderFeaturedProducts();
      renderProducts();
      updateCartCount();
      updateAuthUI();
      setupEventListeners();
    });

    // ========== NAVIGATION ==========
    function navigate(page) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(`page-${page}`).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (page === 'cart') renderCart();
      if (page === 'product') renderProductDetail();
    }

    // ========== RENDER FUNCTIONS ==========
    function renderProductCard(product, container) {
      const card = document.createElement('div');
      card.className = 'product-card group cursor-pointer';
      card.innerHTML = `
        <div class="relative aspect-[3/4] bg-brand-sand rounded-xl overflow-hidden mb-4">
          <img src="${product.image}" alt="${product.title}" class="product-image w-full h-full object-cover">
          ${product.isNew ? '<span class="absolute top-3 left-3 bg-brand-gold text-white text-xs px-3 py-1 rounded-full">New</span>' : ''}
          ${product.isBestseller ? '<span class="absolute top-3 left-3 bg-brand-black text-white text-xs px-3 py-1 rounded-full">Bestseller</span>' : ''}
          <div class="quick-add absolute bottom-4 left-4 right-4">
            <button onclick="event.stopPropagation(); handleAddToCart(${product.id})" class="w-full bg-white text-brand-black py-3 rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        <h3 class="font-medium text-sm mb-1">${product.title}</h3>
        <div class="flex items-center gap-2">
          <span class="font-display text-lg font-semibold">$${product.price}</span>
          ${product.originalPrice ? `<span class="text-brand-gray line-through text-sm">$${product.originalPrice}</span>` : ''}
        </div>
      `;
      card.onclick = () => viewProduct(product.id);
      container.appendChild(card);
    }

    function renderFeaturedProducts() {
      const container = document.getElementById('featuredProducts');
      container.innerHTML = '';
      const featured = products.filter(p => p.isNew || p.isBestseller).slice(0, 8);
      featured.forEach(product => renderProductCard(product, container));
    }

    function renderProducts() {
      const container = document.getElementById('productsGrid');
      container.innerHTML = '';
      let filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
      if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
      else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
      else if (currentSort === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      document.getElementById('productCount').textContent = `Showing ${filtered.length} products`;
      filtered.forEach(product => renderProductCard(product, container));
    }

    function renderProductDetail() {
      const productId = parseInt(localStorage.getItem('currentProduct') || '1');
      const product = products.find(p => p.id === productId);
      if (!product) { navigate('shop'); return; }

      // Get existing reviews or empty array
      const reviews = productReviews[productId] || [];
      const hasReviews = reviews.length > 0;

      const container = document.getElementById('productDetail');
      container.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="aspect-[3/4] bg-brand-sand rounded-2xl overflow-hidden">
            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
          </div>
          <div>
            <h1 class="font-display text-4xl font-semibold mb-4">${product.title}</h1>
            <div class="flex items-center gap-4 mb-6">
              <span class="font-display text-3xl font-semibold">$${product.price}</span>
            </div>
            <p class="text-brand-gray mb-8">${product.description}</p>
            <div class="space-y-6 mb-8">
              <div>
                <label class="block text-sm font-medium mb-3">Size</label>
                <div class="flex gap-3">
                  ${['XS', 'S', 'M', 'L', 'XL'].map(size => `
                    <button class="size-btn w-12 h-12 border border-brand-light rounded-lg hover:border-brand-black transition-colors" onclick="selectSize(this, '${size}')">${size}</button>
                  `).join('')}
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-3">Quantity</label>
                <div class="flex items-center border border-brand-light rounded-lg w-fit">
                  <button onclick="updateDetailQty(-1)" class="px-4 py-3 hover:bg-brand-sand transition-colors">-</button>
                  <span id="detailQty" class="px-4 py-3 min-w-[60px] text-center">1</span>
                  <button onclick="updateDetailQty(1)" class="px-4 py-3 hover:bg-brand-sand transition-colors">+</button>
                </div>
              </div>
            </div>
            <div class="flex gap-4 mb-8">
              <button onclick="handleAddToCartWithSize(${product.id})" class="btn-primary flex-1 py-4 rounded-lg text-sm tracking-wide">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- CUSTOMER REVIEWS SECTION -->
        <div class="mt-20 border-t border-brand-light pt-12">
          <h2 class="font-display text-3xl font-semibold mb-8">Customer Reviews</h2>
          
          <div class="grid lg:grid-cols-3 gap-12">
             <!-- Review List -->
             <div class="lg:col-span-2 space-y-6">
                <div id="reviewsList">
                    ${hasReviews ? reviews.map(review => `
                        <div class="bg-white p-6 rounded-xl mb-4">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center font-display font-semibold">${review.name.charAt(0).toUpperCase()}</div>
                                    <div>
                                        <p class="font-semibold">${review.name}</p>
                                        <p class="text-brand-gray text-xs">${review.date}</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    ${Array(5).fill(0).map((_, i) => `<svg class="w-4 h-4 ${i < review.rating ? 'text-brand-gold' : 'text-brand-light'}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
                                </div>
                            </div>
                            <p class="text-brand-gray mt-3">${review.text}</p>
                        </div>
                    `).join('') : `
                        <div class="text-center py-12 bg-white rounded-xl">
                            <svg class="w-16 h-16 text-brand-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                            <p class="text-brand-gray font-medium">No reviews yet. Be the first to share your experience!</p>
                        </div>
                    `}
                </div>
             </div>

             <!-- Review Form -->
             <div class="bg-white p-8 rounded-2xl h-fit sticky top-24">
                <h3 class="font-display text-xl font-semibold mb-6">Write a Review</h3>
                <form onsubmit="submitReview(event, ${product.id})" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">Name</label>
                        <input type="text" id="reviewName" required class="w-full px-4 py-3 border border-brand-light rounded-lg bg-transparent transition-all" placeholder="Your name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Rating</label>
                        <div id="starRating" class="star-rating flex gap-1">
                            ${[1,2,3,4,5].map(i => `
                                <span class="star inactive text-2xl cursor-pointer" data-value="${i}" onclick="setRating(${i})">&#9733;</span>
                            `).join('')}
                        </div>
                        <input type="hidden" id="reviewRating" value="0">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Review</label>
                        <textarea id="reviewText" rows="4" required class="w-full px-4 py-3 border border-brand-light rounded-lg bg-transparent transition-all resize-none" placeholder="Share your thoughts..."></textarea>
                    </div>
                    <button type="submit" class="btn-primary w-full py-3 rounded-lg text-sm tracking-wide">Submit Review</button>
                </form>
             </div>
          </div>
        </div>

        <!-- RECOMMENDED PRODUCTS SECTION -->
        <div class="mt-20">
            <h2 class="font-display text-3xl font-semibold mb-8">You May Also Like</h2>
            <div id="relatedProducts" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
        </div>
      `;
      
      // Render related products
      const relatedContainer = document.getElementById('relatedProducts');
      const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
      related.forEach(p => renderProductCard(p, relatedContainer));
      
      window.currentQuantity = 1;
      window.selectedSize = null;
      window.currentRating = 0;
    }

    // ========== REVIEW LOGIC ==========
    function setRating(rating) {
        window.currentRating = rating;
        document.getElementById('reviewRating').value = rating;
        const stars = document.querySelectorAll('#starRating .star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('inactive');
                star.classList.add('active');
            } else {
                star.classList.remove('active');
                star.classList.add('inactive');
            }
        });
    }

    function submitReview(e, productId) {
        e.preventDefault();
        const name = document.getElementById('reviewName').value;
        const rating = window.currentRating;
        const text = document.getElementById('reviewText').value;

        if(rating === 0) {
            showNotification('Please select a star rating', 'error');
            return;
        }

        const newReview = {
            name,
            rating,
            text,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };

        if (!productReviews[productId]) {
            productReviews[productId] = [];
        }
        productReviews[productId].unshift(newReview);
        localStorage.setItem('luxeReviews', JSON.stringify(productReviews));

        showNotification('Thank you for your review!');
        renderProductDetail(); // Re-render to show new review
    }

    function renderCart() {
      const container = document.getElementById('cartContent');
      if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-16"><h2 class="font-display text-2xl font-semibold mb-4">Your Cart is Empty</h2><button onclick="navigate('shop')" class="btn-primary px-8 py-4 text-sm tracking-wide">Continue Shopping</button></div>`;
        return;
      }
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const shipping = subtotal >= 150 ? 0 : 12;
      const total = subtotal + shipping;
      container.innerHTML = `
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-4">
            ${cart.map(item => `
              <div class="flex gap-6 p-4 bg-white rounded-xl">
                <div class="w-24 h-32 bg-brand-sand rounded-lg overflow-hidden flex-shrink-0"><img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover"></div>
                <div class="flex-1">
                  <div class="flex justify-between">
                    <div><h3 class="font-medium mb-1">${item.title}</h3>${item.size ? `<p class="text-brand-gray text-sm">Size: ${item.size}</p>` : ''}</div>
                    <button onclick="removeFromCart(${item.id}, '${item.size || ''}')" class="text-brand-gray hover:text-red-500 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg></button>
                  </div>
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center border border-brand-light rounded-lg">
                      <button onclick="updateCartItem(${item.id}, '${item.size || ''}', -1)" class="px-3 py-2 hover:bg-brand-sand transition-colors">-</button>
                      <span class="px-3 py-2 min-w-[40px] text-center">${item.quantity}</span>
                      <button onclick="updateCartItem(${item.id}, '${item.size || ''}', 1)" class="px-3 py-2 hover:bg-brand-sand transition-colors">+</button>
                    </div>
                    <p class="font-display text-xl font-semibold">$${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="bg-white p-8 rounded-2xl h-fit sticky top-24">
            <h2 class="font-display text-2xl font-semibold mb-6">Order Summary</h2>
            <div class="space-y-4 pb-6 border-b border-brand-light"><div class="flex justify-between"><span class="text-brand-gray">Subtotal</span><span>$${subtotal.toFixed(2)}</span></div><div class="flex justify-between"><span class="text-brand-gray">Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div></div>
            <div class="flex justify-between py-6 text-lg font-semibold"><span>Total</span><span>$${total.toFixed(2)}</span></div>
            <button onclick="checkout()" class="btn-primary w-full py-4 rounded-lg text-sm tracking-wide">Checkout</button>
          </div>
        </div>
      `;
    }

    // ========== AUTH FUNCTIONS ==========
    function handleUserClick() {
      if (isLoggedIn) logout();
      else openLoginModal();
    }
    function openLoginModal() { document.getElementById('loginModal').classList.remove('hidden'); document.getElementById('loginModal').classList.add('flex'); }
    function closeLoginModal() { document.getElementById('loginModal').classList.add('hidden'); document.getElementById('loginModal').classList.remove('flex'); document.getElementById('loginError').classList.add('hidden'); }
    function handleLogin(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      if (email === 'demo@luxe.com' && password === 'demo123') {
        isLoggedIn = true;
        currentUser = { email: email, name: 'Guest User' };
        localStorage.setItem('luxeLoggedIn', 'true');
        localStorage.setItem('luxeUser', JSON.stringify(currentUser));
        updateAuthUI();
        closeLoginModal();
        showNotification('Welcome back!');
      } else document.getElementById('loginError').classList.remove('hidden');
    }
    function logout() { isLoggedIn = false; currentUser = null; localStorage.removeItem('luxeLoggedIn'); localStorage.removeItem('luxeUser'); updateAuthUI(); showNotification('You have been logged out'); }
    function updateAuthUI() { const btn = document.getElementById('mobileAuthBtn'); if (isLoggedIn) { btn.textContent = 'Logout'; btn.classList.remove('btn-primary'); btn.classList.add('btn-secondary'); } else { btn.textContent = 'Login'; btn.classList.add('btn-primary'); btn.classList.remove('btn-secondary'); } }

    // ========== CART FUNCTIONS ==========
    function handleAddToCart(productId) { if (!isLoggedIn) { openLoginModal(); return; } addToCart(productId); }
    function handleAddToCartWithSize(productId) {
      if (!isLoggedIn) { openLoginModal(); return; }
      if (!window.selectedSize) { showNotification('Please select a size', 'error'); return; }
      const product = products.find(p => p.id === productId);
      const existingItem = cart.find(item => item.id === productId && item.size === window.selectedSize);
      if (existingItem) existingItem.quantity += window.currentQuantity || 1;
      else cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: window.currentQuantity || 1, size: window.selectedSize });
      saveCart();
      showNotification(`${product.title} added to cart`);
    }
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      const existingItem = cart.find(item => item.id === productId && !item.size);
      if (existingItem) existingItem.quantity++;
      else cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1, size: null });
      saveCart();
      showNotification(`${product.title} added to cart`);
    }
    function removeFromCart(productId, size) { cart = cart.filter(item => !(item.id === productId && item.size === size)); saveCart(); renderCart(); }
    function updateCartItem(productId, size, change) { const item = cart.find(item => item.id === productId && item.size === size); if (item) { item.quantity += change; if (item.quantity <= 0) removeFromCart(productId, size); else { saveCart(); renderCart(); } } }
    function saveCart() { localStorage.setItem('luxeCart', JSON.stringify(cart)); updateCartCount(); }
    function updateCartCount() { const count = cart.reduce((sum, item) => sum + item.quantity, 0); const badge = document.getElementById('cartCount'); if (count > 0) { badge.textContent = count; badge.classList.remove('hidden'); } else badge.classList.add('hidden'); }
    function checkout() { cart = []; saveCart(); document.getElementById('orderNumber').textContent = Math.random().toString(36).substring(2, 10).toUpperCase(); navigate('success'); }

    // ========== PRODUCT FUNCTIONS ==========
    function viewProduct(productId) { localStorage.setItem('currentProduct', productId); navigate('product'); }
    function selectSize(button, size) { document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('bg-brand-black', 'text-white', 'border-brand-black')); button.classList.add('bg-brand-black', 'text-white', 'border-brand-black'); window.selectedSize = size; }
    function updateDetailQty(change) { window.currentQuantity = Math.max(1, (window.currentQuantity || 1) + change); document.getElementById('detailQty').textContent = window.currentQuantity; }

    // ========== FILTER & SORT ==========
    function filterProducts(category) { currentFilter = category; document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active')); event.target.classList.add('active'); renderProducts(); }
    function filterByCategory(category) { currentFilter = category; navigate('shop'); setTimeout(() => { document.querySelectorAll('.filter-btn').forEach(btn => { btn.classList.remove('active'); if (btn.textContent.toLowerCase() === category || (category === 'all' && btn.textContent === 'All')) btn.classList.add('active'); }); renderProducts(); }, 100); }
    function sortProducts() { currentSort = document.getElementById('sortSelect').value; renderProducts(); }

    // ========== SEARCH ==========
    function openSearch() { document.getElementById('searchModal').classList.remove('hidden'); document.getElementById('searchModal').classList.add('flex'); document.getElementById('searchInput').focus(); }
    function closeSearch() { document.getElementById('searchModal').classList.add('hidden'); document.getElementById('searchModal').classList.remove('flex'); }
    function performSearch(query) { const results = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())); const container = document.getElementById('searchResults'); if (query.length < 2) { container.innerHTML = '<p class="text-brand-gray text-center py-4">Type to search</p>'; return; } container.innerHTML = results.length === 0 ? '<p class="text-brand-gray text-center py-4">No products found</p>' : results.slice(0, 6).map(p => `<div onclick="viewProduct(${p.id}); closeSearch();" class="flex items-center gap-4 p-4 hover:bg-brand-sand rounded-lg cursor-pointer transition-colors"><img src="${p.image}" alt="${p.title}" class="w-16 h-20 object-cover rounded-lg"><div><h4 class="font-medium">${p.title}</h4><p class="text-brand-gray text-sm">$${p.price}</p></div></div>`).join(''); }

    // ========== UI HELPERS ==========
    function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }
    function showNotification(message, type = 'success') { const notification = document.createElement('div'); notification.className = `fixed bottom-6 right-6 ${type === 'error' ? 'bg-red-500' : 'bg-brand-black'} text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slideIn`; notification.textContent = message; document.body.appendChild(notification); setTimeout(() => notification.remove(), 3000); }

    // ========== EVENT LISTENERS ==========
    function setupEventListeners() {
      document.getElementById('mobileMenuBtn').addEventListener('click', () => { document.getElementById('mobileMenu').classList.add('open'); document.getElementById('overlay').classList.add('open'); });
      document.getElementById('closeMobileMenu').addEventListener('click', closeMobileMenu);
      document.getElementById('searchBtn').addEventListener('click', openSearch);
      document.getElementById('searchInput').addEventListener('input', (e) => performSearch(e.target.value));
      document.getElementById('searchModal').addEventListener('click', (e) => { if (e.target === document.getElementById('searchModal')) closeSearch(); });
      document.getElementById('newsletterForm').addEventListener('submit', (e) => { e.preventDefault(); showNotification('Thank you for subscribing!'); e.target.reset(); });
      document.getElementById('contactForm').addEventListener('submit', (e) => { e.preventDefault(); showNotification('Message sent successfully!'); e.target.reset(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSearch(); closeLoginModal(); closeMobileMenu(); } });
    }
  
