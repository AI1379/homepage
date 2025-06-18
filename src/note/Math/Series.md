---
date: 2025-06-10
title: 级数理论
tag:
  - 数学分析
category:
  - Math
  - Analysis
---

## 正项级数收敛性的判定

首先有 Cauchy 收敛准则

## 任意项级数收敛性的判定

### 绝对收敛与条件收敛

类似反常积分中的收敛性，此处也有绝对收敛和条件收敛的区分。

### Abel 变换

有两数列 $a_n$ 和 $b_n$ ，且有 $b_n$ 的部分和数列 $B_n$ ，则有 **Abel 变换**:

$$
\sum_{k=1}^{n} a_k b_k = a_n B_n - \sum_{k=1}^{n-1} (a_{k+1} - a_k) B_k
$$

证明不难。

### Abel-Dirichlet 判别法

首先，由 Abel 变换，有引理：

::: important Abel 引理

数列 $a_n$ 与 $b_n$ 以及对应部分和满足：

1. $a_n$ 单调
2. $b_n$ 的部分和 $B_n$ 有界 $M$

则有：

$$
\left|\sum_{k=1}^n a_n b_n\right| \le M (|a_1| + 2|a_n|)
$$

:::

::: details Proof

由 Abel 变换，有：

$$
\begin{align*}
     \left|\sum_{k=1}^{n} a_n b_n\right|
&=   \left|a_n B_n - \sum{k=1}^{n-1} (a_{k+1} - a{k}) B_k\right| \\
&\le \left|a_n B_n\right| + M \left|\sum{k=1}^{n-1} (a_{k+1} - a{k}) \right| \\
&\le M\cdot |a_n| + M \cdot |a_n - a_1| \\
&\le M \cdot (a_1 + 2|a_n|)
\end{align*}
$$

:::

这个引理使得我们可以方便地估计一个级数 $\sum a_n b_n$ 的行为。从而可以给出以下两个定理：

::: important A-D 判别法

对于一个任意项级数 $\sum_{k=0}^n a_kb_k$ ，若满足：

1. **（ Abel 判别法）** 若 $\sum a_k$ 收敛且 $b_n$ 单调有界。
2. **（ Dirichlet 判别法）** 若 $\sum a_k$ 有界且 $b_n$ 单调趋于0。

中的一个，则级数收敛。

:::

::: details Proof

首先证明 Dirichlet 判别法。

记 $|\sum a_k| \le M$ ，此时有：
$$
\left|\sum_{k=n}^{p} a_k\right| = |A_p - A_{n-1}| \le 2M
$$
由 Abel 引理，有：
$$
\left|\sum_{k=n}^{m} a_k b_k \right| \le 2M(|b_n| + 2|b_m|)
$$
由于 $b_n$ 单调趋向于 $0$ ，从而可令 $|b_n| < \varepsilon$ ，从而有：
$$
\left|\sum_{k=n}^{m} a_k b_k\right| \le 6M\varepsilon
$$
从而由 Cauchy 收敛准则收敛。

接着通过 Dirichlet 判别法证明 Abel 判别法。

$b_n$ 单调有界，从而有 $\lim_{n\to\infty} b_n = b$ 。此时令 $b'_n = b_n - b$ ，则 $b'_n$ 单调趋向于 $0$ 。
另一方面， $\sum a_k$ 收敛，从而必然有界，因此满足 Dirichlet 判别法的条件。从而有 $\sum a_k (b_k - b)$ 收敛，从而有 $\sum a_k b_k$ 收敛。

:::

## 级数的运算

## 函数项级数

### 一致收敛

考虑函数项级数的收敛的 $\varepsilon-N$ 定义，其中的 $N$ 通常会与 $x$ 的取值有关。如果能够取到一个只和 $\varepsilon$ 有关而与 $x$ 无关的 $N$ ，则称此时为**一致收敛**。

这里给出几个判断函数列一致收敛的充要条件：

::: important 一致收敛的充要条件 1

函数列 $S_n(x)$ 在 $D$ 上点态收敛到 $S(x)$ ，定义：
$$
d(S_n, S) = \sup_{x\in D}\left|S_n(x) - S(x)\right|
$$
则： $S_n$ 一致收敛的充要条件是：
$$
\lim_{n\to\infty} d(S_n, S) = 0
$$

:::

以及一个类似的结论：

::: important 一致收敛的充要条件 2

对于任意一个数列 $x_n \in D$ ，有：
$$
\lim_{n\to\infty} (S_n(x_n) - S(x_n)) = 0
$$

:::

### Weierstrass 判别法

也叫优级数判别法，这个名字来自于它的判定：

::: important Weierstrass 判别法

若 $\sum f_n(x)$ 满足：
$$
\left|f_n(x)\right| < M_n
$$
其中 $M_n$ 为一个常数列，则 $\sum f_n(x)$ 绝对收敛且一致收敛。

:::

### 函数项级数的 Abel-Dirichlet 判别法

### Dini 定理

::: important Dini 定理

设 $u_n(x) \ge 0$ 在 $[a, b]$ 上连续，且点态收敛到连续函数 $u(x)$ ，则一致收敛到 $u(x)$ 。

:::
