/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

function multiple(a, b) {
    var x=a;
    
    for (let i = 1; i < Math.abs(b); i++) {
        a = a + x;
    }
    if(b<0) return -a;
    return a;
}
var one=5,two=-6;
console.log(multiple(one,two));