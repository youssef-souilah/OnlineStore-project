import "./CustomerInfos.css";
import image from "../../images/cat1.png";
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {VscSaveAs} from 'react-icons/vsc'
const CustomerInfos=()=>{
    return(
        <div className="customer-infos-container">
            <div className="backgroung-image">
                <div className="customer-image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="customer-infos">
                <div>
                    <p>first name : {"sky"}</p>
                    <button ><MdDriveFileRenameOutline size={25} /> </button>
                </div>
                <div>
                    <p>last name:{"sky"}</p>
                    <button ><MdDriveFileRenameOutline size={25}/> </button>
                </div>
                <div>
                    <p>username:{"sky"}</p>
                    <button ><MdDriveFileRenameOutline size={25}/> </button>
                </div>
                <div>
                    <p>email:{"sky@gmail.com"}</p>
                    <button ><MdDriveFileRenameOutline size={25}/> </button>
                </div>
                <button className="customer-infos-saver"><VscSaveAs size={25} /></button>
            </div>
            
        </div>
    )
}
export default CustomerInfos;