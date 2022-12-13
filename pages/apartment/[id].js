import React, { Component } from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Container from '@mui/material/Container';
// import '../styles/globals.css';
import HotelIcon from '@mui/icons-material/Hotel';
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
import axios from 'axios'
import MyCarousel from '../../components/Carousel';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ApartmentDetails({apartmentDetails, interestedApartmentObjs, currUserInterested, currentUserID}){
    const router = useRouter();

    const [interestedUsers, setInterestedUsers] = useState(interestedApartmentObjs.data)
    const [interested, setInterested] = useState(currUserInterested)

    const handleButtonClickInterested = async() => {
      console.log("handleButtonClickInterested called")
      // hardcoded user id here 
      const data = {
        userID: currentUserID,
        apartmentID: apartmentDetails._id
      }
      const result = await axios.post(`${baseUrl}/interestedapartment`,data);
      alert(result.data.message)
      setInterested(result.data.data.interested)
    }

    const basicDetails = [
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.price,
            "description": "Price"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.numberOfBaths,
            "description": "Baths"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.numberOfBeds,
            "description": "Beds"
        },
        {
          "icon": <HotelIcon />,
          "val": apartmentDetails.squareFeet,
          "description": "Sq Feet"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.deposit,
            "description": "Deposit"
        },
        
    ]

    let amenities = [
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.laundry == true ? "Yes" : "No",
            "description": "Laundry"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.dishwasher == true ? "Yes" : "No",
            "description": "Dishwasher"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.television == true ? "Yes" : "No",
            "description": "Television"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.internet == true ? "Yes" : "No",
            "description": "Internet"
        },
        {
            "icon": <HotelIcon />,
            "val": apartmentDetails.elevator == true ? "Yes" : "No",
            "description": "Elevator"
        },
        
    ]
    
    
    
    return (
        <Container>
            
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
              <h2 className='apartmentTitle'>{apartmentDetails.address}</h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <IosShareIcon /> Share
                    </div>
                    <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            
                            {interested 
                            ? <><FavoriteIcon onClick={handleButtonClickInterested} /> Interested</> 
                            : <><FavoriteBorderIcon onClick={handleButtonClickInterested} /> Not Interested</>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display:"flex", flexWrap: "wrap" }}>
                {basicDetails.map(({icon, description, val}) => {
                    return <Paper elevation={3} className={"offerRow"} style={{ flexDirection:"column", margin:"10px" }}>
                        <div className={"smallIcon"}>
                            {icon}
                            {description}
                            <div style={{padding:"2px"}}>
                                <b>{val}</b>
                            </div>
                        </div>
                            
                    </Paper>
                })}
            </div>
            

            {/* <ImgCarousel /> */}
            <MyCarousel imgList={apartmentDetails.photos} />

            

            <br></br>
            <div>
              <Paper style={{ padding:"20px" }} variant="outlined">
                <h2 className='apartmentTitle'>About Apartment</h2>
                  <p>{apartmentDetails.description}</p>
                  <br></br>
                  <p>{apartmentDetails.otherInfo}</p>

                  <div className="amenitiesContainer">
                    {amenities.map(({ icon, description, val }) => {
                      return <div>
                          {/* <div className='amenity'>{description}</div> */}
                          
                          {val == "Yes" ? <Chip
                            label={description}
                            onClick={()=>{}}
                            onDelete={()=>{}}
                            deleteIcon={<DoneIcon />}
                            className="amenity_yes"
                          /> : 
                          <Chip
                            label={description}
                            onClick={()=>{}}
                            onDelete={()=>{}}
                            deleteIcon={<CloseIcon />}
                            className="amenity_no"
                          />
                          }
                        </div>
                    })}
                  </div>

              </Paper>
            </div>
            
            <br></br>
            <br></br>
            {/* <hr></hr> */}

            
            <div className={"offerRow"}>
                <div className={"smallIcon circleBorderThin"} style={{ borderRadius: "50%" }}>
                    <HotelIcon />
                </div>
                <div>
                    <div style={{padding:"5px"}}>
                        Hosted by 
                        <a href={"/profile?id="+apartmentDetails.ownerID._id}>
                          {apartmentDetails.ownerID.firstName + " " + apartmentDetails.ownerID.lastName} 
                        </a>
                        <br></br>    
                        <small style={{ color: "grey" }}>Joined in August 2022</small>
                    </div>
                </div>
            </div>
            
            <div style={{display:"flex"}}>
            <div style={{display: "flex", alignItems:"center"}}>
                <div>
                    <StarIcon />
                </div>
                <div>
                    {'\u00A0'} Reviews
                </div>
            </div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
            <div style={{display: "flex", alignItems:"center"}}>
                <div>
                    <CheckCircleIcon />
                </div>
                <div>
                    {'\u00A0'} Verified
                </div>
            </div>
            </div>

            <div>
                During your stay, <br></br>
                Happy to help at any time. <br></br>
                <br></br>
                <Button href={"/profile/"+apartmentDetails.ownerID._id} variant="outlined">Contact Owner</Button> 
            </div>

            <br></br>
            <Paper style={{ padding:"20px" }} variant="outlined">
              <h2 className='apartmentTitle'>Interested Users</h2>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {interestedUsers && interestedUsers.map((u, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Link href={`/profile/${u.userID._id}`} passHref>
                      <Item>{u.userID.firstName} {u.userID.lastName}</Item>  
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
            
            <br></br><br></br><br></br><br></br><br></br>

        </Container>
    )
}

export async function getServerSideProps(ctx) {
    const id = ctx.params.id;
    const token = ctx.req.cookies.jwt;

    if (!token) {
        return {
          redirect: {
            destination: webRoutes.unauthorized,
            permanent: false,
          },
        };
      }

    
    const apiResponse = await axios.get(`${process.env.PRIVATE_API_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    console.log(apiResponse.data.data);
    // use query to construct url
    let response = await fetchApi(`${baseUrl}/apartment?where={"_id": "${id}"}`);
    console.log(response.message)
    console.log(response.data)

    let interestedApartmentObjs = await axios.get(`${baseUrl}/interestedapartment/${id}`);

    if(!response.data[0].description || response.data[0].description == "") {
      response.data[0].description = "These luxury 4-bedroom 3-bath apartments are located in the heart of campus town just a half block north of Alma Mater. Built in 2019 they feature new plank flooring, cabinets and countertops. These units come fully furnished with in unit washer/dryer, a wall mounted smart TV and equipped with high speed fiber internet. You wont believe the views from the rooftop patio open 24/7 to tenants. Smile Gym & Clubhouse NOW OPEN. Monthly utility and service fee of $165 covers internet, water, sewer, trash service and recycling! No router required! These luxury 4-bedroom 3-bath apartments are located in the heart of campus town just a half block north of Alma Mater. Built in 2019 they feature new plank flooring, cabinets and countertops. These units come fully furnished with in unit washer/dryer, a wall mounted smart TV and equipped with high speed fiber internet. You wont believe the views from the rooftop patio open 24/7 to tenants. Smile Gym & Clubhouse NOW OPEN. Monthly utility and service fee of $165 covers internet, water, sewer, trash service and recycling! No router required! These luxury 4-bedroom 3-bath apartments are located in the heart of campus town just a half block north of Alma Mater. Built in 2019 they feature new plank flooring, cabinets and countertops. These units come fully furnished with in unit washer/dryer, a wall mounted smart TV and equipped with high speed fiber internet. You wont believe the views from the rooftop patio open 24/7 to tenants. Smile Gym & Clubhouse NOW OPEN. Monthly utility and service fee of $165 covers internet, water, sewer, trash service and recycling! No router required! These luxury 4-bedroom 3-bath apartments are located in the heart of campus town just a half block north of Alma Mater. Built in 2019 they feature new plank flooring, cabinets and countertops. These units come fully furnished with in unit washer/dryer, a wall mounted smart TV and equipped with high speed fiber internet. You wont believe the views from the rooftop patio open 24/7 to tenants. Smile Gym & Clubhouse NOW OPEN. Monthly utility and service fee of $165 covers internet, water, sewer, trash service and recycling! No router required! These luxury 4-bedroom 3-bath apartments are located in the heart of campus town just a half block north of Alma Mater. Built in 2019 they feature new plank flooring, cabinets and countertops. These units come fully furnished with in unit washer/dryer, a wall mounted smart TV and equipped with high speed fiber internet. You wont believe the views from the rooftop patio open 24/7 to tenants. Smile Gym & Clubhouse NOW OPEN. Monthly utility and service fee of $165 covers internet, water, sewer, trash service and recycling! No router required!"
    }

    interestedApartmentObjs = interestedApartmentObjs.data
    console.log("interestedApartmentObjs")
    console.log(interestedApartmentObjs)
    // hardcoded user id here 
    let userID = apiResponse.data.data._id;
    let currUserInterested = false
    for(var i=0; i < interestedApartmentObjs.length; i++) {
      if(interestedApartmentObjs[i].userID && interestedApartmentObjs[i].userID._id == userID){
        currUserInterested = true
        break
      }
    }

    return {
        props: {
          apartmentDetails: response.data[0],
          interestedApartmentObjs: interestedApartmentObjs,
          currUserInterested: currUserInterested,
          currentUserID: userID
        },
      };
}