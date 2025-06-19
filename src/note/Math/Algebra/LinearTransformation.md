---
title: 线性空间与线性映射
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

线性空间是高等代数中研究的最基本的对象之一，而线性映射与线性变换则与之密切相关。因此，我们将两者合并介绍。

## 线性空间

### 子空间的交与和

::: important 维数公式
若：线性空间 $V$ 有两**有限维**子空间 $V_1 , V_2$ ，则有：
$$
\dim V_1 + \dim V_2 = \dim (V_1 + V_2) + \dim (V_1 \cap V_2)
$$
:::

::: details Proof
TODO
:::

### 直和与正交

::: tip 直和的定义
对于线性空间 $V$ 的子空间 $V_1$ 和 $V_2$ ，当 $V_1 \cap V_2 = \left\{ \vec{\theta} \right\}$ 时，则称 $V_1 + V_2$ 为**直和**，记为 $V_1 \oplus V_2$ 。
:::

由维数公式，自然地有推论：

::: important
当 $V_1$ 与 $V_2$ 均为有限维子空间时，直和 $V_1 \oplus V_2$ 当且仅当 $\dim(V_1 + V_2) = \dim V_1 + \dim V_2$
:::

直和可以很好地刻画两个子空间之间的关系，但是我们仍然需要一些手段，从子空间的元素出发研究直和。从而给出结论：

::: important
设有 $\mathbb{F}$ 上的线性空间 $V$ 和两个子空间 $V_1, V_2$ ，以下条件等价：

1. $V_1 + V_2$ 为直和
2. 若 $\vec{\alpha_1} + \vec{\alpha_2} = \vec{\theta}$ ，则有 $\vec{\alpha_1} = \vec{\alpha_2} = \vec{\theta}$
3. $V_1 + V_2$ 中的向量可以唯一的分解为 $\alpha + \beta$ ，其中 $\alpha \in V_1,\ \beta\in V_2$

:::

::: details Proof
TODO
:::

以及另一个关于直和的重要结论：

::: important 直和补的存在性

对于任意一个**有限维**线性空间 $U$ 以及它的一个子空间 $V$ ，存在唯一的子空间 $W$ 使得：
$$
U = V \oplus W
$$
成立。此时，称 $W$ 为 $V$ 的**直和补**。

:::

很容易注意到，直和与直和补实际上是想描述一个线性空间的分解和合成，而这样的分解不一定是两个子空间的和，因此可以扩展到 $n$ 个子空间的直和，同时也有类似的理论。

进一步地，对于内积空间，我们有**正交和**的概念。

## 线性映射

### 线性映射与线性变换

首先给出线性映射的定义：

::: tip 线性映射

设 $\mathbb{F}$ 上的两个线性空间 $V$ 和 $W$ ， $\varphi : V \rightarrow W$ 为 $V$ 到 $W$ 的映射，且满足：
$$
\varphi(k\vec{\alpha} + l\vec{\beta}) = k\varphi(\vec{\alpha}) + l\varphi(\vec{\beta})
$$
则称 $\varphi$ 为**线性映射**，记作 $\varphi\in \mathrm{Hom}_{\mathbb{F}}(V, W)$ 。

特别地，若 $V = W$ ，则称其为**线性变换**，记作 $\mathrm{End}_{\mathbb{F}}(V)$ 。

:::

容易证明， $\mathrm{Hom}_{\mathbb{F}}(V, W)$ 为 $\mathbb{F}$ 上的线性空间。此外，可以定义线性映射之间的**乘法**为线性映射的复合。

接下来，由于线性映射 $\varphi$ 为一个映射，自然就存在一些情况下这个线性映射为双射。此时，我们说 $\varphi$ 为**同构映射**：

::: tip 同构

设 $\varphi : V \rightarrow W$ 为一个线性映射，且为双射，则称其为线性空间 $V$ 到 $W$ 的**同构映射**，且称 $V$ 和 $W$ 关于 $\varphi$ 同构，记作：
$$
V \stackrel{\varphi}{\cong} W
$$
有时候我们并不能给出一个具体的同构映射，这个时候我们会省略 $\varphi$ ，记作 $V\cong W$ 。
:::

在后文，我们将使用花体字母 $\mathcal{A}$ 来表示一个线性映射。

### 线性映射的直和

线性空间上的直和给出了关于线性空间的分解，而线性映射的直和则给出了关于线性映射的分解。

::: tip 线性映射的直和

考虑两个线性空间 $V_1$ 和 $V_2$ ，以及它们之间的线性映射 $\mathcal{A}_1 \in \mathrm{Hom}_{\mathbb{F}}(V_1, W)$ 与 $\mathcal{A}_2 \in \mathrm{Hom}_{\mathbb{F}}(V_2, W)$ ，则可以定义它们的**直和**为：
$$
\mathcal{A}_1 \oplus \mathcal{A}_2 \in \mathrm{Hom}_{\mathbb{F}}(V_1 \oplus V_2, W)
$$
且：
$$
(\mathcal{A}_1 \oplus \mathcal{A}_2)(\vec{\alpha}_1 + \vec{\alpha}_2) = \mathcal{A}_1(\vec{\alpha}_1) + \mathcal{A}_2(\vec{\alpha}_2)
$$

:::

这给出了将几个互相交集为 $\left\{\vec{\theta}\right\}$ 的线性映射组合成一个新的线性映射的方式。

### 线性映射的矩阵

::: warning
在这里，我们只考虑**有限维**线性空间上的线性映射。
:::

首先考虑线性变换 $\mathcal{A}\in \mathrm{Hom}_{\mathbb{F}}(V, W)$ ，且有 $V$ 的一组基 $\left\{\vec{\alpha}_i\right\}$ 与 $\left\{\vec{\beta}_i\right\}$ ，则有：
$$
\mathcal{A}(V) = \mathrm{Span}(\mathcal{A}(\vec{\alpha}_1), \mathcal{A}(\vec{\alpha}_2), \ldots, \mathcal{A}(\vec{\alpha}_n))
$$
又由于 $\mathcal{A}(\alpha_i) \in W$ ，从而有：
$$
\begin{align*}
\begin{cases}
\mathcal{A}(\vec{\alpha_1}) &= a_{11}\vec{\beta_1} + a_{12}\vec{\beta_2} + \cdots + a_{1m}\vec{\beta_m} \\
\mathcal{A}(\vec{\alpha_2}) &= a_{21}\vec{\beta_1} + a_{22}\vec{\beta_2} + \cdots + a_{2m}\vec{\beta_m} \\
&\vdots \\
\mathcal{A}(\vec{\alpha_n}) &= a_{n1}\vec{\beta_1} + a_{n2}\vec{\beta_2} + \cdots + a_{nm}\vec{\beta_m}
\end{cases}
\end{align*}
$$
从而可以给出线性变换 $\mathcal{A}$ 的矩阵表示：
$$
\mathrm{A} = \left[\mathcal{A}\right]_{\left\{\alpha_i\right\}}^{\left\{\beta_j\right\}} =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1m} \\
a_{21} & a_{22} & \cdots & a_{2m} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nm}
\end{pmatrix}
$$
有时也会写作：
$$
\mathcal{A}(\vec{\alpha}_1, \vec{\alpha}_2, \ldots, \vec{\alpha}_n) = \left(\vec{\beta}_1, \vec{\beta}_2, \ldots, \vec{\beta}_m\right) \mathrm{A}
$$
通常称 $\mathrm{A}$ 为 $\mathcal{A}$ 关于 $\left\{\vec{\alpha}_i\right\}$ 与 $\left\{\vec{\beta}_j\right\}$ 的**矩阵表示**。

容易证明，当 $\dim(V) = n$ 且 $\dim(W) = m$ 时，可以构造 $\mathrm{Hom}_{\mathbb{F}}(V, W)$ 与 $\mathbb{F}^{m \times n}$ 之间的同构映射：
$$
\mathrm{Hom}_{\mathbb{F}}(V, W) \cong \mathbb{F}^{m \times n}
$$
从而可以得到 $\dim(\mathrm{Hom}_{\mathbb{F}}(V, W)) = mn$

通过这个同构映射，我们可以给出线性映射的运算与矩阵运算之间的关系。特别地，当 $\mathcal{A}$ 为线性变换时，它的矩阵表示为一个方阵。

既然有了线性变换这个工具，那么我们自然想要考虑如何应用这个新的工具研究矩阵的性质。具体而言，我们考虑到，线性变换的矩阵是基于线性空间上的一个给定的基的，但是线性变换本身和取的基无关，因此我们自然地就想考虑：**同一个线性变换，在不同基下矩阵的关系**。于是，我们给出定理：

::: important 同一线性变换在不同基下的矩阵表示
设 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ 为线性变换，且 $\left\{\vec{\alpha}_i\right\}$ 与 $\left\{\vec{\beta}_j\right\}$ 分别为 $V$ 的两组基，在两组基下的矩阵表示分别为 $\mathrm{A}$ 和 $\mathrm{B}$ ，则有：
$$
\mathrm{B} = \mathrm{P}^{-1} \mathrm{A} \mathrm{P}
$$
其中 $\mathrm{P}$ 为从 $\left\{\vec{\alpha}_i\right\}$ 到 $\left\{\vec{\beta}_j\right\}$ 的过渡矩阵。
:::

::: details Proof
TODO
:::

基于这一点，我们可以说：**线性变换所对应的矩阵在相似的意义下是唯一的，且这是充要条件**。

### 线性变换的特征理论

特征值理论是研究矩阵时的一个核心理论。在前一节我们给出了线性变换与对应矩阵的关系，自然地，我们可以将特征值理论推广到线性变换上。

::: tip 线性变换的特征值与特征向量
设 $V$ 是数域 $\mathbb{F}$ 上的线性空间，且 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ 为线性变换，若存在非零向量 $\vec{\alpha} \in V$ 以及数 $\lambda \in \mathbb{F}$ 使得：
$$
\mathcal{A}(\vec{\alpha}) = \lambda \vec{\alpha}
$$
则称 $\lambda$ 为 $\mathcal{A}$ 的**特征值**，$\vec{\alpha}$ 为 $\mathcal{A}$ 的**特征向量**。属于同一个特征值的所有特征向量构成***特征子空间**，记作 $V_{\lambda}$ 。

由于线性变换的矩阵在相似意义下是唯一的，因此线性变换的矩阵对应的特征多项式是唯一的，它被定义为**特征多项式**。

:::

### 像集与核

在这里，我们将要研究两个线性代数中最为重要的概念：**像集**与**核**。

::: tip 像集与核

设 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ 为线性变换，则 $\mathcal{A}$ 的**像集**（Image）定义为：
$$
\mathrm{Im}(\mathcal{A}) = \mathcal{A}(V) = \{\mathcal{A}(\vec{\alpha}) \mid \vec{\alpha} \in V\}
$$
而 $\mathcal{A}$ 的**核**（Kernel）定义为：
$$
\mathrm{Ker}(\mathcal{A}) = \{\vec{\alpha} \in V \mid \mathcal{A}(\vec{\alpha}) = \vec{\theta}\}
$$

:::

容易证明，$\mathrm{Im}(\mathcal{A})$ 是 $W$ 的子空间，而 $\mathrm{Ker}(\mathcal{A})$ 是 $V$ 的子空间。因此，它们也被称作**像空间**与**核空间**。

根据这一点，我们可以给出一些关于线性映射的结论：

::: important
对于一个线性映射 $\mathcal{A}$ ，有：

1. $\mathcal{A}$ 是单射当且仅当 $\mathrm{Ker}(\mathcal{A}) = \left\{\vec{\theta}\right\}$
2. $\mathcal{A}$ 是满射当且仅当 $\mathrm{Im}(\mathcal{A}) = W$
:::

我们在后面将会多次用到这个引理。

### 同构映射

在此前，我们讨论了线性映射，而在这里我们将会进一步讨论特殊的线性映射：同构。

TODO

### 像集与核的关系

首先定义线性变换的**秩**与**零化度**：

::: tip 秩与零化度
设 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ 为线性变换，则 $\mathcal{A}$ 的**秩**（Rank）定义为：
$$
\mathrm{rank}(\mathcal{A}) = \dim(\mathrm{Im}
(\mathcal{A})) = \dim(\mathcal{A}(V))
$$
而 $\mathcal{A}$ 的**零化度**（Nullity）定义为：
$$
\mathrm{nullity}(\mathcal{A}) = \dim(\mathrm{Ker
}(\mathcal{A})) = \dim(\{\vec{\alpha} \in V \mid \mathcal{A}(\vec{\alpha}) = \vec{\theta}\})
$$
:::

容易注意到，线性变换的秩就是它在某一基下矩阵的秩。

这里，我们将会给出一个非常重要的定理：

::: important 秩-零化度定理

对于一个线性映射 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ ，有：
$$
\mathrm{rank}(\mathcal{A}) + \mathrm{nullity}(\mathcal{A}) = \dim(V)
$$
且 $\mathrm{Im}(\mathcal{A})$ 的任意一组基的一组原像与 $\mathrm{Ker}(\mathcal{A})$ 的任意一组基合并成 $V$ 的一组基。

:::

::: details Proof
TODO
:::

### 积空间

积空间给出了将多个线性空间复合成一个新的线性空间的方式。

::: tip 积空间
设 $\mathbb{F}$ 上的 $n$ 个线性空间 $V_1, V_2, \ldots, V_n$ ，则它们的**积空间**（Product Space）定义为：
$$
V_1 \times V_2 \times \cdots \times V_n = \{(\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n) \mid \vec{v}_i \in V_i\}
$$
其中 $\vec{v}_i$ 为 $V_i$ 中的向量。
:::

有些地方也将这个称作**笛卡尔积**，也有些教材将其称为**外直积**。容易证明这是一个线性空间。

### 商空间

商空间是一个重要的概念，它给出了将一个线性空间的某些子空间的信息“剥离”掉的方式，从而可以使某些隐藏的结构显现出来。

首先给出定义：

::: tip 商空间
设 $V$ 是一个线性空间，且 $W$ 是 $V$ 的一个子空间，则 $V$ 关于 $W$ 的**商空间**（Quotient Space）定义为：
$$
V / W = \{ \vec{v} + W \mid \vec{v} \in V \}
$$
其中 $\vec{v} + W$ 表示 $W$ 中所有与 $\vec{v}$ 相加的向量构成的集合。
:::

容易证明这是一个线性空间。

从而可以给出一个非常重要的定理：

::: important 同态基本定理 / 线性映射基本定理

设 $\mathcal{A} \in \mathrm{End}_{\mathbb{F}}(V)$ 为线性变换，则有：
$$
V / \mathrm{Ker}(\mathcal{A}) \cong \mathrm{Im}(\mathcal{A})
$$

:::

::: details Proof
TODO
:::
