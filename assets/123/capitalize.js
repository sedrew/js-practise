/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */

//ПЕРВЫЙ СПОСОБ ЧЕРЕЗ ОБЫЧНЫЙ ЦИКЛ.
function capitalize(str) {
    var arr = str.split(" ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var str1 = arr.join(" ");
    console.log(str1);
}
var str = "данил привет как дела";
capitalize(str);




//ВТОРОЙ СПОСОБ ЧЕРЕЗ МЕТОД "MAP".
var str = "данил привет как дела";
var arr = str.split(" ");
console.log(arr);
var str2 = arr.map(function (item) {
    return (item.charAt(0).toUpperCase() + item.slice(1));
});
console.log(str2.join(" "));
