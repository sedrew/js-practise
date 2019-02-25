/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('Statue of Liberty', 'Built to stay free') === true
 * anagram('просветитель', 'терпеливость') === true
 * anagram('апельсин', 'Апельсин') === false
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
function anagram(str, str2) {
    var pattern = (/\s/g, "");
    var str1_1 = str.toLowerCase().replace(/\s/g, ""), str2_2 = str2.replace(/\s/g, "").toLowerCase();

    if (str1_1 == str2_2) return false;
    var arr1 = str1_1.split(""), arr2 = str2_2.split("");


    var q;
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) q = 1;
        }
        if (q == 1) continue;
        else return false;
    }
    if (q == 1) return true;
}

var str = "просветитель", str2 = "просветитель";
console.log(anagram(str, str2));
