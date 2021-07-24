import './Header.scss';
import { Phone, Email, Business } from '@material-ui/icons';

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-left-container">
        <div>
          <Phone /> <span>076 526 4304</span>
        </div>
        <div>
          <Email /> <span>laundryshop59@gmail.com</span>
        </div>
      </div>
      <div className="Header-right-container">
        <Business /> <span>Avenue Leopold De Reynier 17, 1854 Leysin</span>
      </div>
    </div>
  );
}
