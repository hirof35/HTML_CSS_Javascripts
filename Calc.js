// 最大公約数 (GCD)
function Gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 最小公倍数 (LCM)
function Lcm(a, b) {
    return (a * b) / Gcd(a, b);
}

// 素数判定 (Prime)
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// FizzBuzz
function Fibonacchi(n) {
    if (n % 15 === 0) return "FIZZ_BUZZ";
    else if (n % 3 === 0) return "FIZZ";
    else if (n % 5 === 0) return "BUZZ";
    else return n;
}

// イベント設定
function setupEventListeners() {
    document.getElementById("gcdCheck").addEventListener('click', function () {
        let a = parseInt(document.getElementById("num1").value);
        let b = parseInt(document.getElementById("num2").value);
        document.getElementById("gcdResult").innerText = "GCD: " + Gcd(a, b);
    });

    document.getElementById("lcmCheck").addEventListener('click', function () {
        let a = parseInt(document.getElementById("num1").value);
        let b = parseInt(document.getElementById("num2").value);
        document.getElementById("lcmResult").innerText = "LCM: " + Lcm(a, b);
    });

    document.getElementById("primeCheck").addEventListener('click', function () {
        let n = parseInt(document.getElementById("num3").value);
        let result = isPrime(n) ? "素数です" : "素数ではありません";
        document.getElementById("primeResult").innerText = "Prime: " + result;
    });

    document.getElementById("fizzbuzzCheck").addEventListener('click', function () {
        let n = parseInt(document.getElementById("num3").value);
        document.getElementById("fizzbuzzResult").innerText = "FizzBuzz: " + Fibonacchi(n);
    });
}

// ページがロードされたらイベントを設定
window.onload = setupEventListeners;
