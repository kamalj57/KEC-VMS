
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import './Driver.css';

function Driver() {
  return (
    <div>
      <Navbar/>
      <div className="driver">
        <h1>Access the driver details here</h1>
        <div className='Tbs'>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Driver