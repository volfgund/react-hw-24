import React, { useState, useEffect } from 'react';

const Example = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    getAlbums();
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>List of Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>List of Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example;