import Button from "../components/Button";

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__description">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}

export default NotFound;