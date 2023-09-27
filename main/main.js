// 1 2 3 4 5 6 7 8 9

// 1 23456789
// 1 2 3456789
// 1 2 34 56789
// 1 2 34 5 6789
// 1 2 34 5 6 789
// 1 2 34 5 6 7 89
// 1 2 34 5 6 7 8 9
// 1 2 3 456789
// 1 2 3 45 6789
// 1 2 3 45 6 789
// 1 2 3 45 6 7 89
// 1 2 3 45 6 7 8 9
// 1 2 3 4 56789
// 1 2 3 4 5 6789
// 1 2 3 4 5 6 789
// 1 2 3 4 5 6 7 89
// 1 23 456789
// 1 23 4 56789
// 1 23 4 5 6789
// 1 23 4 5 6 789
// 1 23 4 5 6 7 89
// 1 23 4 5 6 7 8 9
// 1 234 56789
// 1 234 5 6789
// 1 234 5 6 789
// 1 234 5 6 7 89
// 1 234 5 6 7 8 9
// 1 2345 6789
// 1 2345 6 789
// 1 2345 6 7 89
// 1 2345 6 7 8 9
// 1 23456 789
// 1 23456 7 89
// 1 23456 7 8 9
// 1 234567 89
// 1 234567 8 9
// 1 2345678 9
// 12 3456789
// 12 3 456789
// 12 3 4 56789
// 12 3 4 5 6789
// 12 3 4 5 6 789
// 12 3 4 5 6 7 89
// 12 3 4 5 6 7 8 9



document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const operators = ['+', '-', '*', '/'];
        const expressions = [];
        const results = [];

        function generateExpression(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions.push(expression);
                return;
            }

            for (const operator of operators) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression(String(numbers[0]), numbers.slice(1));

        for (const expression of expressions) {
            const result = eval(expression);
            results.push({ expression, result });
        }

        return results;
    }

    const mathExamples = generateMathExamples();
    const numberInput = document.getElementById('numberInput');
    const resultParagraph = document.getElementById('result');

    numberInput.addEventListener('input', function () {
        const userInput = parseInt(numberInput.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph.textContent = 'Введите корректное число.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples2() {
        const numbers2 = [12, 34, 56, 78, 9];
        const operators2 = ['+', '-', '*', '/'];
        const expressions2 = [];
        const results2 = [];

        function generateExpression2(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions2.push(expression);
                return;
            }

            for (const operator of operators2) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression2(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression2(String(numbers2[0]), numbers2.slice(1));

        for (const expression of expressions2) {
            const result = eval(expression);
            results2.push({ expression, result });
        }

        return results2;
    }

    const mathExamples2 = generateMathExamples2();
    const numberInput2 = document.getElementById('numberInput');
    const resultParagraph2 = document.getElementById('result2');

    numberInput2.addEventListener('input', function () {
        const userInput = parseInt(numberInput2.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples2.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph2.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph2.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph2.textContent = 'Введите корректное число.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples3() {
        const numbers3 = [123, 456, 789];
        const operators3 = ['+', '-', '*', '/'];
        const expressions3 = [];
        const results3 = [];

        function generateExpression3(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions3.push(expression);
                return;
            }

            for (const operator of operators3) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression3(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression3(String(numbers3[0]), numbers3.slice(1));

        for (const expression of expressions3) {
            const result = eval(expression);
            results3.push({ expression, result });
        }

        return results3;
    }

    const mathExamples3 = generateMathExamples3();
    const numberInput3 = document.getElementById('numberInput');
    const resultParagraph3 = document.getElementById('result3');

    numberInput3.addEventListener('input', function () {
        const userInput = parseInt(numberInput3.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples3.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph3.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph3.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph3.textContent = 'Введите корректное число.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples4() {
        const numbers4 = [1234, 5678, 9];
        const operators4 = ['+', '-', '*', '/'];
        const expressions4 = [];
        const results4 = [];

        function generateExpression4(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions4.push(expression);
                return;
            }

            for (const operator of operators4) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression4(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression4(String(numbers4[0]), numbers4.slice(1));

        for (const expression of expressions4) {
            const result = eval(expression);
            results4.push({ expression, result });
        }

        return results4;
    }

    const mathExamples4 = generateMathExamples4();
    const numberInput4 = document.getElementById('numberInput');
    const resultParagraph4 = document.getElementById('result4');

    numberInput4.addEventListener('input', function () {
        const userInput = parseInt(numberInput4.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples4.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph4.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph4.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph4.textContent = 'Введите корректное число.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples5() {
        const numbers5 = [12345, 6789];
        const operators5 = ['+', '-', '*', '/'];
        const expressions5 = [];
        const results5 = [];

        function generateExpression5(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions5.push(expression);
                return;
            }

            for (const operator of operators5) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression5(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression5(String(numbers5[0]), numbers5.slice(1));

        for (const expression of expressions5) {
            const result = eval(expression);
            results5.push({ expression, result });
        }

        return results5;
    }

    const mathExamples5 = generateMathExamples5();
    const numberInput5 = document.getElementById('numberInput');
    const resultParagraph5 = document.getElementById('result5');

    numberInput5.addEventListener('input', function () {
        const userInput = parseInt(numberInput5.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples5.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph5.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph5.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph5.textContent = 'Введите корректное число.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function generateMathExamples6() {
        const numbers6 = [1, 23, 4, 5, 6, 7, 8, 9];
        const operators6 = ['+', '-', '*', '/'];
        const expressions6 = [];
        const results6 = [];

        function generateExpression6(expression, remainingNumbers) {
            if (remainingNumbers.length === 0) {
                expressions6.push(expression);
                return;
            }

            for (const operator of operators6) {
                const nextNumber = remainingNumbers[0];
                const restNumbers = remainingNumbers.slice(1);
                generateExpression6(expression + operator + nextNumber, restNumbers);
            }
        }

        generateExpression6(String(numbers6[0]), numbers6.slice(1));

        for (const expression of expressions6) {
            const result = eval(expression);
            results6.push({ expression, result });
        }

        return results6;
    }

    const mathExamples6 = generateMathExamples6();
    const numberInput6 = document.getElementById('numberInput');
    const resultParagraph6 = document.getElementById('result6');

    numberInput6.addEventListener('input', function () {
        const userInput = parseInt(numberInput6.value, 10);

        if (!isNaN(userInput)) {
            const matchingExamples = mathExamples6.filter((example) => example.result === userInput);

            if (matchingExamples.length > 0) {
                const expressions = matchingExamples.map((example) => example.expression).join(', ');
                resultParagraph6.textContent = `Совпадающие примеры: ${expressions}`;
            } else {
                resultParagraph6.textContent = 'Нет совпадающих примеров.';
            }
        } else {
            resultParagraph6.textContent = 'Введите корректное число.';
        }
    });
});

