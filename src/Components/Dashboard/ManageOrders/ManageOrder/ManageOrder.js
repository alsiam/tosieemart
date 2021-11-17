import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import swal from 'sweetalert';

const ManageOrder = ({ orders }) => {

    const { productName, name, address, number, status, date, _id } = orders;

    // handle delete here 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want DELETE');
        if (proceed) {
            fetch(`https://pure-falls-66123.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                haeders: { 'content-type': 'application/json' }
            })
                .then(response => response.json())
                .then(result => {
                    if (result.deletedCount) {
                        swal({
                            title: 'Order Deleted!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                })
        }
    }

    // handle status here 
    const handleStatus = id => {
        fetch(`https://pure-falls-66123.herokuapp.com/order/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount) {
                    swal({
                        title: 'Order Updated!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                setTimeout(() => {
                    window.location.reload();
                }, 1200);
            })
    }

    return (
        <>
            <TableRow>
                <TableCell align="left">{productName}</TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{address}</TableCell>
                <TableCell align="left">{number}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="center"> <Button onClick={() => handleDelete(_id)} sx={{ color: 'error.main', bgcolor: 'secondary.main', mx: 1 }} ><DeleteIcon /> </Button>
                    {status === 'shipped' ? '' : <Button onClick={() => handleStatus(_id)} sx={{ color: 'error.main', bgcolor: 'secondary.main' }} ><BookmarkAddIcon /> </Button>}
                </TableCell>
            </TableRow >
        </>
    );
};

export default ManageOrder;