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

        'hero.eyebrow': 'Локални инструменти за яснота',
        'hero.title': 'Превърнете разхвърляния материал в използваем резултат.',
        'hero.subtitle': 'AS Labs създава настолни приложения — локални, офлайн, еднократно плащане.',
        'hero.cta1': 'Разгледай продуктите',
        'hero.cta2': 'Виж W-Bee',
        'hero.wbee.preview': 'От разхвърляни PPTX, PDF и видео/аудио файлове към чист структуриран DOCX учебен документ.',

        'products.label': 'Продуктова система',
        'products.title': 'Инструменти за по-чиста работа с текст и документи.',
        'products.subtitle': 'TextNormalizer обработва разхвърлян текст. W-Bee превръща източници за учене и работа в структурирани документи.',
        'tn.badge': 'Наличен сега',
        'tn.tagline': 'Почиства, нормализира и подрежда разхвърлян текст от AI чатове, PDF файлове, документи и логове.',
        'tn.cta': 'Виж продукта',
        'wb.badge': 'Очаквайте скоро',
        'wb.tagline': 'Превръща PDF документи, презентации и записи в структурирани, четими учебни и работни материали.',
        'wb.cta.home': 'Научи повече',
        'home.tn.point1': 'Офлайн обработка',
        'home.tn.point2': 'Моментален преглед',
        'home.tn.point3': 'Еднократна покупка',
        'home.wb.point1': 'Чист DOCX изход',
        'home.wb.point2': 'Точно поставени изображения',
        'home.wb.point3': 'Cloud или локален AI',

        'principle.one.title': 'Локален контрол',
        'principle.one.body': 'Приложенията са проектирани така, че работата да остава на вашата машина — облачната обработка е налична като опция.',
        'principle.two.title': 'Структура пред хаос',
        'principle.two.body': 'Фокус върху по-добър ред: чист текст, ясна структура и използваеми документи.',
        'principle.three.title': 'Реален резултат',
        'principle.three.body': 'Спестени време и усилия по ръчна обработка на документи.',

        'featured.tn.title': 'Когато текстът е разхвърлян, започнете на чисто.',
        'featured.tn.body': 'TextNormalizer е бърз desktop инструмент за почистване на текст от AI разговори, PDF копирания, логове и документи. Няма акаунт, няма абонамент, няма облачна зависимост.',
        'featured.tn.point1': 'Премахване на дубликати, излишни интервали и шум.',
        'featured.tn.point2': 'Извличане на URL адреси, email-и и структурирани списъци.',
        'featured.tn.point3': 'Моментален преглед преди копиране или запис.',
        'featured.tn.cta': 'Виж TextNormalizer',
        'featured.wb.title': 'W-Bee подготвя материалите ви за реално четене.',
        'featured.wb.body': 'W-Bee е предстоящ продукт за превръщане на PDF-и, презентации, лекции и записи в чисти DOCX документи — с добре запазена структура, език и изображения.',
        'featured.wb.status1': 'В активна разработка',
        'featured.wb.status2': 'Фокус върху DOCX изход и локална обработка',
        'featured.wb.cta': 'Виж W-Bee',

        'tn.download.short': 'Gumroad',
        'tn.download': 'Изтегли от Gumroad',
        'tn.hero.title': 'Почистете разхвърляния текст, преди да ви забави работата.',
        'tn.subtitle': 'TextNormalizer почиства, нормализира и трансформира текст от AI чатове, PDF файлове, документи и логове. Без облак, без акаунт, без абонамент.',
        'tn.see.features': 'Виж функциите',
        'tn.hero.price': '$9.99 еднократно плащане',
        'tn.fact.price': 'Еднократно',
        'tn.fact.local.value': 'Offline',
        'tn.fact.local': 'Данните остават при вас',
        'tn.fact.platform.value': 'Windows',
        'tn.note': 'Достъпен за Windows',
        'ph.label': 'Снимка на приложението',
        'tn.screenshot.caption': 'Прегледайте резултата, изберете операции, копирайте или запазете почистения текст от едно локално desktop приложение.',
        'usecases.label': 'Случаи на употреба',
        'tn.usecases.title': 'Създаден за текст, който идва от реални работни източници.',
        'tn.usecases.body': 'Копирането от AI чатове, PDF-и и документи често оставя скрит шум. TextNormalizer го премахва, преди текстът да влезе в работния ви процес.',
        'tn.uc1.title': 'AI chat cleanup',
        'tn.uc1.body': 'Премахнете излишни формати, празни редове и повтарящ се текст от AI отговори.',
        'tn.uc2.title': 'PDF и документен текст',
        'tn.uc2.body': 'Подредете копирани блокове с разбити редове, странни интервали и непоследователна пунктуация.',
        'tn.uc3.title': 'Листи, URL-и и email-и',
        'tn.uc3.body': 'Извлечете структурирани елементи и подгответе чисти списъци за следваща обработка.',
        'tn.uc4.title': 'Логове и сурови бележки',
        'tn.uc4.body': 'Сортирайте, нормализирайте и намалете шума в текст, който не е писан за четене.',
        'features.label': 'Функции',
        'tn.features.title': 'Какво прави TextNormalizer',
        'tn.features.subtitle': 'Малък инструмент, фокусиран върху операции, които реално спестяват време.',
        'tn.f1.title': 'Моментален преглед',
        'tn.f1.body': 'Виждате резултата преди да потвърдите. Изберете операции от страничната лента, копирайте или запазете.',
        'tn.f2.title': 'Напълно офлайн',
        'tn.f2.body': 'Работи изцяло на вашата машина. Никакви данни не напускат устройството ви.',
        'tn.f3.title': 'Мощни операции',
        'tn.f3.body': 'Премахване на дубликати, извличане на URL и email, промяна на регистър, сортиране, почистване на излишен AI текст.',
        'tn.f4.title': 'Лек и бърз',
        'tn.f4.body': 'Малък размер, бърз старт. Без допълнителни инсталации или тежки зависимости.',
        'trust.one.title': 'Без облачна зависимост',
        'trust.one.body': 'TextNormalizer работи локално и не изпраща вашия текст към външни услуги.',
        'trust.two.title': 'Без акаунт',
        'trust.two.body': 'Купувате продукта и го използвате без регистрация или login flow.',
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
        'wb.hero.title': 'Превърнете източниците си в структурирани, четими учебни материали.',
        'wb.subtitle': 'W-Bee взема PDF-и, презентации и лекционни материали и ги трансформира в чисти, добре структурирани документи, които можете да четете, учите и споделяте.',
        'wb.fact.status.value': 'Soon',
        'wb.fact.status': 'В активна разработка',
        'wb.fact.output': 'Чист редактируем изход',
        'wb.fact.mode.value': 'Local',
        'wb.fact.mode': 'Локален или cloud AI',
        'wb.preview.label': 'W-Bee preview в разработка',
        'wb.what.label': 'Какво прави W-Bee',
        'wb.what.title': 'Мост между суровия материал и документ, който наистина се чете.',
        'wb.what.p1': 'Повечето учебни материали, изследвания и презентации не са създадени за четене — те са създадени за представяне. Слайдовете са откъслечни. PDF-ите са плътни. Записите съдържат знание, което рядко стига до хартия.',
        'wb.what.p2': 'W-Bee анализира структурата на източника, открива естествените секции и теми, извлича вградените изображения и генерира полиран документ, който се чете ясно от начало до край.',
        'wb.why.label': 'Защо е важно',
        'wb.why.title': 'Ручната трансформация на материали е бавна, повтаряща се и лесна за объркване.',
        'wb.why.p1': 'Конвертирането на суров академичен или професионален материал в четим документ отнема време. Да го направите точно — със запазен ред на секциите, правилно поставени изображения и терминология на оригиналния език — е още по-трудно.',
        'wb.why.p2': 'W-Bee поема тази работа без да е нужно да докосвате шаблон, да пренареждате секции или ръчно да поставяте изображения. Влизат суровите материали. Излиза готов документ.',
        'wb.features.title': 'Създаден за вярно организиране, не за повърхностно резюме.',
        'wb.f1.title': 'Структуриран документен изход',
        'wb.f1.body': 'Заглавия, основен текст, списъци и секции се генерират от логическата структура на съдържанието, не от форматиращи предположения.',
        'wb.f2.title': 'Точно поставяне на изображения',
        'wb.f2.body': 'Фигурите се извличат и поставят в секцията, към която принадлежат, съобразено с позицията им в източника.',
        'wb.f3.title': 'Езикова вярност',
        'wb.f3.body': 'W-Bee запазва оригиналния език и техническата терминология, включително неанглийска академична и професионална лексика.',
        'wb.f4.title': 'Cloud или локален AI',
        'wb.f4.body': 'Използвайте собствен OpenAI ключ за cloud обработка или работете изцяло офлайн с локален модел.',
        'wb.f5.title': 'PDF, PPTX, DOCX, TXT, audio, video',
        'wb.f5.body': 'Едно приложение покрива пълния набор от лекционни и референтни формати.',
        'wb.f6.title': 'Чист DOCX изход',
        'wb.f6.body': 'Резултатът е стандартен Word документ: редактируем, печатим и съвместим с обичайните инструменти.',
        'wb.who.label': 'За кого е',
        'wb.who.title': 'За хора, които редовно превръщат знание в работни документи.',
        'wb.who1.title': 'Студенти и изследователи',
        'wb.who1.body': 'За лекционни слайдове, академични текстове и записи, които трябва да станат полезни за учене или писане.',
        'wb.who2.title': 'Преподаватели и обучители',
        'wb.who2.body': 'За създаване на чисти учебни материали от различни източници без ръчно сглобяване.',
        'wb.who3.title': 'Специалисти и knowledge workers',
        'wb.who3.body': 'За технически спецификации, доклади и записани брифинги, които трябва да станат структурирани бързо.',
        'wb.how.label': 'Как работи',
        'wb.how.title': 'От изходния файл до готов DOCX в един последователен процес.',
        'wb.how.body': 'Процесът е проектиран така, че да запази структурата, терминологията и визуалните елементи, вместо да ги изглади в безлично резюме.',
        'wb.step1': 'Заредете файл — PDF, презентация, документ или запис.',
        'wb.step2': 'W-Bee анализира структурата, открива теми и извлича изображения.',
        'wb.step3': 'AI пренаписва материала в четими секции с точни заглавия и правилно поставени изображения.',
        'wb.step4': 'Изтегляте полиран DOCX документ, готов за четене, споделяне или редакция.',
        'wb.process.note': 'Целият процес работи на вашата машина. Документи не се съхраняват или споделят външно, освен ако изберете cloud AI обработка — и тогава към модела се изпраща само текстовото съдържание, не вашите файлове.',
        'wb.final.title': 'Започнете да създавате по-добри документи.',
        'wb.final.body': 'W-Bee не обобщава и не преразказва произволно — той организира и представя. Резултатът е документ, който вярно отразява изходния материал в реално използваема форма.',
        'wb.status.active': 'В активна разработка',
        'wb.status.launch': 'Дата на пускане предстои',
        'wb.status.notify': 'Пишете ни за известие',

        'contact.label': 'Контакт',
        'contact.title': 'Пишете за въпрос, обратна връзка или поддръжка.',
        'contact.subtitle': 'Ако имате въпрос за TextNormalizer, интерес към W-Bee или проблем с продукт, изпратете съобщение директно.',
        'contact.name': 'Вашето име',
        'contact.email': 'Email',
        'contact.message': 'Съобщение',
        'contact.name.ph': 'Пълното Ви име',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Опишете запитването си...',
        'contact.send': 'Изпрати',
        'contact.success': 'Съобщението е изпратено. Ще се свържем с вас скоро.',

        'footer.tagline': 'Локални инструменти за яснота, структура и практически резултати.',
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

        'hero.eyebrow': 'Local tools for clarity',
        'hero.title': 'Turn messy source material into usable output.',
        'hero.subtitle': 'AS Labs builds local desktop applications — offline, no account, one-time purchase.',
        'hero.cta1': 'Explore products',
        'hero.cta2': 'View W-Bee',
        'hero.wbee.preview': 'From messy PPTX, PDF, and video/audio files to a clean structured DOCX study document.',

        'products.label': 'Product system',
        'products.title': 'Tools for cleaner work with text and documents.',
        'products.subtitle': 'TextNormalizer processes messy text. W-Bee turns study and work sources into structured documents.',
        'tn.badge': 'Available now',
        'tn.tagline': 'Cleans, normalizes, and structures messy text from AI chats, PDFs, documents, and logs.',
        'tn.cta': 'View product',
        'wb.badge': 'Coming soon',
        'wb.tagline': 'Turns PDF documents, presentations, and recordings into structured, readable study and work material.',
        'wb.cta.home': 'Learn more',
        'home.tn.point1': 'Offline processing',
        'home.tn.point2': 'Instant preview',
        'home.tn.point3': 'One-time purchase',
        'home.wb.point1': 'Clean DOCX output',
        'home.wb.point2': 'Accurate image placement',
        'home.wb.point3': 'Cloud or local AI',

        'principle.one.title': 'Local control',
        'principle.one.body': 'The applications are designed to keep work on your machine — cloud processing is available as an option.',
        'principle.two.title': 'Structure over chaos',
        'principle.two.body': 'Focus on better order: clean text, clear structure, and usable documents.',
        'principle.three.title': 'Real output',
        'principle.three.body': 'Time and effort saved on manual document processing.',

        'featured.tn.title': 'When text is messy, start clean.',
        'featured.tn.body': 'TextNormalizer is a fast desktop utility for cleaning text from AI conversations, PDF copies, logs, and documents. No account, no subscription, no cloud dependency.',
        'featured.tn.point1': 'Remove duplicates, extra whitespace, and noise.',
        'featured.tn.point2': 'Extract URLs, emails, and structured lists.',
        'featured.tn.point3': 'Preview the result before copying or saving.',
        'featured.tn.cta': 'View TextNormalizer',
        'featured.wb.title': 'W-Bee prepares your material for real reading.',
        'featured.wb.body': 'W-Bee is an upcoming product for turning PDFs, presentations, lectures, and recordings into clean DOCX documents with preserved structure, language, and images.',
        'featured.wb.status1': 'In active development',
        'featured.wb.status2': 'Focused on DOCX output and local processing',
        'featured.wb.cta': 'View W-Bee',

        'tn.download.short': 'Gumroad',
        'tn.download': 'Download on Gumroad',
        'tn.hero.title': 'Clean messy text before it slows down your workflow.',
        'tn.subtitle': 'TextNormalizer cleans, normalizes, and transforms text from AI chats, PDFs, documents, and logs. No cloud, no account, no subscription.',
        'tn.see.features': 'See features',
        'tn.hero.price': '$9.99 one-time purchase',
        'tn.fact.price': 'One-time',
        'tn.fact.local.value': 'Offline',
        'tn.fact.local': 'Your data stays with you',
        'tn.fact.platform.value': 'Windows',
        'tn.note': 'Available for Windows',
        'ph.label': 'App screenshot',
        'tn.screenshot.caption': 'Preview the result, choose operations, then copy or save cleaned text from one local desktop app.',
        'usecases.label': 'Use cases',
        'tn.usecases.title': 'Built for text that comes from real work sources.',
        'tn.usecases.body': 'Copying from AI chats, PDFs, and documents often leaves hidden noise. TextNormalizer removes it before the text enters your workflow.',
        'tn.uc1.title': 'AI chat cleanup',
        'tn.uc1.body': 'Remove excess formatting, blank lines, and repeated text from AI responses.',
        'tn.uc2.title': 'PDF and document text',
        'tn.uc2.body': 'Fix copied blocks with broken lines, strange spacing, and inconsistent punctuation.',
        'tn.uc3.title': 'Lists, URLs, and emails',
        'tn.uc3.body': 'Extract structured elements and prepare clean lists for the next step.',
        'tn.uc4.title': 'Logs and raw notes',
        'tn.uc4.body': 'Sort, normalize, and reduce noise in text that was not written to be read.',
        'features.label': 'Features',
        'tn.features.title': 'What TextNormalizer does',
        'tn.features.subtitle': 'A small tool focused on operations that actually save time.',
        'tn.f1.title': 'Instant preview',
        'tn.f1.body': 'See the output before committing. Pick operations from the sidebar, then copy or save.',
        'tn.f2.title': 'Fully offline',
        'tn.f2.body': 'Runs entirely on your machine. No data ever leaves your device.',
        'tn.f3.title': 'Powerful operations',
        'tn.f3.body': 'Remove duplicates, extract URLs and emails, change case, sort lines, clean AI filler text.',
        'tn.f4.title': 'Lightweight and fast',
        'tn.f4.body': 'Small footprint, instant startup. No heavy runtimes or installation dependencies.',
        'trust.one.title': 'No cloud dependency',
        'trust.one.body': 'TextNormalizer runs locally and does not send your text to external services.',
        'trust.two.title': 'No account',
        'trust.two.body': 'Buy the product and use it without registration or a login flow.',
        'trust.three.title': 'No subscription',
        'trust.three.body': 'A one-time purchase for full access to the operations.',
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
        'wb.hero.title': 'Turn source documents into structured, readable study material.',
        'wb.subtitle': 'W-Bee takes your PDFs, slide decks, and lecture materials and transforms them into clean, well-structured documents you can read, study from, and share.',
        'wb.fact.status.value': 'Soon',
        'wb.fact.status': 'In active development',
        'wb.fact.output': 'Clean editable output',
        'wb.fact.mode.value': 'Local',
        'wb.fact.mode': 'Local or cloud AI',
        'wb.preview.label': 'W-Bee development preview',
        'wb.what.label': 'What W-Bee does',
        'wb.what.title': 'A bridge between raw material and a document that actually reads clearly.',
        'wb.what.p1': 'Most documents that come out of lectures, research, or presentations are not designed to be read — they are designed to be presented. Slides are fragments. PDFs are dense. Recordings hold knowledge that rarely makes it onto a page.',
        'wb.what.p2': 'W-Bee analyses the structure of your source material, identifies natural sections and topics, extracts embedded images, and generates a polished output document that reads clearly from start to finish.',
        'wb.why.label': 'Why it matters',
        'wb.why.title': 'Manual transformation of source material is slow, repetitive, and easy to get wrong.',
        'wb.why.p1': 'Converting raw academic or professional material into readable documents is slow, repetitive work. Doing it accurately — preserving section order, keeping images anchored to the right content, and maintaining terminology in the original language — is harder still.',
        'wb.why.p2': 'W-Bee handles that work without requiring you to touch a template, reorder sections, or manually place figures. Raw materials go in. A finished document comes out.',
        'wb.features.title': 'Built for faithful organization, not shallow summarization.',
        'wb.f1.title': 'Structured document output',
        'wb.f1.body': 'Headings, body text, bullet lists, and section breaks are generated from the logical content structure, not from formatting guesswork.',
        'wb.f2.title': 'Accurate image placement',
        'wb.f2.body': 'Figures are extracted from source files and placed in the section where they belong, matched by page position and surrounding content.',
        'wb.f3.title': 'Language fidelity',
        'wb.f3.body': 'W-Bee preserves the original language and keeps technical terms intact, including non-English academic and domain-specific vocabulary.',
        'wb.f4.title': 'Cloud or local AI',
        'wb.f4.body': 'Use your own OpenAI key for cloud processing, or run entirely offline with a local model.',
        'wb.f5.title': 'PDF, PPTX, DOCX, TXT, audio, video',
        'wb.f5.body': 'One app handles the full range of lecture and reference material formats.',
        'wb.f6.title': 'Clean DOCX output',
        'wb.f6.body': 'The output is a standard Word document: editable, printable, and compatible with every standard tool.',
        'wb.who.label': 'Who it is for',
        'wb.who.title': 'For people who regularly turn knowledge into working documents.',
        'wb.who1.title': 'Students and researchers',
        'wb.who1.body': 'For lecture slides, academic papers, and recorded sessions that need to become useful for studying or writing.',
        'wb.who2.title': 'Educators and trainers',
        'wb.who2.body': 'For producing clean course material from multiple formats without manual document assembly.',
        'wb.who3.title': 'Professionals and knowledge workers',
        'wb.who3.body': 'For technical specs, reports, and recorded briefings that need to become structured quickly.',
        'wb.how.label': 'How it works',
        'wb.how.title': 'From source file to finished DOCX in one coherent process.',
        'wb.how.body': 'The process is designed to preserve structure, terminology, and visual elements instead of flattening them into a generic summary.',
        'wb.step1': 'Import your source file — PDF, presentation, document, or recording.',
        'wb.step2': 'W-Bee analyses the content structure, detects topics, and extracts embedded figures.',
        'wb.step3': 'The AI rewrites the material into coherent sections with accurate headings and properly anchored images.',
        'wb.step4': 'Download a polished DOCX document, ready to read, share, or edit.',
        'wb.process.note': 'The entire process runs on your machine. No documents are stored or shared externally unless you choose cloud AI processing — and even then, only the text content is sent to the model, not your files.',
        'wb.final.title': 'Start producing better documents.',
        'wb.final.body': 'W-Bee does not summarize or paraphrase arbitrarily — it organizes and presents. The result is a document that reflects your source material faithfully in a genuinely usable form.',
        'wb.status.active': 'In active development',
        'wb.status.launch': 'Launch date to be announced',
        'wb.status.notify': 'Contact us to be notified',

        'contact.label': 'Contact',
        'contact.title': 'Write about a question, feedback, or support.',
        'contact.subtitle': 'If you have a question about TextNormalizer, interest in W-Bee, or a product issue, send a message directly.',
        'contact.name': 'Your name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.name.ph': 'Your full name',
        'contact.email.ph': 'your@email.com',
        'contact.message.ph': 'Describe your inquiry...',
        'contact.send': 'Send',
        'contact.success': 'Message sent. We\'ll get back to you soon.',

        'footer.tagline': 'Local tools for clarity, structure, and practical results.',
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
