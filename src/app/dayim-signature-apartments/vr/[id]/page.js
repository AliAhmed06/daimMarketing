"use client";

import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import NavBar from '../../components/Navbar';

function VRSingleItemPage({params}) {  
  let url;
  if(params.id == "studio"){
    // url = "/images/vr/studio/1.jpg";
    url = "/videos/dsa/studio.mp4";
  }
  else{
    // url = "/images/vr/one_bed/5.jpg";
    url = "/videos/dsa/studio.mp4";
  }
  return (
    <div>
      <NavBar videoBg={true} />
      
      {/* <ReactPhotoSphereViewer src={url} height={'100vh'} width={"100%"}></ReactPhotoSphereViewer> */}
      <div className='h-screen w-full'>
        <video 
            src={url} 
            autoPlay 
            loop 
            muted 
            className=' w-full h-full object-cover' 
        />
      </div>

    </div>
  )
}

export default VRSingleItemPage