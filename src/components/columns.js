// import {format} from 'data-fns'
import { FaEdit, FaTrash } from "react-icons/fa";
export const COLUMNS =[
    {
        Header :'Id',
        accessor:'id',
    },
    {
        Header :'First Name',
        accessor:'firstName',
    },
    {
        Header :'Last Name',
        accessor:'lastName',
    },
    {
        Header :'Avatar',
        accessor:'imageUrl',
        Cell: ({cell}) => (
            <img
              src={cell.value}
              width={60}
              alt='User'
            />
          )
    },
    {
        Header :'Email Id',
        accessor:'email',
    },
    {
        Header :'Number',
        accessor:'contactNumber',
    },
    {
        Header :'Age',
        accessor:'age',
    },
    {
        Header :'Date Of Birth',
        accessor:'dob',
        // Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy')},
    },
    {
        Header :'Salary',
        accessor:'salary',
    },
    {
        Header :'Address',
        accessor:'address',
    },
    {
        Header :'Edit',
        id: "edit",
        accessor: (row) => (
          <FaEdit className="icon" onClick={() => handleEdit(row.id)} />
        )
    },
    {
        Header :'Delete',
        id: "delete",
        accessor: (row) => (
          <FaTrash className="icon" onClick={() => handleDelete(row.id)} />
        )
    },

]
const handleEdit = (data) => {
    alert(`edit ${data}`);

  };

  const handleDelete = (data) => {
    alert(`delete ${data}`);
  };
