## Перед началом

`git clone https://github.com/Illusory-Team/work-fly-client.git` - клонируем репозиторий
`npm i` - устанавливаем зависимости

`git checkout develop` - переключаемся на ветку develop
`git checkout -b навзание_ветки` - создаем ветку для работы по таске

Если какие-то изменения надо стянуть с ветки develop, делаем `git pull upstream develop`


## Во время разработки

```bash
npm run dev
```

## Перед пушем

- `npm run build` - проверяем исправность build сборки
- `npm run lint` - прогоняем eslint по ts файлам
- `npm run stylelint` - прогоняем ыендудште по файлам стилей 
