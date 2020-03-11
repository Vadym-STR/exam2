# Git

DZYGGGA
: - дві крапки
ADD або FIX або MERGE - додавання нового, або виправлення існуючого
:  - дві крапки + пробіл
Name of the ticket - Назва задачі з трелло

## Назва гілки
`feature/dzyggga-name of the ticket`

## Коментар коміта
`DZYGGGA:ADD|FIX|MERGE: Name of the ticket - Some details`

## Команди Git

- *git fetch* - перевірити оновлення
- *git pull* - підтягнути останні зміни
- *git merge branch-name* - підтягнути зміни з іншої гілки в свою
- *git checkout -b branch-name* - створити нову гілку
- *git checkout branch-name* - переключитись на вже існуючу гілку
- *git add .* - додати всі зміненні файли для подальшого коміту
- *git push* - залити всі закомічені файли
- *git commit -m "BR-3:ADD: Leonid Dzyhanskyi CV"* - зробити коміт
- *git branch -d branch-name* - видалити локальну гілку
- *git reset --hard HEAD~1* - Remove last 1 commit
- *git stash* - приховати робочі файли не для коміта
- *git stash pop* - Повернути приховані робочі файли
- *git fetch -p* - Перестворити видалену гілку на Bitbucket

# HTML

1. Для відступів вкладеності використовуємо 4 пробіла.
```
    <div>
        <div>
        </div>
    </div>
```
2. Теги пишемо з нового рядка крім інлайнових тегів і тексту.
```
    <div>
        <h2>
            Title <span>name</span>
        </h2>
    </div>
```
3. Текст вкладений в блочний елемент починається з нової стрічки.
```
    <p>
        Adipisicing ut et deserunt esse minim ad veniam et tempor veniam.
    </p>
```
4. Після кожного елемента з класом блоку має бути пуста стрічка, якщо це не останій елемент.
```
    <div class="alert">
        Adipisicing ut et deserunt esse minim ad veniam et tempor veniam.
    </div>

    <div class="help-message">
        Adipisicing ut et deserunt esse minim ad veniam et tempor veniam. Adipisicing ut et deserunt esse minim ad veniam et tempor veniam.
    </div>
```
5. Для іменування класів використовуємо методологію [БЕМ](https://ru.bem.info/methodology/quick-start/)
```
    <div class="block block_modifier">
        Adipisicing ut et deserunt esse minim ad veniam et tempor veniam.

        <div class="block__element block__element_modifier">
            Adipisicing ut et deserunt esse minim ad veniam et tempor veniam. Adipisicing ut et deserunt esse minim ad veniam et tempor veniam.
        </div>
    </div>
```

# CSS

*CSS правила сортування:*
1. Правила повині бути відсортовані по алфавіту.
```
.personal-deatails__photo {
    background-color: currentColor;
    border-radius: 50%;
    border: 1px solid currentColor;
    box-shadow: inset 0 0 0 15px #fff;
    color: #3d6cb0;
    display: block;
    height: 233px;
    margin: auto;
    overflow: hidden;
    padding: 15px;
    position: relative;
    width: 233px;
}

```
2. Після закриваючої фігурної дужки має бути пуста стрічка.
3. Кожен селектор починається з нової стрічки.
```
.personal-deatails__first-name,
.personal-deatails__position {
    ...

```
4. Між селектором і відкриваючою фігурною дужкою має бути пробіл.
```
.personal-deatails__position {
    ...
```

# Images

1. Папка з зображеннями розміщується в папці *assets/images*
2. Всі зображеннями називаються тільки латинськими літерами.
3. Назви зображень пишуться з малої букви і слова поєднуються за допомогою дефісу.
4. Всі зображення оптимізуємо за допомогою [TinyPng](https://tinypng.com/)

Не обов'язкові поля позначенні *.
