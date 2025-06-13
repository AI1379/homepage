---
date: 2025-06-08
title: 浙江大学2023学年数学分析 II 期末考试回忆卷
tag:
  - 数学分析
category:
  - Math
  - Exercises
---

## 试题

> 注：题目来自 cc98

### 一

1. 求 $e^{1-x}$ 的 Maclaurin 展开

2. 求和函数： $\sum_{n=1}^{\infty} \frac{x^{2n}}{n+\frac{1}{2}}$

3. 求极限： $I=\lim_{x\to 1} \frac{\int_{1}^{x^2}\sin(t^2)\text{d}t}{\int_{1}^{x^3}e^{-t^3}\text{d}t}$

4. 求 $\sum_{n=1}^{\infty} \frac{2n-1}{2^n}$

5. 求 $g(x) = \frac{x}{x^2-2x-3}$ 的 Maclaurin 展开

6. 求 $f(x) = 1 - |x|$ 在 $[-\pi, \pi]$ 上的 Fourier 展开

### 二

求证：
$$f(x) = \frac{x^2}{x^2 + (1-nx)^2}$$
在 $[0, 1]$ 上点态收敛但是不一致收敛。

### 三

正项数列 $a_n$ 单调递减， $\sum_{n=1}^{\infty} a_n$ 收敛，求证：

$$
\lim_{n\to\infty} (n a_n) = 0
$$

### 四

有：

$$
f(x) = \sum_{n=1}^{\infty} \frac{\sin(nx)}{n^2 + 2024}
$$

1. 求证： $f(x)$ 在 $(0, 2\pi)$ 上连续

2. 求证： $f(x)$ 在 $(0, 2\pi)$ 上有连续的导函数

### 五

*（ Fejér 核）* 有 **Dirichlet 核函数**：

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

1. 求证： $\forall\ x \in (-\pi, 0)\ \cup\ (0, \pi)$ ，有
$$\sum_{k=1}^n \sin(k+\frac{1}{2} ) x = \frac{\sin^2\frac{1}{2}nx}{\sin \frac{1}{2} x}$$

2. 求证：
   $$b_n(x) = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x+t) F_n(t) \text{d}t $$

3. 1. 求证： $F_n(x) \geq 0$
   2. 求证：
   $$\frac{1}{\pi}\int_{-\pi}^{\pi} F_n(x) \text{d}x = 1$$
   3. 求证：
   $$\lim_{n\to\infty} \left[ \int_\delta^\pi F_n(x) \text{d}x + \int_{-\pi}^{-\delta} F_n(x) \text{d}x \right] =0 ,\quad \forall\ \delta \in (0, \pi)$$

## 答案

### 一、计算题

::: details

1. $e^{1-x} = e \cdot e^{-x} = e \sum_{k=0}^{\infty} \frac{1}{k!}(-x)^k = \sum_{n=0}^{\infty} \frac{(-1)^n e}{n!} x^n$

2. 令
$$f(x) = \frac{1}{2} x (S(x) + 2) = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1}$$
从而有
$$f'(x) = \sum_{n=1}^{\infty} x^{2n} = \frac{1}{1-x^2}$$
从而
$$f(x) = \frac{1}{2} \ln\left(\frac{1+x}{1-x}\right)$$
从而
$$\boxed{S(x) = \frac{1}{x} \ln \left(\frac{1+x}{1-x}\right) - 2}$$
这里注意求和的 $n$ 是从 $1$ 开始的。

3. 考虑洛必达

$$
\begin{align*}
I &= \lim_{x\to 1} \frac{\int_1^{x^2} \sin \left(t^2 \right)\text{d}t}{\int_1^{x^3} e^{-t^3}\text{d}t} \\
&= \lim_{x\to 1} \frac{\int_1^x \sin \left(u^4\right) 2u\text{d}u}{\int_1^x e^{-u^6} 3u^2 \text{d}u} \\
&= \lim_{u\to 1} \frac{\sin \left(u^4\right) 2u}{e^{-u^6} 3u^2} \\
&= \boxed{\frac{2e\sin(1)}{3}}
\end{align*}
$$

4. 转换为幂级数的一个求和问题。
首先有 $\sum_{n=1}^\infty (2n-1)x^n = 2\sum nx^n - \sum x^n$ ，考虑分开计算。
对于第一部分逐项积分后容易得到和函数为 $\frac{x}{(1-x)^2}$ ，第二部分则为几何级数，和函数为 $\frac{x}{1-x}$ ，代入原式得和函数为 $\frac{x(1+x)}{(1-x)^2}$ ，代入 $x = \frac{1}{2}$ 得原级数为 $3$ 。

5. 简单的 Maclaurin 级数问题

$$
\begin{align*}
f(x) &= \frac{x}{x^2-2x-3} \\
     &= x \cdot \frac{1}{x+1} \cdot \frac{1}{x-3} \\
     &= -\frac{1}{4} x \left( \frac{1}{x+1} - \frac{1}{x-3} \right) \\
     &= -\frac{1}{4} x \left( \sum_{n=0}^{\infty} (-1)^n x^n + \sum_{n=0}^{\infty} \frac{1}{3^{n+1}} x^n \right)\\
     &= \boxed{\sum_{n=1}^{\infty} \frac{1}{4} \left((-1)^{n} - \frac{1}{3^{n}}\right) x^n}
\end{align*}
$$

6. 同样属于基础题。显然 $f(x)$ 是偶函数，从而可以展开为余弦级数。

$$
\begin{align*}
a_0 &= \frac{1}{\pi}\int_{-\pi}^{\pi} (1-|x|)\text{d}x = 2 - \pi \\
                                                                 \\
a_n &= \frac{1}{\pi}\int_{-\pi}^{\pi} (1-|x|) \cos(nx) \text{d}x \\
    &= \frac{2}{\pi}\int_{0}^{\pi} (1-x) \cos(nx) \text{d}x      \\
    &= \frac{2}{\pi}\cdot \frac{1 - (-1)^n}{n^2}                 \\
\end{align*}
$$
从而有：
$$
\boxed{
f(x) = 1 - \frac{\pi}{2} + \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\cos((2k+1)x)}{(2k+1)^2}
}
$$

:::

### 二、一致收敛与点态收敛

::: details

首先证明点态收敛。

$x = 0$ 时，显然有 $f_n(x) = 0$ 。 $x \ne 0$ 时，则有：
$$f(x) = \frac{1}{1 + \left(\frac{1}{x} - n\right)^2} \to 0 \quad (n\to \infty)$$
从而点态收敛。

接着证明不一致收敛。首先有一致收敛的定义：
$$\forall \varepsilon > 0,\ \exists N(\varepsilon) > 0,\ \forall x \in D = [0, 1],\ n,m \ge N,\ \left|f_m(x) - f_n(x)\right| < \varepsilon$$
从而可以给出不一致收敛的命题：
$$\exists \varepsilon_0 > 0,\ \text{s.t.} \forall N > 0,\ \exists x_0 \in D,\ n_0, m_0 \ge N, \left|f_{m_0}(x_0) - f_{n_0}(x_0)\right| \ge \varepsilon_0$$

考虑 $x_0 = \frac{1}{N},\ n_0 = N,\ m_0 = 2N$ ，此时有：
$$
\begin{align*}
  &\left| f_{m_0}(x_0) - f_{n_0}(x_0) \right| \\
= &\left| f_{2N}(\frac{1}{N}) - f_N(\frac{1}{N}) \right| \\
= &\left| \frac{1}{1+N^2} - 1 \right| \\
= & \frac{1}{1 + \frac{1}{N^2}} \\
\ge & \frac{1}{1 + 1} = \frac{1}{2}
\end{align*}
$$
从而可以取 $\varepsilon_0 = \frac{1}{3}$ ，这是一个满足条件的 $\varepsilon$ 。从而得证。

:::

### 三、级数相关的极限

::: details

简单题。

首先由 Cauchy 收敛原理，有：
$$
\forall \varepsilon > 0, \exists N > 0, \forall n, m > N, \sum_{k=n+1}^{m} a_k < \frac{1}{2}\varepsilon
$$

考虑子列 $2na_{2n}$ 。此时，令 $m = 2n$ ，并且由单调性，得到：
$$na_{2n} < \sum_{k=n+1}^{2n} a_k < \frac{1}{2}\varepsilon$$
从而有：$\lim_{n\to\infty} 2na_{2n} = 0$ 。

接着考虑子列 $(2n+1)a_{2n+1}$ 。由于 $a_n>0$ ，此时有： $(2n+1)a_{2n+1} < 2(n+1)a_{2n+1}$ 。从而：
$$2(n+1)a_{2n+1} < 2\sum_{k=n+1}^{2n+1}a_{k} < \varepsilon$$
从而有：$\lim_{n\to\infty} (2n+1)a_{2n+1} = 0$ 。

从而有：
$$\boxed{\lim_{n\to\infty} na_n = 0}$$

> 注：cc98上的回忆卷上这题前面有标注 Abel-Springheim ，但是 Google 上查不到这个定理；有一个定理叫 Abel-Dini-Pringsheim 定理，但是似乎与这个题目无关。

:::

### 四、逐项求导定理

::: details

令 $f_n(x) = \frac{\sin(nx)}{n^2 + 2024}$ 。

由 Weierstrass 判别法，有：
$$\sum_{n=1}^{\infty} |f_n(x)| \le \sum_{n=1}^{\infty} \frac{1}{n^2+2024}$$
而 $\sum_{n=1}^{\infty} \frac{1}{n^2 + 2024}$ 收敛。从而 $f(x)$ 一致收敛，从而连续。

然后考虑级数 $\sum_{n=1}^{\infty} \frac{n\cos(nx)}{n^2+2024}$ ，只需证明它在 $(0, 2\pi)$ 上内闭一致收敛。

首先有求和：
$$\sum_{k=1}^{n} \cos(nx) = \frac{1}{\sin(\frac{1}{2}x)} \left(\sin((n+\frac{1}{2})x) - \sin(\frac{1}{2}x)\right)$$

对于任意一个 $[a, b]\subset (0,2\pi)$ ，有 $\frac{1}{2}x \in (0, \pi)$ ，从而 $\sin(\frac{1}{2}x) > 0$ 且有最小值 $m$ ，从而：
$$
\begin{align*}
    &\left|\sum_{k=1}^n \cos(nx) \right| \\
=   &\left|\frac{1}{\sin(\frac{1}{2}x)} \left( \sin((n+\frac{1}{2})x) - \sin(\frac{1}{2}x) \right)\right| \\
\le &\left|\frac{1}{m}\right| \cdot \left(|1| + |1| \right) \\
=   &C
\end{align*}
$$
从而 $\sum_{k=1}^n \cos(nx)$ 一致有界。

另一方面， $\frac{n}{n^2+2024}$ 相对 $x$ 是常数，从而单调递减且一致趋于 $0$ 。由 Dirichlet 判别法， $\sum_{n=1}^{\infty} f_n'(x)$ 内闭一致收敛。从而连续可导。

:::

### 五、Fejér 核

::: details

**为了方便书写避免混淆，原题中的 $b_n$ 在这里写作 $d_n$ 。**

第一问易证。

第二问有：
$$
\begin{align*}

d_n &= \frac{1}{n} \sum_{k=0}^{n-1} S_k \\
    &= \frac{1}{2} a_0 + \frac{1}{n} \sum_{i=1}^{n-1}\sum_{j=1}^{i} (a_j\cos(jx) + b_j\sin(jx)) \\
    &= \frac{1}{2} a_0 + \frac{1}{n} \sum_{k=1}^{n-1} (n-k)(a_k\cos(kx) + b_k\sin(kx)) \\
    &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)\text{d}t +
    \frac{1}{n\pi}\sum_{k=1}^{n-1} (n-k)\int_{-\pi}^{\pi} f(t) (\cos(kt)\cos(kx) + \sin(kt)\sin(kx)) \text{d}t \\
    &= \frac{1}{n\pi} \int_{-\pi}^{\pi} f(t)
    \left(\frac{1}{n} + \sum_{k=1}^{n-1} (n-k)\cos(k(t-x)) \right) \text{d}t \\
    &= \frac{1}{\pi}\int_{-\pi}^{\pi}f(u+x)
    \left(\frac{1}{2} + \sum_{k=1}^{n-1}(1-\frac{k}{n})\cos(kx) \right) \text{d}t \qquad (u = t-x)

\end{align*}
$$

从而只需证明：
$$
F_n(u) = \frac{1}{2} + \sum_{k=1}^{n-1}(1-\frac{k}{n})\cos(kx)
$$
即：
$$
\frac{\sin^2(\frac{1}{2}nu)}{2\sin^2(\frac{1}{2}u)} =
\frac{1}{2}n + \sum_{k=1}^{n-1}(n-k)\cos(kx)
$$
此时，有：
$$
\begin{align*}
  &n\sin(\frac{1}{2}u) + 2\sum_{k=1}^{n-1}(n-k)\cos(kx)\sin(\frac{1}{2}u) \\
= &n\sin(\frac{1}{2}u) + \sum_{k=1}^{n-1}(n-k)\left( \sin(k+\frac{1}{2})u - \sin(k-\frac{1}{2})u \right) \\
= &n\sin(\frac{1}{2}u) + \sum_{k=1}^{n-1}(n-k)\sin(k+\frac{1}{2})u - \sum_{k=0}^{n-2}(n-k-1)\sin(k+\frac{1}{2})u \\
= &n\sin(\frac{1}{2}u) + \sum_{k=0}^{n-1}\sin(n+\frac{1}{2})u - n\sin(\frac{1}{2}u) \\
= &\sum_{k=0}^{n-1} \sin(n+\frac{1}{2})u \\
= &\frac{\sin^2\frac{1}{2}nu}{2\sin\frac{1}{2}u}
\end{align*}
$$
得证。

3.1 显然。

3.2 有：
$$
\begin{align*}
  & \int_{-\pi}^{\pi} F_n(t)\text{d}t \\
= & \int_{-\pi}^{\pi} \left(\frac{1}{2} + \sum_{k=1}^{n-1}(n-k)\cos(kt)\right)\text{d}t \\
= & \pi + \sum_{k=1}^{n-1} (n-k)\int_{-\pi}^{\pi} \cos(kt)\text{d}t \\
= & \pi - \sum_{k=1}^{n-1} (n-k)\frac{1}{k}\left[\sin(kt)\right]_{-\pi}^{\pi} \\
= & \pi
\end{align*}
$$
得证。

3.3 思路相似，首先 $F_n(t)$ 为偶函数，从而只需计算 $\int_{\delta}^{\pi}F_n(t)\text{d}t$ 。此时有：
$$
  \int_{\delta}^{\pi} F_n(t) \text{d}t
= \frac{1}{2}(\pi - \delta) - \sum_{k=1}^{n-1}(\frac{1}{k} - \frac{1}{n})\sin(k\delta)
$$

这里我们需要计算 $S(x) = \sum_{k=1}^{\infty} \frac{\sin(kx)}{k}$ 。有：
$$
\begin{align*}
S'_n(x) &= \sum_{k=1}^{n} \cos(kx) \\
        &= \frac{1}{2\sin(\frac{1}{2}x)}\left(\sin(n+\frac{1}{2})x - \sin(\frac{1}{2}x)\right) \\
        &= \frac{\sin(n+\frac{1}{2})x}{2\sin(\frac{1}{2}x)} - \frac{1}{2}
\end{align*}
$$
于是有：
$$
\begin{align*}
S_n(x) &= S_n(x) - S_n(\pi) \\
       &= -\int_{x}^{\pi} \frac{\sin(n+\frac{1}{2})t}{2\sin(\frac{1}{2}t)} \text{d}t + \frac{1}{2}(\pi - x)
\end{align*}
$$
由 Riemann 引理，第一项趋于 $0$ ，从而 $S(x) = \frac{1}{2}(\pi - x)$ 。

此时又有： $\sum_{k=1}^n \sin(k\delta)$ 有界，从而 $\frac{1}{n}\sum_{k=1}^{n} \sin(k\delta) \to 0$ ，从而有：
$$
\begin{align*}
   \lim_{n\to\infty}\int_{\delta}^{\pi} F_n(t) \text{d}t
&= \frac{1}{2}(\pi - \delta) - \lim_{n\to\infty}\sum_{k=1}^{n-1}(\frac{1}{k} - \frac{1}{n})\sin(k\delta) \\
&= \frac{1}{2}(\pi - \delta) - \sum_{k=1}^{\infty}\frac{\sin(k\delta)}{k} - \lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\sin(k\delta) \\
&= \frac{1}{2}(\pi - \delta) - \frac{1}{2}(\pi - \delta) \\
&= 0
\end{align*}
$$
得证。

这一问还有另一解法：

考虑固定 $\delta$ ，此时有： $\frac{1}{2}x \in [\frac{1}{2}\delta, \frac{1}{2}\pi]$ ，从而 $\sin(\frac{1}{2} x)$ 在这个区间上单调递增，从而有最小值 $m = \sin(\frac{1}{2}\delta)$ 。

那么，对于 $F_n(x) = \frac{\sin^2(\frac{1}{2}nx)}{2n\sin^2(\frac{1}{2}x)}$ ，有如下缩放：
$$
F_n(x) \le \frac{1}{2n\sin^2{\frac12x}} \le \frac{1}{2m^2n}
$$
从而有：
$$
0 \le \int_0^\pi F_n(x)\text{d}x \le \frac{\pi-\delta}{2m^2n}
$$
不等式最右边在 $n\to\infty$ 时为 $0$ ，从而夹逼得到中间的积分极限为 $0$ 。得证。

:::
