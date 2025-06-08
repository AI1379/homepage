---
date: 2025-06-08
title: 浙江大学2023学年数学分析 II 期末考试回忆卷
tag:
  - 数学分析
category:
  - math
  - exercises
---


## 一

1. 求 $e^{1-x}$ 的 Maclaurin 展开

2. 求和函数： $\sum_{n=1}^{\infty} \frac{x^{2n}}{n+\frac{1}{2}}$

3. 求极限： $I=\lim_{x\to 1} \frac{\int_{1}^{x^2}\sin(t^2)\text{d}t}{\int_{1}^{x^3}e^{-t^3}\text{d}t}$

4. 求 $\sum_{n=1}^{\infty} \frac{2n-1}{2^n}$

5. 求 $g(x) = \frac{x}{x^2-2x-3}$ 的 Maclaurin 展开

6. 求 $f(x) = 1 - |x|$ 在 $[-\pi, \pi]$ 上的 Fourier 展开

## 二

求证：$$f(x) = \frac{x^2}{x^2 + (1-nx)^2}$$ 在 $[0, 1]$ 上点态收敛但是不一致收敛。

## 三

*(Abel-Springheim)* 正项数列 $a_n$ 单调递减， $\sum_{n=1}^{\infty} a_n$ 收敛，求证：

$$
\lim_{n\to\infty} (n a_n) = 0
$$

## 四

有：

$$
f(x) = \sum_{n=1}^{\infty} \frac{\sin(nx)}{n^2 + 2024}
$$

1. 求证： $f(x)$ 在 $(0, 2\pi)$ 上连续

2. 求证： $f(x)$ 在 $(0, 2\pi)$ 上有连续的导函数

## 五

*（ Fejér 核）* 有 **Direchlet 核函数**：

$$
K_m(t) =
\begin{cases}
\frac{\sin(m+\frac{1}{2})t}{2\sin(\frac{1}{2}t)} & t \ne 0 \\
m + \frac{1}{2} & t = 0
\end{cases}
$$

以及 **Fejér 核**：

$$
F_m(t) =
\begin{cases}
\frac{ \sin^2 \frac{1}{2} mt }{ 2m \sin^2 \frac{1}{2} t } & t \ne 0 \\
\frac{1}{2} m & t = 0
\end{cases}
$$

设函数 $f(x)$ 的傅里叶级数的部分和为 $S_n(x)$ ， $b_n(t) = \frac{1}{n} \sum_{k=0}^{n-1} S_k(x)$ ，即部分和的算术平均。

1. 求证： $\forall\ x \in (-\pi, 0)\ \cup\ (0, \pi)$ ，有 $$\sum_{k=1}^n \sin(k+\frac{1}{2} ) x = \frac{\sin^2\frac{1}{2}nx}{\sin \frac{1}{2} x}$$

2. 求证： $$b_n(x) = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x+t) F_n(t) \text{d}t $$

3. 1. 求证： $F_n(x) \geq 0$
   2. 求证： $$ \frac{1}{\pi}\int_{-\pi}^{\pi} F_n(x) \text{d}x = 1 $$
   3. 求证： $$ \lim_{n\to\infty} \left[ \int_\delta^\pi F_n(x) \text{d}x + \int_{-\pi}^\delta F_n(x) \text{d}x \right] =0 ,\quad \forall\ \delta \in (0, \pi)$$
