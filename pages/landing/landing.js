import React, { Component } from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Container from '@mui/material/Container';
// import './styles/globals.css';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LiquorIcon from '@mui/icons-material/Liquor';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Grid, Paper } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import apartment from '../../../backend/models/apartment';
// import ImgCarousel from '../components/ImgCarousel';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import { experimentalStyled as styled } from '@mui/material/styles';
// import background from 'C:/Users/hp/Desktop/409Project/cs409project/images/bg.jpg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ApartmentIcon from '@mui/icons-material/Apartment';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

// import {Box} from '@mui/material/Box';

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${background})`
//     }
// };

export default function Landing() {
    return (
        <Container>

            <div className='section1'>
                            <h2 className='apartmentTitle' style={{ textAlign: "center" }}>Want to sublease your apartment?  </h2><br></br>
                <div style={{ textAlign: "center" }}><ApartmentIcon style={{ fontSize: "60px" }} /></div>
                <div style={{ textAlign: "center" }}>
                    <Button variant="contained" style={{ fontSize: "18px", marginTop: "30px" }} size="medium">Let's Go</Button>
                </div>
            </div>

            {/* <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems:"center"}}> */}

            <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
                <div style={{ backgroundColor: "#C871FD", flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "400px", minWidth: "300px", maxWidth: "100%", }}>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontWeight: "600" }}>Introducing</h2>
                        <h1 style={{ fontWeight: "900", fontSize: "32px" }}>ROOMMATE</h1>
                        <h2 style={{ fontWeight: "900", fontSize: "32px" }}>FINDER</h2><br></br>
                        <Button variant="contained" style={{ fontSize: "18px", marginTop: "30px" }} size="medium">FIND NOW</Button>
                    </div>
                </div>
                <div style={{ backgroundColor: "", height: "400px", minWidth: "300px", maxWidth: "100%", flex: 1 }}>
                    {/* <img style={{ height: "100%", width: "100%", minWidth: "300px", maxWidth: "100%" }} src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7" /> */}

                    <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </div>
            </div>
            <Paper style={{ padding:"40px",backgroundColor:"#D0CCDA", fontSize:"18px",borderRadius:"14px", justifyContent:"end", boxShadow:"40px", fontFamily:"sans-serif"}} variant="outlined">
            <h1 style={{ fontWeight: "900", fontSize: "32px",textAlign:"center",padding:"20px"}}>Welcome to LeaseMyPlace</h1> 
            At LeaseMyPlace we provide quality, comfortable, and affordable living options for every resident! Our 24-hour maintenance staff, team of student leasing agents, and 
            local, family owned history are just a few of the things that make living with us a great experience.  
            understanding that is unmatched. With over 40 years of experience in the Champaign-Urbana area, we know how incredible this town and this school are. We strive to 
            provide quality customer service throughout your experience as a future, current, or past resident.
            </Paper>
            <div className="footer" style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
                <div className="footer__container" style={{ backgroundColor: "black", flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minWidth: "300px", maxWidth: "100%", }}>

                        <h2 style={{ fontWeight: "600", display: "flex", color:"white"}}>Follow us</h2>
                        <h1 style={{display:"flex"}}><InstagramIcon style={{fontSize:"30px", color:"white"}}/></h1>
                        <h1 style={{display:"flex"}}><FacebookOutlinedIcon style={{fontSize:"30px", color:"white"}}/></h1><br></br><br></br>
                        <p style={{textAlign:"center", color:"white", padding:"15px"}}>Contact: +1(447)251-4879</p>
                </div>
                <div className="footer__copyright" style={{ backgroundColor: "black", minWidth: "300px", maxWidth: "100%", flex: 1 }}>
                    {/* <img style={{ height: "100%", width: "100%", minWidth: "300px", maxWidth: "100%" }} src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7" /> */}

                    <p style={{textAlign:"center", color:"white", padding:"10px"}}><b>Copyright &copy; 2022 LeaseMyPlace| All Rights Reserved.</b></p>
                    {/* <p style={{textAlign:"center", color:"white"}}>Address: 1201 W. Green St.</p> */}

                </div>
            </div>
        </Container>
    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];