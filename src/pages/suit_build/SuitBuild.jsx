import { useEffect, useState } from "react";
import { SelectFabric } from "../../components/SelectFabric";
import SuitBuildWrapper from "../../components/SuitBuildWrapper";

export default function SuitBuild({}){
    const [pictures, set_pictures] = useState([])
   
    return(
        <SuitBuildWrapper
        pictures={pictures}
        >
            <SelectFabric/>
        </SuitBuildWrapper>
    )
}