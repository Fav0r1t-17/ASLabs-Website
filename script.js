'use strict';

/* =============================================
   AS Labs — script.js
   All UI text lives here. To add a language,
   copy one block and translate the values.
   ============================================= */

const TRANSLATIONS = {
    bg: {
        'nav.home':    'Начало',
        'nav.tn':      'TextNormalizer',
        'nav.wbee':    'W-Bee',
        'nav.contact': 'Контакти',

        'hero.eyebrow': 'Локални AI инструменти',
        'hero.title1':  'Прости инструменти.',
        'hero.title2':  'Реални резултати.',
        'hero.subtitle':'AS Labs създава леки, офлайн AI инструменти за обработка на документи, аудио и видео.',
        'hero.pill1':   'Простота пред сложност',
        'hero.pill2':   'Локален контрол',
        'hero.pill3':   'Практически резултати',
        'hero.cta1':    'Разгледай продуктите',
        'hero.cta2':    'Свържи се с нас',

        'tn.badge':    'Наличен сега',
        'tn.subtitle': 'Почиства, нормализира и трансформира разхвърлян текст от AI чатове, PDF файлове, документи и логове. Без облак, без акаунт, без абонамент.',

        'ph.label': 'Снимка на приложението',

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

        'wb.badge':    'Очаквайте скоро',
        'wb.subtitle': 'Локален инструмент за обработка на уеб съдържание.',
        'wb.body':     'W-Bee е в активна разработка. Следете за новини или ни пишете, за да получите известие при пускането.',
        'wb.cta':      'Уведоми ме',

        'contact.title':    'Контакти',
        'contact.subtitle': 'Въпрос, обратна връзка или проблем? Пишете ни директно.',
        'contact.name':     'Вашето име',
        'contact.message':  'Съобщение',
        'contact.send':     'Изпрати',
        'contact.success':  'Съобщението е изпратено. Ще се свържем с вас скоро.',

        'footer.privacy': 'Политика за поверителност',
        'footer.contact': 'Контакти',
        'footer.copy':    '© 2026 AS Labs. Всички права запазени.',
    },

    en: {
        'nav.home':    'Home',
        'nav.tn':      'TextNormalizer',
        'nav.wbee':    'W-Bee',
        'nav.contact': 'Contact',

        'hero.eyebrow': 'Local-first AI tools',
        'hero.title1':  'Simple tools.',
        'hero.title2':  'Real results.',
        'hero.subtitle':'AS Labs builds lightweight, offline AI tools for processing documents, audio, and video.',
        'hero.pill1':   'Simplicity over complexity',
        'hero.pill2':   'Local control',
        'hero.pill3':   'Practical results',
        'hero.cta1':    'Browse products',
        'hero.cta2':    'Get in touch',

        'tn.badge':    'Available now',
        'tn.subtitle': 'Cleans, normalizes, and transforms messy text from AI chats, PDFs, documents, and logs. No cloud, no account, no subscription.',

        'ph.label': 'App screenshot',

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

        'wb.badge':    'Coming soon',
        'wb.subtitle': 'A local tool for web content processing.',
        'wb.body':     'W-Bee is in active development. Follow along or reach out to be notified when it launches.',
        'wb.cta':      'Notify me',

        'contact.title':    'Contact',
        'contact.subtitle': 'Question, feedback, or issue? Write to us.',
        'contact.name':     'Your name',
        'contact.message':  'Message',
        'contact.send':     'Send',
        'contact.success':  'Message sent. We\'ll get back to you soon.',

        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.copy':    '© 2026 AS Labs. All rights reserved.',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const html      = document.documentElement;
    const langBtn   = document.getElementById('lang-toggle');
    const menuBtn   = document.getElementById('menu-toggle');
    const navLinks  = document.getElementById('nav-links');
    const form      = document.getElementById('contact-form');
    const formOk    = document.getElementById('form-success');
    const tnImg     = document.getElementById('tn-screenshot');
    const tnPh      = document.getElementById('tn-ph');

    let lang = 'bg';

    /* --- Screenshot: show image on load, keep placeholder on error --- */
    if (tnImg) {
        const showImg = () => {
            tnImg.hidden = false;
            if (tnPh) tnPh.hidden = true;
        };

        tnImg.addEventListener('load',  showImg);
        tnImg.addEventListener('error', () => { /* placeholder stays visible */ });

        if (tnImg.complete && tnImg.naturalWidth > 0) showImg();
    }

    /* --- Language switching --- */
    function applyLang(l) {
        lang = l;
        html.lang = l;
        document.title = l === 'bg'
            ? 'AS Labs — Локални AI инструменти'
            : 'AS Labs — Local-first AI tools';

        langBtn.textContent = l === 'bg' ? 'EN' : 'BG';
        langBtn.setAttribute('aria-label',
            l === 'bg' ? 'Switch to English' : 'Превключи на български');

        const t = TRANSLATIONS[l];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key in t) el.textContent = t[key];
        });
    }

    langBtn.addEventListener('click', () => applyLang(lang === 'bg' ? 'en' : 'bg'));

    /* --- Mobile menu --- */
    menuBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    /* --- Smooth scroll --- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* --- Contact form --- */
    if (form && formOk) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            formOk.hidden = false;
            form.reset();
        });
    }
});
