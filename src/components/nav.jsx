import './nav.css';
import settings_img from '../assets/settings-img.png'
import notif_img from '../assets/notif-img.png'
import notifdot_img from '../assets/notifdot-img.png'
import user_img from '../assets/user-img.png'

function Nav(){
  return(
     <div className="nav">
        <div className="nav-sub-1">
            <div>Demo Company</div>
            <p>Home</p>
            <p>About</p>
            <p>Work</p>
            <p>Pricing</p>
            <p>Blog</p>
        </div>
        <div className="nav-sub-2">
            <div>
                <img src={settings_img} alt="not found" />
            </div>
            <div>
                <img src={notif_img} alt="not found" />
                <img src={notifdot_img} alt="not found" className='notif-dot'/>
            </div>
            <div>
                <img src={user_img} alt="not found" />
            </div>
        </div>
     </div>
  )
}

export default Nav;