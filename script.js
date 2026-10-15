/* =========================================================================
   THE PAINTED SCROLL — Ashutosh & Rakhi
   Single source of truth for all content lives in CONFIG below.
   Edit names, dates, venues and wording here; the page reads everything
   from this object.
   ========================================================================= */

const CONFIG = {
  couple: {
    groomEn: "Ashutosh",
    groomHi: "आशुतोष",
    brideEn: "Rakhi",
    brideHi: "राखी",
    groomFatherEn: "Shri Vijay Sharma",
    groomFatherHi: "श्री विजय शर्मा",
    groomMotherEn: "Smt. Brija Devi",
    groomMotherHi: "श्रीमती बृजा देवी",
    brideFatherEn: "Shri Manoj Kumar Chaudhary",
    brideFatherHi: "श्री मनोज कुमार चौधरी",
    brideMotherEn: "Smt. Babita Kumari",
    brideMotherHi: "श्रीमती बबिता कुमारी",
  },

  dateRangeEn: "30 November – 3 December 2026",
  dateRangeHi: "३० नवम्बर – ३ दिसम्बर २०२६",
  vivaahDateHi: "३ दिसम्बर २०२६",

  invocationHi:
    "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।।",
  invocationNote:
    "A traditional invocation to Shri Ganesh, offered before any auspicious beginning.",

  invitationHi: [
    "।। श्री गणेशाय नमः ।।",
    "ईश्वर एवं अपने बड़ों के आशीर्वाद से श्री विजय शर्मा एवं श्रीमती बृजा देवी अपने पुत्र",
    "चि. आशुतोष",
    "के विवाह समारोह में",
    "सौ. कुमारी राखी",
    "(सुपुत्री श्री मनोज कुमार चौधरी एवं श्रीमती बबिता कुमारी)",
    "के साथ आपकी शुभ उपस्थिति हेतु सादर आमंत्रित करते हैं।",
  ],

  invitationEn:
    "With the blessings of the Almighty and our elders, Shri Vijay Sharma & Smt. Brija Devi joyfully request the pleasure of your company at the wedding celebrations of their son Ashutosh with Rakhi, daughter of Shri Manoj Kumar Chaudhary & Smt. Babita Kumari.",

  ceremonies: [
    {
      id: "tilak",
      style: "bharni",
      nameHi: "तिलकोत्सव",
      nameEn: "Tilakotsava",
      date: "2026-11-30",
      venueId: "priyadarshika",
      descriptionEn:
        "The families formally bless the match: elders mark the groom's forehead with tilak and offer gifts and sweets, opening the wedding festivities with warmth and good wishes.",
      descriptionHi:
        "परिवारों द्वारा विवाह की स्वीकृति का शुभ क्षण — बड़े आशुतोष को तिलक लगाकर आशीर्वाद देते हैं और मिष्ठान्न व उपहारों के साथ उत्सव का शुभारंभ करते हैं।",
      artCredit: "Original Bharni-style border in the spirit of Sita Devi and Jagdamba Devi",
    },
    {
      id: "mandap",
      style: "kachni",
      nameHi: "मंडप आच्छादन",
      nameEn: "Mandap Aachhadan",
      date: "2026-12-01",
      venueId: "priyadarshika",
      descriptionEn:
        "The wedding canopy is raised and dressed at the groom's home, with the women of the family singing traditional songs as the house is made ready for the celebrations ahead.",
      descriptionHi:
        "घर में विवाह मंडप की स्थापना व सजावट — परिवार की महिलाएं मंगल गीत गाती हैं और घर को आगामी उत्सव के लिए सजाया जाता है।",
      artCredit: "Original Kachni-style border in the spirit of Ganga Devi and Godavari Dutt",
    },
    {
      id: "ghritdhari",
      style: "godna",
      nameHi: "घृतढारी",
      nameEn: "Ghritdhari",
      date: "2026-12-02",
      venueId: "priyadarshika",
      descriptionEn:
        "A pre-wedding rite of offering ghee, invoking purity and blessings for the couple as the household turns its full attention toward the Vivaah.",
      descriptionHi:
        "विवाह से पूर्व घृत (घी) चढ़ाने की रीति — वर-वधू के लिए शुद्धता और मंगल आशीर्वाद का आह्वान किया जाता है।",
      artCredit: "Original composition in the spirit of the Godna (tattoo) tradition",
    },
    {
      id: "vivaah",
      style: "kohbar",
      nameHi: "विवाह",
      nameEn: "Vivaah",
      date: "2026-12-03",
      venueId: "both",
      descriptionEn:
        "The wedding itself — sacred vows exchanged before the holy fire, uniting Ashutosh and Rakhi. The Baraat, the groom's processional party, sets out from Priyadarshika for Hotel Kapson, Begusarai.",
      descriptionHi:
        "विवाह का शुभ मुहूर्त — पवित्र अग्नि के समक्ष आशुतोष और राखी परिणय सूत्र में बंधेंगे। प्रियदर्शिका से बारात होटल कैप्सन, बेगूसराय के लिए प्रस्थान करेगी।",
      artCredit: "Original Kohbar-style border in the spirit of Baua Devi and Mahasundari Devi",
    },
  ],

  baraat: {
    fromVenueId: "priyadarshika",
    toVenueId: "kapson",
    date: "2026-12-03",
  },

  venues: [
    {
      id: "priyadarshika",
      nameEn: "Priyadarshika",
      nameHi: "प्रियदर्शिका",
      roleEn: "Home venue — Tilakotsava, Mandap Aachhadan, Ghritdhari and the Baraat's departure",
      address: "Gaya, Bihar",
      mapsUrl: "https://maps.app.goo.gl/jRG2cpDVScNrDdTQ8",
      lat: 24.709592,
      lng: 84.9652358,
      gettingThere: {
        airport: "Gaya International Airport (GAY) — about 4 km",
        rail: "Gaya Junction (GAYA) — about 12 km",
      },
    },
    {
      id: "kapson",
      nameEn: "Hotel Kapson",
      nameHi: "होटल कैप्सन",
      roleEn: "Vivaah venue",
      address: "Beside Ayurvedic Chikitsa Mahavidyalaya, Lohiyanagar, Begusarai, Bihar 851101",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Hotel Kapson, Beside Ayurvedic Chikitsa Mahavidyalaya, Lohiyanagar, Begusarai, Bihar 851101"),
      lat: null,
      lng: null,
      gettingThere: {
        airport: "Patna Airport (PAT) — about 125 km by road",
        rail: "Begusarai Junction (BGS) — about 3 km",
      },
    },
  ],

  closing: {
    signatureEn: "With warm regards,",
    familyEn: "Shri Vijay Sharma & Smt. Brija Devi and family",
    blessingHi: "सपरिवार सादर निमंत्रण सहित",
  },

  site: {
    titleTag: "Ashutosh & Rakhi · 30 Nov – 3 Dec 2026",
    description: "You are invited to our wedding celebrations",
  },
};

/* ---------------------------- utility helpers ---------------------------- */

function venueById(id) {
  return CONFIG.venues.find((v) => v.id === id);
}

function formatDateLong(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function pad2(n) { return String(n).padStart(2, "0"); }

/* ------------------------------ content fill ------------------------------ */

function fillText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => { el.textContent = value; });
}

function populateContent() {
  document.title = CONFIG.site.titleTag;

  fillText('[data-bind="dateRangeEn"]', CONFIG.dateRangeEn);
  fillText('[data-bind="dateRangeHi"]', CONFIG.dateRangeHi);
  fillText('[data-bind="groomEn"]', CONFIG.couple.groomEn);
  fillText('[data-bind="brideEn"]', CONFIG.couple.brideEn);
  fillText('[data-bind="groomHi"]', CONFIG.couple.groomHi);
  fillText('[data-bind="brideHi"]', CONFIG.couple.brideHi);
  fillText('[data-bind="invitationEn"]', CONFIG.invitationEn);
  fillText('[data-bind="invocationHi"]', CONFIG.invocationHi);

  const invHi = document.querySelector('[data-bind="invitationHi"]');
  if (invHi) {
    invHi.innerHTML = "";
    CONFIG.invitationHi.forEach((line, i) => {
      const p = document.createElement("p");
      if (i === 2 || i === 4) p.className = "invitation-name";
      p.lang = "hi";
      p.textContent = line;
      invHi.appendChild(p);
    });
  }

  // Ceremony panels
  CONFIG.ceremonies.forEach((c) => {
    const panel = document.querySelector(`[data-panel="${c.id}"]`);
    if (!panel) return;
    const nameHi = panel.querySelector('[data-bind="nameHi"]');
    const nameEn = panel.querySelector('[data-bind="nameEn"]');
    const date = panel.querySelector('[data-bind="date"]');
    const desc = panel.querySelector('[data-bind="descriptionEn"]');
    const descHi = panel.querySelector('[data-bind="descriptionHi"]');
    if (nameHi) nameHi.textContent = c.nameHi;
    if (nameEn) nameEn.textContent = c.nameEn;
    if (date) date.textContent = formatDateLong(c.date);
    if (desc) desc.textContent = c.descriptionEn;
    if (descHi) descHi.textContent = c.descriptionHi;
  });

  // Baraat band
  const fromVenue = venueById(CONFIG.baraat.fromVenueId);
  const toVenue = venueById(CONFIG.baraat.toVenueId);
  fillText('[data-bind="baraatFrom"]', fromVenue.nameEn);
  fillText('[data-bind="baraatTo"]', toVenue.nameEn);
  fillText('[data-bind="baraatDate"]', formatDateLong(CONFIG.baraat.date));

  // Save the date
  fillText('[data-bind="saveDateHi"]', CONFIG.vivaahDateHi);

  // Venues
  CONFIG.venues.forEach((v) => {
    const card = document.querySelector(`[data-venue="${v.id}"]`);
    if (!card) return;
    const nameEn = card.querySelector('[data-bind="venueNameEn"]');
    const nameHi = card.querySelector('[data-bind="venueNameHi"]');
    const role = card.querySelector('[data-bind="venueRole"]');
    const addr = card.querySelector('[data-bind="venueAddress"]');
    const mapsLink = card.querySelector('[data-bind="venueMapsLink"]');
    const airport = card.querySelector('[data-bind="venueAirport"]');
    const rail = card.querySelector('[data-bind="venueRail"]');
    const embed = card.querySelector('[data-bind="venueEmbed"]');

    if (nameEn) nameEn.textContent = v.nameEn;
    if (nameHi) nameHi.textContent = v.nameHi;
    if (role) role.textContent = v.roleEn;
    if (addr) addr.textContent = v.address;
    if (mapsLink) mapsLink.href = v.mapsUrl;
    if (airport) airport.textContent = v.gettingThere.airport;
    if (rail) rail.textContent = v.gettingThere.rail;
    if (embed) {
      const q = v.lat && v.lng ? `${v.lat},${v.lng}` : v.address;
      embed.dataset.src = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=14&output=embed`;
    }
  });

  // Closing
  fillText('[data-bind="closingSignature"]', CONFIG.closing.signatureEn);
  fillText('[data-bind="closingFamily"]', CONFIG.closing.familyEn);
  fillText('[data-bind="closingBlessing"]', CONFIG.closing.blessingHi);
}

/* --------------------------- reduced motion check -------------------------- */

document.documentElement.classList.add("js");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------- hero entrance ------------------------------ */

function initHero() {
  // A frame's delay lets the hidden starting state paint before it animates in.
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.documentElement.classList.add("loaded");
  }));
}

/* ------------------------------- scroll reveals ------------------------------ */

function initReveals() {
  const items = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* --------------------------- scroll-linked baraat --------------------------- */

function initBaraat() {
  const art = document.querySelector(".baraat-art");
  if (!art) return;
  if (prefersReducedMotion) return;

  function update() {
    const rect = art.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    // one painting is ~3.82× as wide as it is tall; pan through about two-thirds of it
    const travel = rect.height * 3.82 * 0.65;
    art.style.backgroundPositionX = `${-progress * travel}px`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ------------------------------ lazy map embeds ----------------------------- */

function initLazyMaps() {
  const frames = document.querySelectorAll("[data-bind='venueEmbed']");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.src) el.src = el.dataset.src;
          observer.unobserve(el);
        }
      });
    },
    { rootMargin: "200px" }
  );
  frames.forEach((f) => observer.observe(f));
}

/* ----------------------------------- init ------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  populateContent();
  initHero();
  initReveals();
  initBaraat();
  initLazyMaps();
});
