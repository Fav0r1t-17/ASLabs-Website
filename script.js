'use strict';

/* =============================================
   AS Labs — script.js
   Works on both index.html and privacy.html.
   To add a language, copy one block and translate.
   ============================================= */

const TRANSLATIONS = {
    bg: {
        /* Navigation */
        'nav.home':    'Начало',
        'nav.tn':      'TextNormalizer',
        'nav.wbee':    'W-Bee',
        'nav.contact': 'Контакти',
        'nav.privacy': 'Поверителност',
        'nav.aria':    'Главно меню',

        /* Hero */
        'hero.eyebrow': 'Локални AI инструменти',
        'hero.title1':  'Прости инструменти.',
        'hero.title2':  'Реални резултати.',
        'hero.subtitle':'AS Labs създава леки, офлайн AI инструменти за обработка на документи, аудио и видео.',
        'hero.pill1':   'Простота пред сложност',
        'hero.pill2':   'Локален контрол',
        'hero.pill3':   'Практически резултати',
        'hero.cta1':    'Разгледай продуктите',
        'hero.cta2':    'Свържи се с нас',

        /* TextNormalizer */
        'tn.badge':    'Наличен сега',
        'tn.subtitle': 'Почиства, нормализира и трансформира разхвърлян текст от AI чатове, PDF файлове, документи и логове. Без облак, без акаунт, без абонамент.',
        'ph.label':    'Снимка на приложението',
        'tn.f1.title': 'Моментален преглед',
        'tn.f1.body':  'Виждате резултата преди да потвърдите. Изберете операции от страничната лента, копирайте или запазете.',
        'tn.f2.title': 'Напълно офлайн',
        'tn.f2.body':  'Работи изцяло на вашата машина. Никакви данни не напускат устройството ви.',
        'tn.f3.title': 'Мощни операции',
        'tn.f3.body':  'Премахване на дубликати, извличане на URL и email, промяна на регистър, сортиране, почистване на излишен AI текст.',
        'tn.f4.title': 'Лек и бърз',
        'tn.f4.body':  'Малък размер, бърз старт. Без допълнителни инсталации или тежки зависимости.',
        'tn.price.tag': 'Еднократно плащане',
        'tn.p1':        'Пълен достъп до всички операции',
        'tn.p2':        'Безплатни актуализации',
        'tn.p3':        'Работи офлайн, без акаунт',
        'tn.download':  'Изтегли от Gumroad',
        'tn.note':      'Достъпен за Windows',

        /* W-Bee */
        'wb.badge':    'Очаквайте скоро',
        'wb.subtitle': 'Локален инструмент за обработка на уеб съдържание.',
        'wb.body':     'W-Bee е в активна разработка. Следете за новини или ни пишете, за да получите известие при пускането.',
        'wb.cta':      'Уведоми ме',

        /* Contact form */
        'contact.title':    'Контакти',
        'contact.subtitle': 'Въпрос, обратна връзка или проблем? Пишете ни директно.',
        'contact.name':     'Вашето Иme',
        'contact.email':    'Email',
        'contact.message':  'Съобщение',
        'contact.name.ph':  'Пълното Ви Иm e',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Опишете запитването си...',
        'contact.send':     'Изпрати',
        'contact.success':  'Съобщението е изпратено. Ще се свържем с вас скоро.',

        /* Footer */
        'footer.privacy': 'Политика за поверителност',
        'footer.contact': 'Контакти',
        'footer.copy':    '© 2026 AS Labs. Всички права запазени.',

        /* Menu button */
        'menu.open':  'Отвори меню',
        'menu.close': 'Затвори меню',

        /* Privacy page */
        'privacy.back': '← Обратно към началото',
    },

    en: {
        /* Navigation */
        'nav.home':    'Home',
        'nav.tn':      'TextNormalizer',
        'nav.wbee':    'W-Bee',
        'nav.contact': 'Contact',
        'nav.privacy': 'Privacy',
        'nav.aria':    'Main navigation',

        /* Hero */
        'hero.eyebrow': 'Local-first AI tools',
        'hero.title1':  'Simple tools.',
        'hero.title2':  'Real results.',
        'hero.subtitle':'AS Labs builds lightweight, offline AI tools for processing documents, audio, and video.',
        'hero.pill1':   'Simplicity over complexity',
        'hero.pill2':   'Local control',
        'hero.pill3':   'Practical results',
        'hero.cta1':    'Browse products',
        'hero.cta2':    'Get in touch',

        /* TextNormalizer */
        'tn.badge':    'Available now',
        'tn.subtitle': 'Cleans, normalizes, and transforms messy text from AI chats, PDFs, documents, and logs. No cloud, no account, no subscription.',
        'ph.label':    'App screenshot',
        'tn.f1.title': 'Instant preview',
        'tn.f1.body':  'See the output before committing. Pick operations from the sidebar, then copy or save.',
        'tn.f2.title': 'Fully offline',
        'tn.f2.body':  'Runs entirely on your machine. No data ever leaves your device.',
        'tn.f3.title': 'Powerful operations',
        'tn.f3.body':  'Remove duplicates, extract URLs and emails, change case, sort lines, clean AI filler text.',
        'tn.f4.title': 'Lightweight and fast',
        'tn.f4.body':  'Small footprint, instant startup. No heavy runtimes or installation dependencies.',
        'tn.price.tag': 'One-time purchase',
        'tn.p1':        'Full access to all operations',
        'tn.p2':        'Free updates',
        'tn.p3':        'Works offline, no account needed',
        'tn.download':  'Download on Gumroad',
        'tn.note':      'Available for Windows',

        /* W-Bee */
        'wb.badge':    'Coming soon',
        'wb.subtitle': 'A local tool for web content processing.',
        'wb.body':     'W-Bee is in active development. Follow along or reach out to be notified when it launches.',
        'wb.cta':      'Notify me',

        /* Contact form */
        'contact.title':    'Contact',
        'contact.subtitle': 'Question, feedback, or issue? Write to us.',
        'contact.name':     'Your name',
        'contact.email':    'Email',
        'contact.message':  'Message',
        'contact.name.ph':  'Your full name',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Describe your inquiry...',
        'contact.send':     'Send',
        'contact.success':  'Message sent. We\'ll get back to you soon.',

        /* Footer */
        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.copy':    '© 2026 AS Labs. All rights reserved.',

        /* Menu button */
        'menu.open':  'Open menu',
        'menu.close': 'Close menu',

        /* Privacy page */
        'privacy.back': '← Back to home',
    }
};

/* ─────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    const html     = document.documentElement;
    const mainNav  = document.getElementById('main-nav');
    const menuBtn  = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const form     = document.getElementById('contact-form');
    const formOk   = document.getElementById('form-success');
    const tnImg    = document.getElementById('tn-screenshot');
    const tnPh     = document.getElementById('tn-ph');
    const langOpts = document.querySelectorAll('.lang-opt');

    /* Initial language matches the html[lang] attribute set in the HTML */
    let lang = html.lang || 'bg';

    /* ── Screenshot: reveal image on successful load ── */
    if (tnImg && tnPh) {
        const revealImg = () => { tnImg.hidden = false; tnPh.hidden = true; };
        tnImg.addEventListener('load', revealImg);
        if (tnImg.complete && tnImg.naturalWidth > 0) revealImg();
    }

    /* ── Core i18n function ── */
    function applyLang(l) {
        lang = l;
        html.lang = l;

        /* Page title */
        const isPrivacyPage = document.body.dataset.page === 'privacy';
        if (isPrivacyPage) {
            document.title = l === 'bg'
                ? 'Политика за поверителност — AS Labs'
                : 'Privacy Policy — AS Labs';
        } else {
            document.title = l === 'bg'
                ? 'AS Labs — Локални AI инструменти'
                : 'AS Labs — Local-first AI tools';
        }

        /* Lang switcher buttons — set active state */
        langOpts.forEach(btn => {
            const active = btn.dataset.targetLang === l;
            btn.setAttribute('aria-pressed', String(active));
        });

        /* Nav aria-label */
        if (mainNav) {
            mainNav.setAttribute('aria-label', TRANSLATIONS[l]['nav.aria']);
        }

        /* Menu button label */
        if (menuBtn) {
            const isOpen = navLinks && navLinks.classList.contains('open');
            menuBtn.setAttribute('aria-label',
                TRANSLATIONS[l][isOpen ? 'menu.close' : 'menu.open']);
        }

        /* All data-i18n text nodes */
        const t = TRANSLATIONS[l];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key in t) el.textContent = t[key];
        });

        /* All data-i18n-placeholder inputs / textareas */
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (key in t) el.placeholder = t[key];
        });

        /* data-lang blocks (privacy page content) — CSS drives visibility
           via html[lang="bg"] [data-lang="bg"] { display: block }.
           We just set html.lang above and the CSS responds automatically.
           No JS toggling needed here. */
    }

    /* ── Language switcher clicks ── */
    langOpts.forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.targetLang));
    });

    /* ── Apply current language on load (hydrates placeholders & aria) ── */
    applyLang(lang);

    /* ── Mobile menu ── */
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label',
                TRANSLATIONS[lang][open ? 'menu.close' : 'menu.open']);
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', TRANSLATIONS[lang]['menu.open']);
            });
        });
    }

    /* ── Smooth scroll (same-page anchors only) ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ── Contact form ── */
    if (form && formOk) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            formOk.hidden = false;
            form.reset();
        });
    }
});
