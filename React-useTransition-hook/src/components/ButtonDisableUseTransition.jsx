import { useTransition } from 'react'

const ButtonDisableUseTransition = () => {
  const loadingImage = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  const [pending, startTransition] = useTransition();
  
  const handleClick = () => {
    startTransition(async() => {
        await new Promise(res => setTimeout(res, 2000));
    });
  }
    
  return (
    <div>
    {
        pending
          ? <img src={loadingImage} style={{ width: "200px" }} />
          : null
    }
    <button disabled={pending} onClick= {handleClick}>Click Me</button>
    </div>
  )
}

export default ButtonDisableUseTransition
