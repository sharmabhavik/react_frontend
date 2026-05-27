import { useFormStatus } from "react-dom"

const CustomerForm = () => {
    
  const {pending} = useFormStatus();
  console.log(pending);
    
  return (
    <div>
      <input type="email" placeholder="Enter your Email"/>
      <br />
      <br />
      <input type="password" placeholder="Enter Your Password... "/>
      <br />
      <br />
      <button disabled={pending}>{pending?"Submitting...":"Submit"}</button>
    </div>
  )
}

export default CustomerForm
