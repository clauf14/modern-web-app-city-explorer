"use client"

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

export default function RemoveBtn({ id }){

    const router = useRouter();

    const removeCity = async() => {
        const confirmed = confirm('Are you sure?');

        try {
            if(confirmed) {
                const res = await fetch(`http://localhost:3000/city?id=${id}`, {
                    method: "DELETE",
                })
                console.log(`Deleted city with id ${id} from database!`)

                if(res.ok){
                    router.refresh();
                }
            }
            
        } catch (error) {
            alert("City not found!")
        }
        
    }
    
    return(
        <Button rightIcon={<MdDeleteOutline />} onClick={removeCity} colorScheme='red' variant='solid'>
            Delete from favourites!
        </Button>
    )
}