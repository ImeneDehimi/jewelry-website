import "./Add.css";
import upload from "./../../assets/upload_area.png"
import {  useState } from "react";
import axios from "axios";


const Add = () => {
    const url = "http://localhost:5000";
    const[image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"parrure",
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        console.log(formData);
        
        const response = await axios.post(`${url}/product`,formData)
        if (response.data.success){
            // console.log(response.data)
            setData({
                name:"",
                description:"",
                price:"",
                category:"parrure",
            })
            setImage(false)
        }
        else{
            // console.log(response.data)
        }
    }

    

  return <div className="add">
    <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Ajouter image</p>
            <div className="input-img">
            <label htmlFor="image1">
                <img src={image?URL.createObjectURL(image):upload} alt="" />
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image1" hidden required/>
            </label>
            <label htmlFor="image2">
                <img src={image?URL.createObjectURL(image):upload} alt="" />
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image2" hidden required/>
            </label>
            <label htmlFor="image3">
                <img src={image?URL.createObjectURL(image):upload} alt="" />
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image3" hidden required/>
            </label>
            <label htmlFor="image4">
                <img src={image?URL.createObjectURL(image):upload} alt="" />
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image4" hidden required/>
            </label>
            </div>
        </div>
        <div className="add-product-name flex-col">
            <p>Nom de produit</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex-col">
            <p>Description de produit</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="parrure">Parrure</option>
                    <option value="collier">Collier</option>
                    <option value="bracelet">bracelet</option>
                    <option value="bague">Bague</option>
                    <option value="montre">Montre</option>
                    <option value="boucle">Boucle</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Prix de produit</p>
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="2000DA" />
            </div>
        </div>
        <button type="submit" className="add-btn">ADD </button>
    </form>
    </div>;
};

export default Add;
