import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/list">
        <button>Fetch Data</button>
      </Link>
    </div>
  );
}