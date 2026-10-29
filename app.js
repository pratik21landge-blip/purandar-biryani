/**
 * Purandar Biryani House & Chinese (पुरंदर बिर्याणी हाऊस अँड चायनिज)
 * Interactive Application & Menu Engine
 */

// Restaurant Information
const RESTAURANT_CONFIG = {
  name: "Purandar Biryani House & Chinese",
  marathiName: "पुरंदर बिर्याणी हाऊस अँड चायनिज",
  phone: "+91 98220 00000",
  whatsappNumber: "919822000000", // Default WhatsApp number for online orders
  mapsLink: "https://maps.app.goo.gl/StgWNgZBo4HrTPgm6",
  address: "Kamate Nagar Road, Near Kondhwa Budruk / Undri Link Road, Pune, Maharashtra 411048",
  openHour: 11, // 11:30 AM
  openMinute: 30,
  closeHour: 23, // 11:30 PM
  closeMinute: 30
};

// Menu Data Store
const MENU_ITEMS = [
  // --- Dum Biryani ---
  {
    id: "bir-1",
    nameMarathi: "पुरंदर स्पेशल चिकन दम बिर्याणी",
    nameEnglish: "Purandar Special Chicken Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    price: 240,
    badge: "Bestseller ⭐",
    description: "Our signature dum biryani slow-cooked with tender marinated chicken, saffron basmati rice, and authentic secret Purandar spices. Served with spicy rassa & cooling raita.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bir-2",
    nameMarathi: "पुरंदर मटण दम बिर्याणी",
    nameEnglish: "Purandar Special Mutton Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    price: 360,
    badge: "Chef's Pride 👑",
    description: "Succulent pieces of fresh baby goat meat layered with fragrant long-grain rice, caramelized onions, and traditional Desi spices in sealed earthen pot.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bir-3",
    nameMarathi: "चिकन दम बिर्याणी (हाफ / रेग्युलर)",
    nameEnglish: "Chicken Dum Biryani (Regular)",
    category: "biryani",
    diet: "non-veg",
    price: 180,
    badge: "Popular 🔥",
    description: "Classic tender chicken dum biryani infused with aromatic spices, fresh mint, and coriander. Perfect portion for individual cravings.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bir-4",
    nameMarathi: "अंडा दम बिर्याणी",
    nameEnglish: "Egg Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    price: 160,
    badge: "Student Favorite",
    description: "Golden pan-fried spiced eggs nestled in layered saffron basmati rice with fragrant spices and served with gravy.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bir-5",
    nameMarathi: "पनीर दम बिर्याणी",
    nameEnglish: "Royal Paneer Dum Biryani",
    category: "biryani",
    diet: "veg",
    price: 210,
    badge: "Veg Special 🌱",
    description: "Fresh cottage cheese cubes marinated in rich curd, shahi garam masala, and slow cooked under seal with basmati rice.",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bir-6",
    nameMarathi: "व्हेज दम बिर्याणी",
    nameEnglish: "Hyderabadi Veg Dum Biryani",
    category: "biryani",
    diet: "veg",
    price: 180,
    badge: "Pure Veg",
    description: "Loaded with fresh garden veggies, green peas, carrots, fried cashews, and aromatic spices. Served with curd raita.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },

  // --- Chinese Starters ---
  {
    id: "chi-1",
    nameMarathi: "चिकन क्रिस्पी",
    nameEnglish: "Chicken Crispy",
    category: "chinese-starters",
    diet: "non-veg",
    price: 210,
    badge: "Top Rated ⭐",
    description: "Thinly shredded crunchy chicken tossed in tangy spicy Indo-Chinese sauce with bell peppers, spring onions, and garlic.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-2",
    nameMarathi: "चिकन लॉलीपॉप (ऑइल फ्राय)",
    nameEnglish: "Chicken Lollipop (Dry)",
    category: "chinese-starters",
    diet: "non-veg",
    price: 200,
    badge: "Must Try 🍗",
    description: "6 Pieces of french chicken winglets seasoned in aromatic spices, fried to golden perfection, served with house Schezwan chutney.",
    image: "https://images.unsplash.com/photo-1527477378672-03c0cae360b4?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-3",
    nameMarathi: "चिकन लॉलीपॉप मसाला ग्रेव्ही",
    nameEnglish: "Chicken Lollipop Masala Gravy",
    category: "chinese-starters",
    diet: "non-veg",
    price: 230,
    badge: "Spicy 🌶️",
    description: "Crisp fried lollipop tossed in fiery garlic, ginger, soya, and fiery schezwan masala gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-4",
    nameMarathi: "चिकन चिली (ड्राय)",
    nameEnglish: "Chicken Chilli (Dry)",
    category: "chinese-starters",
    diet: "non-veg",
    price: 190,
    badge: "Classic",
    description: "Boneless chicken cubes stir-fried with dark soya sauce, crunchy capsicum, onion petals, and fresh green chillies.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-5",
    nameMarathi: "पनीर चिली",
    nameEnglish: "Paneer Chilli Dry",
    category: "chinese-starters",
    diet: "veg",
    price: 190,
    badge: "Veg Favorite 🌱",
    description: "Soft paneer cubes tossed in high-flame wok with garlic, soy sauce, green chillies, and bell peppers.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-6",
    nameMarathi: "व्हेज मंचुरियन ड्राय",
    nameEnglish: "Veg Manchurian Dry",
    category: "chinese-starters",
    diet: "veg",
    price: 150,
    badge: "Crispy",
    description: "Deep fried vegetable dumplings coated in savory Chinese glaze with minced ginger, garlic, and coriander leaves.",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chi-7",
    nameMarathi: "व्हेज क्रिस्पी",
    nameEnglish: "Veg Crispy",
    category: "chinese-starters",
    diet: "veg",
    price: 160,
    badge: "Crunchy",
    description: "Batter-fried exotic seasonal vegetables tossed in sweet, sour, and spicy wok reduction.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80"
  },

  // --- Noodles & Fried Rice ---
  {
    id: "ric-1",
    nameMarathi: "चिकन ट्रिपल शेजवान राईस",
    nameEnglish: "Chicken Triple Schezwan Rice",
    category: "noodles-rice",
    diet: "non-veg",
    price: 240,
    badge: "Crowd Favorite 🏆",
    description: "The ultimate Pune street classic: fried rice, hakka noodles, and chicken bits tossed in schezwan sauce, topped with omelette & served with rich manchurian gravy.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ric-2",
    nameMarathi: "चिकन हक्का नुडल्स",
    nameEnglish: "Chicken Hakka Noodles",
    category: "noodles-rice",
    diet: "non-veg",
    price: 180,
    badge: "Wok Tossed",
    description: "Smoky wok-tossed long wheat noodles with juicy shredded chicken, julienned cabbage, carrots, and spring onion greens.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ric-3",
    nameMarathi: "चिकन शेजवान फ्राईड राईस",
    nameEnglish: "Chicken Schezwan Fried Rice",
    category: "noodles-rice",
    diet: "non-veg",
    price: 190,
    badge: "Spicy 🌶️",
    description: "Spiced wok-fried basmati rice cooked with tender chicken cuts and house-made pungent Schezwan chili paste.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ric-4",
    nameMarathi: "व्हेज ट्रिपल शेजवान राईस",
    nameEnglish: "Veg Triple Schezwan Rice",
    category: "noodles-rice",
    diet: "veg",
    price: 200,
    badge: "Veg Bestseller 🌱",
    description: "Combination of stir-fried noodles and rice in schezwan sauce, served alongside crispy fried noodles and piping hot veg manchurian gravy pot.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ric-5",
    nameMarathi: "व्हेज हक्का नुडल्स",
    nameEnglish: "Veg Hakka Noodles",
    category: "noodles-rice",
    diet: "veg",
    price: 140,
    badge: "Light & Tasty",
    description: "Traditional stir-fried noodles with fresh shredded vegetables, white pepper, and light soya sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ric-6",
    nameMarathi: "अंडा फ्राईड राईस",
    nameEnglish: "Egg Fried Rice",
    category: "noodles-rice",
    diet: "non-veg",
    price: 160,
    badge: "Protein Rich",
    description: "Fluffy rice tossed with scrambled farm-fresh eggs, spring onions, cracked black pepper, and butter.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
  },

  // --- Soups ---
  {
    id: "sop-1",
    nameMarathi: "चिकन मान्चो सूप",
    nameEnglish: "Chicken Manchow Soup",
    category: "soups",
    diet: "non-veg",
    price: 120,
    badge: "Hot & Spicy",
    description: "Thick savory soup packed with shredded chicken, ginger, garlic, and fresh herbs. Accompanied by crispy fried noodles bowl.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "sop-2",
    nameMarathi: "व्हेज मान्चो सूप",
    nameEnglish: "Veg Manchow Soup",
    category: "soups",
    diet: "veg",
    price: 100,
    badge: "Pure Veg 🌱",
    description: "Warm, aromatic vegetable broth seasoned with garlic, dark soya, and chopped coriander, served with crunchy noodles.",
    image: "https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?w=600&auto=format&fit=crop&q=80"
  },

  // --- Tandoori & Kebabs ---
  {
    id: "tan-1",
    nameMarathi: "तंदुरी चिकन (फुल / हाफ)",
    nameEnglish: "Tandoori Chicken (Half / Full)",
    category: "tandoori",
    diet: "non-veg",
    price: 220,
    badge: "Charcoal Sizzle 🔥",
    description: "Chicken marinated in Kashmiri chilli, yogurt, mustard oil, and ground spices, roasted to smoky tenderness in clay oven.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "tan-2",
    nameMarathi: "चिकन टिक्का कबाब",
    nameEnglish: "Chicken Tikka Kebab",
    category: "tandoori",
    diet: "non-veg",
    price: 230,
    badge: "Juicy",
    description: "Charcoal grilled boneless chicken tikka skewers sprinkled with chat masala, served with mint chutney and onion salad.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80"
  },

  // --- Combos & Handi ---
  {
    id: "com-1",
    nameMarathi: "पुरंदर चिकन बिर्याणी हंडी (१ किलो)",
    nameEnglish: "Purandar Chicken Biryani Handi (1 Kg)",
    category: "combos",
    diet: "non-veg",
    price: 750,
    badge: "Family Pack (4-5 Persons)",
    description: "Special party handi with 1 Kg slow-cooked fragrant dum biryani, loaded with tender chicken pieces, 4 boiled eggs, large rassa & raita.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "com-2",
    nameMarathi: "पुरंदर मटण बिर्याणी हंडी (१ किलो)",
    nameEnglish: "Purandar Mutton Biryani Handi (1 Kg)",
    category: "combos",
    diet: "non-veg",
    price: 1199,
    badge: "Grand Feast 👑",
    description: "Slow dum cooked tender mutton handi with royal spices, rich saffron aroma, served in sealed traditional container with accompaniments.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "com-3",
    nameMarathi: "चायनिज फॅमिली फेस्ट कॉम्बो",
    nameEnglish: "Chinese Family Feast Combo",
    category: "combos",
    diet: "non-veg",
    price: 599,
    badge: "Combo Deal 🔥",
    description: "1 Chicken Triple Schezwan Rice + 1 Chicken Lollipop (Dry) + 2 Chicken Manchow Soups + Schezwan Chutney.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80"
  }
];

// App State
let cart = {};
let activeCategory = "all";
let activeDiet = "all"; // 'all', 'veg', 'non-veg'
let searchQuery = "";
let orderType = "delivery"; // 'delivery' or 'takeaway'

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  renderDishes();
  initEventListeners();
  updateLiveTimingStatus();
  loadCartFromStorage();
});

// Render Dishes based on filters
function renderDishes() {
  const container = document.getElementById("dishesGrid");
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    // Category match
    const matchesCategory = (activeCategory === "all") || (item.category === activeCategory);
    
    // Diet match
    const matchesDiet = (activeDiet === "all") || (item.diet === activeDiet);
    
    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.nameEnglish.toLowerCase().includes(q) || 
      item.nameMarathi.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q);

    return matchesCategory && matchesDiet && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🍲</div>
        <h4>No matching dishes found</h4>
        <p>Try searching for "Biryani", "Lollipop", "Noodles", or clear the diet filter.</p>
        <button class="btn-secondary-outline" style="margin-top: 15px;" onclick="resetFilters()">Show All Dishes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(dish => {
    const qty = cart[dish.id] ? cart[dish.id].quantity : 0;
    const isVeg = dish.diet === "veg";

    return `
      <div class="dish-card" data-id="${dish.id}">
        <div class="dish-image-wrapper">
          <img src="${dish.image}" alt="${dish.nameEnglish}" class="dish-img" loading="lazy">
          ${dish.badge ? `<span class="dish-badge-tag">${dish.badge}</span>` : ""}
          <div class="dish-diet-icon" title="${isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
            <span class="${isVeg ? 'veg-symbol' : 'nonveg-symbol'}"></span>
          </div>
        </div>

        <div class="dish-body">
          <div class="dish-title-group">
            <h3 class="dish-name-marathi">${dish.nameMarathi}</h3>
            <div class="dish-name-english">${dish.nameEnglish}</div>
          </div>

          <p class="dish-desc">${dish.description}</p>

          <div class="dish-footer">
            <div class="dish-price">₹${dish.price}</div>

            <div class="dish-action-area" id="action-${dish.id}">
              ${qty > 0 ? renderQtyController(dish.id, qty) : `
                <button class="btn-add-cart" onclick="addToCart('${dish.id}')">
                  <span>+ ADD</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderQtyController(dishId, qty) {
  return `
    <div class="qty-controller">
      <button class="btn-qty-minus" onclick="decreaseQty('${dishId}')" aria-label="Decrease quantity">−</button>
      <span class="qty-number">${qty}</span>
      <button class="btn-qty-plus" onclick="addToCart('${dishId}')" aria-label="Increase quantity">+</button>
    </div>
  `;
}

// Cart Logic
function addToCart(dishId) {
  const item = MENU_ITEMS.find(d => d.id === dishId);
  if (!item) return;

  if (cart[dishId]) {
    cart[dishId].quantity += 1;
  } else {
    cart[dishId] = {
      ...item,
      quantity: 1
    };
  }

  saveCartToStorage();
  updateCartUI();
  updateDishCardAction(dishId);
}

function decreaseQty(dishId) {
  if (!cart[dishId]) return;

  if (cart[dishId].quantity > 1) {
    cart[dishId].quantity -= 1;
  } else {
    delete cart[dishId];
  }

  saveCartToStorage();
  updateCartUI();
  updateDishCardAction(dishId);
}

function updateDishCardAction(dishId) {
  const actionDiv = document.getElementById(`action-${dishId}`);
  if (!actionDiv) return;

  const qty = cart[dishId] ? cart[dishId].quantity : 0;
  if (qty > 0) {
    actionDiv.innerHTML = renderQtyController(dishId, qty);
  } else {
    actionDiv.innerHTML = `
      <button class="btn-add-cart" onclick="addToCart('${dishId}')">
        <span>+ ADD</span>
      </button>
    `;
  }
}

function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const drawerList = document.getElementById("cartItemsList");
  const totalDisplay = document.getElementById("cartTotalValue");

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);

  countBadges.forEach(b => {
    b.textContent = totalItems;
  });

  if (totalDisplay) {
    totalDisplay.textContent = `₹${grandTotal}`;
  }

  if (drawerList) {
    if (totalItems === 0) {
      drawerList.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-icon">🍲</div>
          <h4>Your cart is empty</h4>
          <p>Explore our delicious Dum Biryanis & sizzling Chinese starters!</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = Object.values(cart).map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.nameMarathi}</div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">${item.nameEnglish}</div>
            <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
          </div>
          <div class="qty-controller">
            <button class="btn-qty-minus" onclick="decreaseQty('${item.id}')">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="btn-qty-plus" onclick="addToCart('${item.id}')">+</button>
          </div>
        </div>
      `).join("");
    }
  }
}

function toggleCartDrawer(open) {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (!overlay || !drawer) return;

  if (open) {
    overlay.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Checkout on WhatsApp
function checkoutViaWhatsApp() {
  const items = Object.values(cart);
  if (items.length === 0) {
    alert("Please add at least one dish to your order!");
    return;
  }

  const nameInput = document.getElementById("custName");
  const phoneInput = document.getElementById("custPhone");
  const addrInput = document.getElementById("custAddress");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const customerAddress = addrInput ? addrInput.value.trim() : "";

  const grandTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let message = `*🍽️ New Order - पुरंदर बिर्याणी हाऊस अँड चायनिज*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Order Type:* ${orderType === 'delivery' ? '🚀 Doorstep Delivery' : '🥡 Counter Pickup / Takeaway'}\n`;
  
  if (customerName) message += `*Customer:* ${customerName}\n`;
  if (customerPhone) message += `*Contact:* ${customerPhone}\n`;
  if (orderType === 'delivery' && customerAddress) {
    message += `*Delivery Address:* ${customerAddress}\n`;
  }
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Items Ordered:*\n`;

  items.forEach((item, idx) => {
    message += `${idx + 1}. ${item.nameMarathi} (${item.nameEnglish})\n`;
    message += `   Qty: ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Total Amount:* ₹${grandTotal}\n`;
  message += `*Restaurant Location:* Kamate Nagar Road, Pune 411048\n`;
  message += `*Maps:* ${RESTAURANT_CONFIG.mapsLink}\n\n`;
  message += `Please confirm my order and share estimated preparation time. Thank you!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`;
  
  window.open(waUrl, "_blank");
}

// Event Listeners
function initEventListeners() {
  // Category tabs
  const catButtons = document.querySelectorAll(".category-tab-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      renderDishes();
    });
  });

  // Diet filters
  const dietButtons = document.querySelectorAll(".diet-pill");
  dietButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dietButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiet = btn.getAttribute("data-diet") || "all";
      renderDishes();
    });
  });

  // Search input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderDishes();
    });
  }

  // Order Type Buttons (Delivery / Takeaway)
  const orderTypeBtns = document.querySelectorAll(".order-type-btn");
  const addressFieldGroup = document.getElementById("addressFieldGroup");
  orderTypeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      orderTypeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      orderType = btn.getAttribute("data-type") || "delivery";
      if (addressFieldGroup) {
        addressFieldGroup.style.display = orderType === "delivery" ? "block" : "none";
      }
    });
  });

  // Scroll header styling
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function resetFilters() {
  activeCategory = "all";
  activeDiet = "all";
  searchQuery = "";

  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".category-tab-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-category") === "all");
  });

  document.querySelectorAll(".diet-pill").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-diet") === "all");
  });

  renderDishes();
}

function updateLiveTimingStatus() {
  const statusElem = document.getElementById("liveOpenStatus");
  if (!statusElem) return;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = RESTAURANT_CONFIG.openHour * 60 + RESTAURANT_CONFIG.openMinute;
  const closeMinutes = RESTAURANT_CONFIG.closeHour * 60 + RESTAURANT_CONFIG.closeMinute;

  if (currentMinutes >= openMinutes && currentMinutes <= closeMinutes) {
    statusElem.innerHTML = `<span class="pulse-dot"></span> Open Today: 11:30 AM – 11:30 PM`;
    statusElem.style.color = "#4ade80";
  } else {
    statusElem.innerHTML = `<span class="pulse-dot" style="background:#f59e0b;"></span> Opens at 11:30 AM`;
    statusElem.style.color = "#fbbf24";
  }
}

// LocalStorage helpers
function saveCartToStorage() {
  try {
    localStorage.setItem("purandar_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Cart save error", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("purandar_cart");
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
      renderDishes();
    }
  } catch (e) {
    console.error("Cart load error", e);
  }
}
