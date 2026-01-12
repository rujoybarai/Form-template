
import { useRef } from 'react'
import { Store } from '../Store/Store'
import { useContext } from 'react'

export default function Form() {
    const {AddDetails}=useContext(Store);

   const NameRef=useRef();
   const UserNameRef=useRef();
   const EmailRef=useRef();
    const PasswordRef=useRef();
    const Address1Ref=useRef();
    const Address2Ref=useRef();
    const CityRef=useRef();
    const StateRef=useRef();
    const ZipRef=useRef();
    const CheckedRef=useRef();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const Name=NameRef.current.value;
        const UserName=UserNameRef.current.value;
        const Email=EmailRef.current.value;
        const Password=PasswordRef.current.value;
        const Address1=Address1Ref.current.value;
        const Address2=Address2Ref.current.value;
        const City=CityRef.current.value;
        const State=StateRef.current.value;
        const Zip=ZipRef.current.value;
        const Checked=CheckedRef.current.checked;
      if(Name && UserName && Email && Password && Address1 && City && State && Zip && Checked){
          AddDetails(Name,UserName,Email,Password,Address1,Address2,City,State,Zip);
            alert('Form submitted successfully!');
        }else{
            alert('Please fill in all required fields.');
        }

    }

  
    

  return (
    <form className="row g-3" id='Form' onSubmit={handleSubmit}>

        <div className="col-auto">
    <label className="visually mb-2" forHtml="autoSizingInput">Name</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder=" Enter Full Name"  ref={NameRef}/>
  </div>
  <div className="col-auto">
    <label className="visually mb-2" forHtml="autoSizingInputGroup">Username</label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" ref={UserNameRef}/>
    </div>
  </div>
  <div className="col-md-6">
    <label forHtml="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" ref={EmailRef}/>
  </div>
  <div className="col-md-6">
    <label forHtml="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" ref={PasswordRef}/>
  </div>
  <div className="col-12">
    <label forHtml="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" ref={Address1Ref}/>
  </div>
  <div className="col-12">
    <label forHtml="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" ref={Address2Ref}/>
  </div>
  <div className="col-md-6">
    <label forHtml="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" ref={CityRef}/>
  </div>
  <div className="col-md-4">
    <label forHtml="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" ref={StateRef}>
      <option >Choose...</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="India" >India</option>
      <option value="Pakistan" >Pakistan</option>
      <option value="Nepal" >Nepal</option>
      <option value="Sri Lanka" >Sri Lanka</option>
    </select>
  </div>
  <div className="col-md-2">
    <label forHtml="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" ref={ZipRef}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" ref={CheckedRef}/>
      <label className="form-check-label" forHtml="gridCheck">
        Agree...
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
  )
}
