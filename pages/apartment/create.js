import React, { Component, useState } from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Paper } from '@mui/material';
import axios from 'axios'
import { CldImage } from 'next-cloudinary';

export default function ApartmentForm(){
    const router = useRouter();

    const [description,setDescription] = useState('test desc')
    const [numberOfBaths,setNumberOfBaths] = useState(2)
    const [numberOfBeds,setNumberOfBeds] = useState(3)
    const [price,setPrice] = useState(123)
    const [address,setAddress] = useState('80003 springyy')
    const [squareFeet,setSquareFeet] = useState(333)
    const [startDate,setStartDate] = useState()
    const [endDate,setEndDate] = useState()
    const [deposit,setDeposit] = useState(999)
    const [laundry,setLaundry] = useState(false)
    const [dishwasher,setDishwasher] = useState(false)
    const [television,setTelevision] = useState(false)
    const [internet,setInternet] = useState(false)
    const [petFriendly,setPetFriendly] = useState(false)
    const [elevator,setElevator] = useState(false)
    const [parking,setParking] = useState(false)
    const [otherInfo,setOtherInfo] = useState('')
    const [images,setImages] = useState('img1,img5,img10')
    const [img1,setImg1] = useState()
    const [img2,setImg2] = useState()
    const [img3,setImg3] = useState()
    const [img4,setImg4] = useState()
    const [img5,setImg5] = useState()

    const uploadFile = async (file, setImg) => {
        console.log("In upload file")
        console.log("imageFiles")
        console.log(file)
        // for (const file of imageFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'dlxlbcph');
        const data = await axios.post('https://api.cloudinary.com/v1_1/dtmovegrd/image/upload', formData)
        .then(r => {
            const url = r.data["secure_url"]
            console.log("url: "+url)
            setImg(url)
        })
        // console.log("data")
        // console.log(data)
        // }
        // setImg(data.secure_url)

    }

    const handleButtonClick = async() => {
        console.log("handleButtonClickInterested called")
        let data = {}

        data['description'] = description
        data['numberOfBaths'] = numberOfBaths
        data['numberOfBeds'] = numberOfBeds
        data['price'] = price
        data['address'] = address
        data['squareFeet'] = squareFeet
        data['startDate'] = startDate
        data['endDate'] = endDate
        data['deposit'] = deposit
        data['laundry'] = laundry
        data['dishwasher'] = dishwasher
        data['television'] = television
        data['internet'] = internet
        data['petFriendly'] = petFriendly
        data['elevator'] = elevator
        data['parking'] = parking
        data['otherInfo'] = otherInfo
        data['photos'] = [img1,img2,img3,img4,img5]//images.split(",")
        // hardcode
        data['ownerID'] = '6382b6a5937aeccafe208b74'

        console.log("data")
        console.log(data)
      const result = await axios.post(`${baseUrl}/apartment`,data)
      console.log("result from ")
      console.log(result)
      alert(result.data.message)
      if(result.status == 201){
        // Redirect to apartment page
        router.push("/apartment/"+result.data.data._id)
      }
      else{
        alert("Error submitting form")
      }
    }
    
    return (
        <Container style={{ display:"flex", alignItems:"center", flexDirection:"column",  }}>
            <h1 className='apartmentTitle'>Create apartment Form</h1>
            <br></br>

            <Paper elevation={2}>
                <TextField value={numberOfBeds} onChange={(e) => setNumberOfBeds(e.target.value)} style={{ padding:"10px" }} id="outlined-basic" label="Number of beds" variant="outlined" type="number" />
                <TextField value={numberOfBaths} onChange={(e) => setNumberOfBaths(e.target.value)} style={{ padding:"10px" }} id="outlined-basic" label="Number of baths" variant="outlined" type="number" />
                <br></br>
                <TextField value={price} onChange={(e) => setPrice(e.target.value)} style={{ padding:"10px", width:"100%" }} id="outlined-basic" label="Price ($)" variant="outlined" type="number" />
                <br></br>
                <TextField value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} style={{ padding:"10px" }} id="outlined-basic" label="Square feet" variant="outlined" type="number" />
                <TextField value={deposit} onChange={(e) => setDeposit(e.target.value)} style={{ padding:"10px" }} id="outlined-basic" label="Deposit ($)" variant="outlined" type="number" />
                <br></br>
                <TextField value={address} onChange={(e) => setAddress(e.target.value)} style={{ padding:"10px", width:"100%" }} id="outlined-basic" label="Address" variant="outlined" />
                <br></br>
                <TextField value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding:"10px", width:"100%" }} id="outlined-basic" label="Description" variant="outlined"/>
                <br></br>
                <TextField value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ padding:"10px", width: "50%" }} id="outlined-basic" label="Start Date" variant="outlined" type="date" />
                <TextField value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ padding:"10px", width: "50%" }} id="outlined-basic" label="End Date" variant="outlined" type="date" />
                <br></br>
                <TextField value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} style={{ padding:"10px", width:"100%" }} id="outlined-basic" label="Other Info" variant="outlined"/>
                <br></br>
                
                <h2 style={{ padding:"5px",fontWeight:"bold" }}>Amenities</h2>
                <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <FormGroup style={{ padding:"10px" }}>
                        <FormControlLabel control={<Checkbox checked={laundry} onChange={(e) => setLaundry(!laundry)} />} label="Laundry" />
                        <FormControlLabel control={<Checkbox checked={dishwasher} onChange={(e) => setDishwasher(!dishwasher)} />} label="Dishwasher" />
                        <FormControlLabel control={<Checkbox checked={television} onChange={(e) => setTelevision(!television)} />} label="Television" />
                        <FormControlLabel control={<Checkbox checked={internet} />} onChange={(e) => setInternet(!internet)} label="Internet" />
                    </FormGroup>
                    <FormGroup style={{ padding:"10px" }}>
                        <FormControlLabel control={<Checkbox checked={petFriendly} onChange={(e) => setPetFriendly(!petFriendly)} />} label="Pet friendly" />
                        <FormControlLabel control={<Checkbox checked={elevator} />} onChange={(e) => setElevator(!elevator)} label="Elevator" />
                        <FormControlLabel control={<Checkbox checked={parking} />} onChange={(e) => setParking(!parking)} label="Parking" />
                    </FormGroup>
                </div>

                {/* <TextField value={images} onChange={(e) => setImages(e.target.value)} style={{ padding:"10px", width:"100%" }} id="outlined-basic" label="Image urls (',' separated)" variant="outlined"/> */}
                

                {/* Image 1 */}
                <div style={{padding:"10px"}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file1"
                        type="file"
                        onChange={(e) => {
                            console.log("calling upload file")
                            uploadFile(e.target.files[0], setImg1)
                        }}
                    />
                    <label htmlFor="raised-button-file1">
                        <Button variant="contained" component="span">
                            Image 1 
                        </Button>
                        {img1 && <a style={{color:"blue"}} target="_blank" href={img1}>Image 1 link</a>}
                    </label> 
                </div>

                {/* Image 2 */}
                <div style={{padding:"10px"}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file2"
                        type="file"
                        onChange={(e) => {
                            console.log("calling upload file")
                            uploadFile(e.target.files[0], setImg2)
                        }}
                    />
                    <label htmlFor="raised-button-file2">
                        <Button variant="contained" component="span">
                            Image 2
                        </Button>
                        {img2 && <a style={{color:"blue"}} target="_blank" href={img2}>Image 2 link</a>}
                    </label> 
                </div>

                {/* Image 3 */}
                <div style={{padding:"10px"}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file3"
                        type="file"
                        onChange={(e) => {
                            console.log("calling upload file")
                            uploadFile(e.target.files[0], setImg3)
                        }}
                    />
                    <label htmlFor="raised-button-file3">
                        <Button variant="contained" component="span">
                            Image 3
                        </Button>
                        {img3 && <a style={{color:"blue"}} target="_blank" href={img3}>Image 3 link</a>}
                    </label> 
                </div>

                {/* Image 4 */}
                <div style={{padding:"10px"}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file4"
                        type="file"
                        onChange={(e) => {
                            console.log("calling upload file")
                            uploadFile(e.target.files[0], setImg4)
                        }}
                    />
                    <label htmlFor="raised-button-file4">
                        <Button variant="contained" component="span">
                            Image 4
                        </Button>
                        {img4 && <a style={{color:"blue"}} target="_blank" href={img4}>Image 4 link</a>}
                    </label> 
                </div>

                {/* Image 5 */}
                <div style={{padding:"10px"}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={(e) => {
                            console.log("calling upload file")
                            uploadFile(e.target.files[0], setImg5)
                        }}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span">
                            Image 5
                        </Button>
                        {img5 && <a style={{color:"blue"}} target="_blank" href={img5}>Image 5 link</a>}
                    </label> 
                </div>




                

                
                

                <div className='centerHorizontal'>
                    <Button onClick={handleButtonClick} style={{ width:"30%", margin:"10px" }} variant="contained">Submit</Button>
                </div>



            </Paper>
            
        </Container>
            
    )
}