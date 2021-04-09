import React from "react";

const name = "ZERO";
let lightpink = "#fa9191";


const heading = {
  color: lightpink,
  textAlign: 'center',
  paddingBottom: '25px',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  textTransform: 'capitalize'
}

function List2() {
return (
<div className="content">
<ul className="list2">
<li>6. JJBA</li>
<li>7. JJK</li>
<li>8. Erased</li>
<li>9. Neon Genesis evangelion</li>
<li>10. Demon Slayer</li>
</ul>

<h1 style={heading}> Hello, My name is {name} </h1>

</div>
 );
}


export default List2;