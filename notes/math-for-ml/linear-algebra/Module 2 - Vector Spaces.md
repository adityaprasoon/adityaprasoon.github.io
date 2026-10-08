# 2. Vector Spaces
## Groups and Vector Spaces

A **group** consists of a set $G$ and an operation that combines elements of $G$. The operation is closed and associative, has an identity element, and every element has an inverse. If the operation is also commutative, the group is **Abelian**.

Examples:

- $(\mathbb Z,+)$ is an Abelian group. Its identity is $0$, and the inverse of $n$ is $-n$.
- $(\mathbb N_0,+)$ is not a group because its elements do not all have additive inverses in $\mathbb N_0$.
- $(\mathbb Z,\cdot)$ is not a group: although it has the multiplicative identity $1$, not every integer has a multiplicative inverse in $\mathbb Z$.

A **real vector space** has a set $V$ with vector addition and scalar multiplication:

- Vector addition: $+:V\times V\to V$.
- Scalar multiplication: $\cdot:\mathbb R\times V\to V$.

Under vector addition, the vectors form an Abelian group. Scalar multiplication must also satisfy

$$
\begin{aligned}
\lambda(x+y)&=\lambda x+\lambda y,\\
(\lambda+\psi)x&=\lambda x+\psi x,\\
\lambda(\psi x)&=(\lambda\psi)x,\\
1x&=x.
\end{aligned}
$$

The first two laws are distributivity. The third gives associativity between scalar multiplications, and the last says scalar $1$ leaves a vector unchanged. The additive group has a zero vector and every vector has an additive inverse. The scalar $0$ and zero vector are different kinds of objects, even though $0x$ equals the zero vector.

Examples include $\mathbb R^n$, where addition and scalar multiplication are componentwise, and the set of real $m\times n$ matrices, where both operations are entrywise.

<details>
<summary>Test Your Understanding</summary>

**Questions**
1. What part of a vector-space structure is already an Abelian group, and which operation defines that group?
2. In $(\mathbb Z,+)$, identify the identity and the inverse of $-5$.
3. Why isn’t $(\mathbb Z,\cdot)$ a group, even though it has an identity?

**Answers**
1. The vectors form an Abelian group under vector addition.
2. The additive identity is the integer $0$. The inverse of $-5$ is $5$.
3. Not every integer has a multiplicative inverse in $\mathbb Z$.
</details>