import React from "react";


const lightpink = "#fa9191";
const borderBottom = '4px solid rgb(61,231,2)';



const head1 = {
  color: lightpink,
  textAlign: 'center',
  marginBottom: '50px',
  fontWeight: 'bold',
  fontSize: '2.6rem',
  textTransform: 'capitalize',
  paddingBottom: '20px',
 borderBottom: borderBottom
}

function Heading() {
  return (
 <h1 style= {head1} > My favorite Anime's </h1>
    )
}

export default Heading;