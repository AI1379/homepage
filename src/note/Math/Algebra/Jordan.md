---
title: Jordan 标准形
date: 2025-06-18
tag:
  - 高等代数
category:
  - Math
  - Algebra
headers-includes:
  - \usepackage[utf8]{ctex}
  - \usepackage[margin=1in]{geometry}
---

Jordan 标准形是线性代数中一个重要的概念，它为线性变换提供了一种标准化的表示形式。通过 Jordan 标准形，我们可以将一个线性变换简化为更易于分析和计算的形式。

## 不变子空间

首先，对于一个线性变换 $\mathcal{A}$ ，我们可以给出**不变子空间**的定义：

::: tip 不变子空间

对于一个数域 $\mathbb{F}$ 上的线性变换 $\mathcal{A}$，如果存在一个非零子空间 $V$ 使得对于任意 $v \in V$，都有 $\mathcal{A}(v) \in V$，则称 $V$ 是 $\mathcal{A}$ 的**不变子空间**，也写作 $\mathcal{A}$-子空间。

:::

从定义，我们可以给出几个简单的结论：

::: important

1. 线性空间 $V$ 本身和零空间 $\{\vec{\theta}\}$ 都是 $\mathcal{A}$ 的不变子空间。
2. $\mathrm{Ker}(\mathcal{A})$ 是 $\mathcal{A}$ 的不变子空间。
3. $\mathrm{Im}(\mathcal{A})$ 是 $\mathcal{A}$ 的不变子空间。
4. 如果 $V_1$ 和 $V_2$ 都是 $\mathcal{A}$ 的不变子空间，则它们的和 $V_1 + V_2$ 与交 $V_1 \cap V_2$ 也是 $\mathcal{A}$ 的不变子空间。

:::

引入不变子空间后，我们可以考虑收缩线性变换的定义域了。对于一个线性变换 $\mathcal{A}$ 和它的一个不变子空间 $W$ ，我们定义：
$$
\begin{align*}
\mathcal{A}|_W: W &\to W \\
\vec{w} &\mapsto \mathcal{A}(\vec{w})
\end{align*}
$$
为线性变换 $\mathcal{A}$ 在 $W$ 上的**限制**。

利用不变子空间与线性变换的直和理论，我们可以给出将线性变换的对应矩阵化简为准对角阵的方法。

TODO

最后，我们介绍**根子空间**的概念。我们知道，对于一个线性变换 $\mathcal{A}$ 以及它的一个特征值 $\lambda$，它的特征空间 $V_{\lambda} = \mathrm{Ker}(\mathcal{A} - \lambda \mathcal{I})$ 是 $\mathcal{A}$ 的不变子空间。我们同时也知道，对于一个特征值 $\lambda$ ，它的代数重数 $r$ 也是反映 $\mathcal{A}$ 的一个参数，据此，我们可以给出根子空间的定义：

::: tip 根子空间

数域 $\mathbb{F}$ 上的线性变换 $\mathcal{A}$ 有一代数重数为 $r$ 的特征值 $\lambda$ ，则对应的**根子空间**定义为：
$$
\overline{V_{\lambda}} = \mathrm{Ker}((\mathcal{A} - \lambda \mathcal{I})^r)
$$

:::

以及一个关于根子空间的重要定理：

::: important 根子空间分解定理

设数域 $\mathbb{F}$ 上线性空间 $V$ 有线性变换 $\mathcal{A}$ ，且 $\mathcal{A}$ 的特征多项式 $f(\lambda)$ 可以分解为若干个一次因式的乘积：
$$
f(\lambda) = \prod_{i=1}^k (\lambda - \lambda_i)^{r_i}
$$
则有：

1. 根子空间 $\overline{V_{\lambda_i}} = f_i(\mathcal{A})(V) = \mathrm{Im}(f_i(\mathcal{A}))$，其中 $f_i(\lambda) = \frac{f(\lambda)}{(\lambda - \lambda_i)^{r_i}}$。
2. $V = \bigoplus_{i=1}^k \overline{V_{\lambda_i}}$

:::

::: details Proof

由于 $f(x) = (x - \lambda_i)^{r_i} f_i(x)$ ，由 Hamilton-Cayley 定理，有：
$$
\mathcal{O} = f(\mathcal{A}) = (\mathcal{A} - \lambda_i \mathcal{I})^{r_i} f_i(\mathcal{A})
$$
从而得到：
$$
(\mathcal{A} - \lambda_i \mathcal{I})^{r_i} f_i(\mathcal{A})(V) = \mathcal{O}(V) = \{\vec{\theta}\} \Rightarrow f_i(\mathcal{A})(V) \subseteq \overline{V_{\lambda_i}}
$$

另一方面，有：$\left((x-\lambda_i)^{r_i}, f_i(x)\right) = 1$ ，从而由 Bezout 定理，存在多项式 $u(x), v(x) \in \mathbb{F}[x]$ 使得：
$$
u(\mathcal{A}) (\mathcal{A} - \lambda_i\mathcal{I})^{r_i}(\overline{V_{\lambda_i}}) + v(\mathcal{A}) f_i(\mathcal{A})(\overline{V_{\lambda_i}}) = \mathcal{I}\cdot\overline{V_{\lambda_i}} = \overline{V_{\lambda_i}}
$$
又因为 $\overline{V_{\lambda_i}} = \mathrm{Ker}((\mathcal{A} - \lambda_i \mathcal{I})^{r_i})$，所以有：
$$
\overline{V_{\lambda_i}} = v(\mathcal{A}) f_i(\mathcal{A})(\overline{V_{\lambda_i}}) = f_i(\mathcal{A})(v(\mathcal{A})(\overline{V_{\lambda_i}})) \subseteq f_i(\mathcal{A})(V)
$$
从而得到：
$$
\boxed{
  \overline{V_{\lambda_i}} = f_i(\mathcal{A})(V)
}
$$

---

用类似的手法，可以得到：存在一列多项式 $u_1(x) \cdots u_k(x)$ 使得：
$$
\sum_{i=1}^k u_i(\mathcal{A}) f_i(\mathcal{A}) = \mathcal{I}
$$
从而有：
$$
\begin{align*}
V &= \mathcal{I}(V) \\
&= \sum_{i=1}^k u_i(\mathcal{A}) f_i(\mathcal{A})(V) \\
&= \sum_{i=1}^k f_i(\mathcal{A})\left[u_i(\mathcal{A})(V)\right] \\
&\subseteq \sum_{i=1}^k f_i(\mathcal{A})(V) \\
&= \sum_{i=1}^k \overline{V_{\lambda_i}}
\end{align*}
$$

再证明对于一切 $\vec{\beta}_i \in \overline{V_{\lambda_i}}$，若 $\sum_{i=1}^k \vec{\beta}_i  = \vec{\theta}$，则 $\vec{\beta}_i = \vec{\theta}$ 。

容易注意到： $\forall i \ne j,\ f_i(\mathcal{A})(\vec{\beta_i})) = \vec{\theta}$ 。从而在 $\sum_{i=1}^k \vec{\beta_i} = \vec{\theta}$ 两边作用 $f_i(\mathcal{A})$ 可以得到：
$$
f_i(\mathcal{A})(\vec{\beta_i}) = \vec{\theta}
$$
又由于前面得到的多项式 $u(x)$ 和 $v(x)$ 满足：
$$
u(\mathcal{A}) (\mathcal{A} - \lambda_i\mathcal{I})^{r_i} + v(\mathcal{A}) f_i(\mathcal{A}) = \mathcal{I}
$$
得：
$$
\boxed{
  \vec{\beta_i} = \mathcal{I} \cdot \vec{\beta_i} = u(\mathcal{A}) (\mathcal{A} - \lambda_i\mathcal{I})^{r_i}(\vec{\beta_i}) + v(\mathcal{A}) f_i(\mathcal{A})(\vec{\beta_i}) = \vec{\theta} + \vec{\theta} = \vec{\theta}
}
$$
从而这是一个直和分解。

:::

在我们的证明中，我们多次使用了多项式的 Bezout 定理，从而推出一个恒等变换与一个或几个我们正在研究的线性变换之间的关系，这是一个非常有用的技巧，我们将在接下来多次使用这样的技巧。

## Jordan 标准形的定义

Jordan 标准形是线性代数中一个重要的概念，它为线性变换提供了一种标准化的表示形式。通过 Jordan 标准形，我们可以将一个线性变换简化为更易于分析和计算的形式。

首先定义 **Jordan 块**为：

::: tip Jordan 块

数域 $\mathbb{F}$ 上的线性变换 $\mathcal{A}$ 的一个**Jordan 块**是一个 $n \times n$ 的矩阵 $J_n(\lambda)$，满足：
$$
J_n(\lambda) =
\begin{pmatrix}
\lambda & 0 & \cdots & 0 & 0 \\
1 & \lambda & \cdots & 0 & 0 \\
\vdots & \ddots & \ddots & \vdots & \vdots \\
0 & \cdots & 1 & \lambda & 0 \\
0 & \cdots & 0 & 1 & \lambda
\end{pmatrix}
$$
其中 $\lambda \in \mathbb{F}$ 是一个标量。

:::

在有些文献中， Jordan 块也会写作上三角矩阵的形式。两者没有本质性的区别。

接下来，我们定义 **Jordan 标准形**为：

::: tip Jordan 标准形

数域 $\mathbb{F}$ 上的线性变换 $\mathcal{A}$ 的**Jordan 标准形**是一个块对角矩阵，满足：
$$
J(\mathcal{A}) =
\begin{pmatrix}
J_{n_1}(\lambda_1) & & & \\
& J_{n_2}(\lambda_2) & & \\
& & \ddots & \\
& & & J_{n_k}(\lambda_k)
\end{pmatrix}
$$
其中每个 $J_{n_i}(\lambda_i)$ 都是一个 Jordan 块，且 $\lambda_1, \lambda_2, \ldots, \lambda_k$ 是 $\mathcal{A}$ 的特征值，$n_1, n_2, \ldots, n_k$ 分别是对应的 Jordan 块的大小。

:::

我们将在此后看到 Jordan 标准形与线性变换的特征值、特征向量以及不变子空间之间的关系。

## Jordan 标准形的存在性

首先，我们定义**幂零变换**为：

::: tip 幂零变换

数域 $\mathbb{F}$ 上的线性变换 $\mathcal{A}$ 是**幂零变换**，如果存在一个正整数 $n$ 使得 $\mathcal{A}^n = \mathcal{O}$。

:::

容易注意到，幂零变换的特征值只能是 $0$，因此它的特征多项式可以写成：
$$
f(\lambda) = \lambda^r
$$

接着，我们引入记号 $S_{n}$ 表示这样的一个矩阵，满足：
$$
S_n =
(s_{ij}) =
\begin{cases}
1 & \text{if } i = j + 1 \\
0 & \text{otherwise}
\end{cases}
=
\begin{pmatrix}
0 & 0 & \cdots & 0 & 0 \\
1 & 0 & \cdots & 0 & 0 \\
\vdots & \vdots & \ddots & \vdots & \vdots
\\
0 & 0 & \cdots & 0 & 0 \\
0 & 0 & \cdots & 1 & 0
\end{pmatrix}_{n \times n}
$$
以及对应的线性变换 $\mathcal{S}_n$ 。容易证明，这样的一个线性变换是幂零的。这样的一个矩阵有时会被称作下移矩阵（ *Lower Shift Matrix* ），同样的可以定义上移矩阵（ *Upper Shift Matrix* ）。

接下来，我们要给出一个重要的引理，它给出了一种特殊的基，有时被称作**循环基**：

::: important 循环基引理

设 $\mathcal{B}$ 是 $n$ 维线性空间 $V$ 上的一个幂零线性变换，满足 $\mathcal{B}^k = \mathcal{O}$ ，其中 $n>0$ ，那么存在 $V$ 的一组如下形式的基：
$$
\begin{array}{ccccc}
\vec{\alpha_1},  &\vec{\alpha_2}, &\cdots, &\vec{\alpha_{t}} \\
\mathcal{B}\vec{\alpha_1}, &\mathcal{B}\vec{\alpha_2}, &\cdots, &\mathcal{B}\vec{\alpha_{t}} \\
\vdots &\vdots & &\vdots \\
\mathcal{B}^{k_1-1}\vec{\alpha_1}, &\mathcal{B}^{k_2-1}\vec{\alpha_2}, &\cdots, &\mathcal{B}^{k_t-1}\vec{\alpha_{t}}
\end{array}
$$
满足：
$$
\forall i,\ \mathcal{B}^{k_i} \vec{\alpha_i} = \vec{\theta}
$$
（**注意这里的 $k_i$ 并不是唯一的，而是与 $\alpha_i$ 的选择有关**）

且有： $\mathcal{B}$ 在这样一组基的表示下的矩阵为：
$$
B =
\begin{pmatrix}
S_{k_1} & & & \\
& S_{k_2} & & \\
& & \ddots & \\
& & & S_{k_t} \\
\end{pmatrix}_{n \times n}
$$

:::

::: details Proof

考虑对维数做归纳法。

当 $n=1$ 时，设 $V = \mathrm{Span}(\vec{\alpha_1})$ ，则存在 $\lambda_1$ 使得 $\mathcal{B}(\vec{\alpha_1}) = \lambda_1 \vec{\alpha_1}$，从而 $\mathcal{B}^k(\vec{\alpha_1}) = \lambda_1^k \vec{\alpha_1} = \vec{\theta}$ ，从而 $\lambda_1 = 0$ ，从而在 $\vec{\alpha_1}$ 的基下，$\mathcal{B}$ 的矩阵为 $0$ 矩阵。

下一步考虑归纳。假设 $\dim V < n$ 时成立，考虑 $\dim V = n$ 时的情况。

显然，若 $\dim \mathrm{Im} \mathcal{B} = n$ ，则有 $\mathcal{B}V = V$ ，从而 $\mathcal{B}^k V = V = \left\{\vec{\theta}\right\}$ ，与 $\dim V > 0$ 矛盾。从而有 $\dim \mathrm{Im} \mathcal{B} < n$ ，从而可以构造 $\mathrm{Im} \mathcal{B} = \mathcal{B}V$ 的一组循环基：
$$
\begin{array}{ccccc}
\vec{\varepsilon_1},  &\vec{\varepsilon_2}, &\cdots, &\vec{\varepsilon_{t}} \\
\mathcal{B}\vec{\varepsilon_1}, &\mathcal{B}\vec{\varepsilon_2}, &\cdots, &\mathcal{B}\vec{\varepsilon_{t}} \\
\vdots &\vdots & &\vdots \\
\mathcal{B}^{k_1-1}\vec{\varepsilon_1}, &\mathcal{B}^{k_2-1}\vec{\varepsilon_2}, &\cdots, &\mathcal{B}^{k_t-1}\vec{\varepsilon_{t}}
\end{array}
$$

接下来，我们的思路就是，将这组循环基转换为 $V$ 的一组循环基。由于这是 $\mathrm{Im}(B)$ 的一组基，因此我们自然地想考虑 $\mathrm{Ker}(B)$ 的基，因为根据秩-零化度定理，这两组基并在一起就是 $V$ 的一组基。

首先，由于 $\vec{\varepsilon_i} \in \mathrm{Im}(\mathcal{B})$ ，从而存在原像 $\vec{\alpha_i} \in V$ 。从而可以得到一组原像集：
$$
\begin{array}{ccccc}
\vec{\alpha_1},  &\vec{\alpha_2}, &\cdots, &\vec{\alpha_{t}} \\
\mathcal{B}\vec{\alpha_1}, &\mathcal{B}\vec{\alpha_2}, &\cdots, &\mathcal{B}\vec{\alpha_{t}} \\
\vdots &\vdots & &\vdots \\
\mathcal{B}^{k_1-1}\vec{\alpha_1}, &\mathcal{B}^{k_2-1}\vec{\alpha_2}, &\cdots, &\mathcal{B}^{k_t-1}\vec{\alpha_{t}}
\end{array}
$$
以及 $\mathrm{Ker}(\mathcal{B})$ 中的一组线性无关的向量：
$$
\mathcal{B}^{k_1}\vec{\alpha_1}, \mathcal{B}^{k_2}\vec{\alpha_2}, \cdots, \mathcal{B}^{k_t}\vec{\alpha_{t}}
$$
从而可以将这一组向量扩充为 $\mathrm{Ker}(\mathcal{B})$ 的一组基：
$$
\mathcal{B}^{k_1}\vec{\alpha_1}, \mathcal{B}^{k_2}\vec{\alpha_2}, \cdots, \mathcal{B}^{k_t}\vec{\alpha_{t}}, \vec{\alpha_{t+1}}, \cdots, \vec{\alpha_{s}}
$$
这里的 $s \ge t$ ，二者可能相等。

由于 $\vec{\alpha_{t+1}} \cdots \vec{\alpha_s} \in \mathrm{Ker}(\mathcal{B})$，因此可以将对应的 $k_{t+1} \cdots k_s$ 取为 $1$，从而得到一组新的循环基：
$$
\begin{array}{ccccc}
\vec{\alpha_1},  &\vec{\alpha_2}, &\cdots, &\vec{\alpha_{t}}, &\vec{\alpha_{t+1}}, &\cdots, &\vec{\alpha_{s}} \\
\mathcal{B}\vec{\alpha_1}, &\mathcal{B}\vec{\alpha_2}, &\cdots, &\mathcal{B}\vec{\alpha_{t}} \\
\vdots &\vdots & &\vdots \\
\mathcal{B}^{k_1-1}\vec{\alpha_1}, &\mathcal{B}^{k_2-1}\vec{\alpha_2}, &\cdots, &\mathcal{B}^{k_t-1}\vec{\alpha_{t}} \\
\mathcal{B}^{k_1}\vec{\alpha_{t+1}}, &\mathcal{B}^{k_t}\vec{\alpha_{t+2}}, &\cdots, &\mathcal{B}^{k_t}\vec{\alpha_{s}}
\end{array}
$$
且将 $\mathcal{B}$ 作用到这组基上可以得到：
$$
\begin{array}{ccccc}
\mathcal{B}\vec{\alpha_1}, &\mathcal{B}\vec{\alpha_2}, &\cdots, &\mathcal{B}\vec{\alpha_{t}}, &\vec{\theta}, &\cdots, &\vec{\theta} \\
\vdots &\vdots & &\vdots \\
\mathcal{B}^{k_1}\vec{\alpha_1}, &\mathcal{B}^{k_2}\vec{\alpha_2}, &\cdots, &\mathcal{B}^{k_t}\vec{\alpha_{t}} \\
\vec{\theta}, &\vec{\theta}, &\cdots, &\vec{\theta}
\end{array}
$$
从而 $\mathcal{B}$ 在这组基下的矩阵为：
$$
B =
\begin{pmatrix}
S_{k_1} & & & \\
& S_{k_2} & & \\
& & \ddots & \\
& & & S_{k_t} \\
& & & & 0 &  \\
& & & & & \ddots & \\
& & & & & & 0
\end{pmatrix}
$$
从而得证。

:::

这个引理非常重要，它不仅可以简单地推导出 Jordan 标准形的存在性，同时也给出了一种计算 Jordan 标准形的方法。

::: important Jordan 标准形的存在性

设 $\mathcal{A}$ 为 $\mathbb{C}$ 上线性空间 $V$ 上的一个线性变换，则在 $V$ 中必然存在一组基，使得 $\mathcal{A}$ 在这组基下的矩阵为 Jordan 标准形矩阵。等价地，任意一个 $n$ 阶复矩阵 $A$ 均与一个 Jordan 形矩阵相似。

:::

::: details Proof

首先，由根子空间分解定理，有：
$$
V = \bigoplus_{i=1}^k \overline{V_{\lambda_i}}
$$
其中 $\lambda_i$ 为 $\mathcal{A}$ 的特征值，对应重数为 $r_i$ 。自然地，我们想把每个根子空间分开考虑，然后合并为一个完整的矩阵。

考虑一个线性变换 $\mathcal{B}_i = (\mathcal{A} - \lambda_i \mathcal{I})|_{\overline{V_{\lambda_i}}} = \mathcal{A}_i|_{\overline{V_{\lambda_i}}} - \lambda_i \mathcal{I}_i|_{\overline{V_{\lambda_i}}}$ ，显然它是一个幂零变换。根据循环基引理，存在一组 $\overline{V_{\lambda_i}}$ 的基，使得其矩阵为：
$$
B_i =
\begin{pmatrix}
S_{k_{i1}} & & & \\
& S_{k_{i2}} & & \\
& & \ddots & \\
& & & S_{k_{it}} \\
\end{pmatrix}
$$
的形式。

而另一方面， $\lambda_i \mathcal{I}|_{\overline{V_{\lambda_i}}}$ 的矩阵为：
$$
\begin{pmatrix}
\lambda_i & & & \\
& \lambda_i & & \\
& & \ddots & \\
& & & \lambda_i \\
\end{pmatrix}
$$
从而 $\mathcal{A}|_{\overline{V_{\lambda_i}}}$ 的矩阵为：
$$
\begin{align*}
J_i = B_i + \lambda_i E_{p_i} &=
\begin{pmatrix}
S_{k_{i1}} + \lambda_i E & & & \\
& S_{k_{i2}} + \lambda_i E & & \\
& & \ddots & \\
& & & S_{k_{it}} + \lambda_i E \\
\end{pmatrix} \\
&=
\begin{pmatrix}
\lambda_i & \\
1 & \lambda_i & & \\
\vdots & \ddots & \ddots & \\
0 & \cdots & 1 & \lambda_i \\
  & & & & \lambda_i \\
  & & & & 1 & \lambda_i \\
  & & & & \vdots & \ddots & \ddots \\
  & & & & 0 & \cdots & 1 & \lambda_i \\
  & & & & & & & & \ddots & \\
\end{pmatrix} \\
&=
\begin{pmatrix}
J_{i1}(\lambda_i) & & & \\
& J_{i2}(\lambda_i) & & \\
& & \ddots & \\
& & & J_{it}(\lambda_i) \\
\end{pmatrix}
\end{align*}
$$
为一个 Jordan 标准形。

又有：
$$
\mathcal{A} = \bigoplus_{i=1}^k \mathcal{A}|_{\overline{V_{\lambda_i}}}
$$
从而 $\mathcal{A}$ 在 $V$ 的一组基下的矩阵为：
$$
J(\mathcal{A}) =
\begin{pmatrix}
J_{1} & & & \\
& J_{2} & & \\
& & \ddots & \\
& & & J_{k} \\
\end{pmatrix}
$$
为一个 Jordan 标准形。从而 Jordan 标准形的存在性得证。

:::

## Jordan-Chevalley 分解

## 多项式矩阵理论

## Jordan 标准形的唯一性

## Jordan 标准形的计算
