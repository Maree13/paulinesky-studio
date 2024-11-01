import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error">
      <h1 className="error-title">Promiňte!</h1>
      <p>
        <strong>Error 404.</strong> Stránku kterou hledáte jsme nenašli...
      </p>
      <p className="error-link-paragraph">
        <Link className="error-link" to="/">
          Mrkněte sem!
        </Link>
      </p>
    </section>
  );
};

export default Error;
