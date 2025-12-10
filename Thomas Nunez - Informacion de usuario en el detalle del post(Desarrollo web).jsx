useEffect(() => {
  fetch(`http://localhost:3000/posts/${id}?_expand=user`)
    .then(res => res.json())
    .then(data => setPost(data));
}, [id]);

<Render>
  <h2>{post.title}</h2>
<p>{post.body}</p>
<p><strong>Autor:</strong> {post.user?.name}</p>
<p><strong>Email:</strong> {post.user?.email}</p>
</Render>