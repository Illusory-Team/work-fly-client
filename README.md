## Перед началом

`git clone https://github.com/Illusory-Team/work-fly-client.git` - клонируем репозиторий
`npm i` - устанавливаем зависимости

`git checkout develop` - переключаемся на ветку develop
`git checkout -b навзание_ветки` - создаем ветку для работы по таске

Если какие-то изменения надо стянуть с ветки develop, делаем `git pull upstream develop`


## Команды для работы
- `dev` - запуск dev сервера проекта
- `build` - сборка прод версии проекта
- `start` - запуск прод сервера проекта
- `stylelint` - проверяем файлы стилей на синтаксические ошибки
- `stylelint:fix` - авто-исправление синтаксических ошибок в стилях
- `prettier` - форматер кода
- `prettier:fix` - форматирование всех файлов
- `lint` - проверка синтаксиса js/ts файлов
- `lint:fix` - авто-исправление синтаксических ошибок
- `storybook` - запуск dev-сервера сторибука
- `build-storybook` - сборка сторибука для деплоя

## Во время разработки

```bash
npm run dev
npm run storybook
```

## Перед пушем

- `npm run build` - проверяем исправность build сборки
- `npm run lint` - прогоняем eslint по ts файлам
- `npm run stylelint` - прогоняем stylelint по файлам стилей 

## Структура компонента
```
Component
  ├── index.ts
  ├── Component.tsx
  ├── Component.scss
  ├── Component.stories.tsx
  ├── Component.[type/interface].ts
  ├── Component.context.ts
  └── Component.test.ts
```
