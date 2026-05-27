import { useState } from 'react';

const ButtonDisableState = () => {
  const [pending, setPending] = useState(false);

  const handleClick = async() => {
    setPending(true);
    await new Promise(res => setTimeout(res, 2000))
    setPending(false);
  }
    
  return (
    <div>
      <button disabled={pending} onClick = {handleClick}>Click Here</button>
    </div>
  )
}

export default ButtonDisableState
