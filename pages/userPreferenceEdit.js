import { baseUrl, fetchApi } from '../utils/fetchApi'

export default function PageWithJSbasedForm({profile, userID}) {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      const languagesSelected = Array.from(event.target.languages, option => option).filter(option => option.selected).map(option => option.value)

      // console.log(event.target)
      profile = profile[0]
      // Get data from the form.

      // const userID = "6382b6a5937aeccafe208b74";
  

      if (event.target.DOB.value.length) {
        profile['DOB'] = event.target.DOB.value
      }
      if (event.target.foodPreference.value.length) {
        profile['foodPreference'] = event.target.foodPreference.value
      }
      if (event.target.studyProgram.value.length) {
        profile['studyProgram'] = event.target.studyProgram.value
      }
      if (event.target.drinking.value.length) {
        profile['drinking'] = event.target.drinking.value
      }
      if (event.target.smoking.value.length) {
        profile['smoking'] = event.target.smoking.value
      }
      if (languagesSelected.length) {
        profile['languages'] = languagesSelected
      }
      if (event.target.cookingSkills.value.length) {
        profile['cookingSkills'] = event.target.cookingSkills.value
      }
      if (event.target.nationality.value.length) {
        profile['nationality'] = event.target.nationality.value
      }
  
      // Send the data to the server in JSON format.
      // profile['updatedAt'] = Date.now()
      const JSONdata = JSON.stringify(profile)
  
      console.log(JSONdata)
      // API endpoint where we send form data.
      const endpoint = `${process.env.PRIVATE_API_URL}/api/profile/${userID}`
  
      // // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'PUT',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      console.log(result)
    //   alert(`Is this your full name: ${result.data}`)
        alert("Profile Updated!")
    }

    const h1Style={
      fontSize: '4vh',
      fontWeight: 'bold',
      marginBottom: '2vh',
    };

    const formContainerStyle={
      position: 'relative',
      display: 'inline-block',
      left: '50%',
      transform: 'translateX(-50%)'
    };

    const spanStyle={
      textAlign: 'left',
      float: 'left',
      fontWeight: 'bold',
      fontSize: '1.68vh',
      textShadow: '1px 1px 1px #fff',
      width: '100%',
      marginBottom: '0.4vh'
    };

    const labelStyle={
      display:'block',
    };

    const inputStyle={
      background: 'rgba(255,255,255,.1)',
      border: 'none',
      borderRadius: '0.4vh',
      fontSize: '1.5vh',
      margin: '0',
      outline: '0',
      padding: '1vh',
      width: '100%',
      boxSizing: 'border-box',
      webkitBoxSizing: 'border-box',
      mozBoxSizing: 'border-box', 
      backgroundColor: '#e8eeef',
      color:'#8a97a0',
      WebkitBoxShadow: '0 1px 0 rgba(0,0,0,0.03) inset',
      boxShadow:'0 1px 0 rgba(0,0,0,0.03) inset',
      marginBottom: '2vh',
    };

    const buttonStyle={
      position: 'relative',
      display: 'block',
      color: '#FFF',
      margin: '0 auto',
      background: '#1976d2',
      fontSize: '18px',
      textAlign: 'center',
      fontStyle: 'normal',
      width: '70%',
      borderRadius: '3px',
      marginBottom:'10px',
    }

    console.log(profile[0])

    return (
      // We pass the event to the handleSubmit() function on submit.
      <div style={formContainerStyle}>
      <center><h1 style={h1Style}>User Details:</h1></center>
      <form onSubmit={handleSubmit}>
        <label for='DOB' style={labelStyle}><span style={spanStyle}>Date of Birth: </span></label>
        <input type="date" id="DOB" name="DOB" style={inputStyle}  defaultValue={profile[0].DOB.slice(0, 10)}/>
        <br/>
        <label for='studyProgram'><span style={spanStyle}>Study Program: </span></label>
        <select id="studyProgram" name="studyProgram" style={inputStyle} defaultValue={profile[0].studyProgram}>
            <option value="" disabled selected>Prefer not to say</option>
            <option value="MSCS">MSCS</option>
            <option value="MCS">MCS</option>
            <option value="Masters Mech">Masters Mech</option>
            <option value="Masters Electrical">Masters Electrical</option>
          </select>
        <br/>
        <label for="foodPreference"><span style={spanStyle}>Food Preference: </span></label>
          <select id="foodPreference" name="foodPreference" style={inputStyle}  defaultValue={profile[0].foodPreference}>
            <option value="" disabled selected>Prefer not to say</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
          <br/>
        
          <label for="drinking"><span style={spanStyle} >Drinking: </span></label>
          <select id="drinking" name="drinking" placeholder="drinking" style={inputStyle} defaultValue={profile[0].drinking}>
          <option value="" disabled selected>Prefer not to say</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br/>

          <label for="smoking"><span style={spanStyle} >Smoking: </span></label>
          <select id="smoking" name="smoking" style={inputStyle} defaultValue={profile[0].smoking}>
           <option value="" disabled selected>Prefer not to say</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br/>

          <label for="langauges"><span style={spanStyle} >Languages: </span></label>
          <select id="languages" name="languages" multiple size='2' style={inputStyle} defaultValue={profile[0].languages}>
          <option value="" disabled selected>Prefer not to say</option>
            <option value='Hindi'>Hindi</option>
            <option value="Gujrati">Gujrati</option>
            <option value="English">English</option>
            <option value="Mandrin">Mandrin</option>
            <option value="Marathi">Marathi</option>
          </select>
          <br/>

          <label for="cookingSkills"><span style={spanStyle} >Cooking Skills: </span></label>
          <select id="cookingSkills" name="cookingSkills" style={inputStyle} defaultValue={profile[0].cookingSkills}>
           <option value="" disabled selected>Prefer not to say</option>
            <option value="Amateur">Amateur</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <br/>

          <label for='nationality'><span style={spanStyle} >Nationality: </span></label>
          <select id="nationality" name="nationality" style={inputStyle} defaultValue={profile[0].nationality}>
           <option value="" disabled selected>Prefer not to say</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Other">Other</option>
          </select>
          <br/>

  
        <center><button type="submit" style={buttonStyle}>Submit</button></center>
      </form>
      </div>
    )
  }



export async function getServerSideProps() {

        // console.log(apartments.data)
        const userID = "6382b6a5937aeccafe208b74"
        const url = `${process.env.PRIVATE_API_URL}/api/profile?where={"userID": "${userID}"}`
        const profile= await fetchApi(`${url}`);
        return {
        props: {
            profile: profile.data,
            userID: userID
        },
        }
}