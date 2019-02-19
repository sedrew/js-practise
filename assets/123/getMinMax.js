/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * //{ min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * //{ max: Infinity, min: 4 }
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(str) {
    var arr = str.split(",");
    function num(a, b) {
        return a - b;
    }
    console.log(arr);
    console.log(arr.sort(num));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
        if (Number.isNaN(arr[i])) arr[i] = null;
    }
    var min = 1000, max = -1000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
        }
    }

    return { min, max }
    
}

var str = prompt("Введите вашу строку", "1,2,3,-10,61,hello");
console.log(getMinMax(str));