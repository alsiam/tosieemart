import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ products }) => {
    const { img, name, price, description, _id } = products;

    // const history = useHistory();

    // //  handle buy here 
    // const handleBuy = id => {
    //     history.push(`/product/${id}`);
    // }

    return (
        <Grid item xs={12} sm={6} md={2}>
            <Card className="product-card" sx={{ maxWidth: 365, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt="drone image"
                />
                <CardContent sx={{ textAlign: 'start' }}>
                    <Typography gutterBottom variant="h6" component="div" style={{fontSize:15, fontWeight: 500}} >
                    {name.length >= 40 ? (name.substring(0,38)):(name)}...
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {description.length >= 50 ? (description.substring(0,45)):(description)}
                    </Typography>
                    <Typography sx={{ py: 1 }} variant="subtitle1" >
                        Price: {price}$
                    </Typography>

                    <Link to={`/product/${_id}`}> <Button size="small" variant="outlined">Buy Now</Button> </Link>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Product;