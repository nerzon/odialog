const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Функция для сохранения данных
const saveApplication = (data) => {
    const filePath = path.join(__dirname, 'applications.json');
    let applications = [];

    // Чтение существующих данных
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        applications = JSON.parse(fileData);
    }

    // Добавление новой заявки
    applications.push(data);

    // Сохранение обновлённых данных
    fs.writeFileSync(filePath, JSON.stringify(applications, null, 2));
};

// Маршрут для обработки заявок
app.post('/submit-form', (req, res) => {
    const { name, email, phone } = req.body;

    // Сохраняем данные
    saveApplication({ name, email, phone, timestamp: new Date().toISOString() });

    res.send('Заявка успешно отправлена!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});