import User from "./User"
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <User name={"Abhishek (functions)"}/>
      <UserClass name={"Abhishek (classes)"}/>
    </>
  ) 
}

export default About