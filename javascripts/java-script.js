
    // Задача 1 Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
    // let str="abcde";
    // alert(str[0])
    // alert(str[1])
    // alert(str[4])

    // Задача 2. Проверка логического выражения. Напиши программу, которая проверяет, верно ли, что хотя бы одно из двух чисел больше 0.
    // Ввод: Два числа.
    // Вывод: True, если хотя бы одно число больше 0, иначе False.
    // let x = parseInt(prompt("введите первое число"));
    // let y = parseInt(prompt("введите первое число"));
    // console.log( x>0 || y>b );

    // Задача 3.
    // Напиши программу, которая проверяет, является ли пользователь совершеннолетним (18 лет и старше).
    // Ввод: Возраст пользователя.
    // Вывод: Сообщение "Совершеннолетний" или "Несовершеннолетний"
    // parseInt — это встроенная функция в JavaScript, которая преобразует строку в целое число
    // let x = parseInt(prompt("введите ваш возраст"));
    // if (x>= 18) {console.log("cовершеннолетний");} 
    // else {console.log("несовершеннолетний");}

    // ДОМАШКА 2

    // Задача 1: Проверка возраста
    // Напишите программу, которая спрашивает у пользователя его возраст и выводит:
    // "Вам ещё рано на пенсию", если возраст меньше 65.
    // "Поздравляем с пенсионным возрастом!", если возраст 65 или больше.
    // let x = parseInt(prompt("введите ваш возраст"));
    // if (x<65) {alert("Вам ещё рано на пенсию");} 
    // else {alert("Поздравляем с пенсионным возрастом!");}

    // Задача 2: Сравнение чисел
    // Напишите программу, которая сравнивает два числа, введённых пользователем, и выводит:
    // "Первое число больше", если первое больше второго.
    // "Второе число больше", если второе больше первого.
    // "Числа равны", если они одинаковы.
    // let x = parseInt(prompt("введите число"));
    // let y = parseInt(prompt("введите число"));
    // if (x>y) {alert("Первое число больше")};
    // if (y>x) {alert("Второе число больше")};
    // if (x === y) {alert("Числа равны")};

    // Задача 3: Определение чётности
    // Напишите программу, которая проверяет, является ли введённое число чётным или нечётным, и выводит соответствующее сообщение.
    // let x = parseInt(prompt("введите число"));
    // if (x %2===0) {alert("это число четное")}
    // else {alert("это число нечетное")};

    // Задача 4: Угадай число
    // Задайте в коде число от 1 до 10. Попросите пользователя угадать его. Если пользователь угадывает, программа выводит "Вы угадали!". Если нет – "Попробуйте ещё раз!".
    // let x=7;
    // let y = parseInt(prompt("введите число"));
    // if (x===y) {alert("Вы угадали число!!!")}
    // else {alert("попробуй еще раз")};

    // Задача 5: Проверка логина и пароля
    // Напишите программу, которая проверяет введённые логин и пароль:
    // let x="admin";
    // let y="12345";
    // let c = prompt("введите логин");
    // let t = prompt("введите пароль");
    // if (x == c) {alert("Welcome!")}
    // else {alert("неверный логин или пароль")};

    // Задача 6: Проверка года
    // Напишите программу, которая проверяет, является ли введённый год високосным.
    // Подсказка: Год является високосным, если:
    // let x = parseInt(prompt("введите число"))
    // if (x%4 || x%100 && x%400) {alert('високосный год')}
    // else {alert("это не високосный год")};

    // Задача 7: Простое сравнение
    // Пусть программа спрашивает у пользователя число. Если оно больше 100, выводит "Большое число", если меньше – "Маленькое число", а если равно 100 – "Точно 100!".
    // let y = parseInt(prompt("введите число"));
    // if (y>100) {alert('оч большое число')}
    // else if (y<100) {alert('оч маленькое число')}
    // else {alert('вау ровно 100!')};

    // ДОМАШКА 3

    // Я люблю ненавязчивый дизайн за то, что он не отвлекает пользователя от основного контента, делая взаимодействие интуитивным и приятным. В проектах это реализуется через минималистичную цветовую гамму, простую типографику и отказ от лишних элементов, что ускоряет загрузку и упрощает адаптацию под любые устройства.

// document.addEventListener("DOMContentLoaded", function() {
//     let glass = document.querySelectorAll(".glass1");
//     glass.forEach(function(button){
//         button.addEventListener("click", function(){
//             if(button.style.backgroundColor === "rgba(255, 255, 255, 0.2)" || button.style.backgroundColor === ""){
//                 button.style.backgroundColor = "lightcoral";
//                 button.style.margin = '2vw';
//             } else {
//                 button.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
//                 button.style.margin = '1vw';
//             }
//         });
//     });

//     let neo = document.querySelectorAll(".neo2");
//     neo.forEach(function(button){
//         button.addEventListener("click", function(){
//             if(button.style.backgroundColor === "#e0e0e0" || button.style.backgroundColor === ""){
//                 button.style.backgroundColor = "lightgreen";
//                 button.style.margin = '2vw';
//             } else {
//                 button.style.backgroundColor = "#e0e0e0";
//                 button.style.margin = '1vw';
//             }
//         });
//     });

//     let click = document.querySelectorAll(".click3");
//     click.forEach(function(button){
//         button.addEventListener("click", function(){
//             if(button.style.backgroundColor === "lightsteelblue" || button.style.backgroundColor === ""){
//                 button.style.backgroundColor = "plum";
//                 button.style.margin = '2vw';
//             } else {
//                 button.style.backgroundColor = "lightsteelblue";
//                 button.style.margin = '1vw';
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let coordX = document.querySelector(".coordx");
//     let coordY = document.querySelector(".coordy");
//     document.addEventListener("mousemove", function(event) {
//         let x = event.clientX;
//         let y = event.clientY;
        
//         coordX.textContent = x;
//         coordY.textContent = y;
    
//         if (x > 500) {coordX.style.color = "red";
//         } else if (x < 200) {
//             coordX.style.color = "blue";
//         } else {coordX.style.color = "black";
//         }
        
//         if (y > 400) {coordY.style.color = "green";
//         } else if (y < 150) {
//             coordY.style.color = "orange";
//         } else {coordY.style.color = "black";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let knopik1 = document.querySelector(".knopik1");
    let schetchik1 = document.querySelector(".schetchik1");
    let count1 = 0;
    knopik1.addEventListener("click", function() {
        if (count1 < 15) {
            count1++;
            schetchik1.textContent = count1;
            if (count1 === 15) {
                knopik1.disabled = true;
                alert("достигнуто максимальное количество кликов!");
            }
        }
    });
    
    let knopik2 = document.querySelector(".knopik2");
    let timer2 = document.querySelector(".timer2");
    let count2 = 10;
    let interval2;
    function startTimer2() {
        interval2 = setInterval(function() {
            count2--;
            timer2.textContent = count2;
            if (count2 === 0) {
                clearInterval(interval2);
                alert("Время вышло");
            }
        }, 1000);
    }
    startTimer2();
    knopik2.addEventListener("click", function() {
        clearInterval(interval2);
        count2= 10;
        timer2.textContent = count2;
        startTimer2();
    });
    let knopik3_start = document.querySelector(".knopik3-start");
    let knopik3_stop = document.querySelector(".knopik3-stop");
    let knopik3_reset = document.querySelector(".knopik3-reset");
    let timer3 = document.querySelector(".timer3");
    let count3 = 0;
    let interval3;
    knopik3_start.addEventListener("click", function() {
        if (!interval3) {
            interval3 = setInterval(function() {
                count3++;
                timer3.textContent = count3;
            }, 1000);
        }
    });
    knopik3_stop.addEventListener("click", function() {
        clearInterval(interval3);
        interval3 = null;
    });
    knopik3_reset.addEventListener("click", function() {
        clearInterval(interval3);
        interval3 = null;
        count3 = 0;
        timer3.textContent = count3;
    });
});







    



