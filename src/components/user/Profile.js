import React from "react";
import { Media,Container,Card} from "react-bootstrap";


const Profile=props=>{

    const loggedInUser=JSON.parse(localStorage.getItem("user"))
    //console.log(loggedInUser);
    let user=loggedInUser[0];
    let name=user.firstName + " " +  user.lastName
    return(
        <Container style={{"padding" : "10px"}}>
            <Card className="text-center">
  <Card.Header>User Details</Card.Header>
  <Card.Body>
    <Card.Text>
    <ul className="list-unstyled">
<Media as="li">
<Media.Body>

 <p>
 <strong> Name</strong> : {name}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong>Email</strong> : {user.email}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong> Location</strong> : {user.location}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong> Mobile</strong> : {user.mobile}
 </p>
</Media.Body>
</Media>

</ul>
    </Card.Text>
  </Card.Body>

</Card>
        </Container>
    )
}
export default Profile;






