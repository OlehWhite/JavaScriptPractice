##### HW

## Задание

Получить список всех персонажей серии фильмов `Звездные войны` и вывести их на экран. По клику выводить под именем персонажа список космических кораблей, которыми он управлял (если конечно управлял). При работе используйте библиотеку jquery

#### Технические требования:
- Отправить AJAX запрос по адресу `https://swapi.dev/documentation#people` и получить список всех персонажей серии фильмов `Звездные войны`.
- Как только с сервера будет получена информация о персонажах, сразу же выведите их список на страницу. Необходимо указать имя, пол и родной мир персонажа (поля `name`, `gender` и `homeworld`).
- Если персонаж в фильмах управлял каким-то космическим кораблем или несколькими, вывести под названием его родного мира кнопку `Список кораблей` (свойство `starships`).
- При клике на кнопку `Список кораблей` получите с сервера все космические корабли, которыми персонаж управлял на протяжении саги, и выведите их на экран, заменив кнопку `Список кораблей` на тег h3 с текстом `Пилотируемые корабли` внутри него.
- AJAX запрос необходимо реализовать используя JavaScript`.

#### Необязательные задания продвинутой сложности
- сделать каждое имя корабля ссылкой, и при клике на него должен появлятся вложенный список подробных характеристик корабля с такими данными: модель (поле `model`), класс корабля (поле `starship_class`), пасажировместимость (поле `passengers`) и место производства (поле `manufacturer`)
- Если имя корабля - Тысячелетний сокол (Millennium Falcon), то под списком кораблей вывести крупными буквами надпись: `Хан Соло стрелял первым!`