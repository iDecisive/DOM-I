const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

let navServices = document.querySelector("nav");

navServices.children[0].textContent = siteContent.nav["nav-item-1"];
navServices.children[1].textContent = siteContent.nav["nav-item-2"];
navServices.children[2].textContent = siteContent.nav["nav-item-3"];
navServices.children[3].textContent = siteContent.nav["nav-item-4"];
navServices.children[4].textContent = siteContent.nav["nav-item-5"];
navServices.children[5].textContent = siteContent.nav["nav-item-6"];

//CTA

let ctaText = document.querySelector(".cta-text");
let ctaImg = document.querySelector("#cta-img");

ctaText.children[0].textContent = siteContent.cta["h1"];
ctaText.children[1].textContent = siteContent.cta["button"];
ctaImg.setAttribute("src", siteContent.cta["img-src"]);


//Main Content

let mainContent = document.querySelector(".main-content");
let topContent = document.querySelector(".main-content .top-content");
let botContent = document.querySelector(".main-content .bottom-content");

mainContent.children[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContent.querySelector(".text-content p").textContent = siteContent["main-content"]["features-content"]; //better than just stringing togeting .children? - querySelector will select only the first child with that selection
topContent.children[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];
mainContent.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

botContent.children[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
botContent.children[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
botContent.children[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
botContent.children[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
botContent.children[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
botContent.children[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

//Contact

let contact = document.querySelector(".contact");

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

//Footer

let footer = document.querySelector("footer");

footer.children[0].textContent = siteContent["footer"]["copyright"];