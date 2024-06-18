
import Do from './Dash.module.css';
import { Link } from 'react-router-dom';
import Tableadmin from '../AdminTable/Tableadmin';
import {Home,BusFront,DiamondPlus,Phone,FilePlus2,LogOut} from 'lucide-react'
function Dash() {
  return (
    <div>
      <div className={Do.main}>
        <div className={Do.side}>
          <h1>Admin <span>Panel</span></h1>
          <div className={Do.main12}>
          <div className={Do.lk1}>
             <Home color="white"/>
             <Link to="/dashboard" className={Do.lk}>Home</Link>
          </div>
          <div className={Do.lk1}>
            <BusFront color='white' />
             <Link className={Do.lk} to='#'>Vehicle Details</Link>
          </div>
          <div className={Do.lk1}>
            <DiamondPlus color='white'/>
             <Link className={Do.lk} to='/addinfo'>Add New Vehicles</Link>
          </div>
          <div className={Do.lk1}>
            <FilePlus2 color='white'/>
             <Link className={Do.lk} to='#'>Vehicle Registration</Link>
          </div>
          <div className={Do.lk1}>
            <Phone color='white'/>
             <Link className={Do.lk} to='https://calibertech.netlify.app/'>Contact Us</Link>
          </div>
          <div className={Do.lk1}>
            <LogOut color='white'/>
             <Link className={Do.lk} to='/'>Sign Out</Link>
          </div>
          </div>
        </div>
        <div className={Do.main1}>
           <div className={Do.nave}>
            <div className={Do.nave1}>
              <h1>Vehicle Managment</h1>
              <p>Manage Vehicle</p>
            </div>
            <div className={Do.nave2}>
              <p>College - <span>Vehicle Management</span></p>
            </div>
           </div>
           <div className={Do.tb}>
            <Tableadmin/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Dash
