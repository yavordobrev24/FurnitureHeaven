import { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header(props) {
  const { isAuthenticated, cart, isAdmin } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link to="/">FurnitureHeaven</Link>
        </div>
        <div className={styles.links}>
          {isAuthenticated && isAdmin && (
            <Link to="/add-product">Add Product</Link>
          )}
          
            <div className={styles.cart}>
              <Link to="/shopping-cart">
                {cart?.length > 0 ? cart.length : 0}
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          
          <div className={styles.dropdown}>
            <i className="fas fa-user"></i>
            <div className={styles.menu}>
              {!isAuthenticated && (
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
              {isAuthenticated && <Link to="/logout">Logout</Link>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
