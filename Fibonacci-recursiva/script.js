function fibonacciRecursivo(n) {
    if (n < 2) return n;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

// Ejemplo
console.log(fibonacciRecursivo(10)); // Resultado: 55
