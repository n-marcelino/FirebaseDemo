import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
// styles
import './create.css';

export default function FormArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); // Get the article ID from the URL

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const article = docSnap.data();
          setTitle(article.title);
          setAuthor(article.author);
          setDescription(article.description);
          setIsEditMode(true);
        } else {
          console.log('No such document!');
        }
      };
      fetchArticle();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = { title, author, description };
    const ref = collection(db, 'articles');

    if (isEditMode) {
      const docRef = doc(db, 'articles', id);
      await updateDoc(docRef, article);
    } else {
      await addDoc(ref, article);
    }

    navigate('/');
  };

  return (
    <div className="create">
      <h2 className="page-title">{isEditMode ? 'Edit Article' : 'Add a New Article'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Author:</span>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  );
}
