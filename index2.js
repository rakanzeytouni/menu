let isArabic = false;

// حفظ النصوص الأصلية
let originalIngredients = [];
let originalPrices = [];

// حفظ النصوص الأصلية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".ingredients").forEach(p => {
        originalIngredients.push(p.innerText);
    });
    document.querySelectorAll(".item-price").forEach(span => {
        originalPrices.push(span.innerText);
    });
});

function toggleTranslate() {
    isArabic = !isArabic;
    translateAll(isArabic);
}

function translateAll(toArabic = true) {
    const translations = {
        "chicken": "دجاج",
        "meat": "لحم",
        "onion": "بصل",
        "bell pepper": "فليفلة",
        "mixed bell pepper": "فليفلة مشكلة",
        "tomato": "طماطم",
        "lettuce": "خس",
        "lemon": "ليمون",
        "mozzarella cheese": "جبنة موزاريلا",
        "parmesan cheese": "جبنة بارميزان",
        "cheddar cheese": "جبنة شيدر",
        "mixed cheese": "جبنة مشكلة",
        "white sauce": "صوص أبيض",
        "quesadilla sauce": "صوص كاساديا",
        "buffalo ranch sauce": "صوص رانش بافلو",
        "Grazilite sauce": "صوص غريزلايت",
        "black forest sauce": "صوص بلاك فوريست",
        "white chicken sauce": "صوص دجاج أبيض",
        "Intakiya sauce": "صوص إنتاكية",
        "Thin pastry": "عجينة رقيقة",
        "pomegranate molasses": "دبس رمان",
        "potato": "بطاطا",
        "salt": "ملح",
        "ketchub": "كاتشب",
        "or": "أو",
        "on the side": "على الجانب",
        "mixed": "مشكل",
        "white": "أبيض",
        "sauce": "صوص",
        "6$":"540,000L.L",
        "5$":"450,000L.L",
        "2.5$":"225,000L.L",
        "4.5$":"405,000L.L",
        "6.5$":"585,000L.L",
        "7.5$":"675,000L.L"
    };

    document.querySelectorAll(".ingredients").forEach((p, i) => {
        if (toArabic) {
            let original = originalIngredients[i].toLowerCase();
            Object.keys(translations).forEach(eng => {
                const regex = new RegExp(eng, "gi");
                original = original.replace(regex, translations[eng]);
            });
            p.innerText = original;
        } else {
            p.innerText = originalIngredients[i];
        }
    });

    document.querySelectorAll(".item-price").forEach((span, i) => {
        if (toArabic) {
            let price = originalPrices[i].trim();
            if (translations[price]) span.innerText = translations[price];
        } else {
            span.innerText = originalPrices[i];
        }
    });
}
let btn = document.getElementById("arrow");
window.onscroll = () => {
    if (window.scrollY > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};    
