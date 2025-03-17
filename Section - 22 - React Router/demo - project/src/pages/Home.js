import { Link } from 'react-router';


function HomePage() {
  return (
    <>
      <h1>Home page</h1>
			<p>Go to <Link to='/products'>the list of products</Link> </p>
    </>
  );
}

export default HomePage;
