// 1. Создаём массив с оценками студентов
const grades = [];
const numberOfStudents = 12;

for (let i = 0; i < numberOfStudents; i++) {
    const randomGrade = Math.ceil(Math.random() * 100);
    grades.push(randomGrade);
}

// 2. Расчитываем и выводим средний бал студентов
const averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log('Средний балл студентов: ' + averageGrade.toFixed(2));

// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);
console.log('Максимальный балл: ' + maxGrade);

// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
console.log('Минимальный балл: ' + minGrade);

// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = grades.filter(grade => grade >= 60);
console.log("Количество студентов с положительной оценкой: " + positiveGrades.length);

// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades = grades.filter(grade => grade < 60);
console.log("Количество студентов с отрицательной оценкой: " + negativeGrades.length);

// 7. 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//   - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//   - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//   - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//   - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//   - Если оценка ниже 20, преобразуйте её в "E"
const letterGrades = grades.map(grade => {
    if (grade >= 80 && grade <= 100) {
        return 'A';
    } else if (grade >= 60 && grade < 79) {
        return 'B';
    } else if (grade >= 40 && grade < 59) {
        return 'C';
    } else if (grade >= 20 && grade < 39) {
        return 'D';
    } else {
        return 'E';
    }
});

console.log("Буквенные оценки студентов: " + letterGrades);