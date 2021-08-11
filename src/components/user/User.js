import Address from "../address/Address";
import Company from "../company/Company";
export default function User({id,name,username,email ,address,phone,website,company}) {

  return (
    <div>
    <h2>{id}- {name} {username}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>website: {website}</p>
      <Address address={address}/>
      <Company company={company}/>
    </div>
  );
}