// •	Какое будет выведено значение: let x = 5; alert( x++ ); ? 5 тк постфиксная форма (т.е. вернет 6 после выполнения)
// •	Чему равно такое выражение: [ ] + false - null + true ? пустой массив = строковая форма строка - null = NaN тк не мат операция
// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2 идет последовательное присваивание у =2 
// •	Чему равна сумма [ ] + 1 + 2? 12 пустой массив = строка
// •	Что выведет этот код: alert( "1"[0] )? тк к строке мы можем обратиться по индексу => 0 индекс у 1 это 1
// •	Чему равно 2 && 1 && null && 0 && undefined ? оператор "и" запинается на лжи, null = ложь. опертор "и" запнулся на лжи и вернул null
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?  false потому что 2 !! превращают выражение в булиновое
                                       3        3    3  
// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?  сперва приоритет у "и" получаем 3. "или" запинается на правде. Из первой операции 3. из послед 3
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?  это разыне хранилища инфы в которых лежит разная инфа так не НЕ РАВНЫ
// •	Что выведет этот код: alert( +"Infinity" ); ? infinity но уже как числовой тип данных
// •	Верно ли сравнение: "Ёжик" > "яблоко"?  false особенности юникода
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ? "или" запинается на правде так что вернется 2 и код дальше не пойдет


