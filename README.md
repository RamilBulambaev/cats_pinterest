## Функционал:

```
- Просмотр случайных изображений котиков
- Добавление котиков в избранное
- Удаление котиков из избранного
- Бесконечная прокрутка для подгрузки новых изображений
- Сохранение избранных котиков в LocalStorage
- Динамическое обновление списка избранных котиков
```

---

## Используемые технологии

```
React — основа приложения
Redux Toolkit — управление состоянием
React Router — маршрутизация
RTK Query — работа с API
TypeScript — типизация
CSS Modules — стилизация
React Intersection Observer — бесконечная прокрутка
```

---

## Структура проекта

Сущности (entities)

- [Cat](/src/entities/cat) API работы с котами, управление избранными

Фичи (features)

- [toggleFavorite](/src/features/toggleFavorite/) — Добавление/удаление кота в избранное
- [navigation](/src/features/navigation/) — Компонент навигационного меню

Виджеты (widgets)

- [CatsList](/src/widgets/CatsList/) — Список котов
- [Navbar](/src/widgets/Navbar/) — Верхняя панель с навигацией
- [InfiniteScroll](/src/widgets/InfiniteScroll/) — Реализация бесконечной прокрутки

Страницы (pages)

- [allCats](/src/pages/allCats/) — Главная страница со списком котов
- [favoriteCats](/src/pages/favoriteCats/) — Страница "Избранное"

Прочее

- [app](/src/app/) — Главные файлы приложения (store, маршруты, точка входа)
- [shared](/src/shared/) — Общие компоненты и утилиты
- [styles](/src/app/styles/) — Глобальные стили

---

## Запуск проекта

```
1. Установка зависимостей

npm install

2. Настройка окружения

Создайте .env файл в корне проекта и добавьте API ключ:

VITE_NEWS_BASE_API_URL=https://api.thecatapi.com/v1/
VITE_NEWS_API_KEY=your_api_key_here

3. Запуск проекта в режиме разработки

npm run dev

4. Сборка проекта

npm run build
```

---

## Архитектура проекта

```
Приложение построено по методологии Feature-Sliced Design, где каждая сущность разделена на модули:

entities/ — логика бизнес-сущностей (коты, API, стейт-менеджмент)

features/ — интерактивные элементы (избранное, навигация)

widgets/ — крупные виджеты, собирающие функционал

pages/ — страницы с маршрутами
```
