
import React, { useState } from "react";
import "./userform.css";
import Button from "../Button/Button";


function UserForm ({ cart }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });
    





let total = 0;
cart.forEach((item) => {
    total += item.price * item.quantity;
});


    
    function handleSubmit(evt){
    evt.preventDefault();
    console.log("submit");
    
    setUserData({
        name: "",
        email: "",
        telefono: "",
    });
    }
    
    
    function inputChangeHandler(evt) {
    const input = evt.target;
    const value = input.value;
    const inputName = input.name;
    
    let copyUserData = { ...userData };
    
    copyUserData[inputName] = value;
    setUserData(copyUserData);
    
    }
    
    function handleReset(evt) {
        setUserData({
            name: "",
            email: "",
            telefono: "",
        });
    }

    return (
        <div className="form-container">
        <form onSubmit={ handleSubmit }>
        <div className="form-item">
        <label htmlFor="name">Nombre</label>
        <input value={userData.name} onChange={ inputChangeHandler } name="name" type="text" placeholder="Nombre"/>
        </div>
        
        <div className="form-item">
        <label htmlFor="telefono">Telefono</label>
        <input value={userData.telefono} onChange={ inputChangeHandler } name="telefono" type="text" placeholder="Telefono"/>
        </div>
        
        
        <div className="form-item">
        <label htmlFor="email">Email</label>
        <input value={userData.email} onChange={ inputChangeHandler } name="email" type="text" placeholder="Correo"/>
        </div>
        
        
        <div>
        <Button type="submit" onTouch={handleSubmit}>
            Finalizar Compra
        </Button>
        <Button type="reset">Vaciar Carrito</Button>
        </div>
        </form>
    </div>
    );
    
};


export default UserForm;
