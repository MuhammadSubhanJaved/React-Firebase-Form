import React, { useState } from 'react';

export default function ReactContact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, address, message } = user;

    if (name && email && mobile && address && message) {
      const res = await fetch("https://fir-react-form-5b8bb-default-rtdb.firebaseio.com/FirebaseReactForm.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          address,
          message,
        }),
      });

      if (res.ok) {
        setUser({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
        alert("Successfully Submitted");
      } else {
        alert("Failed to submit data");
      }
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <form action="#" method="post">
        <div className="heading">
          <h2 className="fst-italic">Contact Form</h2>
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required="" value={user.name} onChange={getUserData} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" value={user.email} onChange={getUserData} />
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required="" value={user.mobile} onChange={getUserData} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required="" value={user.address} onChange={getUserData} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required placeholder="Write your message here..." value={user.message} onChange={getUserData}></textarea>
        <input type="submit" defaultValue="Submit" onClick={postData} />
      </form>
    </>
  );
}




// 1st Practice Code:

// import React, { useState } from 'react'
// export default function ReactContact() {
//     const [user,setUser]=useState({
//         name:"",
//         email:"",
//         mobile:"",
//         address:"",
//         message:"",
//     });
//     let name,value;
//     const getUserData=(event)=>{
//      name=event.target.name;
//      value=event.target.value;

//     setUser({ ...user, [name]: value });
//   };

//   const postData=async(e)=>{
//     e.preventDefault();
//     const { name,email,mobile,address,message,}=user;
//     const res=await fetch("https://fir-react-form-5b8bb-default-rtdb.firebaseio.com/FirebaseReactForm.json",{
//       method:"post",
//       header:{
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify({
//         name,
//         email,
//         mobile,
//         address,
//         message,
//       })
//     });
//     if (res){
//       setUser({
//         name:"",
//         email:"",
//         mobile:"",
//         address:"",
//         message:"",
//       })
//       alert("Successfully Sumbitted")
//     }
//   };

//   return (
// <>
// <form action="#" method= "post">
//   <div className="heading">
//     <h2 className="fst-italic" >Contact Form</h2>
//   </div>
//   <label htmlFor="name">Name:
//   </label>
//   <input type="text" id="name" name="name" required="" 
//   value={user.name}
//   onChange={getUserData}
//   />
//   <label htmlFor="email">Email:
//   </label>
//   <input type="email" id="email" name="email" required="" 
//   value={user.email}
//   onChange={getUserData}
//   />
//   <label htmlFor="mobile">Mobile Number:
//   </label>
//   <input type="tel" id="mobile" name="mobile" required=""
//     value={user.mobile}
//     onChange={getUserData}
//    />
//   <label htmlFor="address">Address:
//   </label>
//   <input type="text" id="address" name="address" required="" 
//   value={user.address}
//   onChange={getUserData}
//   />
//   <label htmlFor="message">Message:
//   </label>
//   <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>
//   <input type="submit" defaultValue="Submit" onClick={postData} />
// </form>
// </>
//   )
// }
