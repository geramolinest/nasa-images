import { Image } from "antd";
import Imagen from '../../assets/dubrovnik.jpg'
import { useState } from "react";

export const Carrousel = () =>{
    const[visible, setVisible] = useState(false);
    return(
        <div className="carrousel-image">
            <Image
                preview={{
                visible: false,
                }}
                width={'35%'}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                onClick={() => setVisible(true)}
            />
            <div className="carrousel-container" style={{display: !visible ? 'none' : 'flex'}}>
                <Image.PreviewGroup className='carrousel-items' preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                    <Image src={Imagen}/>
                    <Image src={Imagen}/>
                    <Image src={Imagen}/>
                </Image.PreviewGroup>
            </div>
        </div>
    )
}

export default Carrousel;