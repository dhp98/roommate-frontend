import React, { Component } from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
// import '../styles/globals.css';
import HotelIcon from '@mui/icons-material/Hotel';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Grid, Paper, TableContainer } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import apartment from '../../../backend/models/apartment';
// import ImgCarousel from '../components/ImgCarousel';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import LiquorIcon from '@mui/icons-material/Liquor';

export default class ProfileDetails extends Component {
  render () {
      const profile = this.props.data
      return (
        <>
        {/* {JSON.stringify(profile)} */}
        <Paper className='p-4' elevation={2}>
        <Container className="profile">
          <div className='profile_section1'>
            <img 
              src="https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg"
              className='imgCircle' 
            />
          </div>
          <div className='profile_section2'>
            <h1 className='profile_name'>Rugved Bongale</h1>

            <div className='profile_fields'>
              {[1,2,3,4,5,6,7].map(f => {
                return <Paper className='profile_field' elevation={3}>
                  {/* <div> */}
                    <div>
                      <LiquorIcon className='profile_field_icon' />
                    </div>
                    <div className='profile_field_right'>
                      <h2 className='profile_field_title'>Drinker</h2> 
                      <p>OK</p>
                    </div>
                  {/* </div> */}
                </Paper>

              })}
            </div>
          </div>
        </Container>
        </Paper>
        
        
        </>
      )


        return (
          <div>
            <div>
              {console.log(this.props.data)}
              <center>
                
                <Paper style={{ padding:"20px" }} variant="outlined">
                  <h2 className='apartmentTitle'>User Information</h2>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{width: 15 + '%', borderRadius: 1000}}></img>
                {this.props.data.userID!=null && <>
                  Name: {this.props.data.userID.firstName} {this.props.data.userID.lastName}
                  <br/>
                </>}

                {this.props.data.foodPreference!=null && <>
                  Food Preference: {this.props.data.foodPreference}
                  <br/>
                </>}

               {this.props.data.studyProgram!=null && <>
                  Study Program: {this.props.data.studyProgram}
                  <br/>
                </>}

                {this.props.data.minAge!=null && <>
                  Minimum Age: {this.props.data.minAge}
                  <br/>
                </>}

                {this.props.data.maxAge!=null && <>
                  Maximum Age: {this.props.data.maxAge}
                  <br/>
                </>}

                {this.props.data.drinking==false && <>
                  Drinking: Not fine with it.
                  <br/>
                </>}

                {this.props.data.drinking==true && <>
                  Drinking: Fine with it.
                  <br/>
                </>}

                {this.props.data.smoking!=false && <>
                  Smoking: Not fine with it.
                  <br/>
                </>}

                {this.props.data.smoking!=true && <>
                  Smoking: Fine with it.
                  <br/>
                </>}

                {this.props.data.cookingSkills!=null && <>
                  Cooking Skills: {this.props.data.cookingSkills}
                  <br/>
                </>}

                {this.props.data.nationality!=null && <>
                  Nationality: {this.props.data.nationality}
                  <br/>
                </>}

               {this.props.data.otherInfo!=null && <>
                  Other Information: {this.props.data.otherInfo}
                  <br/>
                </>}
              </Paper>
              </center>
            </div>
          </div>
        )
    }
}

export async function getServerSideProps({ params: { id } }) {
  console.log("In profile page")
  console.log(id)
  const data = await fetchApi(`${baseUrl}/profile?where={"_id": "${id}"}`);
  console.log("Profile data for _id")
  console.log(id)
  console.log(data)
  return {
    props: {
      data: data.data[0],
    },
  };
}