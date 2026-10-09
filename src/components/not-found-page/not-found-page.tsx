import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage() {
  return (
    <div className="page page--gray not-found-page">
      <main>
        <h1>404 Not Found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
