// Функция ymaps.ready() будет вызвана, когда
                // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
                ymaps.ready(init);
                function init() {
                    // Создание карты.
                    var myMap = new ymaps.Map("map", {
                        // Координаты центра карты.
                        // Порядок по умолчанию: «широта, долгота».
                        // Чтобы не определять координаты центра карты вручную,
                        // воспользуйтесь инструментом Определение координат.
                        center: [48.872185073737896, 2.354223999999991],
                        // Уровень масштабирования. Допустимые значения:
                        // от 0 (весь мир) до 19.
                        zoom: 16
                    });
                    // Создание геообъекта с типом точка (метка).
                    var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991]);
                    var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/geo.svg',
                        iconImageSize: [30, 42],
                        iconImageOffset: [-3, -42]
                    });


                    // Размещение геообъекта на карте.
                    myMap.geoObjects.add(myPlacemark);
                }