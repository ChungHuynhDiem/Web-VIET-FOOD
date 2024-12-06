const sendOrder = () => {
    const form = document.querySelector(".form-order");
    // Собираем данные из формы
    const formData = new FormData(form);

    // Формируем объект с данными
    const orderData = {
        id: '',// Идентификатор, сгенерированный сервером при создании ордера
        full_name: formData.get('name'),
        email: formData.get('email'),
        subscribe: '', 
        phone: formData.get('number-tel'),
        delivery_address: formData.get('address'),
        delivery_type: formData.get('delivery-time'), 
        delivery_time: formData.get('time'),
        comment: formData.get('feedback'),
        soup_id: SaveSoup.id,
        main_course_id: SaveMainDish.id,
        salad_id: SaveSaladstarter.id,
        drink_id: SaveDrink.id,
        dessert_id: SaveDessert.id,
        created_at: '', 
        updated_at: '',
        student_id: '', 
        // totalOrder: formData.get('total-order'),
        // deliveryHour: formData.get('time')
    };

    const urlEncodedData = new URLSearchParams(orderData).toString();
    // Ensure the elements are defined in your HTML
    const messageText = document.getElementById("message-text");
    const messageBox = document.getElementsByClassName("message-box");

    // Отправляем запрос с данными заказа на сервер
    fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c", {
        //  http://lab8-api.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c
        method: "POST",
        body: urlEncodedData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            accept: 'application/json',

        },

    })
        .then(response => {
            // Проверяем код состояния HTTP перед попыткой анализа JSON
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                SuccessMessage();
                console.log("Ответ от сервера: ", data);
                // Можно очистить форму или предпринять другие действия
            }
        })
        .catch(error => {
            // Если ошибка при отправке запроса
            EventCatch();
            console.error("Ошибка при отправке данных: ", error);
        });
};