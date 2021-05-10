import React from 'react';

const Card = ({user}) => {

    return (
        <div>
            
            <div class="card" style={{width: "18rem;"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <h5>{user.name}</h5>

                <div class="card-body">
                    <h5 class="card-title"> {user.email}  </h5>
                    <p class="card-text">  {user.address.city}    </p>
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        </div>
    )
}

export default Card
