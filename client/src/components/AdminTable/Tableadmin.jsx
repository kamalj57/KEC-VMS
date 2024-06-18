import  { useState, useEffect } from 'react';
import axios from 'axios';
import To from '../Table/Table.module.css';
import { Toaster, toast } from 'react-hot-toast';
import moment from 'moment'
import {Trash} from 'lucide-react'

function Tableadmin() {
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState({
    driverName: '',
    vehicleNumber: '',
    vehicleType: '',
    vehicleDepartment: ''
  });
  const baseUrl=import.meta.env.VITE_REACT_APP_API;
  useEffect(() => {
    fetchData();
  }, [tableData]);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/v1/businfo`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setTableData(response.data);
        } else {
          console.error('Fetched data is not an array:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY')
}
  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleDeleteRow = async(id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this row?');
    if (shouldDelete) {
      const res= await axios.delete(`${baseUrl}/api/v1/delete/${id}`)
      .then(()=> {
        toast.success('Deleted successfully');
        fetchData();})
      .catch(()=>{
        toast.error("Failed to delete")
      })
     
    }
  };



  const filteredData = tableData.filter((data) => {
    return (
      data.driver_name.toLowerCase().includes(filters.driverName.toLowerCase()) &&
      data.vehicle_number.toLowerCase().includes(filters.vehicleNumber.toLowerCase()) &&
      data.engine_type.toLowerCase().includes(filters.vehicleType.toLowerCase()) &&
      data.department.toLowerCase().includes(filters.vehicleDepartment.toLowerCase())
    );
  });

  return (
    <div>
      <Toaster position='top-right' />
      <div className={To.main1}>
        <input
          type='search'
          className={To.search}
          placeholder='Search Driver Name....'
          value={filters.driverName}
          onChange={(e) => handleFilterChange('driverName', e.target.value)}
        />
        <input
          type='search'
          className={To.search}
          placeholder='Search Vehicle Number....'
          value={filters.vehicleNumber}
          onChange={(e) => handleFilterChange('vehicleNumber', e.target.value)}
        />
        <input
          type='search'
          className={To.search}
          placeholder='Search Vehicle Type....'
          value={filters.vehicleType}
          onChange={(e) => handleFilterChange('vehicleType', e.target.value)}
        />
        <input
          type='search'
          className={To.search}
          placeholder='Search Vehicle Department....'
          value={filters.vehicleDepartment}
          onChange={(e) => handleFilterChange('vehicleDepartment', e.target.value)}
        />
      </div>
      <table className={To.table}>
        <thead>
        <tr>
             <th>ID</th>
             <th>Driver Name</th>
             <th>Vehicle Number</th>
             <th>Vehicle Company</th>
             <th>Engine Type</th>
             <th>Department</th>
             <th>Last Service</th>
             <th>Next Service</th>
             <th>Action</th>
           </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td className={To.column}>{data.id}</td>
              <td className={To.column}>{data.driver_name}</td>
              <td className={To.column}>{data.vehicle_number}</td>
              <td className={To.column}>{data.vehicle_company}</td>
              <td className={To.column}>{data.engine_type}</td>
              <td className={To.column}>{data.department}</td>
              <td className={To.column}>{dateFormat(data.last_service)}</td>
              <td className={To.column}>{dateFormat(data.next_service)}</td>
              <td className={To.column}>
                <div className={To.icons1}>
                 <Trash onClick={() => handleDeleteRow(data._id)} size={24} color='red'/>  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tableadmin;
