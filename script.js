/**
 * HERBVIAN - PURE PLANT-BASED LOOFAH ESSENTIALS
 * International E-Commerce SPA Controller & 3D Interactive Logic
 */

// ========================================================
// 1. DATA REPOSITORY: CURRENCY, PRODUCTS, BLOGS & ORDERS
// ========================================================
let selectedCurrency = "USD";
const CURRENCY_RATES = {
  USD: { symbol: "$", rate: 1, pos: "before" },
  CAD: { symbol: "C$", rate: 1.36, pos: "before" },
  EUR: { symbol: "€", rate: 0.92, pos: "before" },
  GBP: { symbol: "£", rate: 0.79, pos: "before" },
  VND: { symbol: "₫", rate: 25000, pos: "after" }
};

const PRODUCTS_DATA = [
  {
    id: 100,
    name: "6pcs Natural Vietnamese Loofah Sponge",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 18.99,
    originalPriceUSD: 25.00,
    priceAFN: "2.000 AFN",
    originalPriceAFN: "2.700 AFN",
    rating: 5.0,
    reviewsCount: 1624,
    image: "assets/6pcs_loofah_main.png",
    badge: "SALE",
    badgeType: "hot",
    isBestSeller: true,
    tagline: "Earth-Friendly Exfoliation for a Happy, Healthy Glow!",
    bullets: [
      "🌿 Eco-friendly luxury for a plastic-free lifestyle",
      "✨ Gentle exfoliation for radiant, silky-smooth skin",
      "🍃 Pure, chemical-free care safe for your family",
      "🏡 Versatile cleaning from spa showers to kitchen sinks"
    ],
    gallery: [
      "assets/6pcs_loofah_main.png",
      "assets/thoughtful_design.jpg",
      "assets/prod_bath_pad.jpg",
      "assets/prod_dish_sponge.jpg",
      "assets/advanced_exfoliation.jpg"
    ],
    description: "Hand-harvested from mature Vietnamese botanical loofah vines. 100% plant-based, unbleached, and naturally dried under the tropical sun. Set of 6 compressed pads that swell in warm water.",
    specs: [
      "Material: 100% Mature Dried Luffa Aegyptiaca",
      "Quantity: 6 Compressed Pads with Organic Cotton Loops",
      "Expansion: Swells up to 3x in warm water within 20 seconds",
      "100% Backyard Compostable & Biodegradable"
    ]
  },
  {
    id: 1,
    name: "Herbvian Organic Round Bath Sponge with Cotton Strap",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 9.99,
    originalPriceUSD: 14.99,
    rating: 4.9,
    reviewsCount: 2420,
    image: "assets/thoughtful_design.jpg",
    badge: "Best Seller",
    badgeType: "hot",
    isBestSeller: true,
    description: "Handcrafted from 100% Vietnamese mature organic loofah gourds. Features a soft woven unbleached cotton hand strap for an effortless grip. Stimulates lymphatic circulation, eliminates dead skin cells, and prevents body blemishes naturally.",
    specs: [
      "Material: 100% Natural Organic Loofah & Unbleached Cotton",
      "Diameter: 4.8 inches (12 cm), thickness: 1 inch",
      "Lifespan: 3 - 6 months per sponge",
      "Origin: Sustainably Grown in Long An, Vietnam",
      "Packaging: 100% Recyclable Biodegradable Kraft Paper"
    ]
  },
  {
    id: 2,
    name: "Herbvian Natural Loofah Back Scrubber Strap (28\" Handles)",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 16.99,
    originalPriceUSD: 24.00,
    rating: 5.0,
    reviewsCount: 1980,
    image: "assets/advanced_exfoliation.jpg",
    badge: "Bacne Solution",
    badgeType: "hot",
    isBestSeller: true,
    description: "Generous 28-inch extra-long scrubber with dual reinforced cotton webbed handles. Easily reaches upper and lower back areas to clear clogged pores, alleviate back acne, and smooth keratosis pilaris effortlessly.",
    specs: [
      "Dimensions: 28\" length x 4.5\" width (70cm x 11cm)",
      "Front side: Flattened fibrous organic loofah lattice",
      "Back side: Breathable ultra-soft waffle cotton lining",
      "Softens in 30 seconds of warm water contact"
    ]
  },
  {
    id: 3,
    name: "Herbvian Zero-Waste Kitchen Loofah Scrubbers (Pack of 3)",
    category: "kitchen",
    categoryName: "Eco Kitchen",
    priceUSD: 12.99,
    originalPriceUSD: 18.00,
    rating: 4.9,
    reviewsCount: 1890,
    image: "assets/prod_dish_sponge.jpg",
    badge: "Plastic-Free",
    badgeType: "eco",
    isBestSeller: true,
    description: "Replace foul-smelling plastic sponges with nature's honeycomb scrubber. Creates rich foam with minimal soap, cuts grease instantly, and is completely scratch-safe on cast iron, ceramic, and non-stick pans.",
    specs: [
      "Contents: Pack of 3 Loofah dishwashing pads tied with natural jute twine",
      "Size: 4.3\" x 2.8\" each",
      "Drying speed: Air dries in 15 minutes, preventing bacterial mildew",
      "100% Backyard compostable when worn out"
    ]
  },
  {
    id: 4,
    name: "Herbvian Artisan Loofah Soap Dish & Saver Mat",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 7.99,
    originalPriceUSD: 11.00,
    rating: 4.8,
    reviewsCount: 840,
    image: "assets/prod_soap_tray.jpg",
    badge: "Eco Essential",
    badgeType: "eco",
    isBestSeller: true,
    description: "Thick horizontal loofah slice designed to aerate artisan handmade bar soaps. Promotes 360° airflow beneath the soap bar, stopping soggy melting and doubling your bar soap lifespan. Use the pad itself to clean your sink bowl!",
    specs: [
      "Diameter: 3.5 - 4 inches, thickness: 1 inch",
      "Dual Purpose: Soap draining holder + lavatory sink scrubber",
      "Dries rapidly between showers"
    ]
  },
  {
    id: 5,
    name: "Herbvian Loofah Exfoliating Spa Bath Mitt",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 11.99,
    originalPriceUSD: 16.00,
    rating: 4.8,
    reviewsCount: 620,
    image: "assets/prod_bath_pad.jpg",
    badge: "Spa Favorite",
    badgeType: "eco",
    isBestSeller: false,
    description: "Slip-on mitt with an elastic wrist cuff. One side features gentle loofah fibers for body buffing; the reverse features soft plush terry cloth for gentle lathering. Ideal for dry brushing or wet shower scrubs.",
    specs: [
      "Universal ergonomic fit for left or right hand",
      "Convenient hanging loop for quick air-drying"
    ]
  },
  {
    id: 6,
    name: "Herbvian Whole Dried Organic Loofah Sponge (Pack of 2)",
    category: "kitchen",
    categoryName: "Eco Kitchen",
    priceUSD: 14.99,
    originalPriceUSD: 20.00,
    rating: 4.9,
    reviewsCount: 510,
    image: "assets/prod_back_scrubber.jpg",
    badge: "Raw & Pure",
    badgeType: "hot",
    isBestSeller: false,
    description: "Full-length 16-inch dried loofah gourds in their pure unaltered state. Cut into customized sizes for dish sponges, foot calluses, body care, or even seedling planters.",
    specs: [
      "Length: 16 to 18 inches each (Pack of 2)",
      "Chemical-free, unbleached, raw botanical texture"
    ]
  },
  {
    id: 7,
    name: "Herbvian Gentle Facial Loofah Cleansing Pads (3-Pack)",
    category: "bath",
    categoryName: "Body & Bath Care",
    priceUSD: 8.99,
    originalPriceUSD: 12.00,
    rating: 4.7,
    reviewsCount: 430,
    image: "assets/prod_bath_pad.jpg",
    badge: "Sensitive Skin",
    badgeType: "eco",
    isBestSeller: false,
    description: "Crafted from young, ultra-fine gossamer loofah fibers. Gently sweeps away sebum, blackheads, and dull skin cells without stripping your delicate facial skin barrier.",
    specs: [
      "Diameter: 3.0 inches (Set of 3)",
      "Finger pocket for controlled, gentle pressure"
    ]
  },
  {
    id: 8,
    name: "Herbvian Men's Ultra Loofah Exfoliator Bundle (2-Pack)",
    category: "gift",
    categoryName: "Men's Grooming",
    priceUSD: 9.99,
    originalPriceUSD: 15.00,
    rating: 5.0,
    reviewsCount: 1140,
    image: "assets/mens_packaging.jpg",
    badge: "Men's Choice",
    badgeType: "hot",
    isBestSeller: true,
    description: "Built specifically for modern men's thicker skin. Features dual rugged hanging loops, ultra-durable elastic strap, and 100% natural Vietnamese loofah texture to eliminate body acne and ingrown hairs.",
    specs: [
      "Set includes 2 Men's Ultra Loofah round scrubbers with cotton handles",
      "Handmade • Unbleached • 100% Sustainable & Biodegradable"
    ]
  }
];

const BLOGS_DATA = [
  {
    id: 1,
    title: "Why Natural Loofah Is Dermatologists' Favorite Body Exfoliator",
    date: "October 2026",
    author: "Dr. Catherine Howard, Dermatologist",
    readTime: "4 min read",
    image: "assets/thoughtful_design.jpg",
    content: `
      <p>Body breakouts, folliculitis, and dullness frequently stem from sweat, keratin, and dead skin cells clinging to body pores. While synthetic body poufs often harbor mold and shed microplastics into our waterways, plant-based loofahs offer an organic, skin-loving solution.</p>
      <h4>1. Natural 3D Plant Fiber Geometry</h4>
      <p>Loofah (Luffa aegyptiaca) is a natural dried gourd with an intricate vascular fiber network. Upon soaking in warm water for 20-30 seconds, the cellulose fibers swell into a resilient, supple cushion that delivers physical exfoliation without micro-tears.</p>
      <h4>2. Micro-Circulation & Keratosis Pilaris</h4>
      <p>Gentle buffing stimulates subcutaneous capillary blood flow, encouraging collagen synthesis and expediting the clearance of hyperpigmented acne marks on backs and shoulders.</p>
      <h4>3. Care Guidelines</h4>
      <ul>
        <li>Always saturate with warm water before applying cleanser.</li>
        <li>Rinse thoroughly and hang dry in a well-ventilated area.</li>
        <li>Compost in your garden after 3-5 months of loving use.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "How To Keep Your Plant-Based Kitchen Sponge Fresh for 4+ Months",
    date: "September 2026",
    author: "Herbvian Sustainable Kitchen Lab",
    readTime: "5 min read",
    image: "assets/prod_dish_sponge.jpg",
    content: `
      <p>Switching from synthetic yellow-and-green petrochemical sponges to Herbvian natural loofahs eliminates microplastics from your dish sink. Here is how to keep them sparkling fresh:</p>
      <h4>1. The 15-Minute Air Dry</h4>
      <p>Unlike foam sponges that retain stagnant moisture, loofah’s hollow cellular channels expel water rapidly. Squeeze gently after washing dishes and hang by its cotton cord. It dries completely within 15 minutes.</p>
      <h4>2. Weekly Deep Sanitization</h4>
      <p>Once a week, drop your loofah into boiling water with a splash of white vinegar or a lemon slice for 2 minutes. This eliminates 99.9% of bacteria and cuts through residual cooking grease.</p>
      <h4>3. Closed-Loop Backyard Composting</h4>
      <p>When worn down, chop the loofah into small pieces and bury it in your garden or indoor potted plants. It decomposes into rich organic humus within 30 days.</p>
    `
  },
  {
    id: 3,
    title: "From Vietnamese Family Farms to St. Petersburg, Florida",
    date: "September 2026",
    author: "Herbvian Founder's Note",
    readTime: "6 min read",
    image: "assets/blog_loofah_farm.jpg",
    content: `
      <p>Herbvian was born with a singular mission: to connect traditional, regenerative Vietnamese loofah artisans with eco-conscious households around the world.</p>
      <p>Operating between our US headquarters in St. Petersburg, FL and rural agricultural cooperatives in the Mekong Delta, we uphold rigorous fair-trade, chemical-free standards. Our gourds mature under tropical sun, are hand-peeled with mountain river water, and packed in zero-plastic kraft mailers.</p>
      <p>Thank you for choosing pure nature over plastic. Together, we have prevented over 250,000 plastic sponges from reaching landfills and ocean gyres.</p>
    `
  }
];

// Mock international orders database
const ORDERS_DB = {
  "HERB88": {
    code: "HERB88",
    customer: "Emma Watson",
    phone: "+1 815-669-9699",
    date: "Oct 02, 2026 • 09:30 AM EST",
    statusText: "In Transit with Carrier",
    statusType: "shipping",
    carrier: "USPS Priority Mail (Express Tracked)",
    trackingNumber: "9400 1118 9956 2038 4492 10",
    currentStep: 3,
    destination: "St. Petersburg, FL 33702, United States",
    estimatedDelivery: "Arriving Tomorrow (by 6:00 PM)",
    items: [
      { name: "Herbvian Organic Round Bath Sponge", qty: 2, priceUSD: 9.99 },
      { name: "Herbvian Loofah Back Scrubber Strap", qty: 1, priceUSD: 16.99 }
    ]
  },
  "USPS-9921": {
    code: "USPS-9921",
    customer: "Sarah Jenkins",
    phone: "+1 512-440-1289",
    date: "Oct 01, 2026 • 02:15 PM EST",
    statusText: "Out for Delivery",
    statusType: "shipping",
    carrier: "USPS Local Dispatch",
    trackingNumber: "9405 5036 9930 1124 9901 22",
    currentStep: 3,
    destination: "Austin, TX 78701, United States",
    estimatedDelivery: "On the delivery truck today!",
    items: [
      { name: "Herbvian Ultimate Zero-Waste Starter Bundle", qty: 1, priceUSD: 42.99 }
    ]
  },
  "LOOFAH2026": {
    code: "LOOFAH2026",
    customer: "Marcus Lindqvist",
    phone: "+46 70 123 4567",
    date: "Sep 28, 2026 • 11:00 AM",
    statusText: "Delivered & Signed",
    statusType: "completed",
    carrier: "DHL Express Worldwide",
    trackingNumber: "DHL-GLOBAL-98230192",
    currentStep: 4,
    destination: "Stockholm, Sweden",
    estimatedDelivery: "Delivered on Sep 30, 2026",
    items: [
      { name: "Herbvian Kitchen Loofah Scrubbers (3-Pack)", qty: 2, priceUSD: 12.99 },
      { name: "Herbvian Artisan Loofah Soap Dish", qty: 2, priceUSD: 7.99 }
    ]
  }
};

// ========================================================
// 2. STATE MANAGEMENT
// ========================================================
let cartState = JSON.parse(localStorage.getItem("herbvian_cart")) || [
  { id: 1, qty: 1 },
  { id: 2, qty: 1 }
];

let currentUser = JSON.parse(localStorage.getItem("herbvian_user")) || null;
let activeVoucher = null;
let currentSlideIndex = 0;
let slideIntervalTimer = null;

// ========================================================
// 3. INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render Best Sellers & Catalog
  renderBestSellers();
  renderFullProducts(PRODUCTS_DATA);

  // Initialize Full-width Banner & 3D Interactive Tilt
  initHeroCarousel();
  init3DParallaxTilt();

  // Initialize Cart UI & User UI
  updateCartUI();
  updateUserUI();

  // Search Logic
  initSearchLogic();

  // Initialize PDP Live Countdown Urgency Timer
  initPdpCountdown();

  // Auto trigger friendly chat badge after 4s
  setTimeout(() => {
    const unread = document.getElementById("chatUnreadDot");
    if (unread) unread.style.display = "flex";
  }, 4000);
});

// ========================================================
// 4. CURRENCY CONVERSION & FORMATTER
// ========================================================
function changeCurrency(curr) {
  if (CURRENCY_RATES[curr]) {
    selectedCurrency = curr;
    // Sync both dropdowns if present
    document.querySelectorAll("select[onchange*='changeCurrency']").forEach(sel => {
      sel.value = curr;
    });
    renderBestSellers();
    renderFullProducts(PRODUCTS_DATA);
    updateCartUI();
    if (typeof updatePdpPrices === "function") {
      const currentProduct = PRODUCTS_DATA.find(p => p.id === currentPdpProductId) || PRODUCTS_DATA[0];
      updatePdpPrices(currentProduct);
    }
    showToast(`Currency changed to ${curr} (${CURRENCY_RATES[curr].symbol})`, "info");
  }
}

function formatCurrency(usdAmount) {
  const cfg = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES["USD"];
  const converted = usdAmount * cfg.rate;

  if (selectedCurrency === "VND") {
    return new Intl.NumberFormat("vi-VN").format(Math.round(converted)) + "₫";
  } else {
    return `${cfg.symbol}${converted.toFixed(2)}`;
  }
}

// ========================================================
// 5. NAVIGATION TAB SWITCHING
// ========================================================
function switchNav(pageId) {
  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  document.querySelectorAll(".page-view").forEach(page => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    // Force layout reflow so page transition animation fires cleanly
    void targetPage.offsetWidth;
    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If switching back to home, re-trigger the hero slide animation
    if (pageId === "home" && typeof refreshHeroSlide === "function") {
      refreshHeroSlide();
    }
  }

  closeAccountDropdown();
}

function scrollToElement(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleMobileNav() {
  const nav = document.getElementById("mainNav");
  if (nav) {
    const isShowing = nav.style.display === "flex";
    nav.style.display = isShowing ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "20px";
    nav.style.right = "20px";
    nav.style.background = "#FFFFFF";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    nav.style.borderRadius = "14px";
    nav.style.padding = "14px";
  }
}

// ========================================================
// 6. HERO BANNER INFINITY LOOP CAROUSEL & 3D MOUSE PARALLAX TILT
// ========================================================
let refreshHeroSlide = null;

function initHeroCarousel() {
  const track = document.getElementById("heroTrack");
  const heroSection = document.getElementById("heroCarousel");
  const indicators = document.querySelectorAll(".indicator");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");

  if (!track) return;

  // Retrieve original slides (not clones if re-init)
  const originalSlides = Array.from(track.querySelectorAll(".hero-slide:not(.clone-slide)"));
  const numSlides = originalSlides.length;
  if (numSlides === 0) return;

  // Remove any previously appended clones if re-init
  track.querySelectorAll(".clone-slide").forEach(c => c.remove());

  // Create clone of first slide (appended) and last slide (prepended) for seamless infinite looping
  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[numSlides - 1].cloneNode(true);
  firstClone.classList.add("clone-slide");
  lastClone.classList.add("clone-slide");
  firstClone.classList.remove("active");
  lastClone.classList.remove("active");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, originalSlides[0]);

  // Adjust track width: (numSlides + 2) * 100%
  track.style.width = `${(numSlides + 2) * 100}%`;

  let virtualIndex = 1; // start on real slide 0 (position 1)
  let isMoving = false;
  const slideDuration = 700; // ms
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

  function setTrackPosition(idx, animate = true) {
    if (animate) {
      track.style.transition = `transform ${slideDuration}ms ${easing}`;
    } else {
      track.style.transition = "none";
    }
    track.style.transform = `translateX(-${idx * 100}vw)`;
  }

  function updateActiveSlide(idx) {
    const allSlides = track.querySelectorAll(".hero-slide");
    allSlides.forEach((s, i) => {
      if (i === idx) {
        s.classList.remove("active");
        void s.offsetWidth; // Force synchronous reflow to replay sequential animations
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    // Real slide index for dots (0, 1, 2)
    let realIdx = idx - 1;
    if (realIdx < 0) realIdx = numSlides - 1;
    if (realIdx >= numSlides) realIdx = 0;

    indicators.forEach((ind, i) => {
      ind.classList.toggle("active", i === realIdx);
    });
  }

  function goToSlide(targetIdx) {
    if (isMoving) return;
    isMoving = true;
    virtualIndex = targetIdx;
    setTrackPosition(virtualIndex, true);
    updateActiveSlide(virtualIndex);
  }

  // Handle boundary warp on transitionend
  track.addEventListener("transitionend", (e) => {
    if (e.target !== track) return;
    if (virtualIndex === numSlides + 1) {
      // Reached FirstClone at the end -> warp to real S0 (index 1) seamlessly without animation
      virtualIndex = 1;
      setTrackPosition(virtualIndex, false);
      updateActiveSlide(virtualIndex);
    } else if (virtualIndex === 0) {
      // Reached LastClone at the beginning -> warp to real S2 (index numSlides) seamlessly
      virtualIndex = numSlides;
      setTrackPosition(virtualIndex, false);
      updateActiveSlide(virtualIndex);
    }
    isMoving = false;
  });

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    slideIntervalTimer = setInterval(() => {
      goToSlide(virtualIndex + 1);
    }, 6500);
  }

  function stopAutoplay() {
    if (slideIntervalTimer) clearInterval(slideIntervalTimer);
  }

  // Navigation button listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(virtualIndex - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(virtualIndex + 1);
      startAutoplay();
    });
  }

  // Indicator click listeners
  indicators.forEach((ind, i) => {
    ind.addEventListener("click", () => {
      goToSlide(i + 1);
      startAutoplay();
    });
  });

  // Hover pauses autoplay
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoplay);
    heroSection.addEventListener("mouseleave", startAutoplay);

    // Touch Swipe Navigation for Mobile/Tablet
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide(virtualIndex - 1);
        } else {
          goToSlide(virtualIndex + 1);
        }
        startAutoplay();
      }
    }, { passive: true });
  }

  // Keyboard navigation when user is on Home page
  document.addEventListener("keydown", (e) => {
    const homePage = document.getElementById("page-home");
    if (!homePage || !homePage.classList.contains("active")) return;
    if (e.key === "ArrowLeft") {
      goToSlide(virtualIndex - 1);
      startAutoplay();
    } else if (e.key === "ArrowRight") {
      goToSlide(virtualIndex + 1);
      startAutoplay();
    }
  });

  // Global helper to refresh hero slide when user returns to Home tab
  refreshHeroSlide = function() {
    updateActiveSlide(virtualIndex);
    startAutoplay();
  };

  // Initial setup: place track at index 1 without animation
  setTrackPosition(1, false);
  updateActiveSlide(1);
  startAutoplay();
  init3DParallaxTilt();
}

/**
 * Interactive 3D Physics Tilt Effect on Hero Product Cards
 * Pure Vanilla JavaScript & CSS transforms - Zero External Libraries
 */
function init3DParallaxTilt() {
  const cards = document.querySelectorAll(".hero-product-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -9;
      const tiltY = (x / (rect.width / 2)) * 9;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale(1.03)`;
      card.style.transition = "transform 0.1s ease-out";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    });
  });
}

// ========================================================
// 7. PRODUCT RENDERING (BEST SELLERS & FULL CATALOG)
// ========================================================
function createProductCardHTML(p) {
  return `
    <div class="product-card" data-id="${p.id}" onclick="openProductDetail(${p.id})" style="cursor: pointer;">
      <div class="product-thumb-box" onclick="event.stopPropagation(); openProductDetail(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="badge-tag ${p.badgeType}">${p.badge}</span>` : ""}
        <button type="button" class="product-quick-btn" onclick="event.stopPropagation(); openQuickView(${p.id})">
          <i class="fa-regular fa-eye"></i> Quick View
        </button>
      </div>
      <div class="product-body">
        <span class="product-category">${p.categoryName}</span>
        <h3 class="product-title" title="${p.name}" onclick="event.stopPropagation(); openProductDetail(${p.id})">${p.name}</h3>
        <div class="product-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          <span class="rating-count">(${p.reviewsCount.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="current-price">${formatCurrency(p.priceUSD)}</span>
          ${p.originalPriceUSD ? `<span class="original-price">${formatCurrency(p.originalPriceUSD)}</span>` : ""}
        </div>
        <button type="button" class="add-cart-btn" onclick="event.stopPropagation(); handleAddToCartClick(${p.id})">
          <i class="fa-solid fa-basket-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

function renderBestSellers() {
  const container = document.getElementById("bestSellerGrid");
  if (!container) return;

  const bestSellers = PRODUCTS_DATA.filter(p => p.isBestSeller);
  container.innerHTML = bestSellers.map(createProductCardHTML).join("");
}

function renderFullProducts(list) {
  const container = document.getElementById("fullProductGrid");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 2.8rem; margin-bottom: 14px; display: block;"></i>
        <p>No eco-friendly loofahs found matching your filter selection.</p>
      </div>
    `;
    return;
  }
  container.innerHTML = list.map(createProductCardHTML).join("");
}

function filterProducts(category) {
  document.querySelectorAll("#productFilterButtons .filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  let filtered = PRODUCTS_DATA;
  if (category !== "all") {
    filtered = PRODUCTS_DATA.filter(p => p.category === category);
  }
  renderFullProducts(filtered);
}

function sortProducts(criteria) {
  let list = [...PRODUCTS_DATA];
  if (criteria === "price-asc") {
    list.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (criteria === "price-desc") {
    list.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (criteria === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    list.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }
  renderFullProducts(list);
}

// ========================================================
// 8. SHOPPING CART DRAWER & OPERATIONS
// ========================================================
function handleAddToCartClick(productId) {
  addToCart(productId, 1);
  openCartDrawer();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cartState.find(item => item.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cartState.push({ id: productId, qty: quantity });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your bag!`, "success");
}

function updateCartItemQty(productId, change) {
  const item = cartState.find(i => i.id === productId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cartState = cartState.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from your eco bag.", "info");
}

function saveCart() {
  localStorage.setItem("herbvian_cart", JSON.stringify(cartState));
}

function updateCartUI() {
  const totalCount = cartState.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cartBadgeCount");
  const drawerCount = document.getElementById("cartDrawerCount");
  const headerTotal = document.getElementById("cartHeaderTotal");
  const container = document.getElementById("cartItemsContainer");
  const footer = document.getElementById("cartDrawerFooter");
  const freeShipBanner = document.getElementById("freeShippingBanner");

  if (badge) badge.innerText = totalCount;
  if (drawerCount) drawerCount.innerText = `${totalCount} item${totalCount === 1 ? "" : "s"}`;

  let subtotalUSD = 0;
  let itemsHTML = "";

  if (cartState.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Your Eco Bag is Empty</h4>
        <p>Explore our pure plant-based loofahs for body and home to begin your zero-waste journey!</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); switchNav('product');">Explore Products</button>
      </div>
    `;
    if (footer) footer.style.display = "none";
    if (freeShipBanner) freeShipBanner.style.display = "none";
    if (headerTotal) headerTotal.innerText = formatCurrency(0);
    return;
  }

  if (footer) footer.style.display = "block";
  if (freeShipBanner) freeShipBanner.style.display = "block";

  cartState.forEach(cartItem => {
    const p = PRODUCTS_DATA.find(prod => prod.id === cartItem.id);
    if (!p) return;
    const lineTotalUSD = p.priceUSD * cartItem.qty;
    subtotalUSD += lineTotalUSD;

    itemsHTML += `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${p.name}</h4>
          <span class="cart-item-price">${formatCurrency(p.priceUSD)}</span>
          <div class="cart-item-controls">
            <div class="qty-control-box">
              <button class="qty-btn" onclick="updateCartItemQty(${p.id}, -1)">-</button>
              <span class="qty-num">${cartItem.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${p.id}, 1)">+</button>
            </div>
            <button class="delete-item-btn" onclick="removeFromCart(${p.id})" title="Remove item">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHTML;

  // Free Worldwide Shipping Threshold: $45.00 USD
  const freeShipThresholdUSD = 45.0;
  const fsNoticeText = document.getElementById("fsNoticeText");
  const fsProgressFill = document.getElementById("fsProgressFill");
  let shippingFeeUSD = 4.99;

  if (subtotalUSD >= freeShipThresholdUSD) {
    shippingFeeUSD = 0;
    if (fsNoticeText) fsNoticeText.innerHTML = `🎉 Congratulations! You have unlocked <strong>Free Worldwide Shipping</strong>!`;
    if (fsProgressFill) fsProgressFill.style.width = "100%";
  } else {
    const diffUSD = freeShipThresholdUSD - subtotalUSD;
    const percent = Math.min(100, Math.round((subtotalUSD / freeShipThresholdUSD) * 100));
    if (fsNoticeText) fsNoticeText.innerHTML = `Add <strong>${formatCurrency(diffUSD)}</strong> more for <strong>Free Worldwide Shipping</strong>!`;
    if (fsProgressFill) fsProgressFill.style.width = `${percent}%`;
  }

  // Voucher Code Calculation
  let discountUSD = 0;
  const discountRow = document.getElementById("discountRow");
  const cartDiscount = document.getElementById("cartDiscount");

  if (activeVoucher === "HERBVIAN15") {
    discountUSD = subtotalUSD * 0.15;
    if (discountRow) discountRow.style.display = "flex";
    if (cartDiscount) cartDiscount.innerText = `-${formatCurrency(discountUSD)}`;
  } else if (activeVoucher === "FREESHIP") {
    shippingFeeUSD = 0;
    if (discountRow) discountRow.style.display = "none";
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD + shippingFeeUSD);

  document.getElementById("cartSubtotal").innerText = formatCurrency(subtotalUSD);
  document.getElementById("cartShippingFee").innerText = shippingFeeUSD === 0 ? "FREE" : formatCurrency(shippingFeeUSD);
  document.getElementById("cartFinalTotal").innerText = formatCurrency(finalTotalUSD);
  if (headerTotal) headerTotal.innerText = formatCurrency(finalTotalUSD);
}

function openCartDrawer() {
  document.getElementById("cartOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
}

function applyVoucher() {
  const code = (document.getElementById("couponInput").value || "").trim().toUpperCase();
  const messageBox = document.getElementById("couponAppliedMessage");

  if (code === "HERBVIAN15") {
    activeVoucher = "HERBVIAN15";
    messageBox.style.display = "block";
    messageBox.innerText = "✓ Promo Applied: 15% OFF your entire order!";
    updateCartUI();
    showToast("15% discount successfully applied!", "success");
  } else if (code === "FREESHIP") {
    activeVoucher = "FREESHIP";
    messageBox.style.display = "block";
    messageBox.innerText = "✓ Promo Applied: Free Global Shipping!";
    updateCartUI();
    showToast("Free shipping applied!", "success");
  } else {
    showToast("Invalid promo code. Try HERBVIAN15 or FREESHIP", "warning");
  }
}

// ========================================================
// 9. CHECKOUT DEMO MODAL
// ========================================================
function openCheckoutModal() {
  if (cartState.length === 0) {
    showToast("Your eco bag is empty!", "warning");
    return;
  }
  closeCartDrawer();
  const checkoutFinalAmount = document.getElementById("checkoutFinalAmount");
  const cartFinalTotal = document.getElementById("cartFinalTotal");
  if (checkoutFinalAmount && cartFinalTotal) {
    checkoutFinalAmount.innerText = cartFinalTotal.innerText;
  }
  document.getElementById("checkoutModal").classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("orderRecipientName").value;
  const phone = document.getElementById("orderRecipientPhone").value;
  const address = document.getElementById("orderAddress").value;
  const cityState = document.getElementById("orderCityState").value;
  const country = document.getElementById("orderCountry").value;

  const newOrderCode = "HERB" + Math.floor(1000 + Math.random() * 9000);

  // Add into mock orders DB for immediate lookup
  ORDERS_DB[newOrderCode] = {
    code: newOrderCode,
    customer: name,
    phone: phone,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    statusText: "Processing & Packing at Eco Facility",
    statusType: "packing",
    carrier: "USPS Tracked Priority International",
    trackingNumber: "9400 " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000) + " 01",
    currentStep: 2,
    destination: `${address}, ${cityState}, ${country}`,
    estimatedDelivery: "Arriving in 3 - 5 Business Days",
    items: cartState.map(i => {
      const p = PRODUCTS_DATA.find(prod => prod.id === i.id);
      return { name: p ? p.name : "Herbvian Loofah Essential", qty: i.qty, priceUSD: p ? p.priceUSD : 9.99 };
    })
  };

  cartState = [];
  saveCart();
  updateCartUI();
  closeCheckoutModal();

  showToast(`🎉 Order Placed! Your Order # is ${newOrderCode}`, "success");

  setTimeout(() => {
    switchNav("track-order");
    fillTrackCode(newOrderCode);
    handleTrackOrder(new Event("submit"));
  }, 900);
}

// ========================================================
// 10. AUTHENTICATION & USER PROFILE
// ========================================================
function openAuthModal(defaultTab = "login") {
  closeAccountDropdown();
  document.getElementById("authModal").classList.add("active");
  switchAuthTab(defaultTab);
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("active");
}

function switchAuthTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("tabLoginBtn").classList.toggle("active", isLogin);
  document.getElementById("tabRegisterBtn").classList.toggle("active", !isLogin);
  document.getElementById("loginForm").style.display = isLogin ? "block" : "none";
  document.getElementById("registerForm").style.display = isLogin ? "none" : "block";
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPass = input.type === "password";
  input.type = isPass ? "text" : "password";
  btn.innerHTML = isPass ? `<i class="fa-regular fa-eye-slash"></i>` : `<i class="fa-regular fa-eye"></i>`;
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  currentUser = {
    name: email.split("@")[0].replace(".", " ") || "Emma Watson",
    email: email,
    avatar: (email[0] || "E").toUpperCase(),
    tier: "Herbvian Eco Member 🌿"
  };
  localStorage.setItem("herbvian_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
  showToast(`Welcome back, ${currentUser.name}! 🌱`, "success");
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  currentUser = {
    name: name,
    email: email,
    avatar: (name[0] || "U").toUpperCase(),
    tier: "Herbvian Eco Member 🌿"
  };
  localStorage.setItem("herbvian_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
  showToast(`Account created! Use code HERBVIAN15 for 15% OFF!`, "success");
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem("herbvian_user");
  updateUserUI();
  closeAccountDropdown();
  showToast("You have signed out.", "info");
}

function socialLoginDemo(platform) {
  currentUser = {
    name: platform === "Google" ? "Alex Rivera" : "Emma Watson",
    email: `${platform.toLowerCase()}@herbvian.com`,
    avatar: platform === "Google" ? "A" : "E",
    tier: "Herbvian Eco Member 🌿"
  };
  localStorage.setItem("herbvian_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
  showToast(`Signed in with ${platform}!`, "success");
}

function updateUserUI() {
  const nameDisplay = document.getElementById("navUserName");
  const dropdownLoggedOut = document.getElementById("dropdownLoggedOut");
  const dropdownLoggedIn = document.getElementById("dropdownLoggedIn");
  const userProfileName = document.getElementById("userProfileName");
  const userAvatarChar = document.getElementById("userAvatarChar");

  if (currentUser) {
    if (nameDisplay) nameDisplay.innerText = currentUser.name;
    if (dropdownLoggedOut) dropdownLoggedOut.style.display = "none";
    if (dropdownLoggedIn) dropdownLoggedIn.style.display = "block";
    if (userProfileName) userProfileName.innerText = currentUser.name;
    if (userAvatarChar) userAvatarChar.innerText = currentUser.avatar || "E";
  } else {
    if (nameDisplay) nameDisplay.innerText = "Sign In";
    if (dropdownLoggedOut) dropdownLoggedOut.style.display = "block";
    if (dropdownLoggedIn) dropdownLoggedIn.style.display = "none";
  }
}

const userBtn = document.getElementById("userBtn");
if (userBtn) {
  userBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById("accountDropdown");
    dropdown.classList.toggle("show");
  });
}

function closeAccountDropdown() {
  const dropdown = document.getElementById("accountDropdown");
  if (dropdown) dropdown.classList.remove("show");
}

document.addEventListener("click", () => {
  closeAccountDropdown();
});

// ========================================================
// 11. TRACK ORDER LOGIC (GLOBAL COURIER SUPPORT)
// ========================================================
function fillTrackCode(code) {
  const input = document.getElementById("trackingInput");
  if (input) input.value = code;
}

function handleTrackOrder(e) {
  if (e) e.preventDefault();
  const inputVal = (document.getElementById("trackingInput").value || "").trim().toUpperCase();
  const resultBox = document.getElementById("trackingResultBox");

  if (!inputVal) {
    showToast("Please enter an order number or tracking number.", "warning");
    return;
  }

  let matchedOrder = ORDERS_DB[inputVal];

  if (!matchedOrder) {
    const keys = Object.keys(ORDERS_DB);
    for (let k of keys) {
      if (k.includes(inputVal) || (ORDERS_DB[k].trackingNumber && ORDERS_DB[k].trackingNumber.includes(inputVal))) {
        matchedOrder = ORDERS_DB[k];
        break;
      }
    }
  }

  if (!matchedOrder) {
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--danger);">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 2.6rem; margin-bottom: 12px; display: block;"></i>
        <h4>No package found for "${inputVal}"</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Please double check your confirmation email or test using the sample demo buttons above.</p>
      </div>
    `;
    return;
  }

  const steps = [
    { title: "Order Placed", time: matchedOrder.date, icon: "fa-cart-shopping" },
    { title: "Eco Packed", time: "Origin: Vietnam Farm", icon: "fa-circle-check" },
    { title: "In Transit", time: matchedOrder.carrier, icon: "fa-plane-departure" },
    { title: "Delivered", time: matchedOrder.estimatedDelivery, icon: "fa-house-chimney" }
  ];

  let stepsHTML = "";
  steps.forEach((step, idx) => {
    const stepNumber = idx + 1;
    let stepClass = "";
    if (stepNumber < matchedOrder.currentStep) {
      stepClass = "done";
    } else if (stepNumber === matchedOrder.currentStep) {
      stepClass = matchedOrder.currentStep === 4 ? "done active" : "active";
    }
    stepsHTML += `
      <div class="track-step ${stepClass}">
        <div class="step-dot"><i class="fa-solid ${step.icon}"></i></div>
        <div class="step-title">${step.title}</div>
        <div class="step-time">${step.time}</div>
      </div>
    `;
  });

  let itemsSummaryHTML = "";
  if (matchedOrder.items) {
    itemsSummaryHTML = matchedOrder.items.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 6px;">
        <span>${item.name} × ${item.qty}</span>
        <strong style="color: var(--primary);">${formatCurrency(item.priceUSD * item.qty)}</strong>
      </div>
    `).join("");
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div class="track-status-summary">
      <div>
        <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Official Tracking Reference</span>
        <div class="track-order-code">${matchedOrder.code} <small style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">(${matchedOrder.trackingNumber})</small></div>
      </div>
      <span class="track-badge ${matchedOrder.statusType}">${matchedOrder.statusText}</span>
    </div>

    <div class="track-timeline">
      ${stepsHTML}
    </div>

    <div class="order-detail-items">
      <h5 style="margin-bottom: 12px; font-size: 0.98rem; color: var(--primary-dark);"><i class="fa-solid fa-box"></i> Package Contents:</h5>
      ${itemsSummaryHTML}
      <div style="border-top: 1px dashed var(--border-medium); padding-top: 12px; margin-top: 10px; display: flex; justify-content: space-between; font-size: 0.92rem; flex-wrap: wrap; gap: 8px;">
        <span>Destination: <strong>${matchedOrder.destination}</strong></span>
        <span>Recipient: <strong>${matchedOrder.customer}</strong></span>
      </div>
    </div>
  `;
}

// ========================================================
// 12. LIVE CHAT WIDGET (INTERNATIONAL ENGLISH ASSISTANT)
// ========================================================
function toggleChatWindow() {
  const wrapper = document.querySelector(".live-chat-wrapper");
  wrapper.classList.toggle("open");
  const dot = document.getElementById("chatUnreadDot");
  if (dot) dot.style.display = "none";
}

function handleSendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const text = (input.value || "").trim();
  if (!text) return;

  appendChatMessage("user", text);
  input.value = "";

  respondBotMessage(text);
}

function sendQuickReply(question) {
  appendChatMessage("user", question);
  respondBotMessage(question);
}

function appendChatMessage(sender, text) {
  const body = document.getElementById("chatMessagesBody");
  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${sender}`;

  if (sender === "bot") {
    bubble.innerHTML = `
      <div class="msg-avatar"><i class="fa-solid fa-seedling"></i></div>
      <div class="msg-content">
        <p>${text}</p>
        <span class="msg-time">${now}</span>
      </div>
    `;
  } else {
    bubble.innerHTML = `
      <div class="msg-content">
        <p>${text}</p>
        <span class="msg-time">${now}</span>
      </div>
    `;
  }

  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
}

function respondBotMessage(userQuery) {
  const q = userQuery.toLowerCase();
  let botReply = "Thank you for reaching out to Herbvian! Emily from our customer care team will assist you shortly.";

  if (q.includes("how long") || q.includes("last") || q.includes("durability")) {
    botReply = "🌿 Herbvian loofahs are harvest-selected from dense mature fibers: kitchen scrubbers last 3 to 5 months, and body scrubbers last 4 to 6 months! When ready to replace, simply compost in your garden.";
  } else if (q.includes("soften") || q.includes("first use") || q.includes("rough")) {
    botReply = "💧 Super easy! When you receive your loofah, soak it in warm water for 20-30 seconds. The natural plant fibers will instantly swell, expand, and become delightfully soft and cushiony.";
  } else if (q.includes("shipping") || q.includes("free") || q.includes("delivery")) {
    botReply = "✈️ We provide FREE Worldwide Shipping on all orders over $45. Standard international delivery takes 3 to 7 business days, dispatched directly in recyclable kraft packaging.";
  } else if (q.includes("where") || q.includes("based") || q.includes("location") || q.includes("address")) {
    botReply = "📍 Herbvian LLC is based at 7901 4th St N Ste 300, St. Petersburg, FL 33702, USA. Our organic loofahs are ethically grown and harvested on generational farms in Vietnam (Origin: Vietnam VN)!";
  } else if (q.includes("bleach") || q.includes("chemical") || q.includes("natural")) {
    botReply = "🌱 100% Guaranteed zero harsh bleaching or toxic chemicals! Our loofahs retain their raw, organic sun-dried warmth, sanitized naturally by natural UV sunlight.";
  } else if (q.includes("bacne") || q.includes("back") || q.includes("acne")) {
    botReply = "✨ For back breakouts or keratosis pilaris, we highly recommend our 'Herbvian Loofah Back Scrubber Strap (28\")' — customers notice clearer, smoother skin in less than 2 weeks!";
  } else if (q.includes("wholesale") || q.includes("b2b") || q.includes("bulk")) {
    botReply = "🤝 We love partnering with eco-friendly boutiques and refill shops! Please email support@herbvian.com or call +1 815-669-9699 for our wholesale catalog.";
  }

  setTimeout(() => {
    appendChatMessage("bot", botReply);
  }, 650);
}

function clearChatHistory() {
  const body = document.getElementById("chatMessagesBody");
  body.innerHTML = `
    <div class="message-bubble bot">
      <div class="msg-avatar"><i class="fa-solid fa-seedling"></i></div>
      <div class="msg-content">
        <p>Chat history cleared. How else can we assist you with plant-based living today? 🌿</p>
        <span class="msg-time">Just now</span>
      </div>
    </div>
  `;
  showToast("Chat history cleared.", "info");
}

// ========================================================
// 13. QUICK VIEW MODAL
// ========================================================
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById("quickViewContent");
  content.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="qv-image">
    </div>
    <div class="qv-details">
      <span class="sub-badge">${product.categoryName}</span>
      <h3>${product.name}</h3>
      <div class="product-rating" style="margin-bottom: 12px;">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        <span class="rating-count">(${product.reviewsCount.toLocaleString()} verified reviews)</span>
      </div>
      <div class="product-price-row" style="margin-bottom: 16px;">
        <span class="current-price" style="font-size: 1.6rem;">${formatCurrency(product.priceUSD)}</span>
        ${product.originalPriceUSD ? `<span class="original-price">${formatCurrency(product.originalPriceUSD)}</span>` : ""}
      </div>
      <p class="qv-desc">${product.description}</p>
      
      <ul class="qv-specs">
        ${product.specs.map(spec => `<li><i class="fa-solid fa-circle-check"></i> ${spec}</li>`).join("")}
      </ul>

      <button class="btn btn-primary btn-block btn-lg" onclick="handleAddToCartClick(${product.id}); closeQuickView();">
        <i class="fa-solid fa-bag-shopping"></i> Add to Eco Bag
      </button>
    </div>
  `;
  document.getElementById("quickViewModal").classList.add("active");
}

function closeQuickView() {
  document.getElementById("quickViewModal").classList.remove("active");
}

// ========================================================
// 14. BLOG MODAL LOGIC
// ========================================================
function openBlogModal(blogId) {
  const blog = BLOGS_DATA.find(b => b.id === blogId);
  if (!blog) return;

  const container = document.getElementById("blogDetailContainer");
  container.innerHTML = `
    <span class="sub-badge"><i class="fa-regular fa-bookmark"></i> HERBVIAN JOURNAL</span>
    <h2 style="font-family: var(--font-heading); font-size: 2.1rem; color: var(--primary-dark); margin: 12px 0;">${blog.title}</h2>
    <div style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">
      <span>By <strong>${blog.author}</strong></span> • <span>${blog.date}</span> • <span>${blog.readTime}</span>
    </div>
    <img src="${blog.image}" alt="${blog.title}" class="blog-detail-img">
    <div style="font-size: 0.98rem; line-height: 1.7; color: var(--text-main);">
      ${blog.content}
    </div>
    <div style="margin-top: 30px; text-align: center;">
      <button class="btn btn-outline" onclick="closeBlogModal()">Close Story</button>
    </div>
  `;
  document.getElementById("blogModal").classList.add("active");
}

function closeBlogModal() {
  document.getElementById("blogModal").classList.remove("active");
}

// ========================================================
// 15. LIVE SEARCH LOGIC
// ========================================================
function initSearchLogic() {
  const searchToggle = document.getElementById("searchToggle");
  const overlay = document.getElementById("searchOverlay");
  const closeBtn = document.getElementById("closeSearchBtn");
  const input = document.getElementById("liveSearchInput");
  const resultsBox = document.getElementById("searchResultsList");

  if (searchToggle && overlay) {
    searchToggle.addEventListener("click", () => {
      overlay.classList.add("active");
      setTimeout(() => input.focus(), 150);
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      input.value = "";
      resultsBox.innerHTML = "";
    });
  }

  if (input) {
    input.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        resultsBox.innerHTML = "";
        return;
      }
      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.categoryName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsBox.innerHTML = `<p style="padding: 14px; color: var(--text-muted); text-align: center;">No loofah products found for "${q}".</p>`;
        return;
      }

      resultsBox.innerHTML = matches.map(m => `
        <div class="search-item-match" onclick="openProductDetail(${m.id}); document.getElementById('searchOverlay').classList.remove('active');">
          <img src="${m.image}" alt="${m.name}">
          <div>
            <h5 style="font-size: 0.95rem; margin-bottom: 2px;">${m.name}</h5>
            <span style="color: var(--primary); font-weight: 800; font-size: 0.9rem;">${formatCurrency(m.priceUSD)}</span>
          </div>
        </div>
      `).join("");
    });
  }
}

function quickSearch(tag) {
  const input = document.getElementById("liveSearchInput");
  if (input) {
    input.value = tag;
    input.dispatchEvent(new Event("input"));
  }
}

// ========================================================
// 16. CONTACT & NEWSLETTER FORMS
// ========================================================
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("cName").value;
  showToast(`Thank you, ${name}! Your inquiry has been sent to support@herbvian.com.`, "success");
  e.target.reset();
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  showToast(`Thank you! Your 15% discount code (HERBVIAN15) was sent to ${email}!`, "success");
  e.target.reset();
}

// ========================================================
// 17. TOAST NOTIFICATIONS
// ========================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const icons = {
    success: "fa-circle-check",
    info: "fa-circle-info",
    warning: "fa-triangle-exclamation"
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || 'fa-bell'}" style="font-size: 1.15rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function showCustomAlert(msg) {
  showToast(msg, "info");
}

// ========================================================
// 18. PRODUCT DETAIL PAGE (PDP) CONTROLLER
// Dedicated page with full specs, gallery, urgency timer,
// collapsible accordions, and express checkout matching screenshot.
// Hidden by default, activated on product click.
// ========================================================
let currentPdpProductId = 100;
let pdpCurrentQuantity = 1;
let pdpActiveThumbIndex = 0;

const PDP_QUOTES = [
  {
    body: '"I am obsessed! They start out so thin and then POOF—they grow into the perfect shower companion. My skin has never felt softer, and I love that I\'m not using plastic..."',
    author: "Sarah J., Portland OR",
    stars: "★★★★★"
  },
  {
    body: '"Cleared my stubborn back acne in less than 2 weeks. The unbleached natural fibers give the most refreshing scrub without any scratching!"',
    author: "Marcus L., Stockholm Sweden",
    stars: "★★★★★"
  },
  {
    body: '"We use 4 for our master bath and 2 in the kitchen for cast iron pans. Completely non-scratch, creates rich foam with minimal soap, and dries super fast."',
    author: "Emma Watson, London UK",
    stars: "★★★★★"
  }
];
let currentQuoteIndex = 0;

/**
 * Open the dedicated Product Detail Page for any product ID
 */
function openProductDetail(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  currentPdpProductId = product.id;
  pdpCurrentQuantity = 1;

  // Update Breadcrumb & Titles
  const bTitle = document.getElementById("pdpBreadcrumbTitle");
  if (bTitle) bTitle.textContent = product.name;

  const pTitle = document.getElementById("pdpProductTitle");
  if (pTitle) pTitle.textContent = product.name;

  const pTagline = document.getElementById("pdpProductTagline");
  if (pTagline) {
    pTagline.textContent = product.tagline || product.description.substring(0, 95) + "...";
  }

  // Update Pricing with 2.000 AFN matching user's screenshot
  updatePdpPrices(product);

  // Update Main Image & Gallery
  const mainImg = document.getElementById("pdpMainImage");
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }

  // Reset Quantity Stepper to 1
  const qtyEl = document.getElementById("pdpQtyNumber");
  if (qtyEl) qtyEl.textContent = "1";

  // Reset Active Thumbnail
  pdpActiveThumbIndex = 0;
  const thumbs = document.querySelectorAll("#pdpThumbsTrack .pdp-thumb");
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === 0);
  });

  // Switch to the hidden Product Detail Page view
  switchNav("product-detail");
}

/**
 * Synchronize PDP Price display based on product and currency settings
 */
function updatePdpPrices(product) {
  const currentPriceEl = document.getElementById("pdpCurrentPrice");
  const origPriceEl = document.getElementById("pdpOriginalPrice");
  if (!currentPriceEl || !origPriceEl) return;

  if (product.id === 100) {
    // If it's the 6pcs featured loofah, display the exact 2.000 AFN from screenshot + converted currency
    if (selectedCurrency === "USD") {
      currentPriceEl.innerHTML = `2.000 AFN <span style="font-size: 1.05rem; color: var(--primary); font-weight: 700; margin-left: 4px;">(${formatCurrency(product.priceUSD)})</span>`;
      origPriceEl.innerHTML = `2.700 AFN <span style="font-size: 0.9rem; margin-left: 4px;">(${formatCurrency(product.originalPriceUSD)})</span>`;
    } else {
      currentPriceEl.textContent = formatCurrency(product.priceUSD);
      origPriceEl.textContent = formatCurrency(product.originalPriceUSD);
    }
  } else {
    currentPriceEl.textContent = formatCurrency(product.priceUSD);
    origPriceEl.textContent = product.originalPriceUSD ? formatCurrency(product.originalPriceUSD) : "";
  }
}

/**
 * Switch the featured main image on PDP when user clicks a gallery thumbnail
 */
function switchPdpImage(index, imgSrc) {
  pdpActiveThumbIndex = index;
  const mainImg = document.getElementById("pdpMainImage");
  if (mainImg) {
    mainImg.style.opacity = "0.35";
    mainImg.style.transform = "scale(0.96)";
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = "1";
      mainImg.style.transform = "scale(1)";
    }, 150);
  }

  const thumbs = document.querySelectorAll("#pdpThumbsTrack .pdp-thumb");
  thumbs.forEach((th, idx) => {
    th.classList.toggle("active", idx === index);
  });
}

/**
 * Scroll thumbnail track left/right
 */
function scrollPdpThumbs(direction) {
  const track = document.getElementById("pdpThumbsTrack");
  if (track) {
    track.scrollBy({ left: direction * 160, behavior: "smooth" });
  }
}

/**
 * Stepper for PDP quantity [- 1 +]
 */
function stepPdpQuantity(delta) {
  pdpCurrentQuantity = Math.max(1, Math.min(99, pdpCurrentQuantity + delta));
  const qtyEl = document.getElementById("pdpQtyNumber");
  if (qtyEl) qtyEl.textContent = pdpCurrentQuantity;
}

/**
 * Add the currently viewed PDP product to the shopping cart
 */
function addCurrentPdpToCart() {
  const product = PRODUCTS_DATA.find(p => p.id === currentPdpProductId) || PRODUCTS_DATA[0];
  addToCart(product.id, pdpCurrentQuantity);
  openCartDrawer();
}

/**
 * Direct Shop Pay express checkout button
 */
function buyCurrentPdpWithShopPay() {
  const product = PRODUCTS_DATA.find(p => p.id === currentPdpProductId) || PRODUCTS_DATA[0];
  
  // Set quantity in cart
  const existing = cartState.find(item => item.id === product.id);
  if (existing) {
    existing.qty = pdpCurrentQuantity;
  } else {
    cartState.push({ id: product.id, qty: pdpCurrentQuantity });
  }
  saveCart();
  updateCartUI();

  // Open checkout modal immediately
  openCheckoutModal();
  showToast("Opening Shop Pay Express Secure Checkout...", "info");
}

/**
 * Live Urgency Countdown Timer (Order within 1 HOURS 29 MINUTES ...)
 */
function initPdpCountdown() {
  const timerEl = document.getElementById("pdpCountdownTimer");
  if (!timerEl) return;

  // Initial countdown from 1 hour 29 minutes 00 seconds
  let remainingSeconds = 1 * 3600 + 29 * 60;

  setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
    } else {
      remainingSeconds = 2 * 3600; // Reset to 2 hours
    }

    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    timerEl.textContent = `${h} HOURS ${m.toString().padStart(2, "0")} MINUTES ${s.toString().padStart(2, "0")} SECONDS`;
  }, 1000);
}

/**
 * Expand or collapse PDP Accordion Panels
 */
function togglePdpPanel(panelId) {
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.toggle("open");
  }
}

/**
 * Customer Testimonial Quotes Carousel
 */
function nextPdpQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % PDP_QUOTES.length;
  renderPdpQuote();
}

function prevPdpQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + PDP_QUOTES.length) % PDP_QUOTES.length;
  renderPdpQuote();
}

function renderPdpQuote() {
  const q = PDP_QUOTES[currentQuoteIndex];
  const bodyEl = document.getElementById("pdpQuoteBody");
  const authorEl = document.getElementById("pdpQuoteAuthor");
  if (bodyEl && authorEl) {
    bodyEl.style.opacity = "0.2";
    authorEl.style.opacity = "0.2";
    setTimeout(() => {
      bodyEl.textContent = q.body;
      authorEl.textContent = q.author;
      bodyEl.style.opacity = "1";
      authorEl.style.opacity = "1";
    }, 160);
  }
}

/**
 * Smooth scroll to anchor section within PDP
 */
function scrollToPdpAnchor(anchorId) {
  const target = document.getElementById(anchorId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

