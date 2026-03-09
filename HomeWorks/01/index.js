// Функция для вывода справки
function printHelp() {
    const helpText = `
Калькулятор корней квадратного уравнения

Использование:
  node quadratic-solver.js <a> <b> <c>

Где:
  a, b, c - коэффициенты квадратного уравнения (вещественные числа).

Примеры:
  node quadratic-solver.js 1 -3 2    # Два корня (x1=2, x2=1)
  node quadratic-solver.js 1 -2 1    # Один корень (x=1)
  node quadratic-solver.js 1 0 1     # Корней нет (комплексные корни)

Коды возврата:
  0 - Успех, корни найдены и выведены в stdout.
  1 - Ошибка валидации (неверное количество или формат аргументов), вывод в stderr.
  2 - Ошибка: корней нет (дискриминант отрицательный), вывод в stderr.
    `;
    console.log(helpText);
}

// Функция для решения квадратного уравнения
function solveQuadratic(a, b, c) {

    if (a === 0) {
    
        if (b === 0) {
            // 0*x + c = 0
            if (c === 0) {
                
                return { count: Infinity, roots: [] };
            } else {
                
                return { count: 0, roots: [] };
            }
        } else {
            
            const x = -c / b;
            return { count: 1, roots: [x] };
        }
    } else {
        
        const discriminant = b * b - 4 * a * c;
        
        if (discriminant < 0) {
            return { count: 0, roots: [] };
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            return { count: 1, roots: [x] };
        } else {
            const sqrtD = Math.sqrt(discriminant);
            const x1 = (-b + sqrtD) / (2 * a);
            const x2 = (-b - sqrtD) / (2 * a);
            const roots = [x1, x2].sort((x, y) => x - y);
            return { count: 2, roots };
        }
    }
}

function main() {
    // Получаем аргументы командной строки (пропускаем первые два: node и имя скрипта)
    const args = process.argv.slice(2);
    
    // Режим 0: Отсутствие аргументов - вывод справки
    if (args.length === 0) {
        printHelp();
        process.exit(0);
    }
    
    // Проверка количества аргументов
    if (args.length !== 3) {
        console.error(`Ошибка: требуется 3 аргумента (a, b, c), получено ${args.length}.`);
        process.exit(1);
    }
    
    // Парсинг аргументов в числа
    const a = parseFloat(args[0]);
    const b = parseFloat(args[1]);
    const c = parseFloat(args[2]);
    
    // Проверка, что аргументы являются числами
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.error('Ошибка: все аргументы должны быть вещественными числами.');
        process.exit(1);
    }
    
    // Решение уравнения
    const result = solveQuadratic(a, b, c);
    
    // Обработка результатов
    if (result.count === 0) {
        // Режим 1: Корней нет
        console.error('Корней нет (дискриминант отрицательный или уравнение не имеет решений).');
        process.exit(2);
    } else if (result.count === 1) {
        // Режим 2: Один корень
        console.log(`x = ${result.roots[0]}`);
        process.exit(0);
    } else if (result.count === 2) {
        // Режим 3: Два корня
        console.log(`x1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
        process.exit(0);
    } else {
        // Бесконечное количество решений (редкий случай)
        console.error('Уравнение имеет бесконечное множество решений (x - любое число).');
        process.exit(2);
    }
}

// Запуск программы
if (require.main === module) {
    main();
}

// Экспорт для возможного тестирования
module.exports = { solveQuadratic, printHelp };