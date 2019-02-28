/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * @param  {string} input
 * @return {string}
 */





function rle(str) {
    console.log(str);
    var pattern = /(.)\1*/g;
    var arr = str.match(pattern);
    var arr3 = []
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        str1 = arr[i];
        var n = str1.length;
        // console.log(arr[i], n);
        var arr2 = str1.split("")
        
        if (n > 1) {
          arr3.push(arr2[0], n);
        //  console.log(arr3)
        } else {arr3.push(arr2[0], "");
        } 
    }
    var str2 = arr3.join("");
    // console.log(str2);
    console.log(str2);
}

var str = "AAAAAABBCQ";
rle(str);
