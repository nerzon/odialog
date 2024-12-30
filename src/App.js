import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Компонент Header
const Header = () => (
    <header className="header">
        <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Люди, общающиеся в кругу" className="header-image" />
        <div className="header-overlay"></div>
        <div className="header-content">
            <h1>Открытый диалог</h1>
            <p>
                Программа, которая помогает раскрыть внутренний потенциал через глубокое общение и самопознание.
                Присоединяйтесь к моему курсу, чтобы научиться слушать себя и других.
            </p>
        </div>
    </header>
);

// Компонент About
const About = () => (
    <motion.section
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>О программе</h2>
        <p>
            <strong>"Открытый диалог"</strong> — это уникальная программа, которая сочетает в себе элементы психологии, философии и эзотерики.
            Я, как сертифицированный фасилитатор, помогу вам:
        </p>
        <ul>
            <li>Научиться <em>глубинному слушанию</em> и <em>эмпатии</em>.</li>
            <li>Раскрыть свои скрытые возможности и <em>интуицию</em>.</li>
            <li>Найти <em>гармонию</em> в общении с собой и окружающими.</li>
        </ul>
        <p>
            Программа подходит для всех, кто хочет лучше понимать себя и других, а также развить навыки <em>осознанного общения</em>.
        </p>
    </motion.section>
);

// Компонент ScienceAndHealth
const ScienceAndHealth = () => (
    <motion.section
        className="science-health"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>Научный фундамент и здоровье</h2>
        <div className="science-health-content">
            <div className="science">
                <h3>Научный фундамент</h3>
                <p>
                    Программа основана на <strong>Теории Функциональных Систем П.К. Анохина</strong>, которая описывает принципы
                    оптимальной жизнедеятельности живых систем. Эти принципы включают <em>саморегуляцию</em>, <em>адаптацию</em> и стремление к
                    <em>гармонии</em> с окружающей средой.
                </p>
                <p>
                    Современные исследования в области <em>нейропсихофизиологии</em> подтверждают, что практики, основанные на осознанном
                    общении, способствуют снижению уровня стресса, улучшению когнитивных функций и эмоциональной устойчивости.
                </p>
            </div>
            <div className="health">
                <h3>Здоровье и благополучие</h3>
                <p>
                    Участие в программе помогает снизить уровень <em>тревожности</em>, улучшить качество сна и укрепить <em>иммунную систему</em>.
                </p>
                <p>
                    Вы научитесь строить <em>гармоничные отношения</em>, повысите уровень <em>эмпатии</em> и раскроете свой <em>творческий потенциал</em>,
                    что положительно скажется на всех сферах вашей жизни.
                </p>
            </div>
        </div>
    </motion.section>
);

// Компонент FacilitatorApproach
const FacilitatorApproach = () => (
    <motion.section
        className="facilitator-approach"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>Мой подход как фасилитатора</h2>
        <p>
            В своей работе я опираюсь на принципы оптимальной жизнедеятельности живых систем, которые включают:
        </p>
        <ul>
            <li><strong>Уважение:</strong> Каждый участник имеет право быть услышанным и понятым.</li>
            <li><strong>Конфиденциальность:</strong> Всё, что обсуждается на курсе, остаётся между нами.</li>
            <li><strong>Эмпатия:</strong> Я стремлюсь понять ваши чувства и переживания.</li>
            <li><strong>Открытость:</strong> Я создаю безопасное пространство для искреннего общения.</li>
        </ul>
        <p>
            Следование этим принципам помогает участникам достичь <em>личностного роста</em> и улучшить качество жизни.
        </p>
    </motion.section>
);

// Компонент Benefits
const Benefits = () => (
    <motion.section
        className="benefits"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>Почему выбирают нас?</h2>
        <div className="benefits-grid">
            <div className="benefit">
                <i className="fas fa-users"></i>
                <h3>Поддержка сообщества</h3>
                <p>Мы создаем безопасное пространство для общения и роста.</p>
            </div>
            <div className="benefit">
                <i className="fas fa-chalkboard-teacher"></i>
                <h3>Опытные фасилитаторы</h3>
                <p>Наши эксперты помогут вам раскрыть ваш потенциал.</p>
            </div>
            <div className="benefit">
                <i className="fas fa-hand-holding-heart"></i>
                <h3>Индивидуальный подход</h3>
                <p>Каждый участник получает персональное внимание.</p>
            </div>
        </div>
    </motion.section>
);

// Компонент Pricing
const Pricing = () => (
    <motion.section
        className="pricing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>Тарифы</h2>
        <div className="pricing-grid">
            <div className="pricing-card">
                <h3>Базовый</h3>
                <p className="price">12 000 рублей</p>
                <ul>
                    <li>Доступ ко всем урокам</li>
                    <li>Практические задания</li>
                </ul>
                <button>Выбрать</button>
            </div>
            <div className="pricing-card">
                <h3>Премиум</h3>
                <p className="price">18 000 рублей</p>
                <ul>
                    <li>Все из базового тарифа</li>
                    <li>Индивидуальные консультации</li>
                </ul>
                <button>Выбрать</button>
            </div>
        </div>
    </motion.section>
);

// Компонент FAQ
const FAQ = () => (
    <motion.section
        className="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-list">
            <div className="faq-item">
                <h3>Кому подходит эта программа?</h3>
                <p>Программа подходит всем, кто хочет улучшить свои навыки общения и самопознания.</p>
            </div>
            <div className="faq-item">
                <h3>Как проходит обучение?</h3>
                <p>Обучение проходит в формате онлайн-встреч и практических заданий.</p>
            </div>
        </div>
    </motion.section>
);

// Компонент ContactForm
const ContactForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error(error);
            alert('Ошибка при отправке заявки.');
        }
    };

    return (
        <motion.section className="contact-form">
            <h2>Запишитесь на курс</h2>
            <p>
                Оставьте свои контактные данные, и я свяжусь с вами для уточнения деталей.
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Ваше имя" required />
                <input type="email" name="email" placeholder="Ваш email" required />
                <input type="tel" name="phone" placeholder="Ваш телефон" required />
                <button type="submit">Отправить заявку</button>
            </form>
            <p>
                Или присоединяйтесь к моему Telegram-каналу, чтобы быть в курсе новостей:
            </p>
            <a
                href="https://t.me/your_channel" // Замените на ссылку на ваш канал
                className="telegram-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-telegram"></i> Подписаться на Telegram
            </a>
        </motion.section>
    );
};

// Компонент Footer
const Footer = () => (
    <footer className="footer">
        <p>Контакты: open-dialogue@example.com | +7 (999) 123-45-67</p>
        <p>© 2023 Открытый диалог. Все права защищены.</p>
    </footer>
);

// Основной компонент App
const App = () => (
    <div className="App">
        <Header />
        <About />
        <ScienceAndHealth />
        <FacilitatorApproach />
        <Benefits />
        <Pricing />
        <FAQ />
        <ContactForm />
        <Footer />
    </div>
);

export default App;