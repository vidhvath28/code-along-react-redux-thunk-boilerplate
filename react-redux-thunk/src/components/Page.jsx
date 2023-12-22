import {fetchUsers} from "./Action";
import { useDispatch,useSelector } from "react-redux";

function PageBody() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const handleClick=()=>{
        dispatch(fetchUsers())
        const fetchBtn=document.getElementById('fetchBtn')
        fetchBtn.style.display="none"
    }

  return (
    <div>
      <button id="fetchBtn" onClick={handleClick}>Fetch Data</button>
      {users.map((user) => (
        <>
            <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div><hr/>
        </>
      ))}
    </div>
  )
}

export default PageBody;