/**
 * 数理・論理計算モジュール
 */

// 文字列比較関数
function compareStrings() {
    const s1 = document.getElementById("name1");
    const s2 = document.getElementById("name2");
    const res = document.getElementById("strcmpResult");

    if (!s1 || !s2 || !res) return; // 要素がない場合は実行しない（エラー防止）

    const result = (s1.value === s2.value) ? "一致 (OK)" : "不一致 (NO)";
    res.innerText = "比較結果: " + result;
}

// 最大公約数 (GCD)
const getGcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

// 最小公倍数 (LCM)
const getLcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / getGcd(a, b);
};

// 素数判定 (Prime)
const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
};

// FizzBuzz
const getFizzBuzz = (n) => {
    if (n === 0) return 0;
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
};

// イベント設定
function setup() {
    // ヘルパー関数: 要素が存在するか確認してから処理
    const safeListen = (id, event, func) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, func);
    };

    const getInput = (id) => parseInt(document.getElementById(id)?.value) || 0;
    const setRes = (id, msg) => {
        const el = document.getElementById(id);
        if (el) el.innerText = msg;
    };

    // 文字列比較
    safeListen("compareBtn", "click", compareStrings);

    // GCD / LCM
    safeListen("gcdCheck", "click", () => {
        const val = getGcd(getInput("num1"), getInput("num2"));
        setRes("mathResult", `最大公約数 (GCD): ${val}`);
    });

    safeListen("lcmCheck", "click", () => {
        // 【修正】引数が (num2, num2) になっていたのを (num1, num2) に修正
        const val = getLcm(getInput("num1"), getInput("num2"));
        setRes("mathResult", `最小公倍数 (LCM): ${val}`);
    });

    // Prime / FizzBuzz
    safeListen("primeCheck", "click", () => {
        const n = getInput("num3");
        const res = isPrime(n) ? "素数です" : "素数ではありません";
        setRes("logicResult", `判定結果: ${res}`);
    });

    safeListen("fizzbuzzCheck", "click", () => {
        const n = getInput("num3");
        setRes("logicResult", `FizzBuzz: ${getFizzBuzz(n)}`);
    });
}

// ページ読み込み完了時に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
} else {
    setup();
}
