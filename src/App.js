import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", address: "", city: "", province: "", postal: "", comments2: false, candidates: false, offers: false, comments: "", isVisible: true, mode: "", country: ""});

  console.log(formData);
  

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type == "checkbox" ? checked : value
      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing is done........");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>First Name</label>
      <br/>
        <input
          type="text"
          placeholder='First Name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstname}
          />
        <br/> 
        <br></br>
        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input
          type="text"
          placeholder='Last name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          /> 
        <br/> 
        <br></br>
        <label htmlFor='email'>Email Address</label>
        <br/>
        <input
          type="email"
          placeholder='Enter your email address'
          onChange={changeHandler}
          name="email"
          value={formData.email}
          />  
          <br/>

          <br/> 
        <br></br>
        <label htmlFor='country'>Country</label>
          <br/>
          <select
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          >
            <option value="england">England</option>
            <option value="finland">Finland</option>
            <option value="germany">Germany</option>
            <option value="india">India</option>
            <option value="russia">Russia</option>
            <option value="usa">USA</option>
          </select>
          <br/>
        <br></br>
        <br></br>
        <label htmlFor='adress'>Street Address</label>
        <br/>
        <input
          type="text"
          placeholder='Enter your street address'
          onChange={changeHandler}
          name="address"
          value={formData.address}
          />  
          <br/>

          <br/> 
        <br></br>
        <label htmlFor='city'>City</label>
        <br/>
        <input
          type="text"
          placeholder='Enter your city'
          onChange={changeHandler}
          name="city"
          value={formData.city}
          />  
          <br/>

          <br/> 
        <br></br>
        <label htmlFor='province'>State / Province</label>
        <br/>
        <input
          type="text"
          placeholder='Enter your state / province'
          onChange={changeHandler}
          name="province"
          value={formData.province}
          />  
          <br/>

          <br/> 
        <br></br>
        <label htmlFor='postal'>ZIP / Postal Code</label>
        <br/>
        <input
          type="text"
          placeholder='Enter your ZIP / Postal code'
          onChange={changeHandler}
          name="postal"
          value={formData.postal}
          />  
          <br/>

          <br/> 
        <br></br>
        <label htmlFor='byemail'>By Email</label>
        <br/>
        <br></br>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="comments2"
          id="comments2"
          checked={formData.comments2}
          />
          <label htmlFor='comments2'>Comments</label>
                    
          <p>Get notified when someone posts a comment on a posting</p>
          <br></br>
          <input
          type="checkbox"
          onChange={changeHandler}
          name="candidates"
          id="candidates"
          checked={formData.candidates}
          />
          <label htmlFor='candidates'>Candidates</label>
          
          <p>Get notified when a candidate applies for a job </p>
          <br></br>
          <input
          type="checkbox"
          onChange={changeHandler}
          name="offers"
          id="offers"
          checked={formData.offers}
          />
          <label htmlFor='offers'>Offers</label>
          
          <p>Get notified when someone posts a comment on a posting</p>
          <br></br>
          <label htmlFor='notifications'>Push Notifications</label>
          <br></br>
          <p>These are delivered via SMS to your mobile phone</p>
       
          <br></br>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Everything"
          id='Everything'
          checked = {formData.mode == "Everything"}
          /> 
          <label htmlFor='Everything'>Everything</label>
          <br></br>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="sameasemail"
          id='sameasemail'
          checked = {formData.mode == "sameasemail"}
          /> 
          <label htmlFor='sameasemail'>Same As Email</label>
          <br></br>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="nopushnotifications"
          id='nopushnotifications'
          checked = {formData.mode == "nopushnotifications"}
          /> 
          <label htmlFor='nopushnotifications'>No Push Notifications</label>
          <br></br>
          <br></br>
          {/* <input type='Submit' value= 'Submit'/> */}
          <button>Save</button>
          
      </form>
    </div>
  );
}

export default App;
