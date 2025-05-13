import IRecipt from '~/interfaces/reciptinterface';
import {sletkvitEach} from '../../helpers/api/reciptapi'
import { toast } from "react-toastify";
export default async function SletKvitteringPåId(id:number) {
    const response = await sletkvitEach(id);
    return response;
}

 export async function remove(reciptinterface: IRecipt) {
    try {
      const response = await SletKvitteringPåId(reciptinterface.reciptID);

      if (!response.ok) {
        
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Kvitteringen blev slettet", {
        position: "bottom-right",

        autoClose: 2000,
        theme: "colored",
      });
    } catch (error: any) {
      toast.error(" Kunne ikke slette kvitteringen", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      console.error("Sletningsfejl:", error);
    }
  }