'use strict';

const TRANSLATIONS = {
    bg: {
        'nav.home': 'Начало',
        'nav.tn': 'TextNormalizer',
        'nav.wbee': 'W-Bee',
        'nav.contact': 'Контакти',
        'nav.privacy': 'Поверителност',
        'nav.aria': 'Главно меню',
        'nav.cta': 'TextNormalizer',

        'hero.eyebrow': 'Настолни приложения. Офлайн.',
        'hero.title': 'Превърнете разхвърляната информация в използваеми документи.',
        'hero.subtitle': 'AS Labs разработва настолни приложения за почистване, структуриране и обработка на текст и документи - локално, поверително и без абонамент.',
        'hero.cta1': 'Разгледай продуктите',
        'hero.cta2': 'Виж W-Bee',
        'hero.wbee.preview': 'PDF документи, презентации и записи — превърнати в чист, структуриран DOCX.',

        'products.label': 'Продукти',
        'products.title': 'Инструменти за текст и документи.',
        'products.subtitle': 'TextNormalizer почиства разхвърлян текст. W-Bee превръща суров материал в структурирани документи.',
        'tn.badge': 'Наличен сега',
        'tn.tagline': 'Почиства и нормализира разхвърлян текст от ИИ чатове, PDF файлове и документи.',
        'tn.cta': 'Виж TextNormalizer',
        'wb.badge': 'Очаквайте скоро',
        'wb.tagline': 'Превръща PDF документи, презентации и записи в подредени документи.',
        'wb.cta.home': 'Научи повече',
        'home.tn.point1': 'Офлайн обработка',
        'home.tn.point2': 'Моментален преглед',
        'home.tn.point3': 'Еднократна покупка',
        'home.wb.point1': 'Чист DOCX изход',
        'home.wb.point2': 'Точно поставени изображения',
        'home.wb.point3': 'Облачен или локален ИИ',

        'principle.one.title': 'Локален контрол',
        'principle.one.body': 'Работата остава на Вашата машина — облачната обработката е налична като опция.',
        'principle.two.title': 'Структура пред хаос',
        'principle.two.body': 'Чист текст, ясна структура и документи, готови за работа.',
        'principle.three.title': 'Реален резултат',
        'principle.three.body': 'Всеки продукт решава конкретен проблем и предоставя използваем резултат.',

        'featured.tn.title': 'Когато текстът е разхвърлян, започнете на чисто.',
        'featured.tn.body': 'TextNormalizer е бързо настолно приложение за почистване на текст от ИИ разговори, PDF копирания, логове и документи. Без необходимост от профил или абонамент.',
        'featured.tn.point1': 'Премахване на дубликати, излишни интервали и форматиране.',
        'featured.tn.point2': 'Извличане на URL адреси, email-и и структурирани списъци.',
        'featured.tn.point3': 'Моментален преглед преди копиране или запис.',
        'featured.tn.cta': 'Виж TextNormalizer',
        'featured.wb.title': 'W-Bee превръща суровите материали в структуриран документ.',
        'featured.wb.body': 'W-Bee е предстоящ продукт за превръщане на PDF документи, презентации, лекции и записи в чисти DOCX документи — с добре запазена структура, език и изображения.',
        'featured.wb.status1': 'В активна разработка',
        'featured.wb.status2': 'Фокус върху структуриране, а не ИИ резюмета.',
        'featured.wb.cta': 'Виж W-Bee',

        'tn.download.short': 'Gumroad',
        'tn.download': 'Изтегли от Gumroad',
        'tn.hero.title': 'Почистете разхвърляния текст, преди да спъне работния Ви процес.',
        'tn.subtitle': 'TextNormalizer премахва шум, счупено форматиране и повтарящ се текст от ИИ чатове, текстови документи и логове — локално и без абонамент.',
        'tn.see.features': 'Виж функциите',
        'tn.hero.price': '$9.99 еднократно плащане',
        'tn.fact.price': 'Еднократно',
        'tn.fact.local.value': 'Офлайн',
        'tn.fact.local': 'Данните не напускат компютъра Ви',
        'tn.fact.platform.value': 'Windows',
        'tn.note': 'Достъпен за Windows',
        'ph.label': 'Снимка на приложението',
        'tn.screenshot.caption': 'Изберете операции, прегледайте резултата, копирайте или запазете.',
        'usecases.label': 'Потребителски сценарии',
        'tn.usecases.title': 'За текст от ИИ инструменти, документи, логове и други.',
        'tn.usecases.body': 'Копирането от ИИ чатове често оставя скрит шум. TextNormalizer го премахва.',
        'tn.uc1.title': 'ИИ чат почистване',
        'tn.uc1.body': 'Премахнете излишни формати, празни редове и повтарящ се текст от ИИ отговори.',
        'tn.uc2.title': 'PDF и документен текст',
        'tn.uc2.body': 'Почистете копирани блокове с разбити редове, странни интервали и счупена пунктуация.',
        'tn.uc3.title': 'Листи, URL-и и email-и',
        'tn.uc3.body': 'Извлечете URL адреси, email-и и структурирани данни от разхвърлян текст.',
        'tn.uc4.title': 'Логове и сурови бележки',
        'tn.uc4.body': 'Намалете шума и нормализирайте текст, написан за машини, не за хора.',
        'features.label': 'Функции',
        'tn.features.title': 'Какво прави TextNormalizer',
        'tn.features.subtitle': 'Малко приложение с операции, от които реално имате нужда.',
        'tn.f1.title': 'Моментален преглед',
        'tn.f1.body': 'Виждате резултата преди да потвърдите. Изберете операции от страничната лента, копирайте или запазете.',
        'tn.f2.title': 'Напълно офлайн',
        'tn.f2.body': 'Работи изцяло локално. Текстът Ви не напуска машината.',
        'tn.f3.title': 'Мощни операции',
        'tn.f3.body': 'Премахване на дубликати, извличане на URL и email, промяна на регистър, сортиране, почистване на излишен ИИ текст.',
        'tn.f4.title': 'Лек и бърз',
        'tn.f4.body': 'Малък размер, бърз старт. Без допълнителни инсталации.',
        'trust.one.title': 'Без облачна зависимост',
        'trust.one.body': 'TextNormalizer не изпраща данни в облак. Целият процес се случва на Вашата машина.',
        'trust.two.title': 'Без акаунт',
        'trust.two.body': 'Купувате, изтегляте и използвате — без регистрация, без вход.',
        'trust.three.title': 'Без абонамент',
        'trust.three.body': 'Еднократна покупка за пълен достъп до операциите.',
        'tn.price.tag': 'Еднократно плащане',
        'tn.p1': 'Пълен достъп до всички операции',
        'tn.p2': 'Безплатни актуализации',
        'tn.p3': 'Работи офлайн, без акаунт',
        'tn.docs.title': 'Документи за продукта',
        'tn.docs.readme': 'Документация',
        'tn.docs.eula': 'Лицензионно споразумение',
        'tn.docs.refund': 'Политика за възстановяване',
        'tn.docs.support.pol': 'Политика за поддръжка',
        'tn.docs.post.purchase': 'Бележки след покупката',
        'tn.docs.contact.line': 'Поддръжка:',

        'wb.cta': 'Уведоми ме',
        'wb.how.cta': 'Как работи',
        'wb.hero.title': 'Превърнете лекции, PDF файлове и записи в структуриран, четим документ.',
        'wb.subtitle': 'W-Bee взема хаотични PDF файлове, слайдове, документи и видеозаписи и ги превръща в чисти, структурирани DOCX документи — готови за учебна цел или работа.',
        'wb.fact.status.value': 'Soon',
        'wb.fact.status': 'В активна разработка',
        'wb.fact.output': 'Чист редактируем изход',
        'wb.fact.mode.value': 'Локален',
        'wb.fact.mode': 'Локален или облачен ИИ',
        'wb.preview.label': 'W-Bee демонстрация в разработка',
        'wb.what.label': 'Какво прави W-Bee',
        'wb.what.title': 'От суров материал до структуриран документ.',
        'wb.what.p1': 'Много учебни материали и презентации са хаотични, дълги и трудни за разбиране. Слайдовете са разбъркани и без структура. PDF текстовете са прекалено дълги. Видеозаписите съдържат знание, което рядко стига до хартия.',
        'wb.what.p2': 'W-Bee анализира структурата на материала и открива естествените секции, теми и изображения. В резултат се получава завършен документ, структуриран за ясно четене от начало до край.',
        'wb.why.label': 'Защо е важно',
        'wb.why.title': 'Ръчното превръщане на суров материал в документ е бавна, трудоемка задача.',
        'wb.why.p1': 'Конвертирането на суров академичен или професионален материал в четим документ отнема време.',
        'wb.why.p2': 'W-Bee поема тази работа за Вас. Не е нужно да прекарвате часове в ръчна проверка и обработка на материалите, да пренареждате секции или да поставяте изображения.',
        'wb.features.title': 'Организира и структурира.',
        'wb.f1.title': 'Структуриран документ',
        'wb.f1.body': 'Заглавията, текста и секциите следват логическата структура на съдържанието.',
        'wb.f2.title': 'Правилно поставяне на изображенията в смисловия контекст',
        'wb.f2.body': 'Фигурите се извличат и поставят там, където принадлежат — съобразено с позицията им от оригинала.',
        'wb.f3.title': 'Езикова вярност',
        'wb.f3.body': 'W-Bee запазва оригиналния език и техническата терминология — включително специализирана лексика на всеки академичен или работен език.',
        'wb.f4.title': 'Cloud или локален ИИ',
        'wb.f4.body': 'Използвайте собствен OpenAI ключ за облачна обработка или работете изцяло офлайн с локален модел.',
        'wb.f5.title': 'PDF, PPTX, DOCX, TXT, audio, video',
        'wb.f5.body': 'Едно приложение покрива всички основни формати: PDF, слайдове, документи, аудио и видео.',
        'wb.f6.title': 'Чист DOCX файл',
        'wb.f6.body': 'Резултатът е стандартен Word документ: редактируем, готов за печат и съвместим с обичайните инструменти.',
        'wb.who.label': 'За кого е',
        'wb.who.title': 'За хора, чиято работа е да превръщат знание в документи.',
        'wb.who1.title': 'Студенти и изследователи',
        'wb.who1.body': 'За слайдове, академични текстове и записи — превърнати в структуриран учебен материал.',
        'wb.who2.title': 'Преподаватели и обучители',
        'wb.who2.body': 'За чисти учебни материали от различни формати, без ръчно сглобяване.',
        'wb.who3.title': 'Специалисти и изследователи',
        'wb.who3.body': 'За технически спецификации, доклади и брифинги — структурирани бързо, без ръчна обработка.',
        'wb.how.label': 'Как работи',
        'wb.how.title': 'Четири стъпки от суров файл до готов DOCX.',
        'wb.how.body': 'Запазва структурата, терминологията и визуалните елементи.',
        'wb.step1': 'Заредете файл — PDF, презентация, документ или видеозапис.',
        'wb.step2': 'W-Bee анализира структурата, открива теми и извлича изображения.',
        'wb.step3': 'ИИ пренаписва материала в четими секции с точни заглавия и правилно поставени изображения.',
        'wb.step4': 'Изтегляте завършен DOCX документ, готов за четене.',
        'wb.process.note': 'Целият процес се случва на Вашата машина. Документи не се съхраняват или споделят външно, освен ако изберете облачна ИИ обработка.',
        'wb.final.title': 'По-добри документи от всякакъв материал — очаквайте скоро.',
        'wb.final.body': 'W-Bee не обобщава произволно — той организира и структурира. Резултатът е документ, който вярно отразява изходния материал в употребима форма.',
        'wb.status.active': 'В активна разработка',
        'wb.status.launch': 'Дата на пускане — скоро',
        'wb.status.notify': 'Пишете ни за известие',

        'contact.label': 'Контакт',
        'contact.title': 'Имате въпрос или искате да споделите мнението си? ',
        'contact.subtitle': 'Пишете ни в нашата форма за контакти.',
        'contact.name': 'Име',
        'contact.email': 'Email',
        'contact.message': 'Съобщение',
        'contact.name.ph': 'John Doe',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Вашето съобщение...',
        'contact.send': 'Изпрати',
        'contact.success': 'Съобщението е изпратено. Ще се свържем с Вас скоро.',

        'footer.tagline': 'Настолни инструменти за текст и документи — локални, офлайн, без абонамент.',
        'footer.about': 'За нас',
        'footer.privacy': 'Политика за поверителност',
        'footer.terms': 'Условия за ползване',
        'footer.contact': 'Контакти',
        'footer.copy': '© 2026 AS Labs. Всички права запазени.',
        'menu.open': 'Отвори меню',
        'menu.close': 'Затвори меню',
        'privacy.back': '← Обратно към началото'
    },

    en: {
        'nav.home': 'Home',
        'nav.tn': 'TextNormalizer',
        'nav.wbee': 'W-Bee',
        'nav.contact': 'Contact',
        'nav.privacy': 'Privacy',
        'nav.aria': 'Main navigation',
        'nav.cta': 'TextNormalizer',

        'hero.eyebrow': 'Local desktop tools',
        'hero.title': 'Cleaner text. Better documents.',
        'hero.subtitle': 'AS Labs builds local desktop tools for text and documents — offline, no subscription, one-time purchase.',
        'hero.cta1': 'Explore products',
        'hero.cta2': 'View W-Bee',
        'hero.wbee.preview': 'Slides, PDFs, and recordings — turned into a clean, structured DOCX.',

        'products.label': 'Products',
        'products.title': 'Desktop tools for text and documents.',
        'products.subtitle': 'TextNormalizer cleans messy text. W-Bee turns raw material into structured documents.',
        'tn.badge': 'Available now',
        'tn.tagline': 'Cleans and normalizes messy text from AI chats, PDFs, and documents.',
        'tn.cta': 'View TextNormalizer',
        'wb.badge': 'Coming soon',
        'wb.tagline': 'Turns PDFs, presentations, and recordings into structured, readable documents.',
        'wb.cta.home': 'Learn more',
        'home.tn.point1': 'Offline processing',
        'home.tn.point2': 'Instant preview',
        'home.tn.point3': 'One-time purchase',
        'home.wb.point1': 'Clean DOCX output',
        'home.wb.point2': 'Accurate image placement',
        'home.wb.point3': 'Cloud or local AI',

        'principle.one.title': 'Local control',
        'principle.one.body': 'Work stays on your machine — cloud processing is available, when needed.',
        'principle.two.title': 'Structure over chaos',
        'principle.two.body': 'Clean text, clear structure, and documents that are ready to use.',
        'principle.three.title': 'Real output',
        'principle.three.body': 'Every product ends with structured results — ready to use.',

        'featured.tn.title': 'When text is messy, start clean.',
        'featured.tn.body': 'TextNormalizer is a fast desktop utility for cleaning text from AI conversations, PDF copies, logs, and documents. No account, no subscription, no cloud dependency.',
        'featured.tn.point1': 'Remove duplicates, extra whitespace, and noise.',
        'featured.tn.point2': 'Extract URLs, emails, and structured lists.',
        'featured.tn.point3': 'Preview the result before copying or saving.',
        'featured.tn.cta': 'View TextNormalizer',
        'featured.wb.title': 'W-Bee turns your source material into something actually readable.',
        'featured.wb.body': 'W-Bee is an upcoming product for turning PDFs, presentations, lectures, and recordings into clean DOCX documents with preserved structure, language, and images.',
        'featured.wb.status1': 'In active development',
        'featured.wb.status2': 'Focused on DOCX output and local processing',
        'featured.wb.cta': 'View W-Bee',

        'tn.download.short': 'Gumroad',
        'tn.download': 'Download on Gumroad',
        'tn.hero.title': 'Clean messy text before it stops your work cold.',
        'tn.subtitle': 'TextNormalizer cleans text from AI chats, PDFs, documents, and logs. No cloud, no account, no subscription.',
        'tn.see.features': 'See features',
        'tn.hero.price': '$9.99 one-time purchase',
        'tn.fact.price': 'One-time',
        'tn.fact.local.value': 'Offline',
        'tn.fact.local': 'Your data stays with you',
        'tn.fact.platform.value': 'Windows',
        'tn.note': 'Available for Windows',
        'ph.label': 'App screenshot',
        'tn.screenshot.caption': 'Choose operations, preview the result, then copy or save.',
        'usecases.label': 'Use cases',
        'tn.usecases.title': 'For text that comes from AI tools, PDFs, and everyday work.',
        'tn.usecases.body': 'Copying from AI chats, PDFs, and documents often leaves hidden noise. TextNormalizer removes it before the text enters your workflow.',
        'tn.uc1.title': 'AI chat cleanup',
        'tn.uc1.body': 'Remove excess formatting, blank lines, and repeated text from AI responses.',
        'tn.uc2.title': 'PDF and document text',
        'tn.uc2.body': 'Clean up copied text with broken lines, odd spacing, and inconsistent punctuation.',
        'tn.uc3.title': 'Lists, URLs, and emails',
        'tn.uc3.body': 'Extract URLs, emails, and structured data from unclean text.',
        'tn.uc4.title': 'Logs and raw notes',
        'tn.uc4.body': 'Reduce noise and normalize text that was written for machines, not people.',
        'features.label': 'Features',
        'tn.features.title': 'What TextNormalizer does',
        'tn.features.subtitle': 'A focused utility with operations you\'ll actually use.',
        'tn.f1.title': 'Instant preview',
        'tn.f1.body': 'See the output before committing. Pick operations from the sidebar, then copy or save.',
        'tn.f2.title': 'Fully offline',
        'tn.f2.body': 'Runs entirely on your machine. No data ever leaves your device.',
        'tn.f3.title': 'Powerful operations',
        'tn.f3.body': 'Remove duplicates, extract URLs and emails, change case, sort lines, clean AI filler text.',
        'tn.f4.title': 'Lightweight and fast',
        'tn.f4.body': 'Small footprint, instant startup. No extra installs or runtimes.',
        'trust.one.title': 'No cloud dependency',
        'trust.one.body': 'TextNormalizer doesn\'t touch the cloud. Your text is processed locally, from start to finish.',
        'trust.two.title': 'No account',
        'trust.two.body': 'Buy once, use immediately. No registration required.',
        'trust.three.title': 'No subscription',
        'trust.three.body': 'One payment, full access. No recurring charges.',
        'tn.price.tag': 'One-time purchase',
        'tn.p1': 'Full access to all operations',
        'tn.p2': 'Free updates',
        'tn.p3': 'Works offline, no account needed',
        'tn.docs.title': 'Product documents',
        'tn.docs.readme': 'Documentation',
        'tn.docs.eula': 'License Agreement',
        'tn.docs.refund': 'Refund Policy',
        'tn.docs.support.pol': 'Support Policy',
        'tn.docs.post.purchase': 'Post-Purchase Notes',
        'tn.docs.contact.line': 'Support:',

        'wb.cta': 'Notify me',
        'wb.how.cta': 'How it works',
        'wb.hero.title': 'Turn raw source files into a document you can actually use.',
        'wb.subtitle': 'W-Bee takes PDFs, presentations, documents, and recordings and turns them into clean, well-structured DOCX files — ready to read.',
        'wb.fact.status.value': 'Soon',
        'wb.fact.status': 'In active development',
        'wb.fact.output': 'Clean editable output',
        'wb.fact.mode.value': 'Local',
        'wb.fact.mode': 'Local or cloud AI',
        'wb.preview.label': 'W-Bee development preview',
        'wb.what.label': 'What W-Bee does',
        'wb.what.title': 'From raw material to a document worth reading.',
        'wb.what.p1': 'Many lectures and presentations are chaotic. Slides are fragmented. PDFs are dense. Recordings hold knowledge that rarely makes it onto a page.',
        'wb.what.p2': 'W-Bee analyses the structure of your source, identifies natural sections and topics, and extracts embedded images. The result is a polished document structured to read clearly from start to finish.',
        'wb.why.label': 'Why it matters',
        'wb.why.title': 'Turning raw material into a readable document by hand is slow, repetitive, and easy to get wrong.',
        'wb.why.p1': 'Converting raw academic or professional material into readable documents is slow, repetitive work. Doing it accurately — preserving section order, keeping images anchored to the right content, and maintaining terminology in the original language — is harder still.',
        'wb.why.p2': 'W-Bee handles that work without requiring you to touch a template, reorder sections, or manually place figures. Raw materials go in. A finished document comes out.',
        'wb.features.title': 'Built to organize, not to summarize.',
        'wb.f1.title': 'Structured document output',
        'wb.f1.body': 'Headings, body, and sections follow the logical structure of the content — not arbitrary formatting.',
        'wb.f2.title': 'Accurate image placement',
        'wb.f2.body': 'Figures are extracted and placed where they belong — matched by position and surrounding content in the source.',
        'wb.f3.title': 'Language fidelity',
        'wb.f3.body': 'W-Bee preserves the original language and keeps technical terms intact — including academic and domain-specific vocabulary in any language.',
        'wb.f4.title': 'Cloud or local AI',
        'wb.f4.body': 'Use your own OpenAI key for cloud processing, or run entirely offline with a local model.',
        'wb.f5.title': 'PDF, PPTX, DOCX, TXT, audio, video',
        'wb.f5.body': 'One app handles PDFs, slide decks, documents, audio, and video.',
        'wb.f6.title': 'Clean DOCX output',
        'wb.f6.body': 'The output is a standard Word document: editable, printable, and compatible with every standard tool.',
        'wb.who.label': 'Who it is for',
        'wb.who.title': 'For people whose work involves turning knowledge into documents.',
        'wb.who1.title': 'Students and researchers',
        'wb.who1.body': 'For lecture slides, papers, and recordings — turned into material you can study from or write with.',
        'wb.who2.title': 'Educators and trainers',
        'wb.who2.body': 'For clean course material from multiple formats, without the manual work.',
        'wb.who3.title': 'Professionals and knowledge workers',
        'wb.who3.body': 'For technical specs, reports, and recorded briefings — structured quickly, without manual effort.',
        'wb.how.label': 'How it works',
        'wb.how.title': 'Four steps from source file to finished DOCX.',
        'wb.how.body': 'Preserves structure, terminology, and visuals — rather than flattening everything into a generic summary.',
        'wb.step1': 'Import your source file — PDF, presentation, document, or recording.',
        'wb.step2': 'W-Bee analyses the content structure, identifies topics, and extracts images.',
        'wb.step3': 'The AI rewrites the material into coherent sections with accurate headings and properly anchored images.',
        'wb.step4': 'Download a polished DOCX document, ready to read, share, or edit.',
        'wb.process.note': 'The entire process runs on your machine. No documents are stored or shared externally unless you choose cloud AI processing — and even then, only the text content is sent to the model, not your files.',
        'wb.final.title': 'Better documents. Any source. Coming soon.',
        'wb.final.body': 'W-Bee doesn\'t summarize or paraphrase arbitrarily — it organizes and presents. The result reflects your source material faithfully, in a form you can actually use.',
        'wb.status.active': 'In active development',
        'wb.status.launch': 'Launch date coming soon',
        'wb.status.notify': 'Contact us to be notified',

        'contact.label': 'Contact',
        'contact.title': 'Have a question or a product issue? Send a message.',
        'contact.subtitle': 'Questions about TextNormalizer, interest in W-Bee, or anything else — we read every message.',
        'contact.name': 'Your name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.name.ph': 'Your full name',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Describe your inquiry...',
        'contact.send': 'Send',
        'contact.success': 'Message sent. We\'ll get back to you soon.',

        'footer.tagline': 'Desktop tools for text and documents — local, offline, no subscription.',
        'footer.about': 'About',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.contact': 'Contact',
        'footer.copy': '© 2026 AS Labs. All rights reserved.',
        'menu.open': 'Open menu',
        'menu.close': 'Close menu',
        'privacy.back': '← Back to home'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const mainNav = document.getElementById('main-nav');
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const form = document.getElementById('contact-form');
    const formOk = document.getElementById('form-success');
    const langOpts = document.querySelectorAll('.lang-opt');
    const page = document.body.dataset.page || 'home';
    const LANG_KEY = 'aslabs-lang';
    let lang = localStorage.getItem(LANG_KEY) || html.lang || 'bg';

    [['tn-screenshot', 'tn-ph'], ['wb-screenshot', 'wb-ph']].forEach(([imgId, phId]) => {
        const img = document.getElementById(imgId);
        const ph = document.getElementById(phId);
        if (!img || !ph) return;
        const showFallback = () => { img.hidden = true; ph.hidden = false; };
        img.addEventListener('error', showFallback);
        if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) showFallback();
    });

    document.querySelectorAll('img[src^="screenshots/"]').forEach(img => {
        if (img.id === 'tn-screenshot' || img.id === 'wb-screenshot') return;
        const showFallback = () => {
            if (img.dataset.fallbackApplied === 'true') return;
            img.dataset.fallbackApplied = 'true';
            img.hidden = true;
            const fallback = document.createElement('div');
            fallback.className = 'image-fallback';
            fallback.textContent = img.alt || 'Product screenshot preview';
            img.insertAdjacentElement('afterend', fallback);
        };
        img.addEventListener('error', showFallback);
        if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) showFallback();
    });

    function applyLang(nextLang) {
        lang = TRANSLATIONS[nextLang] ? nextLang : 'bg';
        html.lang = lang;
        localStorage.setItem(LANG_KEY, lang);

        const titles = {
            home: {
                bg: 'AS Labs — Локални инструменти за яснота',
                en: 'AS Labs — Local tools for clarity'
            },
            tn: {
                bg: 'TextNormalizer — AS Labs',
                en: 'TextNormalizer — AS Labs'
            },
            wb: {
                bg: 'W-Bee — AS Labs',
                en: 'W-Bee — AS Labs'
            },
            privacy: {
                bg: 'Политика за поверителност — AS Labs',
                en: 'Privacy Policy — AS Labs'
            },
            about: {
                bg: 'За нас — AS Labs',
                en: 'About — AS Labs'
            },
            terms: {
                bg: 'Условия за ползване — AS Labs',
                en: 'Terms of Use — AS Labs'
            }
        };
        if (page !== 'tn-doc' && titles[page]) document.title = titles[page][lang];

        langOpts.forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn.dataset.targetLang === lang));
        });

        const t = TRANSLATIONS[lang];
        if (mainNav) mainNav.setAttribute('aria-label', t['nav.aria']);
        if (menuBtn) {
            const open = navLinks && navLinks.classList.contains('open');
            menuBtn.setAttribute('aria-label', t[open ? 'menu.close' : 'menu.open']);
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key in t) el.textContent = t[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (key in t) el.placeholder = t[key];
        });
    }

    langOpts.forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.targetLang));
    });

    applyLang(lang);

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label', TRANSLATIONS[lang][open ? 'menu.close' : 'menu.open']);
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', TRANSLATIONS[lang]['menu.open']);
            });
        });
    }

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

    if (form && formOk) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            formOk.hidden = false;
            form.reset();
        });
    }
});
