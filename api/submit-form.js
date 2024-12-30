export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone } = req.body;

        // Здесь можно добавить логику для сохранения данных (например, в файл или базу данных)
        console.log('Новая заявка:', { name, email, phone });

        res.status(200).json({ message: 'Заявка успешно отправлена!' });
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}