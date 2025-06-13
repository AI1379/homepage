---
title: 浙江大学 2024 学年数学分析 II 期末考试回忆卷
date: 2025-06-13
tag:
  - 数学分析
category:
  - Math
  - Exercises
header-includes:
  - \usepackage[UTF8]{ctex}
  - \usepackage[margin=1in]{geometry}
---

总体不算太难，但是跟往年风格似乎不太一样。

## 试题

## 一

1. 求 $\int_3^4 \frac{x}{x^2-3x+2}$ 的值
2. 求反常积分

$$
J = \int_{0}^{+\infty} \frac{\arctan x}{(1+x^2)e^{\arctan x}}\text{d}x
$$

3. 求 $y = \frac{1}{2} x^2$ 在 $[0,1]$ 上的弧长

4. 已知函数 $f(x)$ 在 $\mathbb{R}$ 上有连续的二阶导数， $f(\pi) = 2$ ，且有 $\int_0^\pi \left(f(x) + f''(x)\right)\sin x \text{d}x = 2025$ ，求 $f(0)$

5. 求级数：

$$
\sum_{n=0}^{\infty} \frac{1}{n+1} x^n
$$
的和函数 $S(x)$ ，并求反常积分
$$
\int_{0}^{1} S(x) \text{d}x
$$

6. 求定义在 $[-2, 2]$ 上的周期为 $4$ 的函数 $f(x) = |x|$ 的 Fourier 级数，并求级数 $\sum_{n=1}^{\infty} \frac{1}{n^2}$

### 二

已知级数 $\sum_{n=1}^{\infty} a_n$ 收敛，求证：级数 $\sum_{n=1}^{\infty} a_n n^{-x}$ 在 $[0, +\infty)$ 上一致收敛。

### 三

已知幂级数：
$$
S(x) = \sum_{n=1}^{\infty} (-1)^n \frac{(2n-1)!!}{(2n)!!}  x^n
$$
求证：

1. $\frac{(2n-1)!!}{(2n)!!} < \frac{1}{\sqrt{2n+1}}$
2. $S(x)$ 的收敛域为 $(-1,1]$
3. $S(x)$ 在 $(-1,1]$ 上不一致收敛

### 四

已知周期为 $2\pi$ 的函数 $f(x)$ 在 $[-\pi, \pi]$ 上 Riemann 可积，且有 $b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\text{d}x$ ，求证：
$$
\sum_{n=1}^{\infty} \frac{b_n}{n} = \frac{1}{2\pi} \int_{0}^{2\pi} f(x) (\pi - x) \text{d}x
$$

### 五

已知级数 $\sum_{n=1}^{\infty} \frac{1}{n^x}$ 在 $x > 1$ 时有和函数 $f(x)$ ，求证：

1. $\forall s > 1$ 反常积分

$$
I = \int_{1}^{\infty} \frac{[t]}{t^{s+1}} \text{d}t
$$

收敛。其中 $[t]$ 表示取整数部分。

2. $I = \frac{f(s)}{s}$
