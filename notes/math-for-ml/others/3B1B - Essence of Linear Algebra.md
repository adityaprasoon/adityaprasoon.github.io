---
status: work-in-progress
ai-authored: true
---

## Video 1 - Vectors

A vector can be viewed from three perspectives:

1. The physics‑student perspect ive: a vector is an arrow in space that can be moved around.  
2. The computer‑science perspective: a vector is simply an ordered list of numbers.  
3. The mathematician’s perspective: a vector is any object for which adding two vectors and scaling a vector by a scalar are meaningful.
   
Addition of two vectors can be seen geometrically as moving one vector so its tail aligns with the tip of the other; the sum is the vector from the tail of the first to the tip of the second.

Scaling a vector changes its length by a scalar factor, and a negative scalar also flips its direction.

The advantage of studying linear algebra is not to cling to a single viewpoint but to shift among perspectives for deeper insight. For example, a simple list of numbers may reveal little, but representing them as arrows provides a useful geometric tool. Likewise, the ordered‑list representation of a vector offers a mathematical notation for physical and geometric entities, grounding the operations performed on them.

## Video 2 - linear combinations, span, and basis vectors 

Vector coordinates in 2D are represented by a pair of numbers. Each number scales a special basis vector: the first scales $\hat{\mathbf{i}}$, the second scales $\hat{\mathbf{j}}$. Thus any vector $(x, y)$ can be written as the sum $x\,\hat{\mathbf{i}} + y\,\hat{\mathbf{j}}$.

$\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$ are the standard basis vectors of the coordinate system. Choosing a different set of basis vectors creates a new coordinate system and yields a different representation for every vector. Any vector representation implicitly selects a basis, and the representation itself is a linear combination of those basis vectors (e.g., $a\mathbf{v} + b\mathbf{w}$ for vectors $\mathbf{v}$ and $\mathbf{w}$).

The set of all linear combinations of a given collection of vectors is called the **span**. When visualizing a span, it helps to think of the geometric object it forms:

- The span of a single non‑zero vector is a straight line through the origin.  
- The span of two non‑zero, non‑parallel vectors in 3D is a plane (a “sheet”).  
- The span of three non‑zero vectors in 3D that are not all in the same plane is the entire 3D space.

If two vectors in 2D are scalar multiples of each other, their span is only a line; if both are zero, the span consists solely of the zero vector. In general, an arbitrary pair of non‑parallel vectors in 2D spans the whole plane.

When a vector in a set can be expressed as a linear combination of the others, that vector is **redundant** and the set is **linearly dependent**; removing it does not change the span. Conversely, if every vector contributes uniquely to the span, the set is **linearly independent**.


> [!NOTE] Definition of basis
>  the basis of a vector space is a set of linearly independent vectors that span the full space.

## Video 3 - Linear transformation and matrices

The word “transformation” simply denotes a function, it maps an input vector to an output vector.  

So why use “transformation” instead of “function”? The term suggests a movement of input vectors to corresponding output vectors. In a point representation, we can view the transformation as moving all points in the space or grid to new positions.

The term “linear” describes a special type of movement. Visually, this means that all lines, not just grid lines, remain straight and do not curve, and the origin stays fixed after the transformation. Another way to think of it is that the grid lines remain parallel and evenly spaced after the transformation.
 
 Numerically, how can we represent this spatial movement? We only need to record where $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$ land after the transformation. All other vectors, linear combinations of $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$, can be deduced from the fact that grid lines remain parallel and equally spaced. Thus, any vector in the original space that is a linear combination of $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$ becomes the same linear combination of the transformed $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$.
 
For example, if $\hat{\mathbf{i}} \mapsto \begin{bmatrix}1\\-2\end{bmatrix}$ and $\hat{\mathbf{j}} \mapsto \begin{bmatrix}3\\0\end{bmatrix}$, then any vector $\begin{bmatrix}x\\y\end{bmatrix}$ transforms as:

$$
\begin{bmatrix}x'\\y'\end{bmatrix}
= x\begin{bmatrix}1\\-2\end{bmatrix}
+ y\begin{bmatrix}3\\0\end{bmatrix}
= \begin{bmatrix}x+3y\\-2x+0y\end{bmatrix}
$$

A 2D transformation is completely described by just four numbers. We can pack these four numbers in a 2x2 grid, also known as a 2x2 matrix. 

The matrix $\begin{bmatrix}a & c\\b & d\end{bmatrix}$ stores four numbers: its first column, $\begin{bmatrix}a\\b\end{bmatrix}$, represents where $\hat{\mathbf{i}}$ lands, and its second column, $\begin{bmatrix}c\\d\end{bmatrix}$, represents where $\hat{\mathbf{j}}$ lands.

For example, if $\hat{\mathbf{i}}$ maps to $\begin{bmatrix}3\\-2\end{bmatrix}$ and $\hat{\mathbf{j}}$ maps to $\begin{bmatrix}2\\1\end{bmatrix}$, then the vector $\begin{bmatrix}5\\7\end{bmatrix}$ transforms to:

$$
5\begin{bmatrix}3\\-2\end{bmatrix}
+ 7\begin{bmatrix}2\\1\end{bmatrix}
= \begin{bmatrix}29\\-3\end{bmatrix}
$$

In the general case, if $\hat{\mathbf{i}}$ maps to $\begin{bmatrix}a\\b\end{bmatrix}$ and $\hat{\mathbf{j}}$ maps to $\begin{bmatrix}c\\d\end{bmatrix}$, then an arbitrary vector $\begin{bmatrix}x\\y\end{bmatrix}$ transforms as:

$$
x\begin{bmatrix}a\\b\end{bmatrix}
+ y\begin{bmatrix}c\\d\end{bmatrix}
= \begin{bmatrix}ax+cy\\bx+dy\end{bmatrix}
= \begin{bmatrix}a & c\\b & d\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
$$

This last expression **defines** matrix-vector multiplication.

After a transformation, if the vectors that $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$ map to are linearly dependent [one scaled version of another], then the linear transformation collapses the 2‑D space onto a line.