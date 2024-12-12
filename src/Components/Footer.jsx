import React from 'react'


function Footer() {
  return (
   <>
   <div>
       <hr />
       <i style={{marginLeft:'49%',fontSize:'30px',color:'orange',marginTop:'3%'}} class="fa-solid fa-envelope"></i>
       <h1 className='text-center mt-3 '>Don't Miss Out</h1>
       <h3 className='text-center mt-3 '>Sign Up and Get All My Delicious Recipes</h3>
       <p style={{marginLeft:'26%', marginTop:'3%'}}>Email* </p>
       <div style={{marginLeft:'26%'}}>__________________________________________________________________________________________________</div>
        <div><input style={{marginLeft:'26%', marginTop:'3%'}} type="checkbox" aria-label='checkbox' /><span className='ms-2'>Yes, subscribe me to your newsletter.</span></div>
        <button  style={{borderColor:'orange',marginLeft:'47%',marginTop:'5%', color:'black', width:'10%',backgroundColor:'white', height:'50px'}}>Submit</button>
        <div className='text-center ' style={{marginLeft:"5%", marginTop:'4%'}}>
             <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
             <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
             <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;
             <i class="fa-brands fa-pinterest"></i>&nbsp;&nbsp;
        </div>
        <hr />
      <div className='text-center'>
      ©2035 Powered and secured by Aslaha</div>
    </div>
    </>
  )
}

export default Footer