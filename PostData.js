// const sendOrder = () => {
//     const form = document.querySelector(".form-order");
//     // Собираем данные из формы
//     const formData = new FormData(form);

//     // Формируем объект с данными
//     const orderData = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         phone: formData.get('number-tel'),
//         address: formData.get('address'),
//         feedback: formData.get('feedback'),
//         soup: formData.get('soup'),
//         mainFood: formData.get('main-food'),
//         saladstarter: formData.get('saladstarter'),
//         drink: formData.get('drink'),
//         dessert: formData.get('dessert'),
//         totalOrder: formData.get('total-order'),
//         deliveryTime: formData.get('delivery-time'),
//         deliveryHour: formData.get('time')
//     };

//     // Ensure the elements are defined in your HTML
//     const messageText = document.getElementById("message-text");
//     const messageBox = document.getElementsByClassName("message-box");

//     // Отправляем запрос с данными заказа на сервер
//     fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c", {
//         method: "POST",
//         body: JSON.stringify(orderData),
//         headers: {
//             "Content-Type": "application/json",
//         },
//         mode: "no-cors", // Bỏ qua CORS (cẩn thận khi sử dụng)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data) {
//             SuccessMessage();
//             console.log("Ответ от сервера: ", data);
//             // Можно очистить форму или предпринять другие действия
//         }
//     })
//     .catch(error => {
//         // Если ошибка при отправке запроса
//         EventCatch();
//         console.error("Ошибка при отправке данных: ", error);
//     });
// };



const sendOrder = () => {
    const form = document.querySelector(".form-order");
    // Собираем данные из формы
    const formData = new FormData(form);

    // Формируем объект с данными
    const orderData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('number-tel'),
        address: formData.get('address'),
        feedback: formData.get('feedback'),
        soup: formData.get('soup'),
        mainFood: formData.get('main-food'),
        saladstarter: formData.get('saladstarter'),
        drink: formData.get('drink'),
        dessert: formData.get('dessert'),
        totalOrder: formData.get('total-order'),
        deliveryTime: formData.get('delivery-time'),
        deliveryHour: formData.get('time')
    };

    // Ensure the elements are defined in your HTML
    const messageText = document.getElementById("message-text");
    const messageBox = document.getElementsByClassName("message-box");

    // Отправляем запрос с данными заказа на сервер
    fetch(" https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c", {
        // http://lab8-api.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
            "Content-Type": "application/json",
        },
        // Gỡ bỏ "no-cors" để có thể đọc phản hồi từ server
        // mode: "no-cors",
    })
        .then(response => {
            // Kiểm tra mã trạng thái HTTP trước khi cố gắng phân tích JSON
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



// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submit-order");
//     const messageBox = document.querySelector(".messange-box");
//     const messageText = document.getElementById("message-text");
//     const form = document.querySelector(".form-order");

//     submitButton.addEventListener("click", function (e) {
//         e.preventDefault();  // Предотвращаем стандартную отправку формы

//         // Собираем данные из формы
//         const formData = new FormData(form);

//         // Формируем объект с данными
//         const orderData = {
//             name: formData.get('name'),
//             email: formData.get('email'),
//             phone: formData.get('number-tel'),
//             address: formData.get('address'),
//             feedback: formData.get('feedback'),
//             soup: formData.get('soup'),
//             mainFood: formData.get('main-food'),
//             saladstarter: formData.get('saladstarter'),
//             drink: formData.get('drink'),
//             dessert: formData.get('dessert'),
//             totalOrder: formData.get('total-order'),
//             deliveryTime: formData.get('delivery-time'),
//             deliveryHour: formData.get('time')
//         };

//         // Отправляем запрос с данными заказа на сервер
//         fetch("https://httpbin.org/post", {
//             method: "POST",
//             body: JSON.stringify(orderData),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data) {
//                 messageText.textContent = "Вы успешно оформили заказ.";
//                 messageBox.style.display = "block";
//                 console.log("Ответ от сервера: ", data);
//                 // Можно очистить форму или предпринять другие действия
//             }
//         })
//         .catch(error => {
//             // Если ошибка при отправке запроса
//             messageText.textContent = "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.";
//             messageBox.style.display = "block";
//             console.error("Ошибка при отправке данных: ", error);
//         });
//     });

//     // Закрытие уведомления об ошибке
//     document.getElementById("button-messange-success").addEventListener("click", function () {
//         messageBox.style.display = "none";
//     });
// });

// const sendOrder = () => {
//     const form = document.querySelector(".form-order");
//     // Собираем данные из формы
//     const formData = new FormData(form);

//     // Формируем объект с данными
//     const orderData = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         phone: formData.get('number-tel'),
//         address: formData.get('address'),
//         feedback: formData.get('feedback'),
//         soup: formData.get('soup'),
//         mainFood: formData.get('main-food'),
//         saladstarter: formData.get('saladstarter'),
//         drink: formData.get('drink'),
//         dessert: formData.get('dessert'),
//         totalOrder: formData.get('total-order'),
//         deliveryTime: formData.get('delivery-time'),
//         deliveryHour: formData.get('time')
//     };

//     // Отправляем запрос с данными заказа на сервер
//     fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify(orderData),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data) {
//                 messageText.textContent = "Вы успешно оформили заказ.";
//                 messageBox.style.display = "block";
//                 console.log("Ответ от сервера: ", data);
//                 // Можно очистить форму или предпринять другие действия
//             }
//         })
//         // .catch(error => {
//         //     // Если ошибка при отправке запроса
//         //     messageText.textContent = "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.";
//         //     messageBox.style.display = "block";
//         //     console.error("Ошибка при отправке данных: ", error);
//         // });
// }


